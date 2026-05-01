'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, GitBranch } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Configuration', href: '/docs/configuration' },
  { label: 'API Reference', href: '/docs/api' },
  { label: 'Filters', href: '/docs/filters' },
  { label: 'Sources', href: '/docs/sources' },
];

const externalLinks = [];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">AurisLink</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/contributing" className="hidden md:flex items-center gap-2 text-slate-300 hover:text-white transition">
              <GitBranch className="w-4 h-4" />
              <span>Contributing</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-slate-900/50 border-r border-slate-800 p-6 fixed md:relative h-screen md:h-auto overflow-y-auto pt-20 md:pt-6`}>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition ${
                  pathname === item.href
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Divider */}
            <div className="my-4 border-t border-slate-700" />
            
            {/* Mobile Only Contributing */}
            <Link
              href="/contributing"
              className="md:hidden block px-4 py-2 rounded-lg transition text-slate-300 hover:text-white hover:bg-slate-800/50 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contributing
              <GitBranch className="w-4 h-4" />
            </Link>

            {/* External Links */}
            {externalLinks.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-lg transition text-slate-300 hover:text-white hover:bg-slate-800/50 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <GitBranch className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg transition text-slate-300 hover:text-white hover:bg-slate-800/50 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <GitBranch className="w-4 h-4" />
                </Link>
              )
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 md:ml-0 w-full">
          <div className="max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
