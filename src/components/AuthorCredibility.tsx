interface AuthorCredibilityProps {
  role: string;
  experience: string;
  eventCount: number;
  lastReviewDate: string;
}

export function AuthorCredibility({
  role,
  experience,
  eventCount,
  lastReviewDate,
}: AuthorCredibilityProps) {
  return (
    <p className="text-xs text-slate-mute italic border-l-2 border-brand/30 pl-4 py-3">
      <strong>Tentang penulis:</strong> Panduan ini ditulis oleh tim {role}{" "}
      di TourBandung Corporate dengan {experience} pengalaman {eventCount}+{" "}
      corporate events di Bandung &amp; Jawa Barat. Last reviewed:{" "}
      {lastReviewDate} berdasarkan feedback klien terbaru dan tren market.
    </p>
  );
}
