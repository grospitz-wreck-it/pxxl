import Image from "next/image";
import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <Image
          src="/logo_green.webp"
          alt="pxxl productions"
          width={140}
          height={140}
          className="mx-auto"
          priority
        />

        <p className="mt-8 text-sm font-medium tracking-[0.2em] text-fuchsia-500">
          pxxl productions
        </p>

        <h1 className="mt-6 text-5xl font-black tracking-tight">
          nachricht gesendet.
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-neutral-600">
          danke für deine nachricht.
          <br />
          ich melde mich so schnell wie möglich.
        </p>

        <Link
    href="/"
    className="rounded-full border border-black bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
  >
    zurück.
  </Link>
      </div>
    </main>
  );
}