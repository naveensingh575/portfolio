import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Download, 
  ShieldCheck, 
  Building, 
  FileText 
} from 'lucide-react';

interface ResumeViewProps {
  onOpenResumeModal: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onOpenResumeModal }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300 font-sans">
      
      {/* Header & Download Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--c-border)] pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-heading)] tracking-tight">
            Work Experience & Certifications<span className="text-[var(--c-accent)]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--c-muted)] mt-1 font-normal">
            5.0 years of production enterprise experience building scalable cloud infrastructure, Kubernetes microservices, and CI/CD pipelines.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={onOpenResumeModal}
            className="px-3.5 py-2 bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-[var(--c-heading)] font-semibold text-xs font-mono rounded-xl border border-[var(--c-border)] flex items-center gap-2 transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>Interactive CV</span>
          </button>

          <a
            href="/Naveen_Kumar_Resume.pdf"
            download="Naveen_Kumar_Resume.pdf"
            className="px-4 py-2 bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-light)] hover:opacity-90 text-white font-medium text-xs font-mono rounded-xl flex items-center gap-2 shadow-md shadow-[var(--c-accent)]/20 transition-all active:scale-95 flex-shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold flex items-center gap-2">
          <Building className="w-3.5 h-3.5 text-sky-400" />
          <span>Professional Experience (5.0 Years)</span>
        </h3>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_#38bdf8]">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
              </div>

              {/* Experience Card */}
              <div className="box box-hover p-5 sm:p-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3.5">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[var(--text-main)] font-sans flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-sky-400 font-normal">@ {exp.company}</span>
                    </h4>
                    <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--text-muted)]" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1 text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-main)] font-sans leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Key Deliverables & Quantified Impact:
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] font-sans leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-main)]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Pills */}
                <div className="pt-2 border-t border-[var(--border-color)] flex flex-wrap gap-1.5">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-[var(--bg-primary)] text-sky-400 text-[11px] font-mono rounded border border-[var(--border-color)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Certifications */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Industry Certifications</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
            <div 
              key={cIdx} 
              className="box box-hover p-5 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center p-1.5 overflow-hidden">
                    <img src={cert.badgeUrl} alt={cert.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {cert.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text-main)] font-sans">
                  {cert.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] font-sans mt-0.5">
                  Issued by {cert.issuer}
                </p>
              </div>

              {/* Skills Verified */}
              <div className="space-y-1.5 pt-3 border-t border-[var(--border-color)]">
                <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">Verified Domains:</div>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((s, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-[var(--bg-primary)] text-[var(--text-muted)] text-[10px] font-mono rounded border border-[var(--border-color)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] font-bold flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
          <span>Formal Education</span>
        </h3>

        {PORTFOLIO_DATA.education.map((edu, eIdx) => (
          <div key={eIdx} className="box p-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="text-base font-bold text-[var(--text-main)] font-sans">
                {edu.degree} in {edu.field}
              </h4>
              <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/20 w-fit">
                {edu.period}
              </span>
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)]">
              {edu.institution} — {edu.location}
            </div>
            <p className="text-xs text-[var(--text-muted)] font-sans leading-relaxed pt-1">
              {edu.description}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
};
