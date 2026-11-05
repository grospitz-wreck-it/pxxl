import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Gamepad2,
  Mail,
  Sparkles,
} from "lucide-react";
import Aurora from "@/components/aurora";

const projects = [
  {
    number: "01",
    name: "DR1FT",
    category: "DIGITALE PLATTFORM",
    description:
      "Ein neuer digitaler Raum für Lernen, Austausch und Zusammenarbeit.",
    href: "https://dr1ft.de",
    action: "DR1FT entdecken",
    theme: "dark",
  },
  {
    number: "02",
    name: "MEINE SCHRANKE",
    category: "SMART HOME · MOBILITÄT",
    description:
      "Die smarte Verbindung zwischen Zufahrt, Alltag und digitaler Steuerung.",
    href: "https://meineschranke.com",
    action: "Meine Schranke entdecken",
    theme: "light",
  },
  {
    number: "03",
    name: "HARD WAY UP",
    category: "ARCADE FOOTBALL",
    description:
      "Ein Fußball-Manager mit Retro-Feeling. Lokal verwurzelt, auf den Aufstieg aus.",
    href: "/games/hard-way-up",
    action: "Hard Way Up entdecken",
    theme: "game",
  },
];

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

      {/* Always-visible navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#f7f7f4]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
          <Link
            href="/"
            aria-label="pxxl productions – Startseite"
            className="text-sm font-semibold tracking-[-0.03em]"
          >
            pxxl <span className="font-normal text-neutral-500">productions</span>
          </Link>

          <nav className="flex items-center gap-5 sm:gap-8" aria-label="Hauptnavigation">
            <Link
              href="#about"
              className="hidden text-sm text-neutral-600 transition hover:text-black sm:inline-flex"
            >
              about
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#111111] py-1.5 pl-5 pr-2 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500"
            >
              kontakt <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"><Mail size={14} strokeWidth={1.8} /></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Brand hero – existing logo remains the visual centre */}
      <section className="relative isolate overflow-hidden pt-[72px]">
        <Aurora />
        <div className="relative mx-auto flex min-h-[calc(88svh-72px)] max-w-5xl flex-col items-center justify-center px-6 pb-16 pt-12 text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={420}
            height={420}
            priority
            className="h-auto w-[220px] drop-shadow-[0_50px_120px_rgba(0,0,0,.15)] sm:w-[280px] md:w-[360px]"
          />

          <p className="mt-8 text-xs font-medium tracking-[0.4em] text-fuchsia-500 sm:text-sm">
            pxxl productions
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[0.92] tracking-[-0.08em] sm:text-6xl md:text-7xl">
            tools.
            <br />
            games.
            <br />
            experiences.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            digitale produkte für neugierige köpfe.
          </p>

          <Link
            href="#projects"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:border-fuchsia-300 hover:text-fuchsia-600"
          >
            projekte entdecken <ArrowDown size={15} />
          </Link>
        </div>
      </section>

      {/* Equal-weight project navigation */}
      <section id="projects" className="scroll-mt-24 px-5 pb-28 pt-10 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-4 border-b border-black/10 pb-6 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-500">
                ausgewählte projekte
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-5xl">
                Dinge, die wir bauen.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-right">
              Drei Ideen. Drei eigene digitale Welten. Entdecke, was dahintersteckt.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.number}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.035)] transition duration-500 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500"
                aria-label={project.action}
              >
                <div
                  className={
                    project.theme === "dark"
                      ? "relative flex aspect-[1.65/1] flex-col justify-between overflow-hidden bg-[#17171b] p-5 text-white sm:p-6"
                      : project.theme === "light"
                        ? "relative flex aspect-[1.28/1] flex-col justify-between overflow-hidden bg-[#e9e9e5] p-5 text-[#171717] sm:p-6"
                        : "relative flex aspect-[1.28/1] flex-col justify-between overflow-hidden bg-[#25231f] p-6 text-white sm:p-7"
                  }
                >
                  <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl transition duration-700 group-hover:scale-125" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.22em] opacity-65">
                      {project.number} / 03
                    </span>
                    <span className="rounded-full border border-current/20 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] opacity-70">
                      {project.category}
                    </span>
                  </div>

                  {project.theme === "dark" ? (
                    <div className="relative z-10">
                      <div className="mb-3 flex items-center gap-2 text-fuchsia-300">
                        <Sparkles size={17} />
                        <span className="text-[10px] font-semibold tracking-[0.3em]">A DIGITAL EXPERIENCE</span>
                      </div>
                      <div className="text-[clamp(3rem,6vw,4.6rem)] font-black leading-none tracking-[-0.09em]">
                        DR1FT<span className="text-fuchsia-400">.</span>
                      </div>
                    </div>
                  ) : project.theme === "light" ? (
                    <div className="relative z-10 flex items-end justify-between">
                      <div className="max-w-[75%]">
                        <p className="text-[10px] font-semibold tracking-[0.28em] text-neutral-500">SMART ACCESS</p>
                        <div className="mt-2 text-3xl font-black leading-[0.9] tracking-[-0.07em] sm:text-4xl">
                          MEINE
                          <br />
                          SCHRANKE
                        </div>
                      </div>
                      <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                        <CarFront size={34} strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 flex items-end justify-between gap-3">
                      <div>
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.28em] text-orange-200/75">ARCADE FOOTBALL</p>
                        <div className="text-4xl font-black leading-[0.86] tracking-[-0.08em] sm:text-5xl">
                          HARD
                          <br />
                          WAY UP
                        </div>
                      </div>
                      <div className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-105">
                        <Gamepad2 size={34} strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {project.description}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-5 text-sm font-semibold">
                    <span>{project.action}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition duration-300 group-hover:bg-fuchsia-500 group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-28 sm:px-6">
        <div className="border-t border-black/10 pt-16 text-center sm:pt-20">
          <p className="text-xs font-semibold tracking-[0.35em] text-fuchsia-500">
            über
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            pxxl productions
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            pxxl productions entwickelt moderne apps, browsergames, webseiten, ki-tools,
            widgets und digitale produkte.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            der fokus liegt auf performanten webanwendungen, kreativen digitalen
            erlebnissen und innovativen softwarelösungen für unternehmen,
            startups und eigene produkte.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
            tätig in kirchlengern, bünde, löhne, herford, bielefeld, osnabrück
            und ganz ostwestfalen.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-6">
        <div className="rounded-[32px] border border-black/10 bg-white/65 px-6 py-14 text-center shadow-[0_12px_50px_rgba(0,0,0,0.035)] sm:px-12 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-fuchsia-500">
            pxxl productions
          </p>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.06em] sm:text-4xl md:text-6xl">
            bereit für dein nächstes projekt?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            webseiten. apps. ki-tools. widgets. browsergames. digitale produkte.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-7 py-4 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-600"
          >
            kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-5 pb-10 sm:px-6">
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="pxxl productions"
                width={36}
                height={36}
              />
              <span className="font-medium">pxxl productions</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/imprint">impressum</Link>
              <Link href="/privacy">datenschutz</Link>
            </div>
          </div>
          <div className="mt-8 border-t border-black/10 pt-6 text-center text-xs leading-relaxed text-neutral-500">
            <p>
              webseiten · apps · ki-tools · widgets · browsergames · digitale produkte
            </p>
            <p className="mt-2">
              kirchlengern · bünde · löhne · herford · bielefeld · osnabrück · ostwestfalen
            </p>
            <p className="mt-6 text-neutral-400">© 2026 pxxl productions</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
