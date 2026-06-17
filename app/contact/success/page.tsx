import Image from "next/image";
import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <Image
          src="/logo_green.webp"
          alt="pxxl productions"
          width={140}
          height={140}
          className="mx-auto"
          priority
        />

        <p className="mt-8 text-sm font-medium tracking-[0.25em] text-fuchsia-500">
          pxxl productions
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
          nachricht gesendet.
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
          danke für deine nachricht.
          <br />
          ich melde mich so schnell wie möglich.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="rounded-full border border-black bg-transparent px-8 py-4 font-medium text-black transition duration-300 hover:scale-[1.03]"
          >
            zurück.
          </Link>
        </div>
      </div>
    </main>
  );
}