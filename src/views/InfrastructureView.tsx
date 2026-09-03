import React, { useState } from 'react';
import { 
  GitBranch, 
  Box, 
  Cpu, 
  Activity, 
  Cloud, 
  ShieldCheck, 
  FileCode, 
  CheckCircle,
  Zap
} from 'lucide-react';

export const InfrastructureView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const architectureSteps = [
    {
      id: 1,
      title: "1. GitOps Source & CI Trigger",
      icon: GitBranch,
      tag: "GitLab CI & Jenkins",
      description: "Code commit triggers automated pre-flight linters, security scans, unit tests, and canary deployment pipelines with 0 manual gates.",
      metrics: "30% Release Reliability Increase",
      codeSnippet: `stages:
  - lint
  - test
  - build-image
  - deploy-canary
  - promote

test-suite:
  stage: test
  image: python:3.11-slim
  script:
    - pytest --cov=app tests/
    - flake8 --max-line-length=100`
    },
    {
      id: 2,
      title: "2. Immutable Image Build & ECR",
      icon: Box,
      tag: "Docker & AWS ECR",
      description: "Multi-stage Docker builds produce minimal footprint container images, tagged with immutable commit SHAs and pushed to encrypted AWS ECR.",
      metrics: "Image Size < 85MB / Zero CVEs",
      codeSnippet: `FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .
USER appuser
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "core.wsgi"]`
    },
    {
      id: 3,
      title: "3. Terraform Cloud IaC Provisioning",
      icon: Cloud,
      tag: "Terraform & AWS (VPC, EKS, RDS)",
      description: "Declarative infrastructure-as-code modules manage AWS VPC subnets, IAM roles with least-privilege, security groups, and auto-scaling EKS node groups.",
      metrics: "40% Faster Provisioning",
      codeSnippet: `module "eks_cluster" {
  source          = "terraform-aws-modules/eks/aws"
  version         = "~> 19.0"
  cluster_name    = "naveen-prod-eks"
  cluster_version = "1.28"
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets

  eks_managed_node_groups = {
    general = {
      min_size     = 2
      max_size     = 10
      desired_size = 3
      instance_types = ["t3.medium"]
    }
  }
}`
    },
    {
      id: 4,
      title: "4. Kubernetes Orchestration & Canary Release",
      icon: Cpu,
      tag: "EKS, Helm, Canary Traffic Routing",
      description: "Automated canary deployment routes 10% traffic to new version, monitors error rates via Prometheus/Datadog, and safely promotes to 100% with automated rollback if SLA breaches.",
      metrics: "Zero Downtime Deployments",
      codeSnippet: `apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
  name: microservice-api
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: microservice-api
  service:
    port: 8000
  analysis:
    interval: 30s
    threshold: 3
    maxWeight: 50
    stepWeight: 10
    metrics:
      - name: request-success-rate
        thresholdRange:
          min: 99`
    },
    {
      id: 5,
      title: "5. Telemetry, APM & SRE Observability",
      icon: Activity,
      tag: "Datadog, CloudWatch, Splunk",
      description: "Full-stack observability layer collecting traces, pod metrics, and error rates. Automatic alert escalation ensures sub-15 minute MTTR on production anomalies.",
      metrics: "35% MTTR Incident Reduction",
      codeSnippet: `resource "datadog_monitor" "http_5xx_rate" {
  name    = "High HTTP 5xx Error Rate on [{{service.name}}]"
  type    = "metric alert"
  query   = "sum(last_5m):sum:trace.http.request.errors{env:prod}.as_count() / sum:trace.http.request.hits{env:prod}.as_count() > 0.01"
  message = "HTTP 5xx rate exceeded 1% for 5 mins. Notifying PagerDuty. @pagerduty-devops"
  tags    = ["env:prod", "team:platform"]
}`
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
          Cloud Infrastructure & Delivery Blueprint<span className="text-sky-400">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1.5 max-w-3xl font-normal leading-relaxed">
          Interactive deep dive into Naveen Kumar's end-to-end cloud delivery architecture: from Git push to canary verification and Datadog telemetry.
        </p>
      </div>

      {/* Step Selector Pipeline Visualizer */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {architectureSteps.map((step) => {
          const Icon = step.icon;
          const isSelected = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-sky-500/10 border-sky-500 text-[var(--text-main)] shadow-lg shadow-sky-500/10'
                  : 'bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-sky-500/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-[var(--text-muted)]'}`} />
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-sky-500/20 text-sky-300' : 'bg-[var(--bg-primary)] text-[var(--text-muted)]'
                }`}>
                  0{step.id}
                </span>
              </div>
              <div>
                <div className="text-xs font-bold font-sans line-clamp-1">{step.title}</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">{step.tag}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep Dive Card */}
      {(() => {
        const step = architectureSteps.find(s => s.id === activeStep) || architectureSteps[0];
        const Icon = step.icon;
        return (
          <div className="box p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] font-sans">{step.title}</h3>
                  <span className="text-xs font-mono text-sky-400">{step.tag}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold w-fit">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Impact: {step.metrics}</span>
              </div>
            </div>

            <p className="text-sm text-[var(--text-main)] font-sans leading-relaxed">
              {step.description}
            </p>

            {/* Code Snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>Production Configuration Spec</span>
                </span>
                <span className="text-[11px]">YAML / HCL Spec</span>
              </div>
              <pre className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 overflow-x-auto text-xs font-mono text-sky-400 leading-relaxed">
                <code>{step.codeSnippet}</code>
              </pre>
            </div>
          </div>
        );
      })()}

      {/* Cloud Reliability Guarantee */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="box p-4 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-sky-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-[var(--text-main)] font-sans">Hardened Security</div>
            <div className="text-[11px] text-[var(--text-muted)] font-sans">IAM Least Privilege & Encrypted S3/EBS</div>
          </div>
        </div>

        <div className="box p-4 flex items-center gap-3">
          <Zap className="w-8 h-8 text-amber-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-[var(--text-main)] font-sans">99.9% Availability</div>
            <div className="text-[11px] text-[var(--text-muted)] font-sans">Multi-AZ EKS with Auto-Healing Pods</div>
          </div>
        </div>

        <div className="box p-4 flex items-center gap-3">
          <Activity className="w-8 h-8 text-emerald-400 flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-[var(--text-main)] font-sans">Continuous Auditing</div>
            <div className="text-[11px] text-[var(--text-muted)] font-sans">Automated Rollbacks & Datadog APM</div>
          </div>
        </div>
      </div>
    </div>
  );
};
