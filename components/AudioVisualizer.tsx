
import React, { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  isActive: boolean;
  stream: MediaStream | null;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isActive, stream }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive || !stream || !canvasRef.current) return;

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const draw = () => {
      if (!isActive) return;
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;
        
        // Color gradient based on activity
        const hue = 200 + (dataArray[i] / 255) * 50;
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.8)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      audioContext.close();
    };
  }, [isActive, stream]);

  return (
    <div className="relative w-full h-24 bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700">
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={100} 
        className="w-full h-full"
      />
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm font-medium">
          Monitor Inactive
        </div>
      )}
    </div>
  );
};
