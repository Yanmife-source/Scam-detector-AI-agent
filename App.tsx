
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { AlertLevel, TranscriptionEntry } from './types';
import { ThreatMeter } from './components/ThreatMeter';
import { AudioVisualizer } from './components/AudioVisualizer';
import { decode, decodeAudioData, createBlob } from './utils/audioProcessor';

// Fix: Define AIStudio interface and use it in Window augmentation to resolve "identical modifiers" and "same type" errors.
interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

declare global {
  interface Window {
    readonly aistudio: AIStudio;
  }
}

const SYSTEM_INSTRUCTION = `You are the "Scam-Shield AI," a real-time cybersecurity monitor for voice calls. 
Objective: Listen to the conversation and identify "Social Engineering" tactics.

Psychological Markers to Watch For:
1. Forced Urgency: Immediate, arrest, warrant, expired, locked, or fast speech.
2. Authority Impersonation: Banks, gov agencies, tech support without context.
3. Cognitive Overload: Complex instructions to confuse the user.

Detection Logic:
- Evaluate the "Vibe": Is the tone aggressive, grooming, or robotic?
- Cross-Reference: If they mention a bank, remind the user banks never ask for OTPs.
- Alert Level:
    - GREEN: Normal conversation.
    - YELLOW: Suspicious tactics detected (e.g., asking for "verification").
    - RED: High-risk scam (e.g., asking for OTP, remote access, or gift cards).

Response Style:
If you detect a scam, do not wait. Interrupt with a calm, assertive "Cyber-Alert." 
Explain EXACTLY which psychological tactic is being used (e.g., "This caller is using 'Forced Urgency' to make you panic. Hang up and call your bank directly.")`;

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [alertLevel, setAlertLevel] = useState<AlertLevel>(AlertLevel.GREEN);
  const [transcriptions, setTranscriptions] = useState<TranscriptionEntry[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsKey, setNeedsKey] = useState(false);

  // Refs for audio processing and session management
  const nextStartTimeRef = useRef(0);
  const audioContextsRef = useRef<{ input: AudioContext | null; output: AudioContext | null }>({ input: null, output: null });
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const transcriptionBufferRef = useRef<{ user: string; model: string }>({ user: '', model: '' });
  const sessionRef = useRef<any>(null);

  // Check if key is already selected on mount
  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        try {
          const hasKey = await window.aistudio.hasSelectedApiKey();
          setNeedsKey(!hasKey);
        } catch (e) {
          console.error("Failed to check API key status", e);
        }
      }
    };
    checkKey();
  }, []);

  const stopSession = useCallback(() => {
    setIsActive(false);
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch (e) {}
      sessionRef.current = null;
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    sourcesRef.current.clear();
    
    if (audioContextsRef.current.input) {
      audioContextsRef.current.input.close();
      audioContextsRef.current.input = null;
    }
    if (audioContextsRef.current.output) {
      audioContextsRef.current.output.close();
      audioContextsRef.current.output = null;
    }
    
    nextStartTimeRef.current = 0;
  }, [stream]);

  const handleKeySelection = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setNeedsKey(false);
      // After selecting key, we assume it's valid as per guidelines
    }
  };

  const startSession = async () => {
    try {
      setError(null);
      setTranscriptions([]);
      setAlertLevel(AlertLevel.GREEN);

      // Check key requirement
      if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
        await handleKeySelection();
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(mediaStream);

      // Initialize AI with the key from process.env.API_KEY.
      // Create a new instance right before use to ensure latest API key is used.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      // Browsers often suspend contexts until user interaction
      if (inputAudioContext.state === 'suspended') await inputAudioContext.resume();
      if (outputAudioContext.state === 'suspended') await outputAudioContext.resume();
      
      audioContextsRef.current = { input: inputAudioContext, output: outputAudioContext };

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
          systemInstruction: SYSTEM_INSTRUCTION,
          outputAudioTranscription: {},
          inputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setIsActive(true);
            const source = inputAudioContext.createMediaStreamSource(mediaStream);
            const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              // CRITICAL: Ensure input is sent only after session promise resolves.
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputAudioContext.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // 1. Handle Transcriptions
            if (message.serverContent?.inputTranscription) {
              transcriptionBufferRef.current.user += message.serverContent.inputTranscription.text;
            }
            if (message.serverContent?.outputTranscription) {
              transcriptionBufferRef.current.model += message.serverContent.outputTranscription.text;
            }

            if (message.serverContent?.turnComplete) {
              // Copy buffer to local variables before clearing to avoid async update issues.
              const { user, model } = transcriptionBufferRef.current;
              const newEntries: TranscriptionEntry[] = [];
              
              if (user.trim()) {
                newEntries.push({
                  id: Math.random().toString(36).substr(2, 9),
                  speaker: 'User',
                  text: user.trim(),
                  timestamp: new Date()
                });
              }
              if (model.trim()) {
                newEntries.push({
                  id: Math.random().toString(36).substr(2, 9),
                  speaker: 'Model',
                  text: model.trim(),
                  timestamp: new Date()
                });

                const lowerText = model.toLowerCase();
                if (lowerText.includes('cyber-alert') || lowerText.includes('scam') || lowerText.includes('hang up')) {
                  setAlertLevel(AlertLevel.RED);
                } else if (lowerText.includes('suspicious') || lowerText.includes('caution') || lowerText.includes('tactics')) {
                  setAlertLevel(AlertLevel.YELLOW);
                }
              }

              setTranscriptions(prev => [...prev, ...newEntries]);
              transcriptionBufferRef.current = { user: '', model: '' };
            }

            // 2. Handle Audio Output (Model Turn)
            if (message.serverContent?.modelTurn?.parts && audioContextsRef.current.output) {
              const ctx = audioContextsRef.current.output;
              
              for (const part of message.serverContent.modelTurn.parts) {
                if (part.inlineData?.data) {
                  const base64Audio = part.inlineData.data;
                  nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                  
                  try {
                    const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
                    const source = ctx.createBufferSource();
                    source.buffer = audioBuffer;
                    source.connect(ctx.destination);
                    
                    source.addEventListener('ended', () => {
                      sourcesRef.current.delete(source);
                    });

                    source.start(nextStartTimeRef.current);
                    nextStartTimeRef.current += audioBuffer.duration;
                    sourcesRef.current.add(source);
                  } catch (playbackError) {
                    console.error('Audio playback error:', playbackError);
                  }
                }
              }
            }

            // 3. Handle Interruption
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => {
                try { s.stop(); } catch (e) {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e: any) => {
            console.error('Gemini Session Error:', e);
            const msg = e?.message || "";
            if (msg.includes("Requested entity was not found")) {
              setNeedsKey(true);
              setError("API Key verification failed. Please select a valid key.");
            } else {
              setError("Network error detected. Check your connection or API key status.");
            }
            stopSession();
          },
          onclose: (e: any) => {
            console.log('Gemini Session Closed', e);
            stopSession();
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (err: any) {
      console.error('Initialization error:', err);
      const msg = err?.message || "";
      if (msg.includes("Requested entity was not found")) {
        setNeedsKey(true);
      }
      setError("Shield engagement failed. Verify your system permissions and API key.");
      setIsActive(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto overflow-hidden">
      {/* App Header */}
      <header className="w-full flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500/10 p-3 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              Scam-Shield <span className="text-emerald-500">AI</span>
            </h1>
            <p className="text-xs text-slate-400 font-medium mono uppercase tracking-widest flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`}></span>
              Real-Time Security Protocol
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          {needsKey && (
            <button 
              onClick={handleKeySelection}
              className="px-6 py-3 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3m-3-3l-2.25-2.25"></path></svg>
              Set API Key
            </button>
          )}
          <button 
            onClick={isActive ? stopSession : startSession}
            className={`group relative overflow-hidden px-8 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center gap-3 shadow-xl ${
              isActive 
                ? 'bg-red-500 hover:bg-red-600 text-white pulse-danger' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-slate-900'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {isActive ? (
                <><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg> Halt Monitor</>
              ) : (
                <><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Engage Shield</>
              )}
            </span>
          </button>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full flex-1 min-h-0">
        
        {/* Left Side: Status & Sensors */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Risk Indicator Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              Analysis Matrix
            </h2>
            <ThreatMeter level={alertLevel} />
            <div className="mt-8">
              <AudioVisualizer isActive={isActive} stream={stream} />
            </div>
          </div>

          {/* Active Counters Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Live Heuristics</h3>
            <div className="space-y-3">
              {[
                { label: 'Neural Audio Processing', status: isActive ? 'ACTIVE' : 'IDLE' },
                { label: 'Semantic Risk Extraction', status: isActive ? 'SCANNING' : 'IDLE' },
                { label: 'Voice Fingerprinting', status: 'IDLE' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-slate-800/40 border border-slate-700/30">
                  <span className="text-xs font-medium text-slate-300 tracking-wide">{item.label}</span>
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest ${
                    item.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 
                    item.status === 'SCANNING' ? 'bg-blue-500/10 text-blue-400 animate-pulse border border-blue-500/20' : 
                    'bg-slate-700/50 text-slate-500 border border-transparent'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Log & Intelligence */}
        <div className="lg:col-span-8 flex flex-col bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl min-h-0">
          <div className="p-5 border-b border-slate-800 bg-slate-900/40 flex justify-between items-center">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Operational Intelligence Log</h2>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700"></div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {transcriptions.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-6">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 opacity-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-slate-800 border-t-slate-600 rounded-full animate-spin opacity-20"></div>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-widest opacity-40">System Awaiting Input</p>
                  <p className="text-xs italic opacity-30">Monitoring sequence initiated once the shield is engaged.</p>
                </div>
              </div>
            ) : (
              transcriptions.map((entry) => (
                <div key={entry.id} className={`flex flex-col group ${entry.speaker === 'Model' ? 'items-start' : 'items-end'}`}>
                  <div className={`max-w-[90%] sm:max-w-[75%] rounded-3xl px-5 py-4 transition-all duration-300 ${
                    entry.speaker === 'Model' 
                      ? 'bg-slate-800 border border-slate-700 text-emerald-400 shadow-lg' 
                      : 'bg-emerald-600/5 border border-emerald-500/10 text-slate-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                         entry.speaker === 'Model' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-700 text-slate-400'
                      }`}>
                        {entry.speaker === 'Model' ? 'Shield-AI Core' : 'Intercepted Voice'}
                      </span>
                      <span className="text-[10px] mono opacity-30 group-hover:opacity-60 transition-opacity">
                        {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${entry.speaker === 'Model' ? 'font-medium' : 'font-normal opacity-90'}`}>
                      {entry.text}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {error && (
            <div className="m-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-red-500 rounded-full p-1.5 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-red-400 uppercase tracking-tight">System Fault Detected</p>
                <p className="text-[10px] text-red-300/60 uppercase mono tracking-tighter">{error}</p>
              </div>
              {error.includes("Key") && (
                <button 
                  onClick={handleKeySelection}
                  className="ml-auto text-[10px] font-bold bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1.5 rounded-lg border border-red-500/30 uppercase transition-colors"
                >
                  Configure
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <footer className="w-full mt-8 py-6 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-slate-900/40 border border-slate-800">
           <p className="text-[10px] text-slate-500 font-bold mono uppercase tracking-[0.3em]">
            &copy; SHIELD-SYSTEMS {new Date().getFullYear()} // ENCRYPTION AES-256
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
