export default function Filters() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Audio Filters</h1>
        <p className="text-lg text-slate-300">
          Explore all available audio filters and effects in AurisLink.
        </p>
      </div>

      {/* Available Filters */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Available Filters</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Equalizer', desc: 'Adjust frequency bands' },
            { name: 'Low Pass', desc: 'Remove high frequencies' },
            { name: 'Tremolo', desc: 'Modulate amplitude' },
            { name: 'Vibrato', desc: 'Modulate frequency' },
            { name: 'Rotation', desc: 'Stereo rotation effect' },
            { name: 'Channel Mix', desc: 'Mix stereo channels' },
            { name: 'Echo', desc: 'Add echo/delay' },
            { name: 'Reverb', desc: 'Add reverb effect' },
            { name: 'Timescale', desc: 'Speed/pitch control' },
            { name: 'Volume', desc: 'Adjust volume level' },
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
