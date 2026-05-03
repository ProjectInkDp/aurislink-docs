export default function Sources() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Audio Sources</h1>
        <p className="text-lg text-slate-300">
          Learn about supported audio sources and how to configure them.
        </p>
      </div>

      {/* Supported Sources */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Supported Sources</h2>
        
        <div className="space-y-6">
          {/* SoundCloud */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">🎵 SoundCloud</h3>
            <p className="text-slate-300 mb-3">
              Stream millions of tracks from SoundCloud. Requires a Client ID.
            </p>
            <div className="bg-slate-900 p-3 rounded text-sm text-slate-200 overflow-x-auto">
              <pre>
{`soundcloud: {
  enabled: true,
  clientId: 'YOUR_CLIENT_ID'
}`}
              </pre>
            </div>
          </div>

          {/* Deezer */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">🎧 Deezer</h3>
            <p className="text-slate-300 mb-3">
              Access Deezer's vast music library. Requires ARL token and decryption key.
            </p>
            <div className="bg-slate-900 p-3 rounded text-sm text-slate-200 overflow-x-auto">
              <pre>
{`deezer: {
  enabled: true,
  arl: 'YOUR_ARL_TOKEN',
  decryptionKey: 'YOUR_KEY'
}`}
              </pre>
            </div>
          </div>

          {/* Spotify */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">🎶 Spotify</h3>
            <p className="text-slate-300 mb-3">
              Stream from Spotify. Requires API credentials.
            </p>
            <div className="bg-slate-900 p-3 rounded text-sm text-slate-200 overflow-x-auto">
              <pre>
{`spotify: {
  enabled: true,
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  market: 'BR'
}`}
              </pre>
            </div>
          </div>

          {/* JioSaavn */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">🎼 JioSaavn</h3>
            <p className="text-slate-300 mb-3">
              Stream Indian music from JioSaavn. No additional configuration needed.
            </p>
            <div className="bg-slate-900 p-3 rounded text-sm text-slate-200 overflow-x-auto">
              <pre>
{`jiosaavn: {
  enabled: true,
  playlistLoadLimit: 50,
  artistLoadLimit: 20
}`}
              </pre>
            </div>
          </div>

          {/* YouTube Music */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">🎵 YouTube Music</h3>
            <p className="text-slate-300 mb-3">
              Stream from YouTube Music using the InnerTube API. Supports anonymous tokens and multiple clients.
            </p>
            <div className="bg-slate-900 p-3 rounded text-sm text-slate-200 overflow-x-auto">
              <pre>
{`ytmusic: {
  enabled: true,
  clients: ["WEB_REMIX", "ANDROID_MUSIC"],
  allowFallback: true
}`}
              </pre>
            </div>
            <p className="text-xs text-cyan-500 mt-2">
              ✨ <strong>Note:</strong> The parser has been updated to support the latest 2026 InnerTube structure, ensuring stable search results.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Credentials */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Getting Credentials</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">SoundCloud Client ID</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
              <li>Visit <a href="https://soundcloud.com/you/apps" className="text-cyan-400 hover:text-cyan-300">SoundCloud Apps</a></li>
              <li>Create a new application</li>
              <li>Copy your Client ID</li>
            </ol>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Spotify Credentials</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
              <li>Visit <a href="https://developer.spotify.com/dashboard" className="text-cyan-400 hover:text-cyan-300">Spotify Developer</a></li>
              <li>Create a new application</li>
              <li>Copy Client ID and Client Secret</li>
            </ol>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="font-semibold text-cyan-400 mb-2">Deezer ARL Token</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
              <li>Log in to Deezer in your browser</li>
              <li>Open Developer Tools (F12)</li>
              <li>Go to Application → Cookies</li>
              <li>Find and copy the <code className="bg-slate-900 px-1">arl</code> cookie value</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Source Priority */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Source Priority</h2>
        <p className="text-slate-300 mb-4">
          When multiple sources are enabled, AurisLink searches them in this order:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>Direct URL matching (YouTube, SoundCloud, etc)</li>
          <li>Search across enabled sources</li>
          <li>Return best match or error</li>
        </ol>
      </section>
    </div>
  );
}
