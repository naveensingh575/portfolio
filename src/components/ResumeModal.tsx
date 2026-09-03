import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Copy, CheckCircle, Mail, Phone, ExternalLink, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  if (!isOpen) return null;

  const handleCopyRaw = () => {
    const text = `NAVEEN KUMAR
7229960539 | navisingh2100@gmail.com | www.linkedin.com/in/naveen-kumar-150218189

PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.profile.summary}

SKILLS
- Cloud Platforms: AWS (EKS, EC2, S3, ECR, IAM, RDS, Lambda, ASG)
- Container Orchestration: Kubernetes administration, Docker, Helm, Cluster Autoscaler
- CI/CD Engineering: Jenkins, GitLab CI/CD, GitHub Actions, Nexus Artifactory
- Infrastructure Provisioning: Terraform, Ansible, AWS CloudFormation
- Monitoring & Observability: Datadog, CloudWatch, Splunk, ELK Stack, Prometheus, Grafana
- Operating Systems: Linux (RHEL, Ubuntu)
- Cloud Networking: VPC, Load Balancers, Security Groups
- Scripting & Automation: Python, Shell scripting, YAML, Finacle scripting
- Deployment Strategies: Blue-Green, Canary, Rolling Updates
- DevOps & SRE Practices: Incident Management, RCA, SLA/SLO tracking, MTTR Optimization, High Availability Architecture

WORK EXPERIENCE
1. Technology Analyst — TCS (04/2026 - 06/2026)
- Allocated to the Working as a DevOps Engineer supporting enterprise cloud applications on AWS.
- Managing Kubernetes (EKS) clusters, CI/CD pipelines, and production deployments.
- Automating infrastructure using Terraform and deployment workflows using Jenkins/GitLab CI.
- Monitoring production environments using Datadog, CloudWatch, and Splunk.
- Supporting incident management, root cause analysis (RCA), and production releases.
- Collaborating with development, QA, and infrastructure teams to improve deployment reliability.

2. Technology Analyst — Infosys (01/2023 - 03/2026)
- Managed production-grade Kubernetes clusters on AWS EKS supporting microservices-based enterprise workloads with 99.9% SLA compliance.
- Designed highly available and multi-AZ architectures, ensuring fault tolerance and minimal downtime.
- Implemented multi-region disaster recovery (DR) strategy using cross-region backups, AMI replication, and database snapshot automation.
- Engineered CI/CD pipelines using Jenkins and GitLab CI/CD to streamline build, test, and release workflows across environments.
- Executed Blue-Green and Canary deployment strategies, increasing release stability by 30%.
- Provisioned and maintained infrastructure using Terraform and Ansible, reducing manual configuration effort by 40%.
- Strengthened observability through Datadog, CloudWatch, and Splunk dashboards, reducing MTTR by 35%.
- Led production incident response processes, conducted Root Cause Analysis (RCA), and enforced preventive remediation strategies.
- Provisioned and secured IAM roles, VPC networking, and Load Balancers.
- Optimized Kubernetes autoscaling policies and resource allocation to improve cluster performance and cost efficiency.
- Supported full DevOps lifecycle including build management, release engineering, deployment, monitoring, and production support.

3. Senior Systems Engineer — Infosys (02/2022 - 12/2022)
- Streamlined enterprise workflows using advanced Shell scripting, reducing operational dependency by 60%.
- Designed idempotent job orchestration logic to improve processing throughput by 25%.
- Integrated application services into CI workflows for automated validation and structured release management.
- Conducted performance benchmarking using JMeter, improving application efficiency by 25%.
- Applied monitoring best practices using Datadog, Splunk, and CloudWatch to maintain SLA compliance.
- Reduced downtime through structured log aggregation, alerting, and health monitoring pipelines.

4. Systems Engineer — Infosys (06/2021 - 01/2022)
- Administered Linux servers, including file management, user and group management, disk management, and basic network configuration.
- Performed manual application deployments across development and UAT environments.
- Managed Git repositories, including branch creation, merges, and version tracking.
- Assisted in build validation and deployment support activities.
- Monitored system logs and resolved environment-level issues.
- Deployed and maintained Linux services and scheduled automation tasks.

EDUCATION
- Bhagwan Parshuram Institute of Technology (BPIT), Rohini, New Delhi
- Bachelor of Technology in Electronics and Communication Engineering (2016-2020)

CERTIFICATIONS
- Infosys Certified AWS Public Cloud Associate
- Google Certified Cloud Digital Leader
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="box max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-[var(--border-color)] bg-[var(--bg-primary)] gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-[var(--text-main)] tracking-wider">
              NAVEEN_KUMAR_RESUME.PDF
            </span>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[var(--bg-card)] rounded-lg p-0.5 border border-[var(--border-color)] font-mono text-[11px]">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                  viewMode === 'interactive' ? 'bg-sky-500/20 text-sky-400 font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>Interactive Layout</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
                  viewMode === 'pdf' ? 'bg-sky-500/20 text-sky-400 font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                <span>Raw PDF View</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Naveen_Kumar_Resume.pdf"
              download="Naveen_Kumar_Resume.pdf"
              className="px-3.5 py-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handleCopyRaw}
              className="px-3 py-1.5 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] text-xs font-mono rounded-lg border border-[var(--border-color)] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] text-xs font-mono rounded-lg border border-[var(--border-color)] flex items-center gap-1.5 transition-colors hidden sm:flex"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        {viewMode === 'pdf' ? (
          <div className="w-full h-[75vh] bg-[var(--bg-primary)]">
            <iframe 
              src="/Naveen_Kumar_Resume.pdf" 
              className="w-full h-full border-none" 
              title="Resume PDF Viewer"
            />
          </div>
        ) : (
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[var(--bg-card)] text-[var(--text-main)] font-sans text-xs sm:text-sm">
            
            {/* Header */}
            <div className="text-center border-b border-[var(--border-color)] pb-6 space-y-2">
              <h1 className="text-3xl font-extrabold text-[var(--text-main)] tracking-tight">{PORTFOLIO_DATA.profile.name}</h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {PORTFOLIO_DATA.profile.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {PORTFOLIO_DATA.profile.email}</span>
                <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline">
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
                <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">Professional Summary</h2>
              <p className="text-[var(--text-main)] leading-relaxed font-sans">
                {PORTFOLIO_DATA.profile.summary}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">Technical Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(PORTFOLIO_DATA.skills).map(([category, list]) => (
                  <div key={category} className="bg-[var(--bg-primary)] p-3.5 rounded-xl border border-[var(--border-color)] space-y-1">
                    <span className="font-bold text-sky-400 uppercase font-mono text-[11px]">{category}</span>
                    <div className="text-[var(--text-muted)] leading-relaxed">{list.map(s => s.name).join(', ')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider">Work History</h2>
              <div className="space-y-6">
                {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-[var(--border-color)] pl-4 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="font-bold text-[var(--text-main)] text-sm">
                        {exp.role} <span className="text-sky-400 font-normal">@ {exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-[var(--text-muted)] text-xs">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">
                          <span className="text-[var(--text-main)]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-color)]">
              <div>
                <h2 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider mb-2">Education</h2>
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="text-xs space-y-1">
                    <div className="font-bold text-[var(--text-main)]">{edu.degree} in {edu.field}</div>
                    <div className="text-[var(--text-muted)]">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xs font-mono uppercase font-bold text-sky-400 tracking-wider mb-2">Certifications</h2>
                <div className="space-y-2 text-xs">
                  {PORTFOLIO_DATA.certifications.map((c, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-main)] font-medium">{c.name}</span>
                      <span className="text-emerald-400 font-mono text-[10px]">Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
