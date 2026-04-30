export default function Configuration() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Configuration</h1>
        <p className="text-lg text-slate-300">
          Comprehensive guide to configuring AurisLink for your needs.
        </p>
      </div>

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

      {/* Logging Configuration */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Logging Configuration</h2>
        <p className="text-slate-300 mb-4">
          Control logging behavior:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`logging: {
  level: 'info',             // 'debug' | 'info' | 'warn' | 'error'
  timestamps: true,          // Include timestamps in logs
  colors: true,              // Use colored output
  file: {
    enabled: false,          // Log to file
    path: 'logs',            // Log directory
  }
}`}
          </pre>
        </div>
      </section>

      {/* Audio Sources */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Audio Sources</h2>
        
        <div className="space-y-6">
          {/* SoundCloud */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">SoundCloud</h3>
            <div className="overflow-x-auto">
              <pre className="text-slate-200 text-sm">
{`soundcloud: {
  enabled: true,
  clientId: 'YOUR_CLIENT_ID', // Get from SoundCloud API
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
            <p className="text-slate-300 text-sm mt-2">
              <strong>Note:</strong> The ARL token is obtained from your Deezer browser session.
            </p>
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

          {/* JioSaavn */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">JioSaavn</h3>
            <div className="overflow-x-auto">
              <pre className="text-slate-200 text-sm">
{`jiosaavn: {
  enabled: true,
  playlistLoadLimit: 50,  // Max tracks per playlist
  artistLoadLimit: 20,    // Max tracks per artist
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster Configuration */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Cluster Configuration</h2>
        <p className="text-slate-300 mb-4">
          Configure worker processes and timeouts:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`cluster: {
  enabled: true,
  workers: 1,                      // Number of workers
  commandTimeoutMs: 10_000,        // Command timeout
  fastCommandTimeoutMs: 5_000,     // Fast command timeout
  hibernation: {
    enabled: true,
    timeoutMs: 1_200_000,          // 20 minutes
  }
}`}
          </pre>
        </div>
      </section>

      {/* Connection Monitoring */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Connection Monitoring</h2>
        <p className="text-slate-300 mb-4">
          Monitor and manage connection health:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`connection: {
  logAllChecks: true,
  intervalMs: 60_000,              // Check interval
  timeoutMs: 10_000,               // Check timeout
  thresholds: {
    badMbps: 1,                    // Bad connection threshold
    averageMbps: 5,                // Average connection threshold
  },
  probeUrl: 'https://speed.cloudflare.com/__down?bytes=1000000',
}`}
          </pre>
        </div>
      </section>

      {/* Performance Tuning */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Performance Tuning</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Player Update Interval</h3>
            <p className="text-slate-300 text-sm">
              <code className="bg-slate-900 px-2 py-1 rounded">playerUpdateInterval: 5_000</code> - Update player state every 5 seconds
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Stats Interval</h3>
            <p className="text-slate-300 text-sm">
              <code className="bg-slate-900 px-2 py-1 rounded">statsInterval: 60_000</code> - Broadcast stats every 60 seconds
            </p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Track Stuck Threshold</h3>
            <p className="text-slate-300 text-sm">
              <code className="bg-slate-900 px-2 py-1 rounded">trackStuckThresholdMs: 10_000</code> - Detect stuck tracks after 10 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Environment Variables */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Environment Variables</h2>
        <p className="text-slate-300 mb-4">
          You can also use environment variables to override config values:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`AURISLINK_HOST=0.0.0.0
AURISLINK_PORT=2333
AURISLINK_PASSWORD=youshallnotpass
SOUNDCLOUD_CLIENT_ID=...
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...`}
          </pre>
        </div>
      </section>
    </div>
  );
}
