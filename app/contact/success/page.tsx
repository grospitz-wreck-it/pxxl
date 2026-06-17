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
          message sent.
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-neutral-600">
          thank you for your message.
          <br />
          i'll get back to you as soon as possible.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-black px-8 py-4 text-white transition hover:scale-[1.03]"
        >
          back to homepage
        </Link>
      </div>
    </main>
  );
}