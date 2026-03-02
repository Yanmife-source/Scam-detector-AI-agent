# 🛡️ Scam-Shield AI

**Real-Time Call Protection & Social Engineering Detection**

Scam-Shield AI is a cutting-edge cybersecurity monitor designed to protect users from voice-based scams (vishing) and social engineering tactics in real-time. By leveraging the **Gemini 2.5 Flash Native Audio** model, the application listens to conversations and provides immediate, assertive alerts when psychological manipulation is detected.

## 🚀 Key Features

- **Real-Time Audio Analysis**: Streams live audio directly to Gemini for low-latency processing.
- **Psychological Marker Detection**: Specifically trained to identify:
  - **Forced Urgency**: Detecting threats of arrest, expired accounts, or high-pressure speech.
  - **Authority Impersonation**: Identifying fake bank representatives, government agents, or tech support.
  - **Cognitive Overload**: Spotting complex, confusing instructions designed to overwhelm the victim.
- **Dynamic Threat Meter**: A visual "Threat Meter" that shifts from **GREEN** (Safe) to **YELLOW** (Suspicious) to **RED** (High Risk).
- **Live Transcription**: View the conversation as it happens with speaker labels.
- **Assertive Interruptions**: The AI is programmed to interrupt with a "Cyber-Alert" when a high-risk scam is detected, providing clear instructions (e.g., "Hang up immediately").

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **AI Engine**: [Google Gemini API](https://ai.google.dev/) (`gemini-2.5-flash-native-audio-preview-12-2025`)
- **Real-Time Communication**: Web Audio API & Gemini Live API (WebSockets)
- **Build Tool**: Vite

## 📋 Prerequisites

Before you begin, ensure you have:
- A [Google AI Studio API Key](https://aistudio.google.com/app/apikey) with access to the Gemini 2.5 series.
- A modern web browser with microphone permissions enabled.

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/scam-shield-ai.git
   cd scam-shield-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🧠 How it Works

Scam-Shield AI uses the **Gemini Live API** to establish a bidirectional WebSocket connection. 
1. **Audio Capture**: The app captures raw PCM audio from your microphone at 16kHz.
2. **Streaming**: Audio chunks are sent to Gemini in real-time.
3. **Reasoning**: Gemini analyzes the "vibe," tone, and content against a set of "Scam-Shield" system instructions.
4. **Feedback**: If a scam is detected, Gemini sends back both a text alert and a voice response, which the app plays back to the user while updating the Threat Meter.

## 🛡️ Security & Privacy

- **Local Processing**: Audio is streamed for analysis but not stored by this application.
- **Transparency**: Users are clearly notified when the microphone is active via the UI and browser indicators.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
cld