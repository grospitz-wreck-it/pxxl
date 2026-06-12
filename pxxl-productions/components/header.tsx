import Image from "next/image";

export default function Header() {
  return (
    <header className="section py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="pxxl productions"
            width={36}
            height={36}
            priority
          />

          <span className="text-sm font-medium">
            pxxl productions
          </span>
        </div>

        <a
          href="#football-simulator"
          className="text-sm text-neutral-600 hover:text-black transition"
        >
          project
        </a>
      </div>
    </header>
  );
}