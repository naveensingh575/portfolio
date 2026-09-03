import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Search, 
  X, 
  Layers, 
  FileText, 
  Terminal, 
  Network, 
  Mail, 
  ExternalLink, 
  Award,
  Zap
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PORTFOLIO_DATA.projects.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCerts = PORTFOLIO_DATA.certifications.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.issuer.toLowerCase().includes(query.toLowerCase())
  );

  const navShortcuts = [
    { label: 'About & Metrics', view: 'about', icon: Zap },
    { label: 'Portfolio & Live Projects', view: 'portfolio', icon: Layers },
    { label: 'Work Experience & Resume', view: 'resume', icon: FileText },
    { label: 'Interactive CLI Terminal', view: 'terminal', icon: Terminal },
    { label: 'Cloud Architecture Blueprint', view: 'infrastructure', icon: Network },
    { label: 'Contact & Connect', view: 'contact', icon: Mail },
  ].filter(n => n.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="box max-w-xl w-full shadow-2xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[var(--border-color)] gap-3 bg-[var(--bg-primary)]">
          <Search className="w-4 h-4 text-sky-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, certifications, navigation..."
            className="w-full bg-transparent text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 text-xs bg-[var(--bg-card)]">
          
          {/* Navigation Items */}
          {navShortcuts.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                Navigation
              </div>
              <div className="space-y-1">
                {navShortcuts.map((n) => {
                  const Icon = n.icon;
                  return (
                    <button
                      key={n.view}
                      onClick={() => {
                        onNavigate(n.view);
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-[var(--text-main)] hover:bg-sky-500/10 hover:text-sky-400 flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-sky-400" />
                        <span className="font-sans font-medium">{n.label}</span>
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)] group-hover:text-sky-400">&crarr; Go</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                Projects
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <a
                    key={p.id}
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-xl text-[var(--text-main)] hover:bg-sky-500/10 hover:text-sky-400 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold font-sans flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-sky-400" />
                        <span>{p.title}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-sky-400" />
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)] mt-0.5 line-clamp-1 font-sans">{p.tagline}</div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {filteredCerts.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
                Certifications
              </div>
              <div className="space-y-1">
                {filteredCerts.map((c, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigate('resume');
                      onClose();
                    }}
                    className="px-3 py-2 rounded-xl text-[var(--text-main)] hover:bg-[var(--bg-primary)] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <div>
                        <div className="font-bold font-sans">{c.name}</div>
                        <div className="text-[10px] text-[var(--text-muted)]">{c.issuer}</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">Verified</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[10px] text-[var(--text-muted)] flex items-center justify-between px-4 font-mono">
          <span>Navigate with mouse or enter</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
