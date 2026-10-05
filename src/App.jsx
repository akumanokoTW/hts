import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HomeGroupPhoto from './components/HomeGroupPhoto';
import TeamGrid from './components/TeamGrid';
import AboutModal from './components/AboutModal';
import TeamDetailModal from './components/TeamDetailModal';
import ApplicationModal from './components/ApplicationModal';
import Footer from './components/Footer';
import { campMeta } from './data/campData';
import { Sparkles, Compass, ShieldCheck, ArrowRight, Radio } from 'lucide-react';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(null);
  const [selectedTeamForApply, setSelectedTeamForApply] = useState(null);

  // Handlers
  const handleOpenAbout = () => {
    setIsAboutOpen(true);
  };

  const handleCloseAbout = () => {
    setIsAboutOpen(false);
  };

  const handleSelectTeam = (team) => {
    setActiveTeam(team);
  };

  const handleCloseTeamModal = () => {
    setActiveTeam(null);
  };

  const handleOpenApplication = (team = null) => {
    setSelectedTeamForApply(team);
    setIsApplicationOpen(true);
  };

  const handleCloseApplication = () => {
    setIsApplicationOpen(false);
  };

  const handleExploreTeams = () => {
    const el = document.getElementById('teams');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 relative selection:bg-cyan-500/30 selection:text-cyan-200 sci-fi-grid">
      {/* Subtle background ambient glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-950/20 via-transparent to-transparent blur-3xl opacity-60" />
      </div>

      {/* Navigation */}
      <Navbar 
        onOpenAbout={handleOpenAbout} 
        onOpenApplication={() => handleOpenApplication()} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAbout={handleOpenAbout}
          onOpenApplication={() => handleOpenApplication()}
          onExploreTeams={handleExploreTeams}
        />

        {/* 2. Group Photo Spotlight Section */}
        <HomeGroupPhoto onOpenAbout={handleOpenAbout} />

        {/* 3. Team Grid Section */}
        <TeamGrid onSelectTeam={handleSelectTeam} />

        {/* 3. Mid-page Sci-Fi Mission Banner / Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 glass-panel border border-white/10 overflow-hidden">
            {/* Soft backdrop glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                <span>EXPEDITION CALL // 2026 RECRUITMENT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                這不只是一場營隊，<br />
                是一場刻在靈魂裡的星際探索。
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                在台東美麗純淨的夜空下，銀河如光帶傾瀉。無論你是擅長傳遞知識的教學夥伴、創造視覺共鳴的美宣設計師、溫暖小隊的隊輔、或是掌控基地後勤的守護者，這裡都有屬於你的星際座標。
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => handleOpenApplication()}
                  className="px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>立即接受任務 / 查看報名程序</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleOpenAbout}
                  className="px-6 py-4 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="w-4 h-4 text-zinc-400" />
                  <span>了解營隊創立宗旨</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer 
        onOpenAbout={handleOpenAbout} 
        onOpenApplication={() => handleOpenApplication()} 
      />

      {/* Modals */}
      {/* 1. About Us Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={handleCloseAbout}
        onSelectTeam={(team) => {
          handleCloseAbout();
          handleSelectTeam(team);
        }}
      />

      {/* 2. Team Detail Mission Dossier Modal */}
      {activeTeam && (
        <TeamDetailModal
          team={activeTeam}
          onClose={handleCloseTeamModal}
          onApply={(team) => handleOpenApplication(team)}
        />
      )}

      {/* 3. Application & Timeline Modal */}
      <ApplicationModal
        isOpen={isApplicationOpen}
        onClose={handleCloseApplication}
        selectedTeam={selectedTeamForApply}
      />
    </div>
  );
}
