import Image from "next/image";

export default function Hero() {
  return (
    <section className="section pt-12 pb-24">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo.webp"
          alt="pxxl productions"
          width={160}
          height={160}
          priority
        />

        <p className="mt-8 text-sm tracking-wide text-neutral-500">
          pxxl productions
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
          building digital products people actually enjoy.
        </h1>

        <p className="mt-8 text-lg text-neutral-600">
          gaming.
          <br />
          entertainment.
          <br />
          digital experiences.
        </p>

        <a
          href="#football-simulator"
          className="mt-10 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
        >
          explore project →
        </a>
      </div>
    </section>
  );
}