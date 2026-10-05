import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { campMeta } from '../data/campData';

export default function Navbar({ onOpenAbout, onOpenApplication }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/15 group-hover:border-cyan-400/50 transition-all duration-300">
              <Compass className="w-5 h-5 text-cyan-300 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-base md:text-lg font-bold tracking-wider text-white">
                  {campMeta.campName}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full">
                  RECRUITING
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 tracking-tight hidden sm:block">
                {campMeta.campFullName}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onOpenAbout}
              className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 flex items-center space-x-1.5 py-1 px-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400/80" />
              <span>關於我們</span>
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 py-1 px-2 rounded-lg hover:bg-white/5"
            >
              六大組別
            </button>
            <button
              onClick={onOpenApplication}
              className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 py-1 px-2 rounded-lg hover:bg-white/5"
            >
              招募時程
            </button>
            
            {/* Action CTA Button */}
            <button
              onClick={() => onOpenApplication()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-medium rounded-xl group bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0a0c] rounded-[10px] group-hover:bg-transparent text-white font-medium flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 group-hover:text-white transition-colors" />
                <span>接受任務 / 報名</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenApplication()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm"
            >
              報名
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAbout();
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-white/10 flex items-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>關於我們</span>
          </button>
          <button
            onClick={() => scrollToSection('teams')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-white/10"
          >
            六大組別任務
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApplication();
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-white/10"
          >
            招募時程與甄選程序
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-xl shadow-lg"
            >
              接受任務 / 填寫報名表單
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
