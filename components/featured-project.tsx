export default function FeaturedProject() {
  return (
    <section
      id="football-simulator"
      className="section pb-24"
    >
      <div className="card overflow-hidden">
        <div className="aspect-[16/9] bg-neutral-100" />

        <div className="p-8">
          <p className="text-sm text-neutral-500">
            featured project
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            football simulator
          </h2>

          <p className="mt-4 max-w-xl text-neutral-600">
            arcade football inspired by the golden age
            of the 80s.
          </p>

          <button className="mt-8 rounded-full border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100">
            learn more →
          </button>
        </div>
      </div>
    </section>
  );
}