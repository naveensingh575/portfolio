import React from 'react';
import { 
  User, 
  Layers, 
  FileText, 
  Terminal, 
  Network, 
  Mail, 
  Search, 
  Sun, 
  Moon,
  Server,
  Milestone
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenSearch: () => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  setActiveView,
  onOpenSearch,
  isDark,
  setIsDark
}) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Layers },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'journey', label: 'Journey', icon: Milestone },
    { id: 'infrastructure', label: 'Infrastructure', icon: Network },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <aside className="w-full lg:w-48 xl:w-52 flex-shrink-0 lg:sticky lg:top-6 z-20 transition-all duration-300">
      
      {/* Slim Rack Navigation Box */}
      <nav 
        className="box p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden" 
        aria-label="Main Rack Navigation"
      >
        
        {/* Slim Patch Panel Header */}
        <div className="hidden lg:flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border-color)] px-1">
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-[var(--text-muted)] font-bold tracking-wider">
            <Server className="w-3 h-3 text-sky-400" />
            <span>RACK-01 // U2</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((port) => (
              <div 
                key={port} 
                className="w-2 h-2 rounded-[2px] bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center"
                title={`Port eth${port}`}
              >
                <div className={`w-1 h-1 rounded-full ${port === 1 ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation List */}
        <ul className="flex lg:flex-col flex-wrap gap-1 justify-around lg:justify-start">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl font-sans text-xs transition-all duration-150 group relative ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30 font-semibold shadow-sm shadow-sky-500/10'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] border border-transparent font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-sky-400' : 'text-[var(--text-muted)] group-hover:text-sky-400'
                    }`} />
                    <span className="truncate">{item.label}</span>
                  </div>

                  {/* Active Indicator LED */}
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all ${
                    isActive ? 'bg-sky-400 shadow-[0_0_8px_#38bdf8]' : 'bg-slate-700 opacity-40 group-hover:opacity-80'
                  }`} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Slim Perforation Plate */}
        <div className="hidden lg:grid grid-cols-6 gap-1 my-3 py-1.5 border-y border-[var(--border-color)] opacity-25">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-[var(--text-muted)] block mx-auto"></span>
          ))}
        </div>

        {/* Slim Rack Utilities: Search & Theme Switch */}
        <div className="pt-1 flex flex-col gap-1.5 font-mono">
          
          {/* Spotlight Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center justify-between w-full px-2.5 py-2 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] text-[11px] transition-all group"
            title="Omni Search (⌘K / Ctrl+K)"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3 h-3 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Search</span>
            </div>
            <kbd className="px-1.5 py-0.2 text-[9px] bg-[var(--bg-card)] text-[var(--text-muted)] rounded border border-[var(--border-color)]">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center justify-between w-full px-2.5 py-2 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] text-[11px] transition-all"
            title={`Toggle ${isDark ? 'Light' : 'Dark'} theme`}
          >
            <div className="flex items-center gap-2">
              {isDark ? (
                <Sun className="w-3 h-3 text-amber-400" />
              ) : (
                <Moon className="w-3 h-3 text-sky-500" />
              )}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </div>
            <span className="text-[9px] text-[var(--text-muted)] uppercase tracking-wider">
              {isDark ? 'DK' : 'LT'}
            </span>
          </button>
        </div>

      </nav>
    </aside>
  );
};
