import Image from "next/image";
import Link from "next/link";

export default function HardWayUpPage() {
  return (
    <main className="min-h-screen">
      <section>
        <Image
          src="/hard-way-up-hero.webp"
          alt="Hard Way Up"
          width={1920}
          height={1080}
          className="h-[50vh] w-full object-cover md:h-[70vh]"
          priority
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold tracking-[0.35em] text-fuchsia-500">
          PROJEKT 01
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-8xl">
          HARD WAY UP
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-neutral-600">
          Die Arcade-Fußballsimulation für das moderne Web.
        </p>
      </section>

      {/* Block 1 */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Image
            src="/hard-way-up-1.webp"
            alt=""
            width={1200}
            height={800}
            className="rounded-[32px]"
          />

          <div>
            <h2 className="text-4xl font-black">
              Arcade-Fußball neu gedacht.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Schnelle Spiele. Direkte Entscheidungen.
              Kein unnötiger Ballast.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Hard Way Up konzentriert sich auf das,
              was Fußballspiele seit den 80ern so
              unterhaltsam gemacht hat:
              sofortiger Spielspaß.
            </p>
          </div>
        </div>
      </section>

      {/* Block 2 */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-black">
              Vereine entwickeln.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Baue deinen Verein Schritt für Schritt auf.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Entwickle Talente,
              verbessere Infrastruktur
              und führe dein Team an die Spitze.
            </p>
          </div>

          <Image
            src="/hard-way-up-2.webp"
            alt=""
            width={1200}
            height={800}
            className="rounded-[32px]"
          />
        </div>
      </section>

      {/* Block 3 */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Image
            src="/hard-way-up-3.webp"
            alt=""
            width={1200}
            height={800}
            className="rounded-[32px]"
          />

          <div>
            <h2 className="text-4xl font-black">
              Gemeinsam mit Vereinen.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Hard Way Up soll mehr sein
              als nur ein Spiel.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Geplant sind Kooperationen,
              Turniere, Aktionen und
              individuelle Vereinsinhalte.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[40px] border border-black/10 p-10 text-center md:p-16">
          <h2 className="text-4xl font-black md:text-6xl">
            bald verfügbar.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Hard Way Up befindet sich aktuell
            in Entwicklung.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="#"
              className="rounded-full bg-black px-8 py-4 font-medium text-white transition hover:scale-[1.03]"
            >
              zum spiel →
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-black px-8 py-4 font-medium transition hover:scale-[1.03]"
            >
              partner-verein werden →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}