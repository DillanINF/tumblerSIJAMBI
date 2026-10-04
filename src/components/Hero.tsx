import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Section is 240vh tall but the visuals are pinned (sticky) for that
  // whole span, so scrollYProgress crawls from 0 to 1 slowly.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const mountainBackY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const mountainFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.22], ["0%", "-30%"]);

  // Black tumbler
  const blackX = useTransform(scrollYProgress, [0, 1], ["0vw", "-65vw"]);
  const blackRotate = useTransform(scrollYProgress, [0, 1], [-6, -110]);
  const blackScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.05, 0.55]);
  const blackOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  // Blue tumbler
  const blueX = useTransform(scrollYProgress, [0, 1], ["0vw", "65vw"]);
  const blueRotate = useTransform(scrollYProgress, [0, 1], [6, 110]);
  const blueScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.05, 0.55]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  // Red tumbler
  const redY = useTransform(scrollYProgress, [0, 1], ["0%", "-140%"]);
  const redRotate = useTransform(scrollYProgress, [0, 1], [-3, 22]);
  const redScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.35, 1.7]);
  const redOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  // Vignette
  const vignette = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="top" className="relative h-[240vh]">
      {/* FIX: pt-20 pb-6 on mobile so content clears the navbar */}
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center pt-20 pb-6 md:pt-0 md:pb-0">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-rock-deep via-rock to-rock-soft" />

        <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-crimson/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[460px] w-[460px] rounded-full bg-royal/10 blur-3xl" />

        {/* Back mountains */}
        <motion.svg
          style={{ y: mountainBackY }}
          className="absolute bottom-0 left-0 w-full opacity-40"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 L0 180 L180 90 L340 200 L520 60 L700 190 L860 110 L1040 210 L1200 140 L1200 300 Z"
            fill="#17171A"
          />
        </motion.svg>

        {/* Front mountains */}
        <motion.svg
          style={{ y: mountainFrontY }}
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
        >
          <path
            d="M0 220 L0 140 L140 70 L300 160 L480 40 L660 150 L820 80 L1000 170 L1200 100 L1200 220 Z"
            fill="#0D0D0F"
          />
        </motion.svg>

        {/* Main content */}
        {/* FIX: gap-4 on mobile */}
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4 md:gap-8 items-center w-full">
          {/* Text */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
            }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-crimson font-display font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 sm:mb-4 animate-rise">
              More Than Just A Tumbler
            </p>

            <h1 className="font-display font-semibold uppercase text-3xl sm:text-5xl leading-[1.05] tracking-tight animate-rise [animation-delay:120ms]">
              Tetap Segar di Setiap Langkah
            </h1>

            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-ash max-w-md leading-relaxed mx-auto md:mx-0 animate-rise [animation-delay:220ms]">
              Aluminium premium, tahan suhu panas &amp; dingin, dan siap
              diajak ke mana pun aktivitasmu berlanjut.
            </p>

            {/* Buttons */}
            <div className="mt-5 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 animate-rise [animation-delay:320ms]">
              <a
                href="#pesan"
                className="rounded bg-crimson hover:bg-crimson-light transition-colors px-6 sm:px-7 py-2.5 sm:py-3 font-display font-semibold uppercase tracking-wide text-sm"
              >
                Pesan Sekarang
              </a>

              <a
                href="#varian"
                className="rounded border border-silver/30 hover:border-silver transition-colors px-6 sm:px-7 py-2.5 sm:py-3 font-display font-semibold uppercase tracking-wide text-sm"
              >
                Lihat Varian
              </a>
            </div>
          </motion.div>

          {/* Products */}
          {/* FIX: shorter on mobile (260px) */}
          <div className="order-1 md:order-2 relative h-[260px] sm:h-[360px] md:h-[440px] flex items-center justify-center">
            {/* Black tumbler */}
            <motion.div
              style={{
                x: blackX,
                rotate: blackRotate,
                scale: blackScale,
                opacity: blackOpacity,
              }}
              className="absolute left-[8%] sm:left-[14%] h-[78%]"
            >
              <img
                src="/images/product-black.png"
                alt="Tumbler SiJambi varian hitam"
                className="h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] animate-float"
              />
            </motion.div>

            {/* Blue tumbler */}
            <motion.div
              style={{
                x: blueX,
                rotate: blueRotate,
                scale: blueScale,
                opacity: blueOpacity,
              }}
              className="absolute right-[8%] sm:right-[14%] h-[78%]"
            >
              <img
                src="/images/product-blue.png"
                alt="Tumbler SiJambi varian biru"
                className="h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] animate-float [animation-delay:0.6s]"
              />
            </motion.div>

            {/* Red tumbler */}
            <motion.div
              style={{
                y: redY,
                rotate: redRotate,
                scale: redScale,
                opacity: redOpacity,
              }}
              className="absolute h-full z-10"
            >
              <img
                src="/images/product-red.png"
                alt="Tumbler SiJambi varian merah"
                className="h-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] animate-sway"
              />
            </motion.div>
          </div>
        </div>

        {/* Vignette */}
        <motion.div
          style={{ opacity: vignette }}
          className="pointer-events-none absolute inset-0 bg-rock"
        />

        {/* Scroll indicator: hidden on mobile so it doesn't overlap the buttons */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-6 inset-x-0 hidden md:flex justify-center"
        >
          <span className="h-9 w-5 rounded-full border border-silver/30 flex items-start justify-center p-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-silver/70 animate-pulseGlow" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
