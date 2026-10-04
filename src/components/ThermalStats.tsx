import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DialProps {
  label: string;
  value: string;
  detail: string;
  percent: number;
  color: string;
  delay: number;
}

function Dial({ label, value, detail, percent, color, delay }: DialProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const target = circumference * (1 - percent / 100);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#26262A" strokeWidth="10" />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? target : circumference }}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display font-semibold text-3xl">{value}</span>
        </div>
      </div>
      <p className="mt-5 font-display uppercase tracking-wide text-sm">{label}</p>
      <p className="text-ash text-sm mt-1 max-w-[16rem]">{detail}</p>
    </div>
  );
}

export default function ThermalStats() {
  return (
    <section id="suhu" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-lg mb-16">
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight">
            Tahan Suhu Panas &amp; Dingin
          </h2>
          <p className="text-ash mt-4 leading-relaxed">
            Diuji dalam pemakaian nyata, bukan cuma klaim di kemasan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-16 justify-items-center">
          <Dial
            label="Dingin bertahan"
            value="24 jam"
            detail="Es tetap padat lebih dari sehari penuh pada suhu ruang."
            percent={100}
            color="#4C7CD1"
            delay={0}
          />
          <Dial
            label="Panas bertahan"
            value="12 jam"
            detail="Minuman panas tetap hangat dari pagi sampai malam."
            percent={50}
            color="#D21F2E"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
