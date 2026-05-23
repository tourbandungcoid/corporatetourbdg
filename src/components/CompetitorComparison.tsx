/**
 * CompetitorComparison — Table showing specialist vs generic event organizer differences
 * Used in money pages to highlight differentiation
 */

interface ComparisonRow {
  aspect: string;
  generic: string;
  specialist: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: "Pendekatan",
    generic: "Paket standar: 'Rp 2jt/pax' lumped total tanpa breakdown",
    specialist: "Custom-designed per client brief dengan line-item breakdown transparan",
  },
  {
    aspect: "Tim Delivery",
    generic: "Rotating freelancer (berubah-ubah setiap event)",
    specialist: "Dedicated senior planner (4+ tahun tenure) sebagai single point of contact",
  },
  {
    aspect: "Venue Partnership",
    generic: "Reseller — markup tersembunyi 15-30%",
    specialist: "Direct partnership 60+ venue (Lembang, Ciwidey, Subang) — no middleman",
  },
  {
    aspect: "Transparansi Proposal",
    generic: "Proposal total saja, breakdown line-item tidak diberikan",
    specialist: "Detailed breakdown: venue 30%, F&B 25%, activity 15%, transport 10%, talent 5-10%, contingency 5-8%",
  },
  {
    aspect: "Risk Management",
    generic: "No risk register, no contingency plan tertulis",
    specialist: "Risk register + Plan A & Plan B + force majeure policy di kontrak",
  },
  {
    aspect: "Post-Event Accountability",
    generic: "Event selesai, vendor selesai. Tidak ada report atau follow-up.",
    specialist: "Post-event report + ROI analysis + feedback collection 2 minggu kemudian",
  },
];

export function CompetitorComparison() {
  return (
    <div className="not-prose">
      <div className="overflow-x-auto -mx-6 md:mx-0">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-slate-mute border-b-2 border-divider bg-cream/40">
              <th className="px-4 py-3 font-semibold">Aspek</th>
              <th className="px-4 py-3 font-semibold">Generic Travel Agent / EO</th>
              <th className="px-4 py-3 font-semibold text-brand">Corporate Specialist (Kami)</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="border-b border-divider/60">
                <td className="px-4 py-3 font-medium text-ink whitespace-nowrap">
                  {row.aspect}
                </td>
                <td className="px-4 py-3 text-slate">
                  {row.generic}
                </td>
                <td className="px-4 py-3 text-ink bg-brand-light/8 border-l-3 border-brand/20">
                  {row.specialist}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-brand-light/5 border border-brand/10">
        <p className="text-sm text-slate-mute">
          <strong className="text-ink">Bottom line:</strong> Harga mungkin beda 10–15%,
          tapi risk management, quality output, dan ROI-nya{" "}
          <strong>beda jauh</strong>. Pilih specialist jika Anda
          butuh event yang outcome-driven dan terukur. Pilih generic EO jika Anda
          cuma perlu &ldquo;ada acara tahunan&rdquo; saja tanpa memperdulikan impact.
        </p>
      </div>
    </div>
  );
}
