import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-indigo-600 to-blue-600 px-6 py-10 md:px-12 md:py-14 text-white shadow">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              <ShieldCheck size={14} /> Community‑first platform
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold">Be part of a creative circle that builds together</h3>
            <p className="mt-2 max-w-2xl text-sm md:text-base text-white/90">Join makers across disciplines, find collaborators, and bring ideas to life faster with a supportive, modern community.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold shadow hover:bg-slate-100">
                Get started <ArrowRight size={18} />
              </a>
              <a href="#create" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-semibold text-white border border-white/20 hover:bg-white/20">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
