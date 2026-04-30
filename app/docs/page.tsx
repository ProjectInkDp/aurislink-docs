import Link from 'next/link';
import { ArrowRight, BookOpen, Zap, Code, Music } from 'lucide-react';

export default function DocsIndex() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
        <p className="text-lg text-slate-300">
          Everything you need to know about AurisLink.
        </p>
      </div>

      {/* Quick Start */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/docs/getting-started"
            className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition group"
          >
            <div className="flex items-start justify-between mb-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Getting Started</h3>
            <p className="text-slate-300 text-sm">
              Install and run AurisLink in minutes with our step-by-step guide.
            </p>
          </Link>

          <Link
            href="/docs/configuration"
            className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition group"
          >
            <div className="flex items-start justify-between mb-3">
              <Code className="w-6 h-6 text-cyan-400" />
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Configuration</h3>
            <p className="text-slate-300 text-sm">
              Learn how to configure audio sources and server settings.
            </p>
          </Link>
        </div>
      </section>

      {/* Main Sections */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Main Sections</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/docs/api"
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition group"
          >
            <BookOpen className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
            <p className="text-slate-300 text-sm">
              Complete REST API and WebSocket documentation.
            </p>
          </Link>

          <Link
            href="/docs/sources"
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition group"
          >
            <Music className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Audio Sources</h3>
            <p className="text-slate-300 text-sm">
              Learn about supported platforms and credentials.
            </p>
          </Link>

          <Link
            href="/docs/filters"
            className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition group"
          >
            <Zap className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Audio Filters</h3>
            <p className="text-slate-300 text-sm">
              Explore available effects and audio processing.
            </p>
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">🚀 High Performance</h3>
            <p className="text-slate-300 text-sm">
              Optimized for low latency and high throughput streaming.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">🎵 Multiple Sources</h3>
            <p className="text-slate-300 text-sm">
              Support for SoundCloud, Deezer, Spotify, and JioSaavn.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">🎚️ Advanced Filters</h3>
            <p className="text-slate-300 text-sm">
              Equalizer, reverb, echo, tremolo, and more effects.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">📡 REST & WebSocket</h3>
            <p className="text-slate-300 text-sm">
              Clean API for easy integration with your apps.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">🔒 Secure</h3>
            <p className="text-slate-300 text-sm">
              Password-protected with optional TLS support.
            </p>
          </div>
          <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">📝 Open Source</h3>
            <p className="text-slate-300 text-sm">
              MIT licensed and fully open source on GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* Need Help */}
      <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-3">Need Help?</h2>
        <p className="text-slate-300 mb-4">
          Can't find what you're looking for? Check out the{' '}
          <a
            href="https://github.com/ProjectInkDp/aurislink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            GitHub repository
          </a>{' '}
          or open an issue.
        </p>
      </section>
    </div>
  );
}
