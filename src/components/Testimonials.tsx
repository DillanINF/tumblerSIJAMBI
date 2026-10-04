import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "Tumbler aku sering pecah dan sering dihajar mamahku, Lalu aku beralih ke produk SIJAMBI dan kualitasnya bertahan lama dan kuat.",
    name: "Wowok.",
    role: "Pelajar",
  },
  {
    text: "Suhu kopi gueh bertahan lama dari pagi sampe sore coy.",
    name: "Jokowi.",
    role: "Pekerja kantoran",
  },
  {
    text: "Botolnya mantap bangat cuyy, gueh pekerja lapangan dan es di dalam tumblernya bertahan lama cok.",
    name: "Azam Kumis",
    role: "Pekerja lapangan",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + quotes.length) % quotes.length);
  };

  return (
    <section id="ulasan" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight mb-14">
          Dipakai, Bukan Dipajang
        </h2>

        <div className="relative min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="absolute"
            >
              <p className="text-xl md:text-2xl leading-relaxed">
                “{quotes[index].text}”
              </p>
              <footer className="mt-6 text-ash text-sm">
                {quotes[index].name} · {quotes[index].role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Ulasan sebelumnya"
            className="h-10 w-10 rounded-full border border-rock-line hover:border-crimson hover:text-royal transition-colors flex items-center justify-center"
          >
            ←
          </button>
          <div className="flex gap-2">
            {quotes.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-royal" : "bg-rock-line"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Ulasan berikutnya"
            className="h-10 w-10 rounded-full border border-rock-line hover:border-crimson hover:text-royal transition-colors flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
