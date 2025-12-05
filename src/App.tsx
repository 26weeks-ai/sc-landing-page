import { NetworkBackground } from './components/NetworkBackground';
import { DashboardMock } from './components/DashboardMock';
import { Logo } from './components/Logo';
import { Sparkles, Shield, Activity, Globe, Target, Zap, TrendingUp } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #050816)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-800/50" style={{ background: 'rgba(2, 6, 23, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <button className="text-slate-300 hover:text-white transition-colors">
              Features
            </button>
            <button className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </button>
            <button className="text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button className="text-slate-300 hover:text-white transition-colors">
              Login
            </button>
            <button 
              className="px-6 py-2 rounded-lg transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #3A6FF8, #6A4BFF)',
                boxShadow: '0 4px 20px rgba(58, 111, 248, 0.3)',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blurred ellipses */}
          <div 
            className="absolute top-20 left-1/4 rounded-full blur-3xl"
            style={{
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(58, 111, 248, 0.15), transparent)',
            }}
          ></div>
          <div 
            className="absolute top-40 right-1/4 rounded-full blur-3xl"
            style={{
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(106, 75, 255, 0.12), transparent)',
            }}
          ></div>
          <div 
            className="absolute bottom-20 left-1/2 rounded-full blur-3xl"
            style={{
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(46, 231, 224, 0.08), transparent)',
            }}
          ></div>
          
          {/* Network background */}
          <NetworkBackground />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Hero Copy */}
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ 
                  background: 'rgba(58, 111, 248, 0.1)',
                  border: '1px solid rgba(58, 111, 248, 0.2)',
                }}
              >
                <span style={{ fontSize: '0.875rem' }}>✨</span>
                <span className="text-slate-300" style={{ fontSize: '0.875rem' }}>Powered by Advanced AI Agents</span>
              </div>
              
              <h1 className="mb-6 text-white">
                AI agents that grow your brand across social media.
              </h1>
              
              <p className="mb-8 text-slate-400" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                Deploy always-on AI brand ambassadors across Facebook, Instagram, Reddit and LinkedIn. 
                They join conversations, answer questions and drive awareness—without relying on clicks.
              </p>
              
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <button 
                  className="px-8 py-4 rounded-lg transition-all"
                  style={{ 
                    background: 'linear-gradient(135deg, #3A6FF8, #6A4BFF)',
                    boxShadow: '0 8px 30px rgba(58, 111, 248, 0.4)',
                  }}
                >
                  Start Your Campaign
                </button>
                <button 
                  className="px-8 py-4 rounded-lg transition-all"
                  style={{ 
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    background: 'rgba(15, 23, 42, 0.5)',
                  }}
                >
                  Watch Demo
                </button>
              </div>
              
              <p className="text-slate-500" style={{ fontSize: '0.875rem' }}>
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

      {/* Trust Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-12 flex-wrap text-slate-400">
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ background: 'rgba(58, 111, 248, 0.1)' }}
              >
                <Shield className="w-5 h-5" style={{ color: '#3A6FF8' }} />
              </div>
              <span style={{ fontSize: '0.95rem' }}>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ background: 'rgba(106, 75, 255, 0.1)' }}
              >
                <Activity className="w-5 h-5" style={{ color: '#6A4BFF' }} />
              </div>
              <span style={{ fontSize: '0.95rem' }}>500+ Active Campaigns</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ background: 'rgba(46, 231, 224, 0.1)' }}
              >
                <Globe className="w-5 h-5" style={{ color: '#2EE7E0' }} />
              </div>
              <span style={{ fontSize: '0.95rem' }}>50M+ Impressions Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="mb-4"
              style={{ 
                background: 'linear-gradient(90deg, #3A6FF8, #6A4BFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Why Choose SleeperCells.ai
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Revolutionary AI-powered brand ambassadors that deliver results without interrupting your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #3A6FF8, #2EE7E0)' }}
              >
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">AI-Powered Targeting</h3>
              <p className="text-slate-400">
                Our advanced AI algorithms identify and engage your ideal audience across multiple platforms simultaneously.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #6A4BFF, #3A6FF8)' }}
              >
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">Zero-Click Impact</h3>
              <p className="text-slate-400">
                Generate brand awareness and attention without requiring users to click, reducing friction and increasing reach.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #2EE7E0, #6A4BFF)' }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">Real-Time Analytics</h3>
              <p className="text-slate-400">
                Track impressions, engagement, and brand lift with comprehensive analytics dashboards and insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #3A6FF8, #6A4BFF)' }}
              >
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">Multi-Platform Reach</h3>
              <p className="text-slate-400">
                Deploy campaigns across Reddit, Instagram, Facebook, LinkedIn, and beyond from a single interface.
              </p>
            </div>

            {/* Feature 5 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #6A4BFF, #2EE7E0)' }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">Smart Automation</h3>
              <p className="text-slate-400">
                Set it and forget it. Our AI continuously optimizes your campaigns for maximum attention and engagement.
              </p>
            </div>

            {/* Feature 6 */}
            <div 
              className="p-8 rounded-2xl border transition-all group"
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)',
                borderColor: 'rgba(148, 163, 184, 0.1)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #2EE7E0, #3A6FF8)' }}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3 text-white">Enterprise Security</h3>
              <p className="text-slate-400">
                Bank-level encryption and compliance with industry standards ensure your campaigns and data stay secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(58, 111, 248, 0.05), rgba(106, 75, 255, 0.05))' }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-6 text-white">
            Ready to Transform Your
            <br />
            <span 
              style={{ 
                background: 'linear-gradient(90deg, #2EE7E0, #6A4BFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Brand Awareness Strategy?
            </span>
          </h2>
          <p className="mb-8 text-slate-400">
            Join hundreds of brands already using SleeperCells.ai to capture attention at scale
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button 
              className="px-8 py-4 rounded-lg transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #3A6FF8, #6A4BFF)',
                boxShadow: '0 8px 30px rgba(58, 111, 248, 0.4)',
              }}
            >
              Get Started Free
            </button>
            <button 
              className="px-8 py-4 rounded-lg transition-all"
              style={{ 
                border: '1px solid rgba(148, 163, 184, 0.3)',
                background: 'rgba(15, 23, 42, 0.5)',
              }}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6" style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Logo variant="footer" />
              </div>
              <p className="text-slate-400">
                AI-powered brand ambassadors for modern enterprises.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-[#2EE7E0] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-slate-400" style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}>
            <p>&copy; 2025 SleeperCells.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}