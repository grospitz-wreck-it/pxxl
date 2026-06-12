export default function Footer() {
  return (
    <footer className="section pb-12">
      <div className="border-t border-neutral-200 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium">
              pxxl productions
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              digital products and interactive experiences.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#">github</a>
            <a href="#">contact</a>
            <a href="/impressum">imprint</a>
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          © 2025 pxxl productions
        </p>
      </div>
    </footer>
  );
}