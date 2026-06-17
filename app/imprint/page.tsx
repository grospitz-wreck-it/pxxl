import Image from "next/image";
import Link from "next/link";

export default function ImprintPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={140}
            height={140}
            className="mx-auto"
            priority
          />

          <h1 className="mt-8 text-5xl font-black tracking-tight">
            impressum
          </h1>

          <p className="mt-4 text-neutral-600">
            rechtliche information gem. § 5 ddg
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-xl font-bold">
              information gem. § 5 ddg
            </h2>

            <div className="mt-4 space-y-2 text-neutral-700">
              <p>pxxl productions UG (haftungsbeschränkt)</p>
              <p>Lönsweg 12</p>
              <p>32278 Kirchlengern</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              vertreten durch
            </h2>

            <p className="mt-4 text-neutral-700">
              Christian Grospitz
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              kontact
            </h2>

            <div className="mt-4 space-y-2 text-neutral-700">
              <p>e-mail: info@pxxl.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              handelsregister
            </h2>

            <div className="mt-4 space-y-2 text-neutral-700">
              <p>Amtsgericht Bad Oeynhausen</p>
              <p>HRB 21071</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              verantwortlich für den inhalt gem. § 18 abs. 2 mstv
            </h2>

            <div className="mt-4 space-y-2 text-neutral-700">
              <p>Christian Grospitz</p>
              <p>Lönsweg 12</p>
              <p>32278 Kirchlengern</p>
              <p>Deutschland</p>
            </div>
          </section>
        </div>

        <div className="mt-20">
          <Link
            href="/"
            className="inline-flex rounded-full bg-black px-6 py-3 text-white transition hover:scale-[1.03]"
          >
            zurück.
          </Link>
        </div>
      </div>
    </main>
  );
}