import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { createPortal } from "react-dom";

type OrderModalProps = {
  open: boolean;
  onClose: () => void;
  defaultVariant?: string;
  unitPrice?: number;
};

type OrderSummary = {
  nama: string;
  varian: string;
  jumlah: number;
  total: string;
};

const VARIANTS = ["Hitam", "Biru", "Merah"];


const emptyForm = (varian: string) => ({
  nama: "",
  telepon: "",
  alamat: "",
  varian,
  jumlah: 1,
  catatan: "",
});

const styles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(4px)",
  },
  card: {
    position: "relative",
    width: "100%",
    maxWidth: 520,
    maxHeight: "92vh",
    overflowY: "auto",
    padding: 28,
    background: "#0D0D0F",
    border: "1px solid rgba(237,237,237,0.2)",
    borderRadius: 12,
    boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
    color: "#EDEDED",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 32,
    height: 32,
    borderRadius: 999,
    background: "transparent",
    border: "none",
    color: "#EDEDED",
    fontSize: 16,
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  label: {
    display: "block",
    marginBottom: 6,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#EDEDED",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 14px",
    fontSize: 14,
    color: "#FFFFFF",
    background: "#17171A",
    border: "1px solid rgba(237,237,237,0.3)",
    borderRadius: 6,
    outline: "none",
    colorScheme: "dark",
    fontFamily: "inherit",
  },
  totalRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    borderTop: "1px solid rgba(237,237,237,0.2)",
  },
  submit: {
    width: "100%",
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    background: "#D21F2E",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  successWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "12px 0 4px",
  },
  checkCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    marginBottom: 20,
    borderRadius: 999,
    background: "rgba(34,197,94,0.15)",
    border: "2px solid #22C55E",
    color: "#22C55E",
  },
  summaryBox: {
    width: "100%",
    marginTop: 24,
    padding: 16,
    textAlign: "left",
    background: "#17171A",
    border: "1px solid rgba(237,237,237,0.15)",
    borderRadius: 8,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    padding: "6px 0",
    fontSize: 14,
  },
};

export default function OrderModal({
  open,
  onClose,
  defaultVariant = "Merah",
  unitPrice = 45000,
}: OrderModalProps) {
  const [form, setForm] = useState(emptyForm(defaultVariant));
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState<OrderSummary | null>(null);
  const [waUrl, setWaUrl] = useState("");

  // Setiap modal dibuka: kosongkan form & kembali ke tampilan form
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setSummary(null);
      setForm(emptyForm(defaultVariant));
    }
  }, [open, defaultVariant]);

  // Tutup dengan Escape + kunci scroll body saat modal terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(unitPrice * form.jumlah);

  const update = (key: string, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      "Halo, saya ingin memesan Tumbler SiJambi.",
      "",
      `Nama: ${form.nama}`,
      `No. HP: ${form.telepon}`,
      `Alamat: ${form.alamat}`,
      `Varian: ${form.varian}`,
      `Jumlah: ${form.jumlah}`,
      `Total: ${total}`,
      form.catatan ? `Catatan: ${form.catatan}` : "",
    ]
      .filter(Boolean)
      .join("\n");



    setSummary({
      nama: form.nama,
      varian: form.varian,
      jumlah: form.jumlah,
      total,
    });
    setSubmitted(true);

  };

  const fieldLabel = (id: string, text: string) => (
    <label htmlFor={id} className="font-display" style={styles.label}>
      {text}
    </label>
  );

  return createPortal(
    <div style={styles.overlay} onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        style={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup form pemesanan"
          style={styles.closeBtn}
        >
          ✕
        </button>

        {submitted && summary ? (
          /* ===== TAMPILAN SETELAH MEMESAN ===== */
          <div style={styles.successWrap} role="status" aria-live="polite">
            <div style={styles.checkCircle}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2
              id="order-title"
              className="font-display"
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Pesanan Berhasil!
            </h2>

            <p style={{ margin: "10px 0 0", fontSize: 14, color: "#8B8B8F" }}>
              Terima kasih, {summary.nama}. Pesananmu Berhasil Terkirim.
            </p>

            <div style={styles.summaryBox}>
              <div style={styles.summaryRow}>
                <span style={{ color: "#8B8B8F" }}>Varian</span>
                <span>{summary.varian}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={{ color: "#8B8B8F" }}>Jumlah</span>
                <span>{summary.jumlah}</span>
              </div>
              <div
                style={{
                  ...styles.summaryRow,
                  marginTop: 6,
                  paddingTop: 12,
                  borderTop: "1px solid rgba(237,237,237,0.15)",
                  fontWeight: 600,
                }}
              >
                <span>Total</span>
                <span>{summary.total}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="font-display"
              style={{ ...styles.submit, marginTop: 24 }}
            >
              Tutup
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "#8B8B8F",
                textDecoration: "underline",
              }}
            >
            </a>
          </div>
        ) : (
          /* ===== TAMPILAN FORM ===== */
          <>
            <h2
              id="order-title"
              className="font-display"
              style={{
                margin: 0,
                fontSize: 26,
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Form Pemesanan
            </h2>
            <p style={{ margin: "4px 0 24px", fontSize: 14, color: "#8B8B8F" }}>
              Isi data di bawah.
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div>
                {fieldLabel("nama", "Nama lengkap")}
                <input
                  id="nama"
                  required
                  value={form.nama}
                  onChange={(e) => update("nama", e.target.value)}
                  style={styles.input}
                  placeholder="Nama penerima"
                />
              </div>

              <div>
                {fieldLabel("telepon", "No. WhatsApp")}
                <input
                  id="telepon"
                  type="tel"
                  required
                  inputMode="tel"
                  value={form.telepon}
                  onChange={(e) => update("telepon", e.target.value)}
                  style={styles.input}
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div>
                {fieldLabel("alamat", "Alamat pengiriman")}
                <textarea
                  id="alamat"
                  required
                  rows={3}
                  value={form.alamat}
                  onChange={(e) => update("alamat", e.target.value)}
                  style={{ ...styles.input, resize: "vertical" }}
                  placeholder="Jalan, kelurahan, kecamatan, kota, kode pos"
                />
              </div>

              <div style={styles.row}>
                <div>
                  {fieldLabel("varian", "Varian")}
                  <select
                    id="varian"
                    value={form.varian}
                    onChange={(e) => update("varian", e.target.value)}
                    style={styles.input}
                  >
                    {VARIANTS.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  {fieldLabel("jumlah", "Jumlah")}
                  <input
                    id="jumlah"
                    type="number"
                    min={1}
                    max={99}
                    required
                    value={form.jumlah}
                    onChange={(e) =>
                      update("jumlah", Math.max(1, Number(e.target.value) || 1))
                    }
                    style={styles.input}
                  />
                </div>
              </div>

              <div>
                {fieldLabel("catatan", "Catatan (opsional)")}
                <input
                  id="catatan"
                  value={form.catatan}
                  onChange={(e) => update("catatan", e.target.value)}
                  style={styles.input}
                  placeholder="Misal: kirim sebelum hari Jumat"
                />
              </div>

              <div style={styles.totalRow}>
                <span
                  className="font-display"
                  style={{ ...styles.label, marginBottom: 0 }}
                >
                  Total
                </span>
                <span
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 600 }}
                >
                  {total}
                </span>
              </div>

              <button type="submit" className="font-display" style={styles.submit}>
                Kirim Pesanan
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}