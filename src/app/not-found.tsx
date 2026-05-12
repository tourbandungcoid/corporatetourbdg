import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bone">
      <div className="max-w-md px-6 text-center">
        <p className="eyebrow text-brand">404</p>
        <h1 className="font-display mt-6 text-4xl text-ink">Halaman tidak ditemukan.</h1>
        <p className="mt-4 text-slate">
          Sepertinya halaman yang lo cari sudah dipindah atau memang belum ada.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-paper hover:bg-brand-deep transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
