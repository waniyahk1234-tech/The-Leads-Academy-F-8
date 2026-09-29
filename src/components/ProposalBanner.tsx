import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const ProposalBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{ACADEMY_CONFIG.specificAddress}</span>
          </span>
          <span className="hidden md:inline text-slate-600" aria-hidden="true">|</span>
          <span className="hidden md:flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{ACADEMY_CONFIG.hours}</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="text-amber-400 font-medium">Admissions Open 2024–2025</span>
          <a
            href={`tel:${ACADEMY_CONFIG.phoneTel}`}
            className="flex items-center gap-1 font-semibold text-white hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{ACADEMY_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

