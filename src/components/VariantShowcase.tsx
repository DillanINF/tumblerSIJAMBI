import { useState } from "react";
import { motion } from "framer-motion";
import OrderModal from "./OrderModal";

const variants = [
  {
    name: "Hitam",
    tag: "STEALTH",
    img: "/images/product-black.png",
    accent: "#8B8B8F",
    description:
      "Tampilan hitam yang tegas dan minimalis untuk karakter yang kuat.",
    price: 45000,
  },
  {
    name: "Merah",
    tag: "CRIMSON",
    img: "/images/product-red.png",
    accent: "#D21F2E",
    description:
      "Merah berani dengan karakter agresif dan penuh energi.",
    price: 45000,
  },
  {
    name: "Biru",
    tag: "ROYAL",
    img: "/images/product-blue.png",
    accent: "#4C7CD1",
    description:
      "Biru elegan dengan karakter modern dan profesional.",
    price: 45000,
  },
];

export default function VariantShowcase() {
  const [active, setActive] = useState(0);
  const [orderOpen, setOrderOpen] = useState(false);

  const current = variants[active];

  const nextVariant = () => {
    setActive((prev) => (prev + 1) % variants.length);
  };

  const previousVariant = () => {
    setActive(
      (prev) => (prev - 1 + variants.length) % variants.length
    );
  };

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(current.price);

  return (
    <section
      id="varian"
      className="relative scroll-mt-20 overflow-hidden border-y border-rock-line bg-rock-soft/60 py-24 md:py-32"
    >
      {/* Background glow */}
      <motion.div
        key={current.name}
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(circle at 50% 45%, ${current.accent}20, transparent 45%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-ash">
              Pilih gayamu
            </p>

            <h2 className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">
              Pilih{" "}
              <span style={{ color: current.accent }}>
                Karaktermu
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-ash">
              Tiga karakter berbeda, satu standar kualitas.
              Pilih warna yang paling cocok dengan gaya kamu.
            </p>
          </div>

          <div className="font-display text-right">
            <span className="text-5xl font-semibold">
              {String(active + 1).padStart(2, "0")}
            </span>

            <span className="mx-2 text-ash">/</span>

            <span className="text-ash">03</span>
          </div>
        </div>

        {/* SHOWCASE */}
        <div className="overflow-hidden rounded-2xl border border-rock-line bg-rock">
          <div className="grid min-h-[650px] lg:grid-cols-[1.1fr_0.9fr]">
            {/* PRODUCT AREA */}
            <div className="relative flex items-center justify-center overflow-hidden px-8 py-16 md:px-16">
              {/* Glow */}
              <motion.div
                key={`glow-${current.name}`}
                className="absolute h-[400px] w-[400px] rounded-full blur-3xl"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 0.25,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                style={{
                  backgroundColor: current.accent,
                }}
              />

              {/* PRODUCT */}
              <motion.img
                key={current.img}
                src={current.img}
                alt={`Tumbler ${current.name}`}
                className="relative z-10 h-[380px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.65)] md:h-[480px]"
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  y: 60,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                  rotate: 0,
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                  },
                  scale: {
                    duration: 0.5,
                  },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 0.5,
                  },
                }}
              />

              {/* Shadow */}
              <motion.div
                className="absolute bottom-12 h-6 w-44 rounded-full blur-xl"
                style={{
                  backgroundColor: current.accent,
                }}
                animate={{
                  opacity: [0.1, 0.25, 0.1],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Product label */}
              <div className="absolute bottom-7 left-7 hidden text-[10px] uppercase tracking-[0.3em] text-ash/50 md:block">
                SiJambi / Premium Tumbler
              </div>
            </div>

            {/* INFO */}
            <div className="flex flex-col justify-between border-t border-rock-line p-8 md:p-12 lg:border-l lg:border-t-0">
              <div>
                {/* TAG */}
                <div className="mb-6 flex items-center gap-3">
                  <motion.span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: current.accent,
                      boxShadow: `0 0 15px ${current.accent}`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <span
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{
                      color: current.accent,
                    }}
                  >
                    {current.tag}
                  </span>
                </div>

                {/* NAME + DESCRIPTION */}
                <motion.div
                  key={current.name}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <h3 className="font-display text-4xl font-semibold uppercase md:text-5xl">
                    {current.name}
                  </h3>

                  <p className="mt-6 leading-relaxed text-ash">
                    {current.description}
                  </p>
                </motion.div>

                {/* PRICE */}
                <motion.div
                  key={`price-${current.name}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1,
                  }}
                  className="mt-8"
                >
                  <p id="varian-tumbler" className="mb-1 text-xs uppercase tracking-[0.25em] text-ash">
                    Harga
                  </p>

                  <p
                    className="font-display text-3xl font-semibold md:text-4xl"
                    style={{
                      color: current.accent,
                    }}
                  >
                    {formattedPrice}
                  </p>
                </motion.div>

                {/* FEATURES */}
                <div className="mt-8 space-y-4 border-t border-rock-line pt-7">
                  <div className="flex justify-between border-b border-rock-line pb-4">
                    <span className="text-sm text-ash">
                      Material
                    </span>

                    <span className="text-sm">
                      Premium Steel
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-rock-line pb-4">
                    <span className="text-sm text-ash">
                      Insulation
                    </span>

                    <span className="text-sm">
                      Double Wall
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-sm text-ash">
                      Series
                    </span>

                    <span className="text-sm">
                      Mountain Series
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM CONTROLS */}
              <div className="mt-10">
                {/* ORDER BUTTON: membuka form pemesanan */}
                <motion.button
                  type="button"
                  onClick={() => setOrderOpen(true)}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group mb-7 flex w-full items-center justify-between rounded-xl px-5 py-4 font-semibold text-white transition-all"
                  style={{
                    backgroundColor: current.accent,
                  }}
                >
                  <span>Pesan Sekarang</span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>

                {/* SWITCH VARIANT */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-ash">
                    Ganti varian
                  </span>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={previousVariant}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-rock-line transition hover:bg-white/10"
                      aria-label="Varian sebelumnya"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={nextVariant}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-rock-line transition hover:bg-white/10"
                      aria-label="Varian berikutnya"
                    >
                      →
                    </button>
                  </div>
                </div>

                {/* PROGRESS */}
                <div className="mb-6 h-[2px] w-full bg-white/10">
                  <motion.div
                    className="h-full"
                    animate={{
                      width: `${((active + 1) / 3) * 100}%`,
                    }}
                    style={{
                      backgroundColor: current.accent,
                    }}
                  />
                </div>

                {/* VARIANT BUTTONS */}
              <div className="flex items-center gap-3">
  {variants.map((variant, index) => {
    const isActive = active === index;

    return (
      <motion.button
        type="button"
        key={variant.name}
        onClick={() => setActive(index)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
        className="relative flex h-10 w-10 items-center justify-center"
        aria-label={`Pilih ${variant.name}`}
      >
        {/* Glow saat aktif */}
        {isActive && (
          <motion.span
            layoutId="activeGlow"
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: variant.accent,
              filter: "blur(10px)",
              opacity: 0.45,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          />
        )}

        {/* Lingkaran luar */}
        <motion.span
          animate={{
            borderColor: isActive
              ? variant.accent
              : "rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.25 }}
          className="relative flex h-9 w-9 items-center justify-center rounded-full border-2"
        >
          {/* Warna produk */}
          <motion.span
            animate={{
              scale: isActive ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="block h-6 w-6 rounded-full"
            style={{
              backgroundColor: variant.accent,
            }}
          />

          {/* Titik tengah saat aktif */}
          {isActive && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute h-2 w-2 rounded-full bg-white"
            />
          )}
        </motion.span>
      </motion.button>
    );
  })}
</div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.2em] text-ash md:flex-row">
          <span>
            Designed for everyday adventure
          </span>

          <span>
            Built in Indonesia
          </span>
        </div>
      </div>

      {/* FORM PEMESANAN */}
      <OrderModal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        defaultVariant={current.name}
        unitPrice={current.price}
      />
    </section>
  );
}
