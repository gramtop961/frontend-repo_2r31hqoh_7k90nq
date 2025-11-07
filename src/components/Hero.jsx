import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[420px] sm:h-[520px] md:h-[600px] rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/60 shadow-sm">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              className="rounded-3xl"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-4 md:pt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            🌐 Socialize. Create. Connect.
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            LinkUdigital — where creativity meets connection
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Build your profile, showcase your craft, and collaborate with people who think, build, and innovate together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#join" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold shadow hover:bg-slate-800">
              Join the community <ArrowRight size={18} />
            </a>
            <a href="#create" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
