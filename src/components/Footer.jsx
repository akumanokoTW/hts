import React from 'react';
import { Compass, Mail, MessageCircle, Globe, ShieldCheck, Heart } from 'lucide-react';
import { campMeta } from '../data/campData';

export default function Footer({ onOpenAbout, onOpenApplication }) {
  const scrollToTeams = () => {
    const el = document.getElementById('teams');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const time = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#08080a] text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Camp Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-base font-bold text-white tracking-wider">
                  {campMeta.campName}
                </span>
                <p className="text-xs text-zinc-400">
                  {campMeta.campFullName}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
              {campMeta.tagline}。我們致力於將天文的熱愛傳達給孩子們，在台東純淨美麗的夜空下，創造一生難忘的仰望記憶。
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-zinc-500 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5">
              <span>LOCATION:</span>
              <span className="text-cyan-400">{campMeta.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest">
              快速導覽
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={onOpenAbout}
                  className="hover:text-cyan-300 transition-colors"
                >
                  關於營隊與成立宗旨
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToTeams}
                  className="hover:text-cyan-300 transition-colors"
                >
                  六大核心組別任務
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenApplication}
                  className="hover:text-cyan-300 transition-colors"
                >
                  招募時程與甄選說明
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenApplication}
                  className="hover:text-cyan-300 transition-colors"
                >
                  線上報名表單
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest">
              官方聯絡管道
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-zinc-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>htshearts2stars@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <MessageCircle className="w-4 h-4 text-purple-400" />
                <span>hearts2stars_astrocamp</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>星之所向天文營</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026-{time} {campMeta.campFullName} 開發團隊. MIT License</p>
          <div className="flex items-center space-x-2">
            <span>v26.1.4</span>
            <span>Powered by</span>
            <span className="text-zinc-300 font-mono">Hz4ku NTSH.TTCT.ROC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
