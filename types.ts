
export enum AlertLevel {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  RED = 'RED'
}

export interface TranscriptionEntry {
  id: string;
  speaker: 'User' | 'Model';
  text: string;
  timestamp: Date;
}

export interface ScamMarker {
  tactic: string;
  description: string;
  severity: AlertLevel;
}
