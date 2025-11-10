import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-violet-900/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              <Rocket className="h-3.5 w-3.5 text-violet-300" />
              <span>SalesAI (EZ Synapse)</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Automate Your Sales — From Prospecting to Closing with AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              SalesAI (EZ Synapse) is an all-in-one AI-powered Sales CRM + ERP that automates lead generation, outreach, forecasting, and analytics through intelligent agents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                Book a Demo
              </a>
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Start Free Trial
              </a>
            </motion.div>
          </div>

          {/* 3D Spline scene */}
          <div className="relative h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 p-2 backdrop-blur md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Soft radial highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
          </div>
        </div>
      </div>

      {/* Decorative particles */}
      <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
    </section>
  );
};

export default Hero3D;
