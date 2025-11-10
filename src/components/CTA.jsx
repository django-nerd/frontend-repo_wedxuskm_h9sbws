import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <h3 className="text-3xl font-bold md:text-4xl">Your Sales Team, Supercharged by AI.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Stop juggling tools — let AI automate your sales growth.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            Book a Demo
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
