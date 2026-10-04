export default function Footer() {
  return (
    <footer className="border-t border-rock-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 text-sm text-ash">
        
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Tumbler SiJambi. Semua hak dilindungi.
          </span>

          {/* Navigation */}
          <div className="flex gap-6">
            <a
              href="#fitur"
              className="hover:text-silver transition-colors"
            >
              Fitur
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
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-rock-line">
          <a
            href="mailto:dilaninf6@gmail.com"
            className="hover:text-silver transition-colors"
          >
            ✉ dilaninf6@gmail.com
          </a>

          <span className="hidden sm:block text-rock-line">|</span>

          <a
            href="https://instagram.com/dlan12_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-silver transition-colors"
          >
            Instagram: @dlan12_
          </a>

          <span className="hidden sm:block text-rock-line">|</span>

          <a
            href="https://instagram.com/sec.dlan12_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-silver transition-colors"
          >
            Instagram: @sec.dlan12_
          </a>
        </div>

      </div>
    </footer>
  );
}
