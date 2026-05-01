export default function APIReference() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>
        <p className="text-lg text-slate-300">
          Complete REST API reference for AurisLink.
        </p>
      </div>

      {/* Exclusive: Dashboard */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-white">Visual Dashboard</h2>
          <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Exclusive</span>
        </div>
        <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-4">
          <div className="space-y-2 text-slate-300 text-sm">
            <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/dashboard</code></div>
            <p>Access the built-in visual dashboard for real-time monitoring of server health and active players.</p>
            <p className="text-xs text-slate-400 mt-2 italic">Note: This endpoint serves a full HTML page and does not require the Authorization header when accessed via browser (if configured).</p>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
        <p className="text-slate-300 mb-4">
          All API requests require the authorization password in the header:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`Authorization: youshallnotpass`}
          </pre>
        </div>
      </section>

      {/* Base URL */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
          <code className="text-slate-200">http://localhost:2333/v4</code>
        </div>
      </section>

      {/* Endpoints */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Endpoints</h2>

        <div className="space-y-6">
          {/* Info */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Get Server Info</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/info</code></div>
              <p>Get information about the AurisLink server.</p>
              <div className="bg-slate-900 p-2 rounded">
                <p className="font-semibold mb-1">Response:</p>
                <pre className="text-xs overflow-x-auto">
{`{
  "version": "1.8.0",
  "buildLine": 1234,
  "git": {
    "branch": "main",
    "commit": "abc123",
    "commitTime": 1234567890
  },
  "source": {
    "soundcloud": true,
    "deezer": true,
    "spotify": true,
    "icy": true
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Load Tracks */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Load Tracks</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/loadtracks</code></div>
              <p>Load tracks from a URL or search query.</p>
              <div className="bg-slate-900 p-2 rounded">
                <p className="font-semibold mb-1">Query Parameters:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><code>identifier</code> - URL or search query</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sessions */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Create Session</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>POST</strong> <code className="bg-slate-900 px-2 py-1 rounded">/sessions/{'{sessionId}'}</code></div>
              <p>Create a new player session.</p>
            </div>
          </div>

          {/* Players */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Get Player</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/sessions/{'{sessionId}'}/players/{'{guildId}'}</code></div>
              <p>Get player information for a guild.</p>
            </div>
          </div>

          {/* Update Player */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Update Player</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>PATCH</strong> <code className="bg-slate-900 px-2 py-1 rounded">/sessions/{'{sessionId}'}/players/{'{guildId}'}</code></div>
              <p>Update player state (volume, track, filters, etc).</p>
            </div>
          </div>

          {/* Destroy Player */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Destroy Player</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>DELETE</strong> <code className="bg-slate-900 px-2 py-1 rounded">/sessions/{'{sessionId}'}/players/{'{guildId}'}</code></div>
              <p>Destroy a player session.</p>
            </div>
          </div>

          {/* Lyrics */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Get Lyrics</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/v4/lyrics</code></div>
              <p>Get lyrics for a track.</p>
              <div className="bg-slate-900 p-2 rounded">
                <p className="font-semibold mb-1">Query Parameters:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><code>identifier</code> - Track identifier</li>
                  <li><code>source</code> - Lyrics source (optional)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Get Stats</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><strong>GET</strong> <code className="bg-slate-900 px-2 py-1 rounded">/stats</code></div>
              <p>Get server statistics and metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WebSocket Events */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">WebSocket Events</h2>
        <p className="text-slate-300 mb-4">
          Connect to the WebSocket for real-time updates:
        </p>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-x-auto">
          <pre className="text-slate-200 text-sm">
{`ws://localhost:2333/v4/websocket
Authorization: youshallnotpass`}
          </pre>
        </div>

        <div className="space-y-4 mt-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">ready</h3>
            <p className="text-slate-300 text-sm">Emitted when the WebSocket connection is ready.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">playerUpdate</h3>
            <p className="text-slate-300 text-sm">Emitted when player state changes.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">stats</h3>
            <p className="text-slate-300 text-sm">Emitted periodically with server statistics.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">trackStart</h3>
            <p className="text-slate-300 text-sm">Emitted when a track starts playing.</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">trackEnd</h3>
            <p className="text-slate-300 text-sm">Emitted when a track finishes playing.</p>
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Error Codes</h2>
        <div className="space-y-2 text-slate-300 text-sm">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <strong className="text-cyan-400">400</strong> - Bad Request
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <strong className="text-cyan-400">401</strong> - Unauthorized (Invalid password)
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <strong className="text-cyan-400">404</strong> - Not Found
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <strong className="text-cyan-400">500</strong> - Internal Server Error
          </div>
        </div>
      </section>
    </div>
  );
}
