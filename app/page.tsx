'use client';

import Link from 'next/link';
import { GitBranch, Zap, Music, Code, ArrowRight, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">AurisLink</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-slate-300 hover:text-white transition">
              Documentation
            </Link>
            <a
              href="https://github.com/ProjectInkDp/aurislink"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <GitBranch className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">High-Performance Audio Server</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            High-Performance Audio Streaming
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Made Simple</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            AurisLink is a lightweight, high-performance audio server powered by the <strong>AurisPlayer</strong> engine. Stream from SoundCloud, Deezer, Spotify, JioSaavn, and more with minimal latency. Built for the <strong>ProjectInkDp</strong> ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/ProjectInkDp/aurislink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              <GitBranch className="w-4 h-4" />
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">4+</div>
              <div className="text-sm text-slate-400">Audio Sources</div>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-slate-400">Audio Filters</div>
            </div>
            <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">Engine</div>
              <div className="text-sm text-slate-400">AurisPlayer v1.0.5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose AurisLink?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-400">
                Optimized for low latency and high throughput. Stream without delays or buffering issues.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <Music className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multiple Sources</h3>
              <p className="text-slate-400">
                Support for SoundCloud, Deezer, Spotify, JioSaavn, and more. Your music, your way.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <Code className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Developer Friendly</h3>
              <p className="text-slate-400">
                Clean REST API and WebSocket support. Easy integration with your applications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Filters</h3>
              <p className="text-slate-400">
                Equalizer, reverb, echo, tremolo, vibrato, and more. Customize audio to perfection.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Comprehensive Docs</h3>
              <p className="text-slate-400">
                Detailed guides, API reference, and configuration examples. Everything you need.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition">
              <GitBranch className="w-6 h-6 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
              <p className="text-slate-400">
                MIT licensed. Contribute, fork, and build on top of AurisLink freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Stream?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get started in minutes with our comprehensive documentation and guides.
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition"
          >
            Read the Documentation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-white">AurisLink</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 AurisLink. MIT License. Maintained by{' '}
            <a href="https://github.com/ProjectInkDp" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              ProjectInkDp
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
