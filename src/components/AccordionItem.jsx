import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function AccordionItem({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl border transition-all duration-200 ${
      isOpen 
        ? 'bg-white/[0.04] border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.05)]' 
        : 'bg-white/[0.02] border-white/5 hover:border-white/10'
    }`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3.5 px-4 sm:px-5 flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-3 pr-3">
          <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${
            isOpen ? 'text-cyan-400' : 'text-zinc-500'
          }`} />
          <span className={`text-sm sm:text-base font-medium transition-colors ${
            isOpen ? 'text-white' : 'text-zinc-300 hover:text-white'
          }`}>
            {question}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-zinc-400 transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-cyan-400' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04]">
          <p className="pl-7">{answer}</p>
        </div>
      )}
    </div>
  );
}
