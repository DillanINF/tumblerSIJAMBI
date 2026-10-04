import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-rock/90 backdrop-blur-md border-b border-rock-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="SiJambi Logo"
            className="h-9 w-9 object-contain"
          />

          <span className="font-display font-semibold tracking-wide text-lg uppercase">
            Tumbler <span className="text-crimson">SiJambi</span>
          </span>
        </a>

        {/* NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 text-sm text-silver/75 font-medium">
          <a
            href="#fitur"
            className="hover:text-silver transition-colors"
          >
            Fitur
          </a>

          <a
            href="#suhu"
            className="hover:text-silver transition-colors"
          >
            Ketahanan Suhu
          </a>

          <a
            href="#varian"
            className="hover:text-silver transition-colors"
          >
            Varian
          </a>

          <a
            href="#ulasan"
            className="hover:text-silver transition-colors"
          >
            Ulasan
          </a>
        </div>

        {/* ORDER BUTTON */}
        <a
          href="#pesan"
          className="rounded bg-crimson hover:bg-crimson-light transition-colors px-5 py-2.5 text-sm font-semibold uppercase tracking-wide"
        >
        <ShoppingCart/>
        </a>
      </nav>
    </header>
  );
}
