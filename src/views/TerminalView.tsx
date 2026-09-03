import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';

export const TerminalView: React.FC = () => {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputLines, setOutputLines] = useState<Array<{ type: 'input' | 'output' | 'system' | 'error' | 'success'; text: string; link?: string }>>([
    { type: 'system', text: "🚀 NAVEEN_KUMAR CLOUD OPERATING SYSTEM [Version 5.0.0-PROD]" },
    { type: 'system', text: "Type 'help' to inspect available commands, or 'projects' to view production workloads.\n" }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputLines]);

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    // Add to history
    setCommandHistory(prev => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newOutputs = [...outputLines, { type: 'input' as const, text: `naveen@cloud-node:~$ ${rawCmd}` }];
    const cmd = rawCmd.toLowerCase();

    if (cmd === 'help') {
      newOutputs.push({
        type: 'output',
        text: `Available Terminal Commands:
  - help           : Show this help menu
  - whoami / about : Display engineer identity and summary
  - projects       : List all 6 production projects and live URLs
  - skills         : Show DevOps & full-stack technology matrix
  - certs          : Display active cloud certifications (AWS, GCP)
  - exp / resume   : View TCS & Infosys work history & quantifiable impact
  - contact        : Print direct contact details & socials
  - status / ping  : Check production system telemetry and SLA
  - sudo hire      : Execute executive hiring workflow (🎉)
  - matrix         : Activate cyberpunk visual sequence
  - clear          : Wipe the terminal buffer`
      });
    } else if (cmd === 'whoami' || cmd === 'about') {
      newOutputs.push({
        type: 'output',
        text: `NAME: ${PORTFOLIO_DATA.profile.name}
ROLE: ${PORTFOLIO_DATA.profile.title}
EXPERIENCE: ${PORTFOLIO_DATA.profile.experienceYears} Years Production
LOCATION: ${PORTFOLIO_DATA.profile.location}
SUMMARY: ${PORTFOLIO_DATA.profile.summary}`
      });
    } else if (cmd === 'projects' || cmd === 'ls' || cmd === 'ls projects') {
      newOutputs.push({
        type: 'output',
        text: `--- Production Workloads & Applications ---
1. [OmniQR SaaS]      : ${PORTFOLIO_DATA.projects[0].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[0].tagline}
2. [Pulse Life OS]    : ${PORTFOLIO_DATA.projects[1].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[1].tagline}
3. [Haryanvi Radio]   : ${PORTFOLIO_DATA.projects[2].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[2].tagline}
4. [Aura FM Player]   : ${PORTFOLIO_DATA.projects[3].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[3].tagline}
5. [Hanuman Chalisa]  : ${PORTFOLIO_DATA.projects[4].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[4].tagline}
6. [AWS CI/CD Infra]  : ${PORTFOLIO_DATA.projects[5].demoUrl}
   └─ ${PORTFOLIO_DATA.projects[5].tagline}`
      });
    } else if (cmd === 'skills') {
      newOutputs.push({
        type: 'output',
        text: `[Cloud Platforms]    : AWS (EKS, EC2, S3, ECR, IAM, RDS, Lambda, ASG), VPC, Load Balancers
[Container & IaC]    : Kubernetes administration, Docker, Helm, Cluster Autoscaler, Terraform, Ansible
[CI/CD Engineering]  : Jenkins, GitLab CI/CD, GitHub Actions, Nexus Artifactory, Blue-Green / Canary
[Monitoring & SRE]   : Datadog, CloudWatch, Splunk, ELK Stack, Prometheus, Grafana, Incident Mgmt, RCA
[OS & Scripting]     : Linux (RHEL, Ubuntu), Python, Shell scripting, YAML, Finacle scripting`
      });
    } else if (cmd === 'certs' || cmd === 'certifications') {
      newOutputs.push({
        type: 'output',
        text: `☁️ Infosys Certified AWS Public Cloud Associate [Active]
🌐 Google Certified Cloud Digital Leader [Active]`
      });
    } else if (cmd === 'exp' || cmd === 'resume' || cmd === 'cat resume') {
      newOutputs.push({
        type: 'output',
        text: `--- Work Experience (5.0 Years) ---
1. Technology Analyst @ TCS (04/2026 - 06/2026)
   • DevOps Engineer supporting enterprise cloud applications on AWS
   • Managing EKS clusters, CI/CD pipelines, and Terraform automation
   • Datadog, CloudWatch, and Splunk observability & RCA

2. Technology Analyst @ Infosys (01/2023 - 03/2026)
   • Managed production-grade AWS EKS clusters with 99.9% SLA compliance
   • Multi-AZ high-availability & multi-region disaster recovery (DR)
   • Blue-Green & Canary releases (+30% stability)
   • Automated Terraform & Ansible IaC (-40% manual effort)
   • Full-stack Datadog/CloudWatch APM (-35% MTTR)

3. Senior Systems Engineer @ Infosys (02/2022 - 12/2022)
   • Shell automation (-60% operational dependency)
   • Idempotent job orchestration & JMeter load benchmarking (+25% throughput)

4. Systems Engineer @ Infosys (06/2021 - 01/2022)
   • Linux server administration, Git repository workflows, release support`
      });
    } else if (cmd === 'contact') {
      newOutputs.push({
        type: 'output',
        text: `📞 Phone: ${PORTFOLIO_DATA.profile.phone}
✉️ Email: ${PORTFOLIO_DATA.profile.email}
🐙 GitHub: ${PORTFOLIO_DATA.profile.github}
💼 LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}
🐦 X / Twitter: ${PORTFOLIO_DATA.profile.twitter}`
      });
    } else if (cmd === 'status' || cmd === 'ping' || cmd === 'uptime') {
      newOutputs.push({
        type: 'success',
        text: `[STATUS: HEALTHY] Uptime: 99.9% SLA | Region: AWS ap-south-1 | Latency: 14ms | Response SLA: <24h`
      });
    } else if (cmd.startsWith('sudo hire') || cmd === 'hire' || cmd === 'hire naveen') {
      newOutputs.push({
        type: 'success',
        text: `🎉 ACCESS GRANTED! Outstanding choice.
Launching direct dispatch channel to Naveen Kumar (navisingh2100@gmail.com)...
Please check your mail client or call +91 7229960539 directly!`
      });
      setTimeout(() => {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Offer%20/%20Opportunity%20for%20Naveen%20Kumar`;
      }, 1500);
    } else if (cmd === 'matrix') {
      newOutputs.push({
        type: 'success',
        text: `Wake up, Neo... The Matrix has you.
01001110 01100001 01110110 01100101 01100101 01101110 (Naveen)
Systems online. All EKS pods running with 0 restarts.`
      });
    } else if (cmd === 'clear') {
      setOutputLines([]);
      setInput('');
      return;
    } else {
      newOutputs.push({
        type: 'error',
        text: `zsh: command not found: ${rawCmd}. Type 'help' for the list of available commands.`
      });
    }

    setOutputLines(newOutputs);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const suggestions = ['help', 'projects', 'skills', 'certs', 'resume', 'contact', 'status', 'clear', 'sudo hire'];
      const match = suggestions.find(s => s.startsWith(input.toLowerCase().trim()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 font-sans">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
            Interactive Cloud Terminal<span className="text-sky-400">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Simulated CLI environment with bash history, tab autocomplete, and instant telemetry inspector.
          </p>
        </div>

        <button
          onClick={() => {
            setOutputLines([{ type: 'system', text: "Terminal reset to default state. Type 'help' for commands." }]);
          }}
          className="px-3 py-1.5 bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-main)] text-xs font-mono rounded-xl border border-[var(--border-color)] flex items-center gap-1.5 w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Terminal</span>
        </button>
      </div>

      {/* Terminal Window */}
      <div 
        className="box p-5 sm:p-7 font-mono text-xs sm:text-sm text-[var(--text-main)] min-h-[460px] flex flex-col justify-between cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Screen Output */}
        <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
          {outputLines.map((line, idx) => (
            <div key={idx} className="leading-relaxed whitespace-pre-wrap">
              {line.type === 'input' && (
                <span className="text-sky-400 font-bold">{line.text}</span>
              )}
              {line.type === 'system' && (
                <span className="text-[var(--text-muted)]">{line.text}</span>
              )}
              {line.type === 'output' && (
                <span className="text-[var(--text-main)]">{line.text}</span>
              )}
              {line.type === 'error' && (
                <span className="text-rose-400">{line.text}</span>
              )}
              {line.type === 'success' && (
                <span className="text-emerald-400 font-semibold">{line.text}</span>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-2 mt-4">
          <span className="text-sky-400 font-bold flex-shrink-0 flex items-center gap-1">
            <span>naveen@cloud-node:~$</span>
          </span>
          <div className="flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help', 'projects', 'certs', 'sudo hire'..."
              className="w-full bg-transparent border-none outline-none text-sky-300 font-mono text-xs sm:text-sm placeholder-[var(--text-muted)]"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-muted)] hover:text-sky-400"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Suggested Command Quick Buttons */}
      <div className="flex flex-wrap gap-2 items-center text-xs font-mono">
        <span className="text-[var(--text-muted)] flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-sky-400" />
          Quick Run:
        </span>
        {['help', 'projects', 'skills', 'certs', 'sudo hire naveen', 'status', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 bg-[var(--bg-card)] hover:bg-sky-500/15 text-[var(--text-muted)] hover:text-sky-400 border border-[var(--border-color)] hover:border-sky-500/30 rounded-xl transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
