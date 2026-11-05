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
    icon: Sparkles,
    image: "https://www.dr1ft.de/dr1ft-hero-w.webp",
  },
  {
    number: "02",
    name: "MEINE SCHRANKE",
    category: "SMART HOME · MOBILITÄT",
    description:
      "Die smarte Verbindung zwischen Zufahrt, Alltag und digitaler Steuerung.",
    href: "https://meineschranke.com",
    action: "Meine Schranke entdecken",
    icon: CarFront,
    image: "https://www.meineschranke.com/_next/image?url=%2Fimages%2FFB554548-8AF6-482A-9CA4-0C38684C3951.webp&w=1920&q=75",
  },
  {
    number: "03",
    name: "HARD WAY UP",
    category: "ARCADE FOOTBALL",
    description:
      "Ein Fußball-Manager mit Retro-Feeling. Lokal verwurzelt, auf den Aufstieg aus.",
    href: "/games/hard-way-up",
    action: "Hard Way Up entdecken",
    icon: Gamepad2,
    image: "/hard-way-up-hero.webp",
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
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <Link
                  key={project.number}
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.035)] transition duration-500 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-500"
                  aria-label={project.action}
                >
                  <div
                    className="relative flex aspect-[1.9/1] flex-col justify-between overflow-hidden bg-[#17171b] bg-cover bg-center p-5 text-white sm:p-6"
                    style={{
                      backgroundImage: `linear-gradient(90deg, rgba(12,12,16,.82) 0%, rgba(12,12,16,.48) 58%, rgba(12,12,16,.22) 100%), linear-gradient(0deg, rgba(12,12,16,.72) 0%, transparent 72%), url("${project.image}")`,
                    }}
                  >
                    <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl transition duration-700 group-hover:scale-125" />
                    <div className="relative z-10 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold tracking-[0.22em] text-white/60">
                        {project.number} / 03
                      </span>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/70">
                        {project.category}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-semibold tracking-[0.28em] text-fuchsia-200/80">
                          PXXL PROJECT
                        </p>
                        <h3 className="text-3xl font-black leading-[0.92] tracking-[-0.07em] sm:text-4xl">
                          {project.name}
                        </h3>
                      </div>
                      <div className="mb-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 transition duration-500 group-hover:rotate-6 group-hover:scale-105">
                        <ProjectIcon size={23} strokeWidth={1.6} />
                      </div>
                    </div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* About – a deliberate, balanced typographic grid */}
      <section id="about" className="scroll-mt-24 border-y border-black/10 bg-white/35 px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-fuchsia-500">
              über
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.065em] sm:text-5xl md:text-7xl">
              pxxl productions
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-x-12 gap-y-9 md:grid-cols-2 md:gap-y-10">
            <div className="border-t-2 border-[#171717] pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-fuchsia-500">
                was wir machen
              </p>
              <p className="mt-4 text-lg leading-[1.55] text-neutral-700 sm:text-xl">
                pxxl productions entwickelt moderne apps, browsergames, webseiten,
                ki-tools, widgets und digitale produkte.
              </p>
            </div>

            <div className="border-t-2 border-[#171717] pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-fuchsia-500">
                worauf wir uns fokussieren
              </p>
              <p className="mt-4 text-lg leading-[1.55] text-neutral-700 sm:text-xl">
                performante webanwendungen, kreative digitale erlebnisse und
                innovative softwarelösungen für unternehmen, startups und eigene
                produkte.
              </p>
            </div>

            <div className="md:col-span-2 border-t border-black/15 pt-5 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                aus ostwestfalen für die region
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed tracking-[0.04em] text-neutral-600 sm:text-base">
                kirchlengern <span className="px-2 text-fuchsia-500">·</span> bünde
                <span className="px-2 text-fuchsia-500">·</span> löhne
                <span className="px-2 text-fuchsia-500">·</span> herford
                <span className="px-2 text-fuchsia-500">·</span> bielefeld
                <span className="px-2 text-fuchsia-500">·</span> osnabrück
                <span className="px-2 text-fuchsia-500">·</span> ostwestfalen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-28 pt-20 sm:px-6">
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
