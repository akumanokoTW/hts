import React from 'react';
import { Sparkles, Users, ArrowRight, MapPin, Heart } from 'lucide-react';

export default function HomeGroupPhoto({ onOpenAbout }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 glass-panel border border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.1)]">
        
        {/* Subtle decorative glow in background */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>FIRST EXPEDITION ARCHIVE // 2026 起點回顧</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              我們的起點・東中與東女的星火相傳
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              「既然台東擁有這麼美麗的星空，我們為什麼不直接在台東辦天文營？」在台東大學知本校區的繁星之下，第一屆 32 位跨校工作夥伴與學員寫下了這趟星際旅程的第一章。
            </p>
          </div>

          <button
            onClick={onOpenAbout}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 flex items-center space-x-2 flex-shrink-0 cursor-pointer"
          >
            <span>閱讀完整創始故事</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Big Spotlight Group Photo */}
        <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
          <img
            src="/images/general/group-photo.jpg"
            alt="第一屆星之所向天文營 全體工作人員與學員大合照"
            className="w-full max-h-[520px] object-cover object-center group-hover:scale-[1.015] transition-transform duration-700"
            loading="lazy"
          />

          {/* Bottom Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Badges on bottom of photo */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-white font-medium drop-shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm sm:text-base font-bold">
                2026 第一屆星之所向天文營・全體工作人員與學員大合照
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center space-x-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>32 位熱血幹部</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>台東大學知本校區</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
