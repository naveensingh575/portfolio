import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { AboutView } from './views/AboutView';
import { PortfolioView } from './views/PortfolioView';
import { ResumeView } from './views/ResumeView';
import { JourneyView } from './views/JourneyView';
import { TerminalView } from './views/TerminalView';
import { InfrastructureView } from './views/InfrastructureView';
import { ContactView } from './views/ContactView';

export function App() {
  const [activeView, setActiveView] = useState<string>('about');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(true);

  // Sync dark class on root html
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Global keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'text-[#f4f6fb]' : 'text-[#0f172a]'} flex flex-col items-center justify-start p-3 sm:p-6 lg:p-10 relative selection:bg-sky-500/30 selection:text-sky-300 transition-colors duration-300`}>
      
      {/* Authentic Background Triangles Pattern Layer (adityacprtm.dev) */}
      <div className="bg-triangles"></div>

      {/* App Max Container */}
      <div className="w-full max-w-7xl z-10 space-y-6">
        
        {/* Header Console */}
        <Header 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          activeView={activeView}
          setActiveView={setActiveView}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Main Body Layout: Sticky Sidebar + Active View Content */}
        <div className="flex flex-col lg:flex-row gap-6 items-start relative">
          
          {/* Slim Server Rack Sidebar (Sticky during scroll) */}
          <Sidebar 
            activeView={activeView}
            setActiveView={setActiveView}
            onOpenSearch={() => setIsSearchOpen(true)}
            isDark={isDark}
            setIsDark={setIsDark}
          />

          {/* Main Active View Container */}
          <main className="flex-1 w-full min-w-0">
            <div className="box p-6 sm:p-8 lg:p-10 relative min-h-[600px]">
              {activeView === 'about' && <AboutView onNavigate={setActiveView} />}
              {activeView === 'portfolio' && <PortfolioView />}
              {activeView === 'resume' && <ResumeView onOpenResumeModal={() => setIsResumeModalOpen(true)} />}
              {activeView === 'journey' && <JourneyView />}
              {activeView === 'infrastructure' && <InfrastructureView />}
              {activeView === 'terminal' && <TerminalView />}
              {activeView === 'contact' && <ContactView />}
            </div>

            {/* Footer Status Bar (adityacprtm.dev style) */}
            <footer className="mt-4 px-5 py-3.5 box flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                <span className="font-semibold text-[var(--text-main)]">Naveen Kumar</span>
                <span>— All systems operational</span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span>AWS EKS</span>
                <span>•</span>
                <span>React + Vite</span>
                <span>•</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
            </footer>
          </main>

        </div>

      </div>

      {/* Global Command Palette Modal */}
      <CommandPalette 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={setActiveView}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}

export default App;
