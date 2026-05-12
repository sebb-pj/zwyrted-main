export default function PixelPortfolioHomepage() {
  const cards: {
    title: string;
    icon: string;
    description: string;
    color: string;
  }[] = [
    {
      title: 'ABOUT ME',
      icon: '🧑🏽',
      description: 'Background, mindset, and what drives me.',
      color: 'hover:border-[#8b5cf6]',
    },
    {
      title: 'EXPERIENCE',
      icon: '🎒',
      description: 'QA, development, and professional work.',
      color: 'hover:border-[#22c55e]',
    },
    {
      title: 'PROJECTS',
      icon: '🗺️',
      description: 'Apps, experiments, and projects.',
      color: 'hover:border-[#f59e0b]',
    },
    {
      title: 'SKILLS',
      icon: '🧶',
      description: 'Technologies, tools, and workflows.',
      color: 'hover:border-[#ef4444]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080611] text-[#e5ddff] overflow-hidden font-mono relative">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3d1f57_0%,transparent_40%)] opacity-70" />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,black_50%)] bg-[length:100%_4px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <header className="border border-[#4c3268] bg-[#120d1f]/95 rounded-2xl px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border border-[#7c4dff] rounded-xl bg-[#1b1230] flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(124,77,255,0.3)]">
              🦙
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-widest text-[#f5e9ff]">
                SEBASTIAN
              </h1>

              <p className="text-sm text-[#9e8cc9] mt-1 tracking-wide">
                QA Tester • Full-Stack Developer • Explorer
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm">
            {['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map(
              (item) => (
                <button
                  key={item}
                  className="border border-[#49345f] bg-[#1a1327] px-5 py-2 rounded-lg hover:border-[#8b5cf6] hover:text-[#c4b5fd] transition-all"
                >
                  {item}
                </button>
              )
            )}
          </nav>
        </header>

        {/* Main Layout */}
        <section className="grid lg:grid-cols-[340px_1fr] gap-6 mt-6">
          {/* Left Panel */}
          <div className="border border-[#49345f] bg-[#120d1f]/95 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <p className="text-[#4ade80] text-sm mb-5">&gt; WHOAMI</p>

              <h2 className="text-5xl font-bold leading-tight mb-6 text-[#f5e9ff]">
                Hey, I'm
                <br />
                <span className="text-[#a855f7]">Sebastian.</span>
              </h2>

              <p className="text-[#c5b8e6] leading-relaxed text-[15px]">
                Functional & Localization QA Tester and full-stack developer
                focused on building reliable systems, immersive interfaces, and
                weird little experiments.
              </p>

              <div className="mt-10 space-y-8 text-sm">
                <div>
                  <p className="text-[#4ade80] mb-2">CURRENTLY</p>
                  <p className="text-[#d6cbef] leading-relaxed">
                    Building projects, studying cloud systems, and experimenting
                    with UI/game-inspired experiences.
                  </p>
                </div>

                <div>
                  <p className="text-[#4ade80] mb-2">STATUS</p>

                  <div className="flex items-center gap-2 text-[#d6cbef]">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-4 gap-3 mt-10">
              {['GitHub', 'LinkedIn', 'CV', 'Email'].map((item) => (
                <button
                  key={item}
                  className="border border-[#49345f] bg-[#1a1327] px-2 py-3 rounded-xl text-xs hover:border-[#8b5cf6] hover:text-[#c4b5fd] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Cozy Apartment Scene */}
          <div className="relative border border-[#49345f] bg-[#120d1f]/95 rounded-2xl overflow-hidden min-h-[720px] shadow-2xl">
            {/* Wall Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#24152f] via-[#120d1f] to-[#0b0814]" />

            {/* Window */}
            <div className="absolute left-1/2 top-14 -translate-x-1/2 w-[420px] h-[260px] rounded-md border-4 border-[#3f2a59] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#203a78] to-[#09111f]" />

              {/* Rain */}
              <div className="absolute inset-0 opacity-40">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[2px] h-10 bg-[#9cc7ff]"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      transform: 'rotate(15deg)',
                    }}
                  />
                ))}
              </div>

              {/* Mountains */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#0b1228] clip-path-mountain" />

              {/* Machu Picchu silhouette */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-16 border border-[#3d4f91] bg-[#13203e] opacity-80" />
            </div>

            {/* Hanging Plant */}
            <div className="absolute left-10 top-12 text-5xl">🪴</div>

            {/* Lamp */}
            <div className="absolute left-32 bottom-52 w-6 h-32 bg-[#4b352d]">
              <div className="absolute -left-6 top-0 w-16 h-10 rounded-full bg-[#f59e0b] opacity-70 blur-xl" />
            </div>

            {/* Desk */}
            <div className="absolute left-1/2 bottom-32 -translate-x-1/2 w-[520px] h-10 bg-[#4b2e2a] border border-[#6d4b45]" />

            {/* Laptop */}
            <div className="absolute left-1/2 bottom-40 -translate-x-1/2 w-64 h-40 border-4 border-[#2d3f85] bg-[#09101f] rounded-md shadow-[0_0_25px_rgba(59,130,246,0.2)]">
              <div className="p-4 text-[#4ade80] text-sm space-y-2">
                <p>&gt; npm run dev</p>
                <p>&gt; server online</p>
                <p>&gt; deploying...</p>
                <p>&gt; _</p>
              </div>
            </div>

            {/* Coffee Mug */}
            <div className="absolute left-[32%] bottom-36 text-4xl">☕</div>

            {/* Little Llama */}
            <div className="absolute left-[38%] bottom-36 text-3xl">🦙</div>

            {/* Plant */}
            <div className="absolute right-28 bottom-32 text-6xl">🌿</div>

            {/* Shelf */}
            <div className="absolute right-0 top-0 w-48 h-full border-l border-[#49345f] bg-[#171021]/80">
              <div className="p-6">
                <div className="border border-[#49345f] rounded-2xl p-5 bg-[#0f0b18]">
                  <p className="text-[#4ade80] text-sm mb-4">&gt; SYSTEM MESSAGE</p>

                  <p className="text-[#d6cbef] text-sm leading-relaxed">
                    Welcome to my interactive portfolio. Explore projects,
                    experience, and experiments.
                  </p>

                  <div className="mt-6 w-full h-32 rounded-xl border border-[#49345f] bg-gradient-to-b from-[#355c9a] to-[#162033] flex items-center justify-center text-xs text-[#f5e9ff]">
                    Placerholder mountains
                  </div>

                  <div className="mt-6 text-sm text-[#c4b5fd]">
                    ♫ Now playing:
                  </div>

                  <p className="text-[#4ade80] text-sm mt-2">
                    Shadow of a man - Lady Gaga
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
          {cards.map((card) => (
            <button
              key={card.title}
              className={`text-left border border-[#49345f] bg-[#120d1f]/95 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${card.color}`}
            >
              <div className="text-5xl mb-6">{card.icon}</div>

              <h3 className="text-2xl font-bold tracking-wide text-[#f5e9ff]">
                {card.title}
              </h3>

              <p className="text-[#c5b8e6] text-sm mt-4 leading-relaxed">
                {card.description}
              </p>

              <div className="mt-8 text-sm text-[#c084fc] inline-flex items-center gap-2">
                ENTER →
              </div>
            </button>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-6 border border-[#49345f] bg-[#120d1f]/95 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#a799c8]">
          <div className="flex items-center gap-3">
            <span>🌱</span>
            <p>© 2026 Sebastian. Built with React + TypeScript.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="border border-[#49345f] bg-[#1a1327] px-4 py-2 rounded-xl">
              🇵🇪 From Peru
            </div>

            <div className="border border-[#49345f] bg-[#1a1327] px-4 py-2 rounded-xl">
              📍 Living in Poland
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
