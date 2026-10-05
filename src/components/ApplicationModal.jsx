import React, { useEffect } from 'react';
import { X, Calendar, Clock, ExternalLink, Sparkles, CheckCircle, AlertCircle, Info, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { applicationProcess, campMeta } from '../data/campData';

export default function ApplicationModal({ isOpen, onClose, selectedTeam }) {
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

  const handleOpenGoogleForm = () => {
    window.open(applicationProcess.formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Dark backdrop blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Main Glassmorphism Dialog */}
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-[#0c0e14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(56,189,248,0.15)] flex flex-col z-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-[#0c0e14]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-cyan-400 font-medium tracking-widest uppercase block">
                {applicationProcess.subtitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {applicationProcess.title}
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

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-6 space-y-8 text-zinc-300">
          
          {/* Selected Squad Tag Banner (if clicked from a specific squad) */}
          {selectedTeam && (
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <div>
                  <span className="text-xs text-zinc-400">目前鎖定第一志願組別：</span>
                  <span className="text-sm font-bold text-cyan-300 ml-1.5">{selectedTeam.title}</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 hidden sm:inline">
                PRE-SELECTED
              </span>
            </div>
          )}

          {/* 1. Timeline Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                招募關鍵時程軸 (Recruitment Timeline)
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500/40 before:to-zinc-800">
              {applicationProcess.timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node dot */}
                  <div className={`absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.highlight 
                      ? 'bg-cyan-500 border-white shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-110' 
                      : 'bg-[#0a0a0c] border-zinc-600 group-hover:border-cyan-400'
                  }`}>
                    {item.highlight && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>

                  {/* Timeline card content */}
                  <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    item.highlight 
                      ? 'bg-white/[0.04] border-cyan-500/40 shadow-[0_0_20px_rgba(56,189,248,0.08)]' 
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs text-cyan-400 font-semibold">
                          PHASE {item.phase}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/5">
                          {item.date}
                        </span>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                          item.highlight 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                            : 'bg-zinc-800 text-zinc-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Interview Guidelines (面試說明與注意事項) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                面試型態與審查叮嚀 (Interview Guidelines)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {applicationProcess.interviewNotes.map((note, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider block">
                    GUIDE // 0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-white">
                    {note.title}
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-start space-x-3 text-xs text-amber-200/90 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">報名注意事項：</strong>
              填寫 Google 表單前請確認個人通訊軟體（Email / LINE ID / 手機號碼）正確無誤，我們將於審查階段以信件及簡訊發送通知。
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Actions with Conspicuous External Jump Button */}
        <div className="px-5 sm:px-8 py-5 border-t border-white/10 bg-[#0c0e14]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-zinc-400 hidden sm:block">
            填寫時間預計需 5-10 分鐘，將在新分頁開啟官方 Google 表單。
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
            >
              稍後再說
            </button>

            {/* External Google Form Action Button */}
            <button
              onClick={handleOpenGoogleForm}
              className="w-2/3 sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>填寫報名表單</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
