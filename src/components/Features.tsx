import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Bahan Aluminium Premium",
    desc: "Konstruksi solid yang tahan gores dan benturan pemakaian harian.",
    icon: (
      <path d="M12 3 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-4Z" />
    ),
  },
  {
    title: "Tahan Suhu Panas & Dingin",
    desc: "Menjaga suhu minuman tetap stabil dalam durasi lama.",
    icon: (
      <path d="M12 3v11m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2-8h4" />
    ),
  },
  {
    title: "Ringan & Praktis",
    desc: "Nyaman digenggam dan mudah dibawa ke mana saja.",
    icon: (
      <path d="M6 4c4 3 8 3 12 0M4 12c5 2 11 2 16 0M6 20c4-3 8-3 12 0" />
    ),
  },
  {
    title: "Anti Bocor",
    desc: "Tutup rapat dengan seal berkualitas, aman di dalam tas.",
    icon: (
      <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11Z" />
    ),
  },
  {
    title: "Cocok untuk Segala Aktivitas",
    desc: "Dari commuting harian sampai naik gunung, siap menemani.",
    icon: (
      <path d="M3 20 9 8l4 7 3-5 5 10Z" />
    ),
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="fitur" className="py-24 md:py-28 bg-rock-soft/60 border-y border-rock-line">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight text-center mb-14">
          Dibangun untuk Dipakai, Bukan Dipajang
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="rounded border border-rock-line bg-rock/60 p-6 hover:border-crimson/60 transition-colors"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D21F2E"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
              <h3 className="font-display font-medium uppercase text-sm tracking-wide mt-4">
                {f.title}
              </h3>
              <p className="text-ash text-sm mt-2 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
