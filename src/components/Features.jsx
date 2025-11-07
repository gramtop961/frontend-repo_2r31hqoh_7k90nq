import { Sparkles, Users, Palette, Rocket } from 'lucide-react';

const features = [
  {
    id: 'create',
    icon: Palette,
    title: 'Create',
    desc: 'Build a vibrant profile, showcase your work, and share your creative journey with an audience that cares.'
  },
  {
    id: 'connect',
    icon: Users,
    title: 'Connect',
    desc: 'Collaborate with like‑minded developers, designers, and artists on community projects and ideas.'
  },
  {
    id: 'grow',
    icon: Rocket,
    title: 'Grow',
    desc: 'Learn, get inspired, and discover opportunities that push your creativity forward.'
  },
];

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1.5 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">What you can do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Create, connect, and grow</h2>
          <p className="mt-2 text-slate-600">A community‑driven ecosystem for modern creators who believe in collaboration.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
