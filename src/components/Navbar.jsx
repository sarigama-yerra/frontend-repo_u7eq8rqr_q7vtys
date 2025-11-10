import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-amber-400" />
            <span className="font-semibold tracking-tight text-gray-900 text-lg">CallMetrik</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setProdOpen((s) => !s)}
                className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900"
              >
                Products <ChevronDown className={`h-4 w-4 transition ${prodOpen ? 'rotate-180' : ''}`} />
              </button>
              {prodOpen && (
                <div className="absolute mt-2 w-56 rounded-lg border border-black/10 bg-white shadow-xl p-2">
                  <button onClick={() => go('analysis')} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">
                    AI Analysis
                  </button>
                  <button onClick={() => go('calling')} className="w-full text-left px-3 py-2 rounded hover:bg-gray-50">
                    AI Calling
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => go('pricing')} className="text-gray-700 hover:text-gray-900">Pricing</button>
            <button onClick={() => go('developers')} className="text-gray-700 hover:text-gray-900">Developers</button>
            <button onClick={() => go('company')} className="text-gray-700 hover:text-gray-900">Company</button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Login</button>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm">Get Started Free</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white px-4 py-3 space-y-2">
          <button onClick={() => setProdOpen((s) => !s)} className="w-full flex items-center justify-between py-2">
            <span>Products</span>
            <ChevronDown className={`h-4 w-4 transition ${prodOpen ? 'rotate-180' : ''}`} />
          </button>
          {prodOpen && (
            <div className="pl-3 space-y-2">
              <button onClick={() => go('analysis')} className="block w-full text-left py-2 text-gray-700">AI Analysis</button>
              <button onClick={() => go('calling')} className="block w-full text-left py-2 text-gray-700">AI Calling</button>
            </div>
          )}
          <button onClick={() => go('pricing')} className="block w-full text-left py-2">Pricing</button>
          <button onClick={() => go('developers')} className="block w-full text-left py-2">Developers</button>
          <div className="pt-2 flex items-center gap-2">
            <button className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-gray-700">Login</button>
            <button className="flex-1 px-4 py-2 rounded-md bg-indigo-600 text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
