import Image from "next/image";
import Link from "next/link";
import Aurora from "@/components/aurora";
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

      <section className="relative isolate overflow-hidden">
        <Aurora />

        <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={420}
            height={420}
            priority
            className="h-auto w-[220px] drop-shadow-[0_50px_120px_rgba(0,0,0,.15)] sm:w-[280px] md:w-[360px]"
          />

          <p className="mt-10 text-sm font-medium tracking-[0.4em] text-fuchsia-500">
            pxxl productions
          </p>

          <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-6xl md:text-8xl xl:text-[8rem]">
            tools.
            <br />
            games.
            <br />
            experiences.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-lg sm:text-xl">
            digital products for curious minds.
          </p>
        </div>
      </section>

      {/* football simulator */}

      <section id="project" className="relative pb-40 pt-10">
  <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none">
    <span className="text-[8rem] font-black leading-none tracking-[-0.08em] text-black/[0.03] md:text-[32rem]">
      01
    </span>
  </div>

  <div className="relative mx-auto max-w-7xl px-6">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-500">
      projekt 01
    </p>

    <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl md:text-8xl xl:text-[9rem]">
      HARD
      <br />
      WAY
      <br />
      UP
    </h2>

    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-600 md:text-3xl">
      die arcade-fußballsimulation
      <br />
      fürs smartphone.
    </p>
  </div>

  <div className="relative mt-24">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f7f4]" />

    <Image
      src="/football-simulator-cover-1.webp"
      alt="Hard Way Up"
      width={1920}
      height={1080}
      className="aspect-[4/5] w-full object-cover md:aspect-auto"
      priority
    />
  </div>

  <div className="mx-auto mt-24 max-w-7xl px-6">
    <div className="grid gap-12 border-t border-black/10 pt-16 md:grid-cols-3">
      <div>
        <p className="text-5xl font-black tracking-tight">
          schnell und kostenlos.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          verein wählen, spiel starten und aufsteigen.
          kostenlos und ohne anmeldung spielbar
        </p>
      </div>

      <div>
        <p className="text-5xl font-black tracking-tight">
          taktisch und interaktiv.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          du greifst aktiv ins spielgeschehen ein. neben und auf dem platz.
          aufstellungen, taktik, management.
        </p>
      </div>

      <div>
        <p className="text-5xl font-black tracking-tight">
          hyperlokal und retro.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          bringe den verein deiner nachbarschaft in die erste liga. 
          im look der 80er jahre.
        </p>
      </div>
    </div>

    <div className="mt-16">
      <Link
        href="/games/hard-way-up"
        className="inline-flex rounded-full bg-black px-8 py-4 font-medium text-white transition hover:scale-[1.03]"
      >
        mehr →
      </Link>
    </div>
  </div>
</section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-32">
        <div className="border-t border-black/10 pt-20">
          <p className="text-xs font-semibold tracking-[0.35em] text-fuchsia-500">
            über
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            pxxl productions
          </h2>

          <p className="mt-10 max-w-4xl text-lg sm:text-xl leading-relaxed text-neutral-600">
            pxxl productions entwickelt moderne apps, browsergames, webseiten, ki-tools,
            widgets und digitale produkte.
          </p>

          <p className="mt-6 max-w-4xl text-lg sm:text-xl leading-relaxed text-neutral-600">
            der fokus liegt auf performanten webanwendungen, kreativen digitalen
            erlebnissen und innovativen softwarelösungen für unternehmen,
            startups und eigene produkte.
          </p>

          <p className="mt-6 max-w-4xl text-lg sm:text-xl leading-relaxed text-neutral-600">
            tätig in kirchlengern, bünde, löhne, herford, bielefeld, osnabrück
            und ganz ostwestfalen.
          </p>
        </div>
      </section>

<section className="mx-auto max-w-7xl px-6 pb-32">
  <div className="rounded-[40px] border border-black/10 bg-gradient-to-br from-fuchsia-500/5 to-transparent p-10 text-center md:p-16">
    <p className="text-sm font-medium tracking-[0.25em] text-fuchsia-500">
      pxxl productions
    </p>

    <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
      bereit für dein projekt.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
      webseiten, apps, ki-tools, browsergames und digitale produkte.
    </p>

    <Link
      href="/contact"
      className="mt-10 inline-flex rounded-full bg-fuchsia-500 px-8 py-4 font-medium text-white transition duration-300 hover:scale-[1.03]"
    >
      kontakt.
    </Link>
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

              <span className="font-medium">pxxl productions</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-start">
              <Link href="/imprint">
  impressum
</Link>
              <Link href="/privacy">
  datenschutz
</Link>
            </div>
          </div>
        <div className="mt-10 border-t border-black/10 pt-8 text-center text-sm text-neutral-500">
  <p className="mx-auto max-w-3xl">
    webseiten · apps · ki-tools · widgets · browsergames · digitale
    produkte
  </p>

  <p className="mx-auto mt-3 max-w-3xl">
    kirchlengern · bünde · löhne · herford · bielefeld · osnabrück ·
    ostwestfalen
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
