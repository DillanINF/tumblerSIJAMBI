export default function Footer() {
  return (
    <footer className="border-t border-rock-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ash">
        <span>© {new Date().getFullYear()} Tumbler SiJambi. Semua hak dilindungi.</span>
        <div className="flex gap-6">
          <a href="#fitur" className="hover:text-silver transition-colors">Fitur</a>
          <a href="#varian" className="hover:text-silver transition-colors">Varian</a>
          <a href="#ulasan" className="hover:text-silver transition-colors">Ulasan</a>
        </div>
      </div>
    </footer>
  );
}
