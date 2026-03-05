
import React from 'react';
import { AlertLevel } from '../types';

interface ThreatMeterProps {
  level: AlertLevel;
}

export const ThreatMeter: React.FC<ThreatMeterProps> = ({ level }) => {
  const getProgress = () => {
    switch (level) {
      case AlertLevel.RED: return '100%';
      case AlertLevel.YELLOW: return '60%';
      case AlertLevel.GREEN: return '20%';
      default: return '0%';
    }
  };

  const getColor = () => {
    switch (level) {
      case AlertLevel.RED: return 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]';
      case AlertLevel.YELLOW: return 'bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]';
      case AlertLevel.GREEN: return 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]';
      default: return 'bg-slate-600';
    }
  };

  const getLabel = () => {
    switch (level) {
      case AlertLevel.RED: return 'HIGH RISK: SCAM DETECTED';
      case AlertLevel.YELLOW: return 'CAUTION: SUSPICIOUS ACTIVITY';
      case AlertLevel.GREEN: return 'SECURE: NO THREATS DETECTED';
      default: return 'SCANNING...';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Threat Level</span>
        <span className={`text-sm font-bold tracking-tight ${level === AlertLevel.RED ? 'text-red-400' : level === AlertLevel.YELLOW ? 'text-amber-400' : 'text-emerald-400'}`}>
          {getLabel()}
        </span>
      </div>
      <div className="h-4 w-full bg-slate-800 rounded-full border border-slate-700 overflow-hidden">
        <div 
          className={`h-full transition-all duration-700 ease-out ${getColor()}`}
          style={{ width: getProgress() }}
        />
      </div>
    </div>
  );
};
