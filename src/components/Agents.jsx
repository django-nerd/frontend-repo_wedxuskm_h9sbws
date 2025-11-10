import React from 'react';
import { Search, Send, BarChart3, MicVocal } from 'lucide-react';

const agents = [
  {
    icon: Search,
    title: 'Lead Scraper Agent',
    desc: 'Finds & enriches leads automatically across the web and CRMs.'
  },
  {
    icon: Send,
    title: 'Outreach Agent',
    desc: 'Sends contextual, personalized AI messages on every channel.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Agent',
    desc: 'Tracks KPIs, learns from outcomes, and predicts conversions.'
  },
  {
    icon: MicVocal,
    title: 'Voice Agent',
    desc: 'Summarizes calls with Whisper AI, MOMs, and transcripts.'
  }
];

const Agents = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Meet the AI Agents</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Specialized agents collaborate to automate the entire revenue workflow.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-600/25">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
