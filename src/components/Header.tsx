import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  FileDown, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Sun, 
  Moon,
  ChevronDown,
  FileText,
  Terminal,
} from 'lucide-react';

interface HeaderProps {
  onOpenResumeModal: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

// Typewriter hook — types out each role char by char, pauses, deletes, then moves to next
function useTypewriter(words: string[], typingSpeed = 70, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIdx % words.length];

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 300);
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deletingSpeed);
      } else {
        setWordIdx((prev) => (prev + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, phase, wordIdx, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenResumeModal, 
  isDark, 
  setIsDark 
}) => {
  const typedRole = useTypewriter(PORTFOLIO_DATA.profile.roles, 65, 35, 1800);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone.replace(/[^0-9+]/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="box w-full p-5 sm:p-7 relative overflow-hidden transition-all duration-300">
      
      {/* Subtle floating particle dots */}
      {[
        { size: 3, left: '8%',  delay: '0s',   dur: '6s'  },
        { size: 2, left: '18%', delay: '1.2s', dur: '8s'  },
        { size: 4, left: '32%', delay: '0.5s', dur: '7s'  },
        { size: 2, left: '50%', delay: '2s',   dur: '9s'  },
        { size: 3, left: '65%', delay: '0.8s', dur: '6.5s'},
        { size: 2, left: '78%', delay: '1.8s', dur: '8.5s'},
        { size: 4, left: '90%', delay: '0.3s', dur: '7.5s'},
        { size: 2, left: '42%', delay: '3s',   dur: '10s' },
      ].map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '10%',
            animationDelay: p.delay,
            animationDuration: p.dur,
            opacity: 0,
          }}
        />
      ))}

      {/* Top Chrome Bar */}
      <div className="flex items-center justify-between border-b border-[var(--c-border)] pb-3.5 mb-6 font-mono text-[11px] text-[var(--c-muted)]">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block shadow-sm"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#d97706] inline-block shadow-sm"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block shadow-sm"></span>
          <span className="ml-3 font-semibold uppercase tracking-widest text-[var(--c-muted)] text-[10px] flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-[var(--c-accent)]" />
            operator console
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            AWS-AP-SOUTH-1 // CLUSTER ONLINE
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded-lg bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-[var(--c-muted)] hover:text-[var(--c-heading)] border border-[var(--c-border)] transition-colors flex items-center gap-1.5 font-mono text-[11px]"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-[var(--c-accent)]" />}
            <span className="hidden md:inline text-[10px] uppercase tracking-wider">{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Main Identity & Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Profile Identity */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
          
          {/* Avatar Frame */}
          <div className="relative flex-shrink-0 group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[var(--c-accent)] via-indigo-500 to-emerald-400 shadow-xl shadow-[var(--c-accent)]/10 group-hover:shadow-[var(--c-accent)]/25 transition-all">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/naveen-avatar.jpg"
                  alt="Naveen Kumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Live Signal Pulse Dot */}
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[var(--c-surface)]"></span>
              </span>
            </div>
          </div>

          {/* Name & Role Rotator */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--c-heading)]">
                Naveen <span className="font-light text-[var(--c-muted)]">Kumar</span>
              </h1>
            </div>

            {/* Typewriter Role */}
            <div className="h-6 mt-1 flex items-center justify-center sm:justify-start overflow-hidden">
              <div className="text-xs sm:text-sm font-medium text-[var(--c-accent)] font-mono tracking-tight flex items-center gap-1.5">
                <span className="text-[var(--c-muted)]">&gt;</span>
                <span>{typedRole}</span>
                <span className="inline-block w-[2px] h-[1em] bg-[var(--c-accent)] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
              </div>
            </div>

            <div className="text-[11px] font-mono text-[var(--c-muted)] mt-1 flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[var(--c-accent)] font-semibold">operator/01</span>
              <span>•</span>
              <span>5.0 Yrs Cloud Platform Exp</span>
            </div>
          </div>
        </div>

        {/* System Telemetry Signal Board */}
        <div className="lg:col-span-3 bg-[var(--c-surface-alt)] border border-[var(--c-border)] rounded-xl p-3.5 font-mono text-xs">
          <div className="text-[10px] uppercase font-bold text-[var(--c-muted)] tracking-wider mb-2.5 flex items-center justify-between border-b border-[var(--c-border)] pb-1.5">
            <span>system status</span>
            <span className="text-emerald-500 flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> available
            </span>
          </div>

          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center">
              <span className="text-[var(--c-muted)]">tz:</span>
              <span className="text-[var(--c-heading)] font-semibold">GMT+5:30 (IST)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--c-muted)]">response:</span>
              <span className="text-[var(--c-accent)] font-semibold">&lt; 24h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[var(--c-muted)]">sla:</span>
              <span className="text-emerald-500 font-semibold">99.9%</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Socials (Exact adityacprtm.dev layout) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-3 w-full">
          
          {/* 1. Download CV Group Button */}
          <div className="relative flex items-center w-full sm:w-auto">
            <a
              href="/Naveen_Kumar_Resume.pdf"
              download="Naveen_Kumar_Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-light)] hover:opacity-90 text-white font-semibold text-xs rounded-l-xl transition-all font-sans active:scale-95 shadow-md shadow-[var(--c-accent)]/20"
              title="Download CV as PDF"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCVMenuOpen(!isCVMenuOpen);
              }}
              className="px-2.5 py-2 bg-[var(--c-accent)] text-white hover:opacity-90 rounded-r-xl border-l border-white/20 transition-colors flex items-center justify-center"
              aria-label="Select CV Option"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isCVMenuOpen && (
              <div 
                className="absolute right-0 top-full mt-2 w-56 bg-[var(--c-surface)] border border-[var(--c-border)] rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={() => setIsCVMenuOpen(false)}
              >
                <a
                  href="/Naveen_Kumar_Resume.pdf"
                  download="Naveen_Kumar_Resume.pdf"
                  className="w-full text-left px-3 py-2 text-xs text-[var(--c-text)] hover:bg-[var(--c-surface-alt)] rounded-lg flex items-center gap-2 transition-colors font-mono"
                >
                  <FileDown className="w-3.5 h-3.5 text-[var(--c-accent)]" />
                  <span>Download PDF File</span>
                </a>
                <button
                  onClick={onOpenResumeModal}
                  className="w-full text-left px-3 py-2 text-xs text-[var(--c-text)] hover:bg-[var(--c-surface-alt)] rounded-lg flex items-center gap-2 transition-colors font-mono"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive / Raw Preview</span>
                </button>
              </div>
            )}
          </div>

          {/* 2. Full Mail Address */}
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-xs text-[var(--c-text)] hover:text-[var(--c-accent)] font-mono transition-colors group px-1 py-0.5"
            title="Click to compose email (or copy)"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--c-accent)] group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-sans font-medium">{PORTFOLIO_DATA.profile.email}</span>
            {copiedEmail && (
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono">
                Copied!
              </span>
            )}
          </a>

          {/* 3. Social Media Links Row */}
          <ul className="flex items-center gap-2 text-[var(--c-muted)] m-0 p-0 list-none">
            <li>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] hover:text-[var(--c-accent)] border border-[var(--c-border)] transition-all hover:scale-110 flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href={PORTFOLIO_DATA.profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] hover:text-[var(--c-accent)] border border-[var(--c-border)] transition-all hover:scale-110 flex items-center justify-center"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] hover:text-[var(--c-heading)] border border-[var(--c-border)] transition-all hover:scale-110 flex items-center justify-center"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </li>
            <li>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] hover:text-emerald-500 border border-[var(--c-border)] transition-all hover:scale-110 flex items-center justify-center relative"
                title={`Phone: ${PORTFOLIO_DATA.profile.phone}`}
              >
                <Phone className="w-4 h-4" />
                {copiedPhone && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500 text-slate-950 font-bold text-[10px] rounded font-mono shadow-md whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </li>
          </ul>

        </div>

      </div>
    </header>
  );
};
