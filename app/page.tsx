const event = {
  title: "Noche de música en vivo",
  date: "14 de noviembre de 2026",
  venue: "Teatro Nacional Manuel Bonilla, Tegucigalpa",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/30 sm:p-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {event.title}
        </h1>

        <div className="mt-8 space-y-4 text-lg text-slate-300">
          <p>
            <span className="block text-sm font-semibold uppercase tracking-widest text-violet-300">
              Fecha
            </span>
            {event.date}
          </p>
          <p>
            <span className="block text-sm font-semibold uppercase tracking-widest text-violet-300">
              Lugar
            </span>
            {event.venue}
          </p>
        </div>

        <button
          type="button"
          className="mt-10 w-full rounded-xl bg-violet-400 px-6 py-4 text-base font-bold text-slate-950 transition-colors hover:bg-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 sm:w-auto"
        >
          Registrame
        </button>
      </section>
    </main>
  );
}
