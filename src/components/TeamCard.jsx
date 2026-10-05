import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import TeamIcon from './TeamIcon';

export default function TeamCard({ team, index, onSelect }) {
  // Find if there is a special bonus requirement
  const specialBonus = team.requirements.find(r => r.includes('特殊加分') || r.includes('隱藏'));

  return (
    <div
      onClick={() => onSelect(team)}
      className="group relative cursor-pointer rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(56,189,248,0.12)] flex flex-col justify-between"
    >
      {/* Subtle hover gradient wash inside card */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Card Header: Squad ID & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-[11px] tracking-widest text-cyan-400/90 font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40">
              SQUAD 0{index + 1}
            </span>
            <span className="text-[11px] font-mono text-zinc-500 uppercase">
              ID: {team.id}
            </span>
          </div>

          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:text-cyan-200 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all duration-300">
            <TeamIcon name={team.icon} className="w-6 h-6" />
          </div>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-200 flex items-center">
          {team.title}
        </h3>
        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {team.summary}
        </p>

        {/* Key Responsibilities tags */}
        <div className="mt-5 space-y-1.5">
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            MISSION DIRECTIVES
          </p>
          <div className="flex flex-wrap gap-1.5">
            {team.responsibilities.slice(0, 3).map((resp, i) => (
              <span 
                key={i} 
                className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-300 border border-white/5 line-clamp-1"
              >
                {resp}
              </span>
            ))}
            {team.responsibilities.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-lg bg-white/[0.02] text-zinc-500">
                +{team.responsibilities.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Special Bonus Badge if present */}
        {specialBonus && (
          <div className="mt-4 px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-800/30 flex items-center space-x-2 text-[11px] text-purple-300">
            <Sparkles className="w-3 h-3 text-purple-400 flex-shrink-0" />
            <span className="truncate">{specialBonus}</span>
          </div>
        )}
      </div>

      {/* Card Footer CTA */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-cyan-400 group-hover:text-cyan-300">
        <span className="tracking-wide">調閱完整任務檔案</span>
        <div className="w-7 h-7 rounded-full bg-white/[0.03] group-hover:bg-cyan-500/20 flex items-center justify-center transition-colors">
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
