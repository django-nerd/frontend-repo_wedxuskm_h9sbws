import React from 'react';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Dashboards from './components/Dashboards';
import Agents from './components/Agents';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0B0F1E] to-[#0A0D19] text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600" />
            <span className="text-sm font-semibold tracking-wide text-white/90">SalesAI (EZ Synapse)</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#dashboards" className="hover:text-white">Dashboards</a>
            <a href="#agents" className="hover:text-white">Agents</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">Book a Demo</a>
            <a href="#cta" className="rounded-md bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-500">Start Free Trial</a>
          </div>
        </div>
      </header>

      {/* Hero with Spline 3D */}
      <Hero3D />

      {/* Anchor wrappers for nav links */}
      <div id="features"><Features /></div>
      <div id="how"><HowItWorks /></div>
      <div id="dashboards"><Dashboards /></div>
      <div id="agents"><Agents /></div>

      <Testimonials />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-white/70">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs">© {new Date().getFullYear()} SalesAI (EZ Synapse). All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Docs</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Careers</a>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="text-white/60">Follow us</span>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href="#" aria-label="X" className="hover:text-white">X</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
