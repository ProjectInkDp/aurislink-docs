export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Getting Started</h1>
        <p className="text-lg text-slate-300">
          Learn how to install and run AurisLink in just a few minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Prerequisites</h2>
        <p className="text-slate-300 mb-4">
          Before installing AurisLink, make sure you have the following installed:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Node.js</strong> v20.0.0 or higher</li>
          <li><strong>npm</strong> or <strong>pnpm</strong> for package management</li>
          <li><strong>Git</strong> for cloning the repository</li>
        </ul>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">1. Clone the Repository</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-slate-200">
                git clone https://github.com/ProjectInkDp/aurislink.git<br />
                cd aurislink
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">2. Install Dependencies</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-slate-200">
                npm install
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">3. Configure AurisLink</h3>
            <p className="text-slate-300 mb-2">
              Copy the default configuration file and customize it:
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-slate-200">
                cp config.default.ts config.ts
              </code>
            </div>
            <p className="text-slate-300 mt-2">
              Edit <code className="bg-slate-800 px-2 py-1 rounded">config.ts</code> to configure your audio sources and server settings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">4. Start the Server</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
              <code className="text-slate-200">
                npm run dev
              </code>
            </div>
            <p className="text-slate-300 mt-2">
              Your AurisLink server should now be running on <code className="bg-slate-800 px-2 py-1 rounded">http://localhost:2333</code>
            </p>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Basic Configuration</h2>
        <p className="text-slate-300 mb-4">
          Here's a minimal configuration to get you started:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`const config = {
  server: {
    host: '0.0.0.0',
    port: 2333,
    password: 'youshallnotpass',
    tls: { enabled: false, cert: '', key: '' },
  },
  logging: {
    level: 'info',
    timestamps: true,
    colors: true,
  },
  sources: {
    soundcloud: { enabled: true, clientId: '' },
    deezer: { enabled: true, arl: '', decryptionKey: '' },
    spotify: { 
      enabled: true, 
      clientId: '', 
      clientSecret: '' 
    },
    jiosaavn: { enabled: true },
  },
};

export default config;`}
          </pre>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Next Steps</h2>
        <ul className="space-y-3 text-slate-300">
          <li>
            <strong className="text-cyan-400">📖 Read the Configuration Guide</strong> - Learn how to configure each audio source
          </li>
          <li>
            <strong className="text-cyan-400">🎵 Explore Audio Sources</strong> - Understand supported platforms and their setup
          </li>
          <li>
            <strong className="text-cyan-400">🎚️ Discover Filters</strong> - Learn about available audio filters and effects
          </li>
          <li>
            <strong className="text-cyan-400">📡 Check the API Reference</strong> - Integrate AurisLink with your applications
          </li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Port Already in Use</h3>
            <p className="text-slate-300">
              If port 2333 is already in use, change it in your <code className="bg-slate-900 px-2 py-1 rounded">config.ts</code> file.
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Source Not Working</h3>
            <p className="text-slate-300">
              Make sure you've provided valid credentials for the source in your configuration file.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
