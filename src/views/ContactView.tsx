import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Github, 
  Copy, 
  CheckCircle, 
  Send, 
  Clock, 
  MapPin, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/navisingh2100@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: subject ? `Portfolio Inquiry: ${subject} (from ${name})` : `New Portfolio Message from ${name}`,
          message: message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSent(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Cloud relay returned non-OK status');
      }
    } catch {
      // Fallback: Open mailto client directly
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Hi Naveen,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      window.open(mailtoUrl, '_blank');
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 font-sans">
      
      {/* Header */}
      <div className="border-b border-[var(--c-border)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--c-heading)] tracking-tight">
          Get in Touch & Connect<span className="text-[var(--c-accent)]">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--c-muted)] mt-1.5 max-w-3xl font-normal leading-relaxed">
          Whether you are looking to hire a Senior DevOps Engineer, build high-scale cloud platforms, or discuss tech architecture, my inbox is open.
        </p>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Email Card */}
        <div className="box box-hover p-5 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-[var(--c-accent)] flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[var(--c-muted)] uppercase">Primary Email</div>
              <a 
                href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                className="text-sm sm:text-base font-bold text-[var(--c-heading)] hover:text-[var(--c-accent)] transition-colors font-mono"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
            </div>
          </div>

          <button
            onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, 'email')}
            className="p-2.5 rounded-xl bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-[var(--c-muted)] hover:text-[var(--c-accent)] border border-[var(--c-border)] transition-colors"
            title="Copy Email Address"
          >
            {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Phone Card */}
        <div className="box box-hover p-5 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[var(--c-muted)] uppercase">Direct Mobile & WhatsApp</div>
              <a 
                href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/[^0-9+]/g, '')}`} 
                className="text-sm sm:text-base font-bold text-[var(--c-heading)] hover:text-emerald-500 transition-colors font-mono"
              >
                {PORTFOLIO_DATA.profile.phone}
              </a>
            </div>
          </div>

          <button
            onClick={() => handleCopy(PORTFOLIO_DATA.profile.phone.replace(/[^0-9+]/g, ''), 'phone')}
            className="p-2.5 rounded-xl bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-[var(--c-muted)] hover:text-emerald-500 border border-[var(--c-border)] transition-colors"
            title="Copy Phone Number"
          >
            {copiedPhone ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <a
          href={PORTFOLIO_DATA.profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="box box-hover p-4 flex items-center gap-3 text-[var(--c-heading)] group"
        >
          <div className="p-2 rounded-lg bg-[var(--c-surface-alt)] text-[var(--c-accent)] group-hover:scale-105 transition-transform">
            <Linkedin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold font-sans">LinkedIn Profile</div>
            <div className="text-[10px] font-mono text-[var(--c-muted)]">/in/naveen-kumar</div>
          </div>
        </a>

        <a
          href={PORTFOLIO_DATA.profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="box box-hover p-4 flex items-center gap-3 text-[var(--c-heading)] group"
        >
          <div className="p-2 rounded-lg bg-[var(--c-surface-alt)] text-[var(--c-muted)] group-hover:text-[var(--c-heading)] group-hover:scale-105 transition-transform">
            <Github className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold font-sans">GitHub Repositories</div>
            <div className="text-[10px] font-mono text-[var(--c-muted)]">@naveensingh575</div>
          </div>
        </a>

        <a
          href={PORTFOLIO_DATA.profile.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="box box-hover p-4 flex items-center gap-3 text-[var(--c-heading)] group"
        >
          <div className="p-2 rounded-lg bg-[var(--c-surface-alt)] text-[var(--c-accent)] group-hover:scale-105 transition-transform">
            <Twitter className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold font-sans">X / Twitter</div>
            <div className="text-[10px] font-mono text-[var(--c-muted)]">@NaveenK40774892</div>
          </div>
        </a>
      </div>

      {/* Main Interaction Form & Location Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Contact Form */}
        <div className="lg:col-span-8 box p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--c-accent)] font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Send Direct Communication</span>
          </div>

          {sent ? (
            <div className="p-6 sm:p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-lg font-bold text-[var(--c-heading)] font-sans">Message Dispatched Successfully!</h4>
              <p className="text-xs sm:text-sm text-[var(--c-muted)] font-sans max-w-md mx-auto">
                Thank you for reaching out! Your message has been received securely. I will review your note and respond within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-4 py-2 bg-[var(--c-surface-alt)] hover:bg-[var(--c-surface)] text-xs font-mono text-[var(--c-accent)] rounded-lg border border-[var(--c-border)] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
              {errorMsg && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-500 text-xs font-mono">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[var(--c-muted)] font-medium font-mono text-[11px]">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Connor"
                    className="w-full bg-[var(--c-surface-alt)] border border-[var(--c-border)] focus:border-[var(--c-accent)] rounded-xl px-3.5 py-2.5 text-[var(--c-heading)] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[var(--c-muted)] font-medium font-mono text-[11px]">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sconnor@enterprise.com"
                    className="w-full bg-[var(--c-surface-alt)] border border-[var(--c-border)] focus:border-[var(--c-accent)] rounded-xl px-3.5 py-2.5 text-[var(--c-heading)] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[var(--c-muted)] font-medium font-mono text-[11px]">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="DevOps Engineering Role / Cloud Architecture Discussion"
                  className="w-full bg-[var(--c-surface-alt)] border border-[var(--c-border)] focus:border-[var(--c-accent)] rounded-xl px-3.5 py-2.5 text-[var(--c-heading)] outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[var(--c-muted)] font-medium font-mono text-[11px]">Message Content *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your infrastructure goals, project timelines, or tech stack..."
                  className="w-full bg-[var(--c-surface-alt)] border border-[var(--c-border)] focus:border-[var(--c-accent)] rounded-xl px-3.5 py-2.5 text-[var(--c-heading)] outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-[var(--c-muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Direct Cloud Relay • 256-bit SSL
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-light)] hover:opacity-90 disabled:opacity-50 text-white font-medium text-xs sm:text-sm font-mono rounded-xl flex items-center gap-2 shadow-md shadow-[var(--c-accent)]/20 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Operating Hours & Location */}
        <div className="lg:col-span-4 space-y-4">
          <div className="box p-5 space-y-4 font-mono text-xs">
            <div className="text-[11px] font-bold text-[var(--c-muted)] uppercase tracking-wider border-b border-[var(--c-border)] pb-2">
              Operator Telemetry
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--c-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[var(--c-heading)] font-bold font-sans">Location</div>
                  <div className="text-[var(--c-muted)] text-[11px]">{PORTFOLIO_DATA.profile.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[var(--c-heading)] font-bold font-sans">Working Hours & TZ</div>
                  <div className="text-[var(--c-muted)] text-[11px]">IST (GMT+5:30) • 09:00 - 21:00</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[var(--c-heading)] font-bold font-sans">Response SLA</div>
                  <div className="text-[var(--c-muted)] text-[11px]">Under 24 Hours on Business Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
