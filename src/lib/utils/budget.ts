/**
 * Parse budget range string into min/max numeric.
 * Examples:
 *   "< IDR 1.000.000"          → { max: 1_000_000 }
 *   "IDR 1.000.000 – 2.500.000" → { min: 1_000_000, max: 2_500_000 }
 *   "IDR 5.000.000 +"          → { min: 5_000_000 }
 */
export function parseBudgetRange(
  range: string
): { min?: number; max?: number } {
  if (!range) return {};
  const clean = range.replace(/[^0-9–\-+<>.]/g, "");
  const numbers = clean
    .split(/[–\-]/)
    .map((s) => parseInt(s.replace(/\./g, ""), 10))
    .filter((n) => !isNaN(n) && n > 1000);

  if (clean.startsWith("<")) return { max: numbers[0] };
  if (clean.endsWith("+")) return { min: numbers[0] };
  if (numbers.length === 2) return { min: numbers[0], max: numbers[1] };
  if (numbers.length === 1) return { min: numbers[0], max: numbers[0] };
  return {};
}
