import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const JourneyView: React.FC = () => {
  const totalMilestones = PORTFOLIO_DATA.journeyChapters.reduce(
    (acc, chap) => acc + chap.events.length, 
    0
  );

  return (
    <div className="space-y-10 animate-in fade-in duration-300 font-sans">
      
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
          Engineering Journey<span className="text-sky-400">.</span>
        </h2>
        <div className="text-xs font-mono text-[var(--text-muted)] mt-1.5 flex items-center gap-2">
          <span className="text-sky-400 font-bold">{totalMilestones}</span> milestones
          <span>·</span>
          <span>2020 — 2026</span>
          <span>·</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active Production
          </span>
        </div>
      </div>

      {/* Chapters by Year */}
      <div className="space-y-12">
        {PORTFOLIO_DATA.journeyChapters.map((chapter) => (
          <section key={chapter.year} className="space-y-4">
            
            {/* Year Chapter Banner */}
            <div className="flex items-center gap-4">
              <div className="px-3.5 py-1 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono font-extrabold text-sm sm:text-base tracking-wider shadow-sm">
                {chapter.year}
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--border-color)] to-transparent"></div>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                {chapter.events.length} {chapter.events.length === 1 ? 'event' : 'events'}
              </span>
            </div>

            {/* Event Timeline Entries */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-6">
              {chapter.events.map((evt, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Spine Indicator Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_#38bdf8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                  </div>

                  {/* Event Content Box */}
                  <div className="box box-hover p-4 sm:p-5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <time className="text-xs font-mono font-bold text-sky-400">
                        {evt.date}
                      </time>
                      <Sparkles className="w-3.5 h-3.5 text-[var(--text-muted)] opacity-50 group-hover:opacity-100 group-hover:text-sky-400 transition-opacity" />
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-main)] font-sans leading-relaxed">
                      {evt.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
};
