export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack SaaS' | 'DevOps & Cloud' | 'Audio & Media' | 'Web Platform';
  description: string;
  longDescription: string;
  architectureNotes: string[];
  techStack: string[];
  demoUrl: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Live Production' | 'Active SaaS' | 'Continuous CI/CD';
  gradient: string;
  metrics?: { label: string; value: string }[];
  accentColor: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  credentialId?: string;
  status: 'Active' | 'Verified';
  badgeUrl: string;
  icon: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Naveen Kumar",
    title: "DevOps Engineer & Cloud Infrastructure Architect",
    roles: [
      "Technology Analyst & DevOps Engineer",
      "AWS Cloud Infrastructure Architect",
      "Kubernetes & CI/CD Pipeline Specialist",
      "Site Reliability Engineer (SRE)",
      "Full-Stack Cloud Builder"
    ],
    summary: "DevOps Engineer with 5 years of experience in AWS cloud infrastructure, Kubernetes administration, CI/CD pipeline engineering, and Infrastructure as Code (Terraform). Experienced in managing production-grade EKS clusters, Linux environments, and high-availability microservices architectures. Proven success in reducing MTTR by 35%, improving deployment reliability by 30%, and maintaining 99.9% SLA compliance. Skilled in incident management, disaster recovery, cloud networking, and release engineering.",
    status: "Available for High-Impact Roles & Consulting",
    location: "Gurugram / New Delhi, India",
    timezone: "GMT+5:30 (IST)",
    responseUptime: "< 24 hours",
    sla: "99.9% SLA",
    email: "navisingh2100@gmail.com",
    phone: "+91 7229960539",
    github: "https://github.com/naveensingh575",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-150218189/",
    twitter: "https://x.com/NaveenK40774892",
    experienceYears: "5.0",
  },

  metrics: [
    { label: "Production Experience", value: "5.0 Yrs", sub: "Enterprise & Cloud" },
    { label: "Deployment Reliability", value: "+30%", sub: "Blue-Green & Canary" },
    { label: "Infra Config Time", value: "-40%", sub: "Terraform & Ansible" },
    { label: "Incident MTTR Reduction", value: "-35%", sub: "Datadog & CloudWatch" },
    { label: "Manual Dependency", value: "-60%", sub: "Shell Automation" },
    { label: "SLA Compliance", value: "99.9%", sub: "Multi-AZ High Availability" }
  ],

  projects: [
    {
      id: "omniqr",
      title: "OmniQR Cloud Platform",
      tagline: "Enterprise dynamic QR code SaaS dashboard with real-time analytics & branding",
      category: "Full-Stack SaaS",
      description: "Comprehensive SaaS platform providing customizable dynamic QR generation, scan tracking analytics, campaign management, custom domains, and enterprise dashboard.",
      longDescription: "OmniQR is a modern production SaaS platform engineered for enterprises and creators to generate, manage, and track dynamic QR codes in real-time. Features rich scan geolocation analytics, customizable templates, high-speed redirect engines, and multi-tenant user authentication.",
      architectureNotes: [
        "Fast serverless redirect engine handling low latency scan resolutions",
        "Interactive dashboard with real-time conversion metrics and user engagement charts",
        "Role-based access control (RBAC) and team workspaces",
        "Automated CI/CD deployment with zero-downtime rollback capabilities"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker", "Vercel"],
      demoUrl: "https://omniqr.online/dashboard",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Active SaaS",
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
      accentColor: "#00f0ff",
      metrics: [
        { label: "Architecture", value: "Serverless + Edge" },
        { label: "Latency", value: "< 45ms" }
      ]
    },
    {
      id: "pulse-life-tracker",
      title: "Pulse Life Tracker (Life OS)",
      tagline: "Personal operating system & habit analytics dashboard for high performance",
      category: "Full-Stack SaaS",
      description: "An all-in-one personal operating system tracking habits, daily operating metrics, sprint objectives, wellness, and productivity insights.",
      longDescription: "Built to optimize daily executive execution, Pulse Life Tracker aggregates life metrics, daily operating logs, task queues, and visual progress streaks into a unified cybernetic dashboard with responsive dark mode aesthetics.",
      architectureNotes: [
        "Client-side caching with optimistic UI state updates for instant interactions",
        "Granular habit frequency algorithms and consistency heatmaps",
        "Responsive glassmorphism UI designed for both mobile and desktop workflows",
        "Automated weekly goal aggregation and performance metrics"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide", "Vite", "Vercel"],
      demoUrl: "https://pulse-life-tracker.vercel.app/",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Live Production",
      gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
      accentColor: "#10b981",
      metrics: [
        { label: "Uptime", value: "100%" },
        { label: "Load Time", value: "< 0.4s" }
      ]
    },
    {
      id: "haryanvi-radio",
      title: "Haryanvi Radio Live",
      tagline: "High-fidelity live regional audio streaming platform with real-time visualizers",
      category: "Audio & Media",
      description: "Interactive online radio streaming platform delivering uninterrupted high-bitrate folk and contemporary audio streams with dynamic visualizers.",
      longDescription: "Haryanvi Radio is a dedicated high-bandwidth audio streaming web application that broadcasts regional music 24/7. Built with low-latency audio stream buffers, modern dark-themed glass UI, responsive audio controls, and background play compatibility.",
      architectureNotes: [
        "Resilient audio stream recovery with auto-reconnect fallback mechanism",
        "Canvas-based real-time audio spectrum frequency visualizer",
        "Progressive Web App (PWA) friendly architecture for background streaming on mobile",
        "Optimized asset delivery via CDN edge nodes"
      ],
      techStack: ["Next.js", "React", "Web Audio API", "Tailwind CSS", "Vercel"],
      demoUrl: "https://haryanvi-radio.vercel.app/",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Live Production",
      gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
      accentColor: "#f59e0b",
      metrics: [
        { label: "Stream Quality", value: "320 kbps" },
        { label: "Buffer Lag", value: "< 1s" }
      ]
    },
    {
      id: "aura-fm",
      title: "Aura FM Streaming App",
      tagline: "Next-gen ambient audio and chill radio stream player with modern cyber aesthetics",
      category: "Audio & Media",
      description: "Modern ambient music player with curated chillwave stations, aesthetic soundscapes, sleep timers, and immersive visual effects.",
      longDescription: "Aura FM provides a distraction-free audio streaming experience crafted for developers, designers, and deep workers. Featuring station switching, interactive volume fades, background ambience blending, and sleek minimalist UI.",
      architectureNotes: [
        "Web Audio context architecture with smooth crossfade between streams",
        "Low memory footprint player engine optimized for prolonged background sessions",
        "Dynamic theme reactive album art and ambient glow lighting",
        "Vercel Edge network caching for instantaneous stream initialization"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Howler / Web Audio", "Vite", "Vercel"],
      demoUrl: "https://aura-fm-app.vercel.app/",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Live Production",
      gradient: "from-purple-500/20 via-indigo-600/10 to-transparent",
      accentColor: "#8b5cf6",
      metrics: [
        { label: "Bitrate", value: "Lossless" },
        { label: "Theme", value: "Cyber Dark" }
      ]
    },
    {
      id: "hanuman-chalisa",
      title: "Hanuman Chalisa Daily",
      tagline: "Devotional web application with multi-language verse sync, audio player, & meaning",
      category: "Web Platform",
      description: "Modern devotional platform featuring synchronized verse-by-verse audio playback, Hindi & English translations, customizable font sizing, and bookmarking.",
      longDescription: "An elegant, ad-free spiritual reading and audio listening platform designed to deliver smooth cross-device access with fast typography rendering, night mode reading, and audio sync highlights.",
      architectureNotes: [
        "Dynamic audio time-sync highlighting active chaupais in real-time",
        "Zero layout shifts (CLS = 0) with pre-cached Hindi Devnagari font glyphs",
        "High lighthouse performance score (99+ on performance, SEO, accessibility)",
        "SEO optimized blog structure with custom structured microdata"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Custom Audio Engine"],
      demoUrl: "https://hanumanchalisa.blog/",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Live Production",
      gradient: "from-rose-500/20 via-red-600/10 to-transparent",
      accentColor: "#f43f5e",
      metrics: [
        { label: "Lighthouse", value: "99/100" },
        { label: "Core Web Vitals", value: "Passed" }
      ]
    },
    {
      id: "aws-enterprise-cicd",
      title: "AWS DevOps CI/CD & Terraform Pipeline",
      tagline: "Automated end-to-end Jenkins, Docker, ECR, & AWS Terraform infrastructure",
      category: "DevOps & Cloud",
      description: "Production-grade automated CI/CD pipeline and IaC provisioning for containerized applications on AWS EC2, ECR, and CloudWatch.",
      longDescription: "Architected and implemented a complete GitOps CI/CD delivery pipeline for containerized microservices. Utilizes Jenkins and GitLab CI for automated test/build, pushes immutable Docker images to AWS ECR, orchestrates Terraform infrastructure provisioning, and manages multi-tier cloud deployments.",
      architectureNotes: [
        "Infrastructure as Code (IaC) modularized with Terraform across VPC, Security Groups, EKS, and EC2",
        "Immutable Docker build workflow with versioned tags for instant rollbacks",
        "Automated deployment via Jenkins & GitLab CI with zero manual intervention",
        "Datadog, CloudWatch, and Splunk integrations for automated health telemetry"
      ],
      techStack: ["AWS (EKS, EC2, ECR, IAM, VPC)", "Terraform", "Docker", "Jenkins", "GitLab CI", "Ansible", "CloudWatch", "Python"],
      demoUrl: "https://github.com/naveensingh575",
      githubUrl: "https://github.com/naveensingh575",
      featured: true,
      status: "Continuous CI/CD",
      gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
      accentColor: "#38bdf8",
      metrics: [
        { label: "Deploy Stability", value: "+30%" },
        { label: "SLA Compliance", value: "99.9%" }
      ]
    }
  ] as Project[],

  skills: {
    "Cloud Platforms & Networking": [
      { name: "AWS (EKS, EC2, S3, ECR, IAM, RDS, Lambda, ASG)", level: 96, icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Cloud Networking (VPC, Load Balancers, Security Groups)", level: 94, icon: "devicon-amazonwebservices-plain" },
      { name: "Linux Administration (RHEL, Ubuntu, Kernel, Disks)", level: 95, icon: "devicon-linux-plain" }
    ],
    "Container Orchestration & IaC": [
      { name: "Kubernetes Administration & EKS Clusters", level: 94, icon: "devicon-kubernetes-plain" },
      { name: "Docker, Helm Charts & Cluster Autoscaler", level: 92, icon: "devicon-docker-plain" },
      { name: "Terraform & AWS CloudFormation (IaC)", level: 92, icon: "devicon-terraform-plain" },
      { name: "Ansible Configuration Management", level: 88, icon: "devicon-ansible-plain" }
    ],
    "CI/CD & Release Engineering": [
      { name: "Jenkins & GitLab CI/CD Automation", level: 95, icon: "devicon-gitlab-plain" },
      { name: "GitHub Actions & Nexus Artifactory", level: 92, icon: "devicon-githubactions-plain" },
      { name: "Deployment Strategies (Blue-Green, Canary, Rolling)", level: 94, icon: "devicon-git-plain" }
    ],
    "Observability, SRE & Scripting": [
      { name: "Datadog, CloudWatch, Splunk & ELK Stack", level: 92, icon: "devicon-datadog-plain" },
      { name: "Prometheus & Grafana Observability", level: 90, icon: "devicon-grafana-plain" },
      { name: "Python, Shell / Bash & YAML Scripting", level: 95, icon: "devicon-python-plain" },
      { name: "Incident Mgmt, RCA & MTTR Optimization", level: 94, icon: "devicon-pagerduty-plain" }
    ]
  },

  experiences: [
    {
      role: "Technology Analyst",
      company: "TCS",
      location: "Gurugram / India",
      period: "04/2026 - 06/2026",
      summary: "Allocated as a DevOps Engineer supporting enterprise cloud applications on AWS, managing EKS clusters, and automating CI/CD pipelines.",
      highlights: [
        "Allocated to the Working as a DevOps Engineer supporting enterprise cloud applications on AWS.",
        "Managing Kubernetes (EKS) clusters, CI/CD pipelines, and production deployments.",
        "Automating infrastructure using Terraform and deployment workflows using Jenkins/GitLab CI.",
        "Monitoring production environments using Datadog, CloudWatch, and Splunk.",
        "Supporting incident management, root cause analysis (RCA), and production releases.",
        "Collaborating with development, QA, and infrastructure teams to improve deployment reliability."
      ],
      tech: ["AWS EKS", "Terraform", "Jenkins", "GitLab CI", "Docker", "Datadog", "CloudWatch", "Splunk"]
    },
    {
      role: "Technology Analyst",
      company: "Infosys",
      location: "Gurugram / India",
      period: "01/2023 - 03/2026",
      summary: "Managed production-grade Kubernetes EKS clusters supporting enterprise microservices with 99.9% SLA compliance and multi-region disaster recovery.",
      highlights: [
        "Managed production-grade Kubernetes clusters on AWS EKS supporting microservices-based enterprise workloads with 99.9% SLA compliance.",
        "Designed highly available and multi-AZ architectures, ensuring fault tolerance and minimal downtime.",
        "Implemented multi-region disaster recovery (DR) strategy using cross-region backups, AMI replication, and database snapshot automation.",
        "Engineered CI/CD pipelines using Jenkins and GitLab CI/CD to streamline build, test, and release workflows across environments.",
        "Executed Blue-Green and Canary deployment strategies, increasing release stability by 30%.",
        "Provisioned and maintained infrastructure using Terraform and Ansible, reducing manual configuration effort by 40%.",
        "Strengthened observability through Datadog, CloudWatch, and Splunk dashboards, reducing MTTR by 35%.",
        "Led production incident response processes, conducted Root Cause Analysis (RCA), and enforced preventive remediation strategies.",
        "Provisioned and secured IAM roles, VPC networking, and Load Balancers.",
        "Optimized Kubernetes autoscaling policies and resource allocation to improve cluster performance and cost efficiency.",
        "Supported full DevOps lifecycle including build management, release engineering, deployment, monitoring, and production support."
      ],
      tech: ["AWS (EKS, EC2, S3, RDS, IAM)", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI", "Datadog", "CloudWatch", "Splunk"]
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys",
      location: "Gurugram / India",
      period: "02/2022 - 12/2022",
      summary: "Enterprise workflow automation, idempotent job orchestration, and performance benchmarking on core systems.",
      highlights: [
        "Streamlined enterprise workflows using advanced Shell scripting, reducing operational dependency by 60%.",
        "Designed idempotent job orchestration logic to improve processing throughput by 25%.",
        "Integrated application services into CI workflows for automated validation and structured release management.",
        "Conducted performance benchmarking using JMeter, improving application efficiency by 25%.",
        "Applied monitoring best practices using Datadog, Splunk, and CloudWatch to maintain SLA compliance.",
        "Reduced downtime through structured log aggregation, alerting, and health monitoring pipelines.",
        "Collaborated with development and infrastructure teams to strengthen deployment governance and stability."
      ],
      tech: ["Shell Scripting", "Finacle", "JMeter", "Datadog", "Splunk", "CloudWatch", "CI/CD", "Linux"]
    },
    {
      role: "Systems Engineer",
      company: "Infosys",
      location: "Gurugram / India",
      period: "06/2021 - 01/2022",
      summary: "Linux server administration, version control management, and environment deployment support.",
      highlights: [
        "Administered Linux servers, including file management, user and group management, disk management, and basic network configuration.",
        "Performed manual application deployments across development and UAT environments.",
        "Managed Git repositories, including branch creation, merges, and version tracking.",
        "Assisted in build validation and deployment support activities.",
        "Monitored system logs and resolved environment-level issues.",
        "Deployed and maintained Linux services and scheduled automation tasks."
      ],
      tech: ["Linux (RHEL, Ubuntu)", "Git", "Bash", "Server Administration", "Deployment Support"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      institution: "Bhagwan Parshuram Institute of Technology (BPIT)",
      location: "Rohini, New Delhi, India",
      period: "2016 - 2020",
      description: "Graduated with strong foundations in computing, networking, embedded systems, logic design, and systems engineering."
    }
  ],

  certifications: [
    {
      name: "Infosys Certified AWS Public Cloud Associate",
      issuer: "Infosys & AWS",
      status: "Active",
      badgeUrl: "https://images.credly.com/size/340x340/images/6df104d4-2821-4f36-a19e-e67c524c568f/aws-certified-sysops-administrator-associate.png",
      icon: "devicon-amazonwebservices-plain-wordmark",
      skills: ["AWS Cloud Architecture", "EKS & Compute", "VPC Networking", "Storage & S3", "IAM Security & Compliance"]
    },
    {
      name: "Google Certified Cloud Digital Leader",
      issuer: "Google Cloud",
      status: "Active",
      badgeUrl: "https://images.credly.com/size/340x340/images/425f1b13-05ec-4ea5-bb1b-bba7a288fb98/image.png",
      icon: "devicon-googlecloud-plain",
      skills: ["Digital Transformation with Google Cloud", "Innovating with Data & Google Cloud", "Infrastructure & Application Modernization", "Google Cloud Security & Operations"]
    }
  ] as Certification[],

  journeyChapters: [
    {
      year: "2026",
      events: [
        { date: "Jun 2026", text: "Successfully completed production DevOps deliverables and cloud release operations at TCS." },
        { date: "Apr 2026", text: "Joined Tata Consultancy Services (TCS) as Technology Analyst / DevOps Engineer supporting enterprise AWS workloads." },
        { date: "Mar 2026", text: "Launched OmniQR Cloud Platform (https://omniqr.online/dashboard) — dynamic QR SaaS platform with real-time scan analytics." },
        { date: "Jan 2026", text: "Released Pulse Life OS (https://pulse-life-tracker.vercel.app/) — automated productivity & personal tracker application." }
      ]
    },
    {
      year: "2025",
      events: [
        { date: "Nov 2025", text: "Architected multi-region AWS Disaster Recovery (DR) and automated snapshot replication pipelines across production clusters." },
        { date: "Jul 2025", text: "Launched Aura FM (https://aura-fm-app.vercel.app/) — low-latency audio streaming progressive web application." },
        { date: "Feb 2025", text: "Scaled production EKS clusters with Cluster Autoscaler and Karpenter, reducing cloud compute costs by 22%." }
      ]
    },
    {
      year: "2024",
      events: [
        { date: "Sep 2024", text: "Earned Google Certified Cloud Digital Leader credential for enterprise modernization and cloud security governance." },
        { date: "May 2024", text: "Launched Haryanvi Radio Live (https://haryanvi-radio.vercel.app/) — 24/7 web radio player with zero-buffering CDN proxy." },
        { date: "Jan 2024", text: "Implemented Canary and Blue-Green continuous delivery workflows using GitLab CI and Helm, increasing deployment reliability by 30%." }
      ]
    },
    {
      year: "2023",
      events: [
        { date: "Oct 2023", text: "Earned Infosys Certified AWS Public Cloud Associate credential for AWS infrastructure & Kubernetes orchestration." },
        { date: "Jun 2023", text: "Published Hanuman Chalisa Daily (https://hanumanchalisa.blog/) — lightning-fast SSR web portal with 99/100 Lighthouse score." },
        { date: "Jan 2023", text: "Promoted to Technology Analyst @ Infosys — leading AWS cloud infrastructure, Terraform IaC, and Datadog APM observability." }
      ]
    },
    {
      year: "2022",
      events: [
        { date: "Feb 2022", text: "Promoted to Senior Systems Engineer @ Infosys — engineered shell automation suites that eliminated 60% of manual repetitive ops tasks." },
        { date: "Jan 2022", text: "Orchestrated performance load tests using Apache JMeter and tuned Linux kernel parameters for high concurrent microservices." }
      ]
    },
    {
      year: "2021",
      events: [
        { date: "Jun 2021", text: "Joined Infosys as Systems Engineer — administering Linux servers, managing Git version control workflows, and production deployments." }
      ]
    },
    {
      year: "2020",
      events: [
        { date: "Aug 2020", text: "Graduated with Bachelor of Technology (B.Tech) in Electronics & Communication Engineering from BPIT (GGSIPU), New Delhi." }
      ]
    }
  ]
};
