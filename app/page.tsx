import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#111111]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "pxxl productions",
      url: "https://pxxl-productions.de",
      areaServed: [
        "Kirchlengern",
        "Bünde",
        "Löhne",
        "Herford",
        "Bielefeld",
        "Osnabrück",
        "Ostwestfalen",
      ],
      knowsAbout: [
        "Webentwicklung",
        "Apps",
        "KI Tools",
        "Browsergames",
        "Digitale Produkte",
      ],
    }),
  }}
/>
      {/* hero */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={420}
            height={420}
            priority
            className="drop-shadow-[0_50px_120px_rgba(0,0,0,.15)]"
          />

          <p className="mt-10 text-sm font-medium tracking-[0.4em] text-fuchsia-500">
  pxxl productions
</p>

          <h1 className="mt-8 text-6xl font-black leading-[0.88] tracking-[-0.08em] md:text-8xl xl:text-[8rem]">
            tools.
            <br />
            games.
            <br />
            experiences.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-neutral-600">
            digital products for curious minds.
          </p>

          <a
            href="#project"
            className="mt-10 rounded-full bg-black px-7 py-4 font-medium text-white transition duration-300 hover:scale-[1.03]"
          >
            explore project →
          </a>
        </div>
      </section>

      {/* football simulator */}

<section
  id="project"
  className="relative pb-40 pt-10"
>
  {/* background number */}

  <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none">
    <span className="text-[18rem] font-black leading-none tracking-[-0.08em] text-black/[0.03] md:text-[32rem]">
      01
    </span>
  </div>

  {/* intro */}

  <div className="relative mx-auto max-w-7xl px-6">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-500">
      project 01
    </p>

    <h2 className="mt-6 text-6xl font-black tracking-[-0.07em] md:text-8xl xl:text-[9rem]">
      HARD
      <br />
      WAY 
      <br />
      UP

    </h2>

    <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-neutral-600 md:text-3xl">
      80s arcade football simulation.
      <br />
      rebuilt for the web.
    </p>
  </div>

  {/* artwork */}

  <div className="relative mt-24">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f7f4]" />

    <Image
      src="/football-simulator-cover-1.webp"
      alt="football simulator"
      width={1920}
      height={1080}
      className="w-full object-cover"
      priority
    />
  </div>

  {/* values */}

  <div className="mx-auto mt-24 max-w-7xl px-6">
    <div className="grid gap-12 border-t border-black/10 pt-16 md:grid-cols-3">
      <div>
        <p className="text-5xl font-black tracking-tight">
          fast.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          quick matches with instant action.
        </p>
      </div>

      <div>
        <p className="text-5xl font-black tracking-tight">
          fun.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          inspired by the golden age of arcade football.
        </p>
      </div>

      <div>
        <p className="text-5xl font-black tracking-tight">
          instant.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          jump in and start playing immediately.
        </p>
      </div>
    </div>

    <div className="mt-16">
      <button className="rounded-full bg-black px-8 py-4 font-medium text-white transition hover:scale-[1.03]">
        learn more →
      </button>
    </div>
  </div>
</section>

      <section
  id="about"
  className="mx-auto max-w-7xl px-6 pb-32"
>
  <div className="border-t border-black/10 pt-20">
    <p className="text-xs font-semibold tracking-[0.35em] text-fuchsia-500">
      about
    </p>

    <h2 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
      pxxl productions
    </h2>

    <p className="mt-10 max-w-4xl text-xl leading-relaxed text-neutral-600">
      pxxl productions entwickelt moderne webseiten,
      apps, ki-tools, widgets, browsergames und
      digitale produkte.
    </p>

    <p className="mt-6 max-w-4xl text-xl leading-relaxed text-neutral-600">
      der fokus liegt auf performanten webanwendungen,
      kreativen digitalen erlebnissen und innovativen
      softwarelösungen für unternehmen, startups und
      eigene produkte.
    </p>

    <p className="mt-6 max-w-4xl text-xl leading-relaxed text-neutral-600">
      tätig in kirchlengern, bünde, löhne, herford,
      bielefeld, osnabrück und ganz ostwestfalen.
    </p>
  </div>
</section>

      {/* footer */}

      <footer className="mx-auto max-w-7xl px-6 pb-12">
        <div className="border-t border-black/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="pxxl productions"
                width={36}
                height={36}
              />

              <span className="font-medium">
                pxxl productions
              </span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#">github</a>
              <a href="#">contact</a>
              <a href="/imprint">imprint</a>
            </div>
          </div>
<div className="mt-10 border-t border-black/10 pt-8 text-sm text-neutral-500">
  <p>
    webseiten · apps · ki-tools · widgets ·
    browsergames · digitale produkte
  </p>

  <p className="mt-3">
    kirchlengern · bünde · löhne · herford ·
    bielefeld · osnabrück · ostwestfalen
  </p>
</div>
          <p className="mt-8 text-center text-xs text-neutral-400">
            © 2026 pxxl productions
          </p>
        </div>
      </footer>
    </main>
  );
}