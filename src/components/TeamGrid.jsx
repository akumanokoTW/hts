import React from 'react';
import { teamsData } from '../data/campData';
import TeamCard from './TeamCard';
import { Terminal } from 'lucide-react';

export default function TeamGrid({ onSelectTeam }) {
  return (
    <section id="teams" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-300">
          <Terminal className="w-3.5 h-3.5" />
          <span>SQUAD MISSIONS // 6 CORE DIVISIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          六大組別任務檔案
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
          星際探險天文營仰賴六個核心艦隊的嚴密協同。點擊任意組別卡片，即可調閱詳細工作內容、徵選特質、活動照片與常見問答。
        </p>
      </div>

      {/* Grid of 6 teams */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {teamsData.map((team, index) => (
          <TeamCard
            key={team.id}
            team={team}
            index={index}
            onSelect={onSelectTeam}
          />
        ))}
      </div>
    </section>
  );
}
