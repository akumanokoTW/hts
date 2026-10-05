import React, { useEffect } from 'react';
import { X, ShieldCheck, Compass, Users, Sparkles, Check, ChevronRight, Globe2, Telescope, Heart } from 'lucide-react';
import { aboutUs, campMeta, teamsData } from '../data/campData';
import TeamIcon from './TeamIcon';

export default function AboutModal({ isOpen, onClose, onSelectTeam }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Dark backdrop blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Full Glassmorphism Dialog */}
      <div className="relative w-full max-w-5xl max-h-[94vh] bg-[#0c0e14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(56,189,248,0.12)] flex flex-col z-10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-[#0c0e14]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/15 flex items-center justify-center text-cyan-300">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] sm:text-xs text-cyan-400 font-medium tracking-widest uppercase">
                  {aboutUs.subtitle}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {aboutUs.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-6 space-y-8 text-zinc-300">
          
          {/* Hero Banner */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-purple-950/20 to-transparent border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-3 border border-cyan-500/20">
              EST. 2026 // 台東女中 × 台東高中・台東大學知本校區
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
              {campMeta.campName}・{campMeta.tagline}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
              {aboutUs.summary}
            </p>
          </div>

          {/* Real Camp Group Photo */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <img 
              src="/images/general/group-photo.jpg" 
              alt="2026星之所向天文營 全體大合照" 
              className="w-full max-h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5 right-4 sm:right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
              <div className="flex items-center space-x-2 text-white font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>2026星之所向天文營・工作人員與學員全體大合照</span>
              </div>
              <span className="font-mono text-cyan-300/80 text-[11px]">ARCHIVE RECORD // 2026</span>
            </div>
          </div>

          {/* Long form sections: Who we are & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutUs.sections.slice(0, 2).map((sec) => (
              <div key={sec.id} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                  {sec.badge}
                </span>
                <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                  <span>{sec.title}</span>
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {sec.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Organization & 6 Squads breakdown */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                ORGANIZATIONAL ARCHITECTURE
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                六大艦隊協同架構
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                營隊內部分工協作，各大組別既獨立運作又緊密相依，共同支撐整座星空基地的完美運轉。
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {teamsData.map((team, idx) => (
                <div
                  key={team.id}
                  onClick={() => {
                    onClose();
                    onSelectTeam(team);
                  }}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <TeamIcon name={team.icon} className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {team.title}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">
                        SQUAD 0{idx + 1}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {team.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values 4-Grid */}
          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              營隊核心價值觀 (Core Values)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {aboutUs.coreValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <div className="text-sm font-bold text-white">
                    {val.title}
                  </div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    {val.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-white/10 bg-[#0c0e14]/90 backdrop-blur-md flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
}
