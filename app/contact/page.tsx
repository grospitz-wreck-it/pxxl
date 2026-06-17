import Image from "next/image";
import Link from "next/link";
export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={180}
            height={180}
            className="mx-auto"
            priority
          />

          <h1 className="mt-8 text-5xl font-black tracking-tight">
            contact
          </h1>

          <p className="mt-4 text-neutral-600">
            let's build something interesting.
          </p>

        </div>

        <form
          action="/api/contact"
          method="POST"
          className="mt-16 space-y-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              betreff
            </label>

            <select
              name="subject"
              required
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4"
            >
              <option value="anfrage">
                anfrage
              </option>

              <option value="auftrag">
                auftrag
              </option>

              <option value="sonstiges">
                sonstiges
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              name
            </label>

            <input
              type="text"
              name="name"
              required
              className="w-full rounded-2xl border border-black/10 px-5 py-4"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              e-mail
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-black/10 px-5 py-4"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              nachricht
            </label>

            <textarea
              name="nachricht"
              required
              rows={8}
              className="w-full rounded-2xl border border-black/10 px-5 py-4"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-black px-8 py-4 text-white"
          >
            senden.
          </button>
          <div className="flex justify-end">
  <div className="mt-6 flex justify-end">
  <Link
    href="/"
    className="rounded-full border border-black bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
  >
    zurück.
  </Link>
</div>
</div>
        </form>
        
      </div>
      
    </main>
  );
}