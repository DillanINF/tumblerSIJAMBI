import { useState, type FormEvent } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="pesan" className="py-24 md:py-32 bg-rock-soft/60 border-t border-rock-line">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl tracking-tight">
          Stronger · Trusted · Always With You
        </h2>
        <p className="text-ash mt-4">
          Tinggalkan email, Jika ingin berlangganan dengan SIJAMBI.
        </p>

        {sent ? (
          <p className="mt-8 text-royal-light font-medium">
            Tercatat. Kami akan kirim kabar ke {email}.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="rounded bg-rock border border-rock-line px-5 py-3 text-silver placeholder:text-ash focus:border-crimson outline-none min-w-[16rem]"
            />
            <button
              type="submit"
              className="rounded bg-crimson hover:bg-crimson-light transition-colors px-7 py-3 font-display font-semibold uppercase tracking-wide text-sm"
            >
              Beri Tahu Saya
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
