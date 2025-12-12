import { useEffect, useState } from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { TypingAnimation } from './components/TypingAnimation';
import { Logo } from './components/Logo';
import { colors, secondaryGradient } from './styles/colors';
import { 
  MessageCircle,
  Shield,
  Users,
  Target,
  Settings,
  FileText,
  Check,
  TrendingUp,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

export default function App() {
  const platforms = ['Facebook', 'Reddit', 'Instagram', 'LinkedIn', 'the web'];
  const navLinks = [
    { label: 'Features', href: '#why-sleepercells' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];
  const demoHref = 'mailto:diwakar@26weeks.ai?subject=Sleepercells%20Demo';
  const faqs = [
    {
      question: 'How do Sleepercells brand agents work?',
      answer:
        'Sleepercells activates AI brand agents that join relevant conversations in the communities you select. They answer questions, share product experience, and seed user-style posts that look and feel like real conversations—not banner ads or generic promos.',
    },
    {
      question: 'Which platforms do you support today?',
      answer:
        "Today, we focus on deep, targeted coverage on Reddit. Support for Instagram, Facebook, and LinkedIn is in active development. If you have a specific channel in mind, reach out and we'll share what's available now and what's on the roadmap.",
    },
    {
      question: 'How do you keep messaging on-brand and compliant?',
      answer:
        "You define the rules. We use your website, approved sources, value propositions, do-not-say lists, and tone guidelines as guardrails. Each agent is constrained by those guardrails, so mentions stay on-brand and aligned with your legal and compliance requirements.",
    },
    {
      question: 'Can I review or override what agents post?',
      answer:
        "Yes. You can choose how hands-on you want to be:\n• Before posting: enable human review so suggested replies and posts are queued for approval or edits before they're published.\n• After posting: get transparent summaries with links to every thread where agents mentioned your brand, so you can spot-check and refine guardrails over time.",
    },
    {
      question: 'Is this spammy or against community rules?',
      answer:
        'No. Sleepercells is designed for low-frequency, high-relevance participation. Agents only join conversations where your product is contextually useful, and they follow platform and community guidelines. The goal is to add value to real discussions, not flood threads with repetitive promos.',
    },
    {
      question: 'How do you measure impact if there are no clicks?',
      answer:
        "We focus on attention and presence, not click-through rates. You'll see where your brand is mentioned, which communities and threads are talking about you, and the themes, questions, and sentiment that keep coming up. This shows how awareness compounds over time, even without a traditional ad funnel.",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen" style={{ background: colors.backgroundMain }}>
      <header>
        {/* Navigation */}
        <nav 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
          style={{ 
            background: colors.navBackground,
            borderColor: 'rgba(148, 163, 184, 0.1)',
          }}
          aria-label="Primary navigation"
        >
          <div className="sc-container py-4 flex items-center justify-between">
            <Logo />
            
            <div className="sc-nav-desktop">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="sc-nav-link sc-focus"
                >
                  {label}
                </a>
              ))}
              <a 
                href="#pricing"
                className="sc-btn sc-btn-primary sc-focus"
                style={{ padding: '0.65rem 1.05rem' }}
              >
                Get started
              </a>
            </div>

            <div className="sc-nav-mobile">
              <a
                href="#pricing"
                className="sc-btn sc-btn-primary sc-focus"
                style={{ padding: '0.6rem 0.95rem' }}
              >
                Get started
              </a>
              <button
                type="button"
                className="sc-icon-btn sc-focus"
                aria-label="Open menu"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" style={{ color: colors.textPrimary }} />
              </button>
            </div>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Site menu">
            <button
              type="button"
              className="absolute inset-0 sc-mobile-overlay"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div id="mobile-menu" className="sc-mobile-panel relative p-8">
              <div className="flex items-center justify-between">
                <Logo size="small" />
                <button
                  type="button"
                  className="sc-icon-btn sc-focus"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" style={{ color: colors.textPrimary }} />
                </button>
              </div>

              <ul className="space-y-3" style={{ marginTop: '2rem' }}>
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block sc-nav-link sc-focus"
                      style={{ fontSize: '1.05rem' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-3" style={{ marginTop: '2rem' }}>
                <a
                  href={demoHref}
                  className="sc-btn sc-btn-primary sc-focus w-full"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book demo
                </a>
                <a
                  href="#pricing"
                  className="sc-btn sc-btn-secondary sc-focus w-full"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View pricing
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section 
          id="hero"
          className="sc-anchor sc-hero relative pt-32 pb-20 px-6 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.backgroundHeroGradientFrom}, ${colors.backgroundHeroGradientTo})`,
          }}
          aria-labelledby="hero-title"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large blurred ellipses */}
            <div 
              className="absolute top-20 left-1/4 rounded-full blur-3xl"
              style={{
                width: '500px',
                height: '500px',
                background: `radial-gradient(circle, ${colors.brandGradientFrom}20, transparent)`,
              }}
            ></div>
            <div 
              className="absolute top-40 right-1/4 rounded-full blur-3xl"
              style={{
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, ${colors.brandGradientTo}15, transparent)`,
              }}
            ></div>
            
            {/* Network background */}
            <NetworkBackground />
          </div>
          
          <div className="sc-container relative z-10">
            <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <div>
                <div className="mb-6 flex items-center gap-4 flex-wrap" style={{ justifyContent: 'center' }}>
                  <span className="sc-pill">No clicks required</span>
                  <span className="sc-pill">Human review optional</span>
                  <span className="sc-pill">Guardrails built-in</span>
                </div>

                <h1 id="hero-title" className="mb-6" style={{ color: colors.textPrimary }}>
                  <span className="block">Create targeted attention </span>
                  <span className="block">for your brand across </span>
                  <TypingAnimation 
                    words={platforms}
                    gradientColors={{
                      from: colors.brandGradientFrom,
                      via: colors.brandGradientVia,
                      to: colors.brandGradientTo,
                    }}
                  />
                </h1>
                
                <p 
                  className="mb-8 sc-lead"
                >
                  Autonomous AI brand ambassadors join live conversations, answer questions, and build awareness—without relying on clicks.
                </p>
                
                <div className="sc-cta-actions" style={{ marginBottom: '2rem' }}>
                  <a 
                    href="#pricing"
                    className="sc-btn sc-btn-primary sc-focus"
                  >
                    Get started
                  </a>
                  <a 
                    href={demoHref}
                    className="sc-btn sc-btn-secondary sc-focus"
                  >
                    Book demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Teams Use Sleepercells Section */}
        <section id="why-sleepercells" className="sc-section sc-anchor relative" aria-labelledby="why-sleepercells-title">
          <div className="sc-container">
            <div className="sc-section-header">
              <h2 id="why-sleepercells-title" className="mb-4" style={{ color: colors.textPrimary }}>
                Features
              </h2>
              <p className="sc-lead">
                A quick view of what autonomous attention can do for your brand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientFrom}, ${colors.brandGradientVia})`,
                  }}
                >
                  <MessageCircle className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  On-demand UGC generation
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Get the authenticity of real conversations with the control of a configurable attention engine. Agents write natural posts, replies, and Q&amp;As—without sounding like scripted ads.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: secondaryGradient,
                  }}
                >
                  <Shield className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Built-in brand guardrails
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Set clear boundaries for what agents can say, so every mention stays on-brand and compliant across communities and platforms.
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientVia}, ${colors.brandGradientTo})`,
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Human review when it matters
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  For sensitive topics or high-stakes threads, review and approve suggestions before they&apos;re posted into real communities or feeds.
                </p>
              </div>

              {/* Card 4 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: secondaryGradient,
                  }}
                >
                  <Target className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Autonomous from day one
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Connect your website, key messaging, and guardrails once, and Sleepercells runs on its own. Agents work in the background while you review summaries and adjust direction as needed.
                </p>
              </div>

              {/* Card 5 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientFrom}, ${colors.brandGradientTo})`,
                  }}
                >
                  <TrendingUp className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Attention grows steadily over time
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Instead of short-lived ad spikes, your autonomous attention engine keeps a steady stream of natural conversations going over weeks and months, so awareness compounds instead of fading overnight.
                </p>
              </div>

              {/* Card 6 */}
              <div 
                className="sc-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientVia}, ${colors.brandGradientTo})`,
                  }}
                >
                  <FileText className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Clear visibility into what&apos;s happening
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Even without clicks, you still see where your brand shows up. Get concise summaries of which threads and communities mentioned you, what people are saying, and how sentiment shifts over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="sc-section sc-anchor relative" aria-labelledby="how-it-works-title">
          <div className="sc-container">
            <div className="sc-section-header">
              <h2 id="how-it-works-title" className="mb-4" style={{ color: colors.textPrimary }}>
                How it works
              </h2>
              <p className="sc-lead">
                From static ads to an always-on attention network in four steps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="sc-card p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: secondaryGradient,
                  }}
                >
                  <Target className="w-8 h-8" style={{ color: colors.textPrimary }} />
                </div>
                <h3 
                  className="mb-3"
                  style={{ color: colors.textPrimary, fontSize: '1.1rem' }}
                >
                  Tell us about your product
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                  Share your website, key messaging, and guardrails. Sleepercells learns your voice, value propositions, and do-not-say list so each agent sounds like someone who truly understands your product.
                </p>
              </div>

              {/* Step 2 */}
              <div className="sc-card p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientFrom}, ${colors.brandGradientVia})`,
                  }}
                >
                  <Settings className="w-8 h-8" style={{ color: colors.textPrimary }} />
                </div>
                <h3 
                  className="mb-3"
                  style={{ color: colors.textPrimary, fontSize: '1.1rem' }}
                >
                  Choose where attention should grow
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                  Select the communities that matter most—whether that's focused subreddits, specialist forums, or major social platforms. You define the attention graph, and Sleepercells lights up those nodes first.
                </p>
              </div>

              {/* Step 3 */}
              <div className="sc-card p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientVia}, ${colors.brandGradientTo})`,
                  }}
                >
                  <Users className="w-8 h-8" style={{ color: colors.textPrimary }} />
                </div>
                <h3 
                  className="mb-3"
                  style={{ color: colors.textPrimary, fontSize: '1.1rem' }}
                >
                  We activate autonomous brand agents
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                  Our agents join relevant conversations, answer questions, and seed UGC-style posts that mention your product only where it's contextually useful—never as copy-paste spam.
                </p>
              </div>

              {/* Step 4 */}
              <div className="sc-card p-8 text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    background: secondaryGradient,
                  }}
                >
                  <FileText className="w-8 h-8" style={{ color: colors.textPrimary }} />
                </div>
                <h3 
                  className="mb-3"
                  style={{ color: colors.textPrimary, fontSize: '1.1rem' }}
                >
                  Get simple, transparent summaries
                </h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                  You'll receive concise summaries showing where your brand appeared, what was said, and how people responded—so you can refine guardrails, targeting, and the next wave of attention.
                </p>
              </div>
          </div>
        </div>
      </section>

        {/* Pricing Section */}
        <section id="pricing" className="sc-section sc-anchor relative" aria-labelledby="pricing-title">
          <div className="sc-container">
            <div className="sc-section-header">
              <h2 id="pricing-title" className="mb-4" style={{ color: colors.textPrimary }}>
                Pricing
              </h2>
              <p className="sc-lead">
                Start with focused Reddit attention. Expand to other platforms over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plan 1: Reddit Starter */}
              <div 
                className="sc-card p-8"
              >
                <h3 
                  className="mb-2"
                  style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
                >
                  Reddit Starter
                </h3>
                <div className="mb-6">
                  <span style={{ color: colors.textPrimary, fontSize: '2.5rem', fontWeight: 700 }}>
                    $199
                  </span>
                  <span style={{ color: colors.textSecondary }}> / month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                    <span style={{ color: colors.textSecondary }}>
                      Up to 5 focused subreddits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                    <span style={{ color: colors.textSecondary }}>
                      Up to 5 active agents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                    <span style={{ color: colors.textSecondary }}>
                      Weekly highlights of key conversations
                    </span>
                  </li>
                </ul>
                <a 
                  href={demoHref}
                  className="sc-btn sc-btn-primary sc-focus w-full"
                  style={{ justifyContent: 'center' }}
                >
                  Get started
                </a>
              </div>

            {/* Plan 2: Reddit Plus (Recommended) */}
            <div 
              className="sc-card sc-card-featured p-8 relative"
            >
              <div 
                className="sc-badge sc-badge-primary absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1"
              >
                Recommended
              </div>
              <h3 
                className="mb-2"
                style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
              >
                Reddit Plus
              </h3>
              <div className="mb-6">
                <span style={{ color: colors.textPrimary, fontSize: '2.5rem', fontWeight: 700 }}>
                  $299
                </span>
                <span style={{ color: colors.textSecondary }}> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                  <span style={{ color: colors.textSecondary }}>
                    Up to 10 focused subreddits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                  <span style={{ color: colors.textSecondary }}>
                    Up to 5 active agents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                  <span style={{ color: colors.textSecondary }}>
                    Higher conversation volume and faster iteration
                  </span>
                </li>
              </ul>
              <a 
                href={demoHref}
                className="sc-btn sc-btn-primary sc-focus w-full"
                style={{ justifyContent: 'center' }}
              >
                Get started
              </a>
            </div>

            {/* Plan 3: Multi-Platform (Coming Soon) */}
            <div 
              className="sc-card p-8"
            >
              <div 
                className="sc-badge sc-badge-muted mb-4"
              >
                Coming soon
              </div>
              <h3 
                className="mb-4"
                style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
              >
                Multi-platform attention
              </h3>
              <p className="mb-4" style={{ color: colors.textSecondary }}>
                Support for Instagram, Facebook, LinkedIn, and more.
              </p>
              <p className="mb-8" style={{ color: colors.textSecondary }}>
                Reach out if you'd like early access.
              </p>
              <a 
                href={demoHref}
                className="sc-btn sc-btn-secondary sc-focus w-full"
                style={{ justifyContent: 'center' }}
              >
                Book demo
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={demoHref}
              className="sc-footer-link sc-focus"
            >
              Book a demo for custom needs →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="sc-section sc-anchor relative" aria-labelledby="faq-title">
        <div className="sc-container">
          <div className="sc-section-header">
            <h2 id="faq-title" className="mb-4" style={{ color: colors.textPrimary }}>
              Frequently asked questions
            </h2>
            <p className="sc-lead">
              Answers to the most common questions teams ask before launching autonomous AI brand ambassadors.
            </p>
          </div>

          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.question;
              return (
                <div
                  key={faq.question}
                  className="sc-card sc-accordion-item"
                  data-open={isOpen ? 'true' : 'false'}
                >
                  <button
                    type="button"
                    className="sc-accordion-trigger sc-focus"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                  >
                    <span style={{ color: colors.textPrimary, fontSize: '1.05rem', fontWeight: 650 }}>
                      {faq.question}
                    </span>
                    <ChevronDown className="sc-accordion-chevron" aria-hidden="true" />
                  </button>
                  <div className="sc-accordion-content" aria-hidden={!isOpen}>
                    <div className="sc-accordion-content-inner">
                      <p style={{ color: colors.textSecondary, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="sc-section">
        <div className="sc-container">
          <div
            className="sc-card sc-card-featured p-8"
            style={{
              background:
                'linear-gradient(135deg, rgba(77, 102, 241, 0.18), rgba(168, 85, 247, 0.12)), rgba(15, 23, 42, 0.6)',
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-3" style={{ color: colors.textPrimary }}>
                  Ready to turn conversations into attention?
                </h2>
                <p className="sc-lead">
                  Get a quick demo, and we'll recommend communities, guardrails, and a launch plan.
                </p>
              </div>
              <div className="sc-cta-actions sc-cta-actions-end-lg">
                <a href={demoHref} className="sc-btn sc-btn-primary sc-focus">
                  Book demo
                </a>
                <a href="#pricing" className="sc-btn sc-btn-secondary sc-focus">
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
      <footer 
        className="border-t py-12 px-6"
        style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}
      >
        <div className="sc-container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-4">
                <Logo size="small" />
              </div>
              <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                Attention architect for modern web.
              </p>
              <a
                href={demoHref}
                className="sc-footer-link sc-focus inline-block"
                style={{ fontSize: '0.95rem', marginTop: '0.75rem' }}
              >
                diwakar@26weeks.ai
              </a>
            </div>
            
            {/* Column 2: Product */}
            <div>
              <h3 
                className="mb-4"
                style={{ color: colors.textPrimary, fontSize: '0.95rem' }}
              >
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#why-sleepercells"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Legal */}
            <div>
              <h3 
                className="mb-4"
                style={{ color: colors.textPrimary, fontSize: '0.95rem' }}
              >
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/privacy/index.html"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms/index.html"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a 
                    href="/security/index.html"
                    className="sc-footer-link sc-focus"
                    style={{ fontSize: '0.9rem' }}
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            className="pt-8 border-t text-center"
            style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}
          >
            <p style={{ color: colors.textSecondary, fontSize: '0.875rem' }}>
              &copy; 2025 sleepercells.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
