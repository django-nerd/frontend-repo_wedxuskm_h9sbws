import React from 'react';
import { LineChart, Flame, Gauge, Activity } from 'lucide-react';

const StatCard = ({ title, value, delta, icon: Icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
    <div className="flex items-center justify-between">
      <p className="text-sm text-white/70">{title}</p>
      <div className="rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-600/20 p-2 text-violet-300">
        <Icon className="h-4 w-4" />
      </div>
    </div>
    <div className="mt-3 flex items-baseline gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      {delta && (
        <span className={`text-xs ${delta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{delta}</span>
      )}
    </div>
  </div>
);

const Dashboards = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Intelligent Dashboards</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Real-time lead scoring, forecasting, engagement heatmaps, and conversion funnels.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StatCard title="Lead Score Avg" value="86" delta="+8%" icon={Gauge} />
          <StatCard title="Monthly Pipeline" value="$482k" delta="+12%" icon={LineChart} />
          <StatCard title="Engagement Index" value="1.34x" delta="+0.2x" icon={Activity} />
        </div>

        {/* Simple preview mock */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 p-5 text-white">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Conversion Funnel</p>
              <div className="mt-4 grid grid-cols-4 items-end gap-2">
                {[60, 45, 30, 20].map((h, i) => (
                  <div key={i} className="rounded-md bg-gradient-to-t from-violet-600 to-indigo-400" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Engagement Heatmap</p>
              <div className="mt-4 grid grid-cols-6 gap-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded bg-violet-500/10" style={{ opacity: 0.3 + ((i % 6) / 10) }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
