import React from 'react';
import { Brain, Mail, BarChart3, Mic } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Lead Intelligence',
    desc: 'Automated scraping, enrichment, and scoring so reps focus on high-intent prospects.'
  },
  {
    icon: Mail,
    title: 'Agentic Outreach',
    desc: 'AI-personalized, multi-channel campaigns across email, LinkedIn, and WhatsApp.'
  },
  {
    icon: BarChart3,
    title: 'Forecasting & Insights',
    desc: 'Predictive dashboards, sentiment analysis, and revenue forecasting in real time.'
  },
  {
    icon: Mic,
    title: 'AI Voice & Video',
    desc: 'Whisper AI summaries and Loom-style video outreach for maximum conversion.'
  }
];

const Features = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Everything Your Sales Team Needs — Powered by AI
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Build a high-performing, data-driven sales engine with intelligent agents.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-600/25">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
