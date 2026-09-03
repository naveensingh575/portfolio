import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Server, 
  Radio, 
  Globe, 
  X, 
  CheckCircle2, 
  Activity, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export const PortfolioView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { name: 'All', count: PORTFOLIO_DATA.projects.length, icon: Layers },
    { name: 'Full-Stack SaaS', count: PORTFOLIO_DATA.projects.filter(p => p.category === 'Full-Stack SaaS').length, icon: Server },
    { name: 'DevOps & Cloud', count: PORTFOLIO_DATA.projects.filter(p => p.category === 'DevOps & Cloud').length, icon: Cpu },
    { name: 'Audio & Media', count: PORTFOLIO_DATA.projects.filter(p => p.category === 'Audio & Media').length, icon: Radio },
    { name: 'Web Platform', count: PORTFOLIO_DATA.projects.filter(p => p.category === 'Web Platform').length, icon: Globe },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      
      {/* Header Intro */}
      <div className="border-b border-[var(--border-color)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
          DevOps & Cloud Platform Portfolio<span className="text-sky-400">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 max-w-3xl font-normal leading-relaxed">
          Cloud infrastructure, Kubernetes clusters, and full-stack SaaS projects. Each workload includes architectural decisions, tech stack, and key production outcomes.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all duration-200 ${
                isActive
                  ? 'bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] hover:border-sky-500/30'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                isActive ? 'bg-sky-700 text-white' : 'bg-[var(--bg-primary)] text-[var(--text-muted)]'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="box box-hover overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Card Header Preview Area */}
            <div className={`p-5 sm:p-6 bg-gradient-to-br ${project.gradient} border-b border-[var(--border-color)] relative`}>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase bg-[var(--bg-card)] text-sky-400 border border-[var(--border-color)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {project.category}
                </span>

                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <Activity className="w-2.5 h-2.5" />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-sky-400 transition-colors font-sans">
                {project.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-sans line-clamp-2 leading-relaxed">
                {project.tagline}
              </p>

              {/* Metrics Badge */}
              {project.metrics && (
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[var(--border-color)] text-[11px] font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-[var(--bg-card)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">
                      <span className="text-[var(--text-muted)]">{m.label}:</span>
                      <span className="text-sky-400 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card Content & Action Bar */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)]">Technologies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 bg-[var(--bg-primary)] text-[var(--text-muted)] text-[11px] font-mono rounded border border-[var(--border-color)] group-hover:border-sky-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors"
                >
                  Architecture Deep Dive &rarr;
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-mono font-medium flex items-center gap-1.5 shadow-md shadow-sky-500/15 transition-all active:scale-95"
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Architecture Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="box max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[var(--border-color)] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30 uppercase">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">● {activeModalProject.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-sans">{activeModalProject.title}</h3>
                <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">{activeModalProject.tagline}</p>
              </div>

              <button 
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold mb-2">Overview</h4>
              <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed font-sans">
                {activeModalProject.longDescription}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-sky-400" />
                <span>Architectural & Reliability Highlights</span>
              </h4>
              <div className="space-y-2">
                {activeModalProject.architectureNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-main)] font-sans">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-main)] text-xs font-mono rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--border-color)]">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] text-xs font-mono rounded-xl transition-colors"
              >
                Close
              </button>
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs font-mono rounded-xl flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Launch Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
