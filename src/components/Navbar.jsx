import { useState } from 'react';
import { Rocket, Menu, X, Users } from 'lucide-react';

function NavLink({ children, href }) {
  return (
    <a href={href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">LinkUdigital</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#create">Create</NavLink>
            <NavLink href="#connect">Connect</NavLink>
            <NavLink href="#grow">Grow</NavLink>
            <a href="#join" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">
              <Users size={16} /> Join</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            <NavLink href="#create">Create</NavLink>
            <NavLink href="#connect">Connect</NavLink>
            <NavLink href="#grow">Grow</NavLink>
            <a href="#join" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">
              <Users size={16} /> Join</a>
          </div>
        </div>
      )}
    </header>
  );
}
