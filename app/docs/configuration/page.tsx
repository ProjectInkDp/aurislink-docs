export default function Configuration() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Configuration</h1>
        <p className="text-lg text-slate-300">
          Comprehensive guide to configuring AurisLink for your needs.
        </p>
      </div>

      {/* Exclusive: Route Planner */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-white">Route Planner</h2>
          <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Advanced</span>
        </div>
        <p className="text-slate-300 mb-4">
          AurisLink features an advanced Route Planner with the exclusive <strong>NanoSwitch</strong> strategy.
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`routePlanner: {
  strategy: 'NanoSwitch',      // 'RotateOnBan' | 'LoadBalance' | 'NanoSwitch'
  ipBlocks: ['1.2.3.4/24'],    // CIDR blocks
  cooldownMs: 600000,          // Ban cooldown
}`}
          </pre>
        </div>
        <div className="mt-4 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
          <h4 className="text-cyan-400 font-semibold mb-1">Exclusive: NanoSwitch Strategy</h4>
          <p className="text-sm text-slate-300">
            Unlike standard strategies, <strong>NanoSwitch</strong> monitors real-time latency for each IP in your pool and automatically selects the fastest available route for every request.
          </p>
        </div>
      </section>

      {/* Server Configuration */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Server Configuration</h2>
        <p className="text-slate-300 mb-4">
          Configure the core server settings:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`server: {
  host: '0.0.0.0',           // Bind address
  port: 2333,                // Server port
  password: 'youshallnotpass', // Authentication password
  tls: {
    enabled: false,          // Enable HTTPS
    cert: '',                // Path to certificate
    key: '',                 // Path to private key
  },
  http2: {
    enabled: false,          // Enable HTTP/2
  }
}`}
          </pre>
        </div>
      </section>

      {/* Audio Sources */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Audio Sources</h2>
        
        <div className="space-y-6">
          {/* ICY Metadata */}
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-cyan-400">ICY Metadata</h3>
              <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Exclusive</span>
            </div>
            <p className="text-slate-300 text-sm mb-3">
              AurisLink natively supports real-time metadata extraction from HTTP radio streams.
            </p>
            <div className="overflow-x-auto">
              <pre className="text-slate-200 text-sm">
{`sources: {
  icy: {
    enabled: true,
    intervalMs: 5000, // Metadata polling interval
  }
}`}
              </pre>
            </div>
          </div>

          {/* Spotify */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Spotify</h3>
            <div className="overflow-x-auto">
              <pre className="text-slate-200 text-sm">
{`spotify: {
  enabled: true,
  market: 'BR',                    // Market code
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  preferAnonymousToken: false,
}`}
              </pre>
            </div>
          </div>

          {/* Deezer */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Deezer</h3>
            <div className="overflow-x-auto">
              <pre className="text-slate-200 text-sm">
{`deezer: {
  enabled: true,
  arl: 'YOUR_ARL_TOKEN',           // Deezer session token
  decryptionKey: 'YOUR_DECRYPTION_KEY', // 16-character key
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Tuning */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Performance Tuning</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">TrackCache SQL</h3>
            <p className="text-slate-300 text-sm">
              AurisLink uses a high-performance SQLite database for track caching.
            </p>
            <code className="block bg-slate-900 p-2 mt-2 rounded text-xs text-cyan-300">
              {`trackCache: { enabled: true, path: './.auris-cache/tracks.db', ttlMs: 21600000 }`}
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
