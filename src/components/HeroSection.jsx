import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, ChevronDown, Radio, Globe, Satellite } from 'lucide-react';
import { campMeta } from '../data/campData';

export default function HeroSection({ onOpenAbout, onOpenApplication, onExploreTeams }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle ambient lighting - no dizzying particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Sci-fi top coordinates badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-400 mb-6 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-zinc-300 tracking-wider">DARK SKY MISSION ACTIVE</span>
        <span className="text-cyan-400/90 hidden sm:inline">{campMeta.location}</span>
      </div>

      {/* Main Title & Slogan */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-cyan-400/90">
            {campMeta.campSubtitle}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
              {campMeta.campName}
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
              {campMeta.recruitmentTitle}
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed pt-2">
          {campMeta.tagline}。打破冰冷教科書，與志同道合的夥伴在萬千繁星之下，共同淬鍊一場改變視界的星際冒險。
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-6">
          <button
            onClick={() => onOpenApplication()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>接受任務 / 前往報名程序</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreTeams}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Satellite className="w-4 h-4 text-cyan-400" />
            <span>檢視六大組別任務</span>
          </button>

          <button
            onClick={onOpenAbout}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-zinc-400" />
            <span>關於我們</span>
          </button>
        </div>
      </div>

      {/* Sci-fi Stats Bar */}
      <div className="mt-14 w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {campMeta.heroStats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-4 sm:p-5 rounded-2xl text-center border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                {stat.unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down indicator */}
      <button 
        onClick={onExploreTeams}
        className="mt-10 p-2 text-zinc-500 hover:text-cyan-400 transition-colors duration-200 animate-bounce cursor-pointer flex flex-col items-center"
        aria-label="Scroll to teams"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">DISCOVER SQUADS</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
}
