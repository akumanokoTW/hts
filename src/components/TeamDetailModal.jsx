import React, { useEffect } from 'react';
import { X, CheckCircle2, Star, Sparkles, Image as ImageIcon, HelpCircle, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import TeamIcon from './TeamIcon';
import AccordionItem from './AccordionItem';

export default function TeamDetailModal({ team, onClose, onApply }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!team) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        aria-hidden="true"
      />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0e14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(56,189,248,0.12)] flex flex-col z-10 overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-[#0c0e14]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
              <TeamIcon name={team.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] sm:text-xs text-cyan-400 font-medium tracking-widest uppercase">
                  MISSION DOSSIER // {team.id}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
                <span>{team.title}</span>
                <span className="text-xs font-normal text-zinc-400 font-mono hidden sm:inline">
                  任務檔案
                </span>
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with custom scrollbar */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-6 space-y-8 text-zinc-300 text-sm sm:text-base">
          
          {/* 1. Task Summary Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center space-x-2 mb-2 text-xs font-mono text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>SQUAD CORE SUMMARY</span>
            </div>
            <p className="text-base sm:text-lg text-zinc-100 font-light leading-relaxed">
              {team.summary}
            </p>
          </div>

          {/* 2. Responsibilities (工作職責) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                核心工作職責 (Responsibilities)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {team.responsibilities.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center flex-shrink-0 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Requirements (徵求條件 & 特殊加分技能) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                徵選條件與特質 (Requirements)
              </h3>
            </div>
            <div className="space-y-2.5">
              {team.requirements.map((item, idx) => {
                const isSpecial = item.includes('特殊加分') || item.includes('隱藏');
                return (
                  <div 
                    key={idx}
                    className={`flex items-start space-x-3 p-3.5 sm:p-4 rounded-xl transition-colors ${
                      isSpecial 
                        ? 'bg-purple-950/30 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.1)]' 
                        : 'bg-white/[0.02] border border-white/5'
                    }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                      isSpecial 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 animate-pulse' 
                        : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700'
                    }`}>
                      {isSpecial ? <Sparkles className="w-3.5 h-3.5 text-purple-300" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className={`text-xs sm:text-sm leading-relaxed ${
                        isSpecial ? 'text-purple-200 font-medium' : 'text-zinc-300'
                      }`}>
                        {item}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Photo Gallery (照片牆) */}
          {team.photos && team.photos.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  組別實戰紀錄 (Mission Photos)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team.photos.map((item, idx) => {
                  const photoUrl = typeof item === 'string' ? item : item.url;
                  const photoCaption = typeof item === 'string' ? `現場紀錄 // 0${idx + 1}` : (item.caption || `現場紀錄 // 0${idx + 1}`);
                  return (
                    <div 
                      key={idx}
                      className="group rounded-xl overflow-hidden border border-white/10 bg-[#0e111a] flex flex-col transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
                    >
                      <div className="relative aspect-video overflow-hidden bg-black/50">
                        <img
                          src={photoUrl}
                          alt={photoCaption}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                        <div className="absolute top-2.5 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-white/10">
                          PHOTO 0{idx + 1}
                        </div>
                      </div>
                      <div className="px-3.5 py-2.5 bg-white/[0.02] border-t border-white/5">
                        <p className="text-xs text-zinc-300 leading-snug flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                          <span className="font-normal">{photoCaption}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5. FAQ Accordion (常見問題) */}
          {team.faq && team.faq.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  常見問題 (Squad FAQ)
                </h3>
              </div>
              <div className="space-y-2.5">
                {team.faq.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 6. Sticky Bottom Button: "接受任務 / 報名程序" */}
        <div className="sticky bottom-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/95 to-transparent px-5 sm:px-8 py-4 border-t border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 z-20">
          <div className="text-xs text-zinc-400 text-center sm:text-left hidden sm:block">
            已鎖定志願：<span className="text-cyan-300 font-semibold">{team.title}</span>。點擊按鈕開啟招募流程與報名須知。
          </div>
          <button
            onClick={() => {
              onClose();
              onApply(team);
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>接受任務 / 報名程序</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
