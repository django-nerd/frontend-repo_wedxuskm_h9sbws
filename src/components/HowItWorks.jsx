import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Setup preferences & lead filters.',
  'AI scrapes and enriches leads.',
  'Smart outreach via email, LinkedIn, WhatsApp.',
  'AI tracks opens, replies, and engagement.',
  'Forecasts and insights auto-update dashboards.'
];

const HowItWorks = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">How It Works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Five simple steps to turn cold leads into closed deals.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-violet-400" />
                <span className="text-sm font-medium">Step {idx + 1}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step}</p>
              {idx < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-violet-500 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
