export default function Filters() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Audio Filters</h1>
        <p className="text-lg text-slate-300">
          Explore all available audio filters and effects in AurisLink, powered by the <strong>AurisPlayer</strong> engine.
        </p>
      </div>

      {/* Exclusive Filters */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Exclusive Filters</h2>
        <div className="grid md:grid-cols-1 gap-4">
          {/* Bitcrusher */}
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-cyan-400">Bitcrusher</h3>
              <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Exclusive</span>
            </div>
            <p className="text-slate-300 mb-4">
              A unique Lo-Fi audio effect that reduces audio fidelity by decreasing bit depth and sample rate in real-time. Perfect for creating retro or industrial soundscapes.
            </p>
            <div className="bg-slate-900 rounded p-3">
              <code className="text-xs text-cyan-300">
                {`// Configuration
{
  "bits": 8,          // Target bit depth (e.g., 8, 4, 2)
  "downsample": 4     // Downsampling factor (e.g., 2, 4, 8)
}`}
              </code>
            </div>
          </div>

          {/* Echo */}
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-cyan-400">Echo</h3>
              <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Exclusive</span>
            </div>
            <p className="text-slate-300 mb-4">
              Adds a delay-based echo effect to the audio. Exclusive to the Auris ecosystem.
            </p>
            <div className="bg-slate-900 rounded p-3">
              <code className="text-xs text-cyan-300">
                {`// Configuration
{
  "delay": 300,      // Delay in milliseconds
  "feedback": 0.4,   // Amount of signal fed back (0.0 - 1.0)
  "mix": 0.5         // Dry/Wet mix (0.0 - 1.0)
}`}
              </code>
            </div>
          </div>

          {/* Reverb */}
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-cyan-400">Reverb</h3>
              <span className="bg-cyan-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Exclusive</span>
            </div>
            <p className="text-slate-300 mb-4">
              Simulates the acoustics of a physical space. Exclusive to the Auris ecosystem.
            </p>
            <div className="bg-slate-900 rounded p-3">
              <code className="text-xs text-cyan-300">
                {`// Configuration
{
  "mix": 0.3,        // Dry/Wet mix (0.0 - 1.0)
  "roomSize": 0.5,   // Size of the simulated room (0.0 - 1.0)
  "damping": 0.5     // High-frequency damping (0.0 - 1.0)
}`}
              </code>
            </div>
          </div>

          {/* Rotation (8D) */}
          <div className="bg-cyan-900/20 border border-cyan-500/50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-cyan-400">Rotation (8D Audio)</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Rotates the audio across the stereo field, creating an immersive 8D audio experience.
            </p>
            <div className="bg-slate-900 rounded p-3">
              <code className="text-xs text-cyan-300">
                {`// Configuration
{
  "rotationHz": 0.2  // Speed of rotation in Hertz (cycles per second)
}`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Available Filters */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Standard Filters</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Equalizer', desc: 'Adjust frequency bands (Direct Form II Implementation)' },
            { name: 'Low Pass', desc: 'Remove high frequencies' },
            { name: 'Tremolo', desc: 'Modulate amplitude' },
            { name: 'Vibrato', desc: 'Modulate frequency' },
            { name: 'Rotation', desc: 'Stereo rotation effect' },
            { name: 'Channel Mix', desc: 'Mix stereo channels' },
            { name: 'Echo', desc: 'Add echo/delay' },
            { name: 'Reverb', desc: 'Add reverb effect' },
            { name: 'Timescale', desc: 'Speed/pitch control (WASM Optimized)' },
            { name: 'Volume', desc: 'Adjust volume level' },
            { name: 'Distortion', desc: 'Add saturation and harmonic distortion (WASM Optimized)' },
          ].map((filter) => (
            <div key={filter.name} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-1">{filter.name}</h3>
              <p className="text-slate-300 text-sm">{filter.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <p className="text-slate-300">
          Detailed filter documentation coming soon. In the meantime, check the{' '}
          <a href="https://github.com/ProjectInkDp/aurislink" className="text-cyan-400 hover:text-cyan-300">
            GitHub repository
          </a>{' '}
          for filter examples.
        </p>
      </section>
    </div>
  );
}
