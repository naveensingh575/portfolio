import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Cloud, 
  Cpu, 
  GitBranch, 
  Activity, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const scopeItems = [
    {
      category: "CLOUD ARCHITECTURE",
      title: "AWS & Kubernetes Platforms",
      desc: "Architecting multi-AZ AWS EKS infrastructure, VPC networking, cross-region disaster recovery (DR), and managing high-availability microservices with 99.9% SLA.",
      icon: Cloud,
      color: "from-sky-500/20 to-blue-500/10",
      accent: "text-[var(--c-accent)]"
    },
    {
      category: "AUTOMATION",
      title: "CI/CD & Infrastructure as Code",
      desc: "Automating immutable release pipelines using GitLab CI, Jenkins, and GitHub Actions with Terraform IaC, Ansible, and automated Canary & Blue-Green rollouts.",
      icon: GitBranch,
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-500"
    },
    {
      category: "RELIABILITY",
      title: "Site Reliability Engineering (SRE)",
      desc: "Full-stack observability with Datadog APM, Splunk, Prometheus, and CloudWatch. Eliminating operational toil, conducting RCA, and reducing MTTR by 35%.",
      icon: Activity,
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-500"
    },
    {
      category: "FULL-STACK SAAS",
      title: "Production Web Platforms",
      desc: "Building real-time full-stack web applications, dynamic QR SaaS platforms (OmniQR), Life OS productivity dashboards (Pulse), and low-latency audio streaming engines.",
      icon: Layers,
      color: "from-purple-500/20 to-indigo-500/10",
      accent: "text-purple-500"
    }
  ];

  const statCards = [
    { number: "5.0", label: "Years Experience", sub: "Cloud & DevOps" },
    { number: "6+", label: "Production Projects", sub: "Live Systems" },
    { number: "99.9%", label: "SLA Compliance", sub: "High Availability" },
    { number: "-35%", label: "MTTR Reduction", sub: "APM Observability" }
  ];

  const enterpriseBadges = [
    { name: "TCS", role: "Technology Analyst" },
    { name: "Infosys", role: "Technology Analyst & SRE" },
    { name: "AWS Cloud", role: "EKS, EC2, S3, RDS" },
    { name: "OmniQR SaaS", role: "Platform Creator" },
    { name: "Vercel Edge", role: "Frontend Hosting" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-300 font-sans">
      
      {/* Title & Narrative Lead */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--c-border)] pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-heading)] tracking-tight">
              About Me<span className="text-[var(--c-accent)]">.</span>
            </h2>
            <div className="text-xs font-mono text-[var(--c-muted)] mt-1 flex items-center gap-1.5">
              <span className="text-[var(--c-accent)]">◆</span>
              <span>DevOps Engineer & Cloud Infrastructure Architect · Gurugram, India · 5.0 yrs at scale</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[var(--c-accent)] hover:opacity-80 font-semibold transition-opacity"
          >
            <span>See Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <article className="text-xs sm:text-sm text-[var(--c-text)] leading-relaxed space-y-3 font-normal">
          <p>
            I am a <strong className="text-[var(--c-heading)] font-semibold">DevOps Engineer & Cloud Infrastructure Architect</strong> with <strong className="text-[var(--c-heading)] font-semibold">5.0 years</strong> of production experience designing secure, observable, and high-availability cloud platforms at scale across <strong className="text-[var(--c-heading)] font-semibold">TCS</strong> and <strong className="text-[var(--c-heading)] font-semibold">Infosys</strong>.
          </p>
          <p className="text-[var(--c-muted)]">
            My core engineering focus spans managing enterprise-grade <strong>Kubernetes (EKS)</strong> clusters, establishing multi-region disaster recovery (DR) architectures with automated snapshot replication, and enforcing Infrastructure as Code (IaC) governance through <strong>Terraform</strong> and <strong>Ansible</strong>.
          </p>
          <p className="text-[var(--c-muted)]">
            I specialize in continuous delivery automation using <strong>GitLab CI</strong> and <strong>Jenkins</strong>, implementing <strong>Blue-Green and Canary</strong> release strategies to elevate deployment stability (+30%), and building unified observability telemetry with <strong>Datadog APM</strong>, <strong>CloudWatch</strong>, and <strong>Splunk</strong> to slash incident resolution times (-35% MTTR).
          </p>
        </article>
      </section>

      {/* By the Numbers Stats Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--c-muted)] font-bold flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>By the Numbers</span>
          </h3>
          <span className="text-[10px] font-mono text-[var(--c-muted)]">PROVEN METRICS</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {statCards.map((stat, idx) => (
            <div 
              key={idx}
              className="box box-hover p-4 sm:p-5 flex flex-col justify-between group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--c-accent)] font-mono group-hover:scale-105 transition-transform origin-left">
                {stat.number}
              </div>
              <div className="mt-2">
                <div className="text-xs font-bold text-[var(--c-heading)]">{stat.label}</div>
                <div className="text-[10px] font-mono text-[var(--c-muted)] mt-0.5">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I'm Doing Scope Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--c-muted)] font-bold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>What I'm Doing</span>
          </h3>
          <span className="text-[10px] font-mono text-[var(--c-muted)]">ENGINEERING DOMAINS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scopeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article 
                key={idx}
                className="box box-hover p-5 sm:p-6 flex items-start gap-4 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} border border-[var(--c-border)] flex items-center justify-center ${item.accent} flex-shrink-0 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--c-accent)]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-[var(--c-heading)] font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--c-muted)] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Enterprise Experience Badges */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--c-muted)] font-bold">
          Enterprise Organizations & Workspaces
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {enterpriseBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="box p-3.5 text-center flex flex-col items-center justify-center space-y-1 group hover:border-[var(--c-accent)] transition-colors"
            >
              <span className="text-xs font-bold text-[var(--c-heading)] font-sans group-hover:text-[var(--c-accent)] transition-colors">
                {badge.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--c-muted)] line-clamp-1">
                {badge.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Capabilities Matrix */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--c-border)] pb-3">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--c-muted)] font-bold flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-[var(--c-accent)]" />
            <span>Technical Capabilities & Tools</span>
          </h3>
          <span className="text-[10px] font-mono text-[var(--c-accent)]">PRODUCTION VERIFIED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skillList]) => (
            <div key={category} className="box p-5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-[var(--c-border)] pb-2">
                <span className="text-xs font-mono font-bold text-[var(--c-accent)] uppercase tracking-wider">{category}</span>
                <span className="text-[10px] font-mono text-[var(--c-muted)]">{skillList.length} Technologies</span>
              </div>

              <div className="space-y-2.5">
                {skillList.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--c-text)] font-medium font-sans flex items-center gap-2">
                        <i className={`${skill.icon} text-sm text-[var(--c-accent)]`}></i>
                        {skill.name}
                      </span>
                      <span className="font-mono text-[var(--c-muted)] text-[11px]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--c-surface-alt)] h-1.5 rounded-full overflow-hidden border border-[var(--c-border)]">
                      <div 
                        className="bg-gradient-to-r from-[var(--c-accent)] to-indigo-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Certifications Banner */}
      <section className="box p-6 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-[var(--c-surface-alt)] border border-[var(--c-border)] flex items-center justify-center text-[var(--c-accent)] flex-shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[var(--c-heading)]">Infosys Certified AWS Public Cloud Associate & Google Cloud Leader</h4>
            <p className="text-xs text-[var(--c-muted)] font-sans">Validated credentials in cloud infrastructure modernization, security, and Kubernetes orchestration.</p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('resume')}
          className="px-4 py-2 bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-[var(--c-accent)] border border-[var(--c-border)] rounded-xl text-xs font-mono transition-all flex-shrink-0 active:scale-95"
        >
          View Resume &rarr;
        </button>
      </section>

    </div>
  );
};
