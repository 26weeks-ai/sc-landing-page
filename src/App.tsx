import { NetworkBackground } from './components/NetworkBackground';
import { DashboardMock } from './components/DashboardMock';
import { TypingAnimation } from './components/TypingAnimation';
import { Logo } from './components/Logo';
import { colors, secondaryGradient, cardBackground, cardBorder } from './styles/colors';
import { 
  MessageCircle,
  Brain,
  Shield,
  Users,
  Target,
  Settings,
  FileText,
  Zap,
  Check,
  TrendingUp,
} from 'lucide-react';

export default function App() {
  const platforms = ['Facebook', 'Reddit', 'Instagram', 'LinkedIn', 'Internet'];
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];
  const faqs = [
    {
      question: 'How do Sleepercells brand ambassadors work?',
      answer:
        'Sleepercells activates AI brand ambassadors that join live conversations, answer questions, and seed user-style posts in the communities you select.',
    },
    {
      question: 'Which platforms do you support today?',
      answer:
        'Reddit coverage is available now with targeted subreddit focus. Support for Instagram, Facebook, LinkedIn, and more is expanding next.',
    },
    {
      question: 'How do you keep messaging on-brand and compliant?',
      answer:
        'You set guardrails, approved sources, and voice guidelines. Every agent uses them to stay accurate, with optional human review before posting.',
    },
    {
      question: 'Can I review activity before or after it goes live?',
      answer:
        'Yes. Enable human review before posting and get transparent summaries of every mention, reply, and conversation triggered by your brand.',
    },
  ];

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
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Logo />
            
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="transition-colors"
                  style={{ color: colors.textSecondary }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.textPrimary}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                >
                  {label}
                </a>
              ))}
              <a 
                href="#pricing"
                className="px-6 py-2 rounded-full transition-all"
                style={{ 
                  background: secondaryGradient,
                  color: colors.textPrimary,
                  boxShadow: `0 4px 20px ${colors.secondaryGradientFrom}30`,
                }}
              >
                Get started
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section 
          id="hero"
          className="relative pt-32 pb-20 px-6 overflow-hidden"
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
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT: Hero Copy */}
              <div>
                <h1 id="hero-title" className="mb-6" style={{ color: colors.textPrimary }}>
                  <span className="block">Create targeted </span>
                  <span className="block" style={{ fontWeight: 800 }}>attention </span>
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
                  className="mb-8"
                  style={{ 
                    color: colors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                  }}
                >
                  Our autonomous AI brand ambassadors join live conversations, answer questions, and grow awareness—without relying on clicks.
                </p>
                
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <a 
                    href="#pricing"
                    className="px-8 py-4 rounded-full transition-all"
                    style={{ 
                      background: secondaryGradient,
                      color: colors.textPrimary,
                      boxShadow: `0 8px 30px ${colors.secondaryGradientFrom}40`,
                    }}
                  >
                    Get started
                  </a>
                  <a 
                    href="#faq"
                    className="px-8 py-4 rounded-full transition-all"
                    style={{ 
                      border: `1px solid ${cardBorder}`,
                      background: cardBackground,
                      color: colors.textPrimary,
                    }}
                  >
                    Book demo
                  </a>
                </div>
                
                <p style={{ color: colors.textSecondary, fontSize: '0.875rem' }}>
                  No credit card required · Get started in minutes
                </p>
              </div>

              {/* RIGHT: Dashboard Mock */}
              <div className="relative">
                <DashboardMock />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 relative" aria-labelledby="features-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="features-title" className="mb-4" style={{ color: colors.textPrimary }}>
                Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
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
                  Get the authenticity of user-generated content with the control and targeting of a paid service.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
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
                  Set boundaries on what your AI agents can say, ensuring they stay on-brand and compliant with your guidelines.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
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
                  Optional human review
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Optional approval workflows let you review and approve content before it goes live in communities.
                </p>
              </div>

              {/* Feature 4 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: secondaryGradient,
                  }}
                >
                  <Zap className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Designed for every platform
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Start with Reddit today. Expand to Instagram, Facebook, LinkedIn and more as we roll out new integrations.
                </p>
              </div>

              {/* Feature 5 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientFrom}, ${colors.brandGradientTo})`,
                  }}
                >
                  <Target className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Autonomous from day one
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Once set up, our agents run autonomously. You just review summaries and watch attention grow.
                </p>
              </div>

              {/* Feature 6 */}
              <div 
                className="p-8 rounded-2xl border transition-all"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientVia}, ${colors.brandGradientTo})`,
                  }}
                >
                  <Brain className="w-6 h-6" style={{ color: colors.textPrimary }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Context-aware AI
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Our AI agents use your website, docs and guardrails to talk like someone who actually knows your product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6 relative" aria-labelledby="how-it-works-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="how-it-works-title" className="mb-4" style={{ color: colors.textPrimary }}>
                How it works
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: colors.textSecondary, fontSize: '1.125rem' }}
              >
                From zero to always-on attention in a few simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
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
                  You give us your website, key messaging and guardrails. Sleepercells learns how to talk about your product.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
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
                  Pick the platforms and communities you care about most—for example, specific subreddits or audience segments.
                </p>
              </div>

            {/* Step 3 */}
            <div className="text-center">
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
                Our AI-assisted agents start joining relevant conversations, answering questions and mentioning your product where it fits naturally.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
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
                We send you lightweight summaries with examples of where your brand showed up and how people responded.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 px-6 relative" aria-labelledby="impact-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="impact-title" className="mb-4" style={{ color: colors.textPrimary }}>
                Impact
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: colors.textSecondary, fontSize: '1.125rem' }}
              >
                What happens when your product is being talked about every day, in the right places.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Impact Card 1 */}
              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.brandGradientFrom}40, ${colors.brandGradientVia}40)`,
                  }}
                >
                  <MessageCircle className="w-6 h-6" style={{ color: colors.brandGradientFrom }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Your brand enters real conversations
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  We seed user-style posts, replies and Q&As in relevant communities, so your product shows up where your buyers already hang out.
                </p>
              </div>

              {/* Impact Card 2 */}
              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `${colors.secondaryGradientFrom}40`,
                  }}
                >
                  <Brain className="w-6 h-6" style={{ color: colors.secondaryGradientFrom }} />
                </div>
                <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                  Every mention is on-brand
                </h3>
                <p style={{ color: colors.textSecondary }}>
                  Our AI agents use your website, docs and guardrails to talk like someone who actually knows your product.
                </p>
              </div>

            {/* Impact Card 3 */}
            <div 
              className="p-8 rounded-2xl border"
              style={{ 
                background: cardBackground,
                borderColor: cardBorder,
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ 
                  background: `${colors.brandGradientTo}40`,
                }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: colors.brandGradientTo }} />
              </div>
              <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                Attention grows steadily over time
              </h3>
              <p style={{ color: colors.textSecondary }}>
                Instead of a single ad blast, sleepercells keeps a steady stream of conversations going over weeks and months.
              </p>
            </div>

            {/* Impact Card 4 */}
            <div 
              className="p-8 rounded-2xl border"
              style={{ 
                background: cardBackground,
                borderColor: cardBorder,
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ 
                  background: `${colors.brandGradientVia}40`,
                }}
              >
                <FileText className="w-6 h-6" style={{ color: colors.brandGradientVia }} />
              </div>
              <h3 className="mb-3" style={{ color: colors.textPrimary }}>
                Clear visibility into what&apos;s happening
              </h3>
              <p style={{ color: colors.textSecondary }}>
                See which threads and communities mentioned your brand, and what people are saying—without obsessing over click-through rates.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 relative" aria-labelledby="pricing-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="pricing-title" className="mb-4" style={{ color: colors.textPrimary }}>
                Pricing
              </h2>
              <p 
                className="max-w-2xl mx-auto"
                style={{ color: colors.textSecondary, fontSize: '1.125rem' }}
              >
                Start with focused Reddit attention. Expand to other platforms over time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plan 1: Reddit Starter */}
              <div 
                className="p-8 rounded-2xl border"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <h3 
                  className="mb-2"
                  style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
                >
                  Reddit starter
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
                      Up to 5 active attention agents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.brandGradientFrom }} />
                    <span style={{ color: colors.textSecondary }}>
                      Lightweight weekly highlights of key conversations
                    </span>
                  </li>
                </ul>
                <a 
                  href="#faq"
                  className="w-full inline-flex justify-center px-6 py-3 rounded-full transition-all"
                  style={{ 
                    background: secondaryGradient,
                    color: colors.textPrimary,
                  }}
                >
                  Get started
                </a>
              </div>

            {/* Plan 2: Reddit Plus (Recommended) */}
            <div 
              className="p-8 rounded-2xl border relative"
              style={{ 
                background: `${cardBackground}dd`,
                borderColor: colors.secondaryGradientFrom,
                boxShadow: `0 0 40px ${colors.secondaryGradientFrom}20`,
              }}
            >
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full uppercase"
                style={{ 
                  background: secondaryGradient,
                  color: colors.textPrimary,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                recommended
              </div>
              <h3 
                className="mb-2"
                style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
              >
                Reddit plus
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
                    Up to 5 active attention agents
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
                href="#faq"
                className="w-full inline-flex justify-center px-6 py-3 rounded-full transition-all"
                style={{ 
                  background: secondaryGradient,
                  color: colors.textPrimary,
                }}
              >
                Get started
              </a>
            </div>

            {/* Plan 3: Multi-Platform (Coming Soon) */}
            <div 
              className="p-8 rounded-2xl border"
              style={{ 
                background: cardBackground,
                borderColor: cardBorder,
              }}
            >
              <div 
                className="inline-block px-3 py-1 rounded-full uppercase mb-4"
                style={{ 
                  background: `${colors.brandGradientVia}20`,
                  color: colors.brandGradientVia,
                  border: `1px solid ${colors.brandGradientVia}40`,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                coming soon
              </div>
              <h3 
                className="mb-4"
                style={{ color: colors.textPrimary, fontSize: '1.5rem' }}
              >
                Multi-platform attention
              </h3>
              <p className="mb-4" style={{ color: colors.textSecondary }}>
                Support for Instagram, Facebook, LinkedIn and more.
              </p>
              <p className="mb-8" style={{ color: colors.textSecondary }}>
                Talk to us if you want early access.
              </p>
              <a 
                href="#faq"
                className="w-full inline-flex justify-center px-6 py-3 rounded-full transition-all"
                style={{ 
                  border: `1px solid ${cardBorder}`,
                  color: colors.textPrimary,
                  background: 'transparent',
                }}
              >
                Book demo
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#faq"
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
            >
              Book demo for custom needs →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 relative" aria-labelledby="faq-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="mb-4" style={{ color: colors.textPrimary }}>
              Frequently asked questions
            </h2>
            <p 
              className="max-w-2xl mx-auto"
              style={{ color: colors.textSecondary, fontSize: '1.05rem' }}
            >
              Answers to the most common questions teams ask before launching autonomous AI brand ambassadors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div 
                key={faq.question}
                className="p-8 rounded-2xl border h-full"
                style={{ 
                  background: cardBackground,
                  borderColor: cardBorder,
                }}
              >
                <h3 className="mb-3" style={{ color: colors.textPrimary, fontSize: '1.1rem' }}>
                  {faq.question}
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

      {/* Footer */}
      <footer 
        className="border-t py-12 px-6"
        style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-4">
                <Logo size="small" />
              </div>
              <p style={{ color: colors.textSecondary, fontSize: '0.95rem' }}>
                AI-powered attention engine for modern brands.
              </p>
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
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Company */}
            <div>
              <h3 
                className="mb-4"
                style={{ color: colors.textPrimary, fontSize: '0.95rem' }}
              >
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Legal */}
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
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="transition-colors"
                    style={{ color: colors.textSecondary, fontSize: '0.9rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.brandGradientFrom}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}
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
