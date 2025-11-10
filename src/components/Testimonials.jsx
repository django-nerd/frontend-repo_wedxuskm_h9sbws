import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'SalesAI replaced 5 of our sales tools — now we focus on closing, not admin.',
    author: 'Riya K., VP Sales',
    company: 'OrbitSoft'
  },
  {
    quote:
      'Our outreach reply rate jumped 3x after switching to AI-driven sequences.',
    author: 'Liam J., Head of Growth',
    company: 'StratusHQ'
  },
  {
    quote:
      'From lead scraping to forecasting, everything just works together. Game changer.',
    author: 'Maya P., Founder',
    company: 'NovaWorks'
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Loved by Modern Sales Teams</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Trusted by 500+ B2B teams worldwide.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/80">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium">{t.author}</p>
              <p className="text-xs text-white/60">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
