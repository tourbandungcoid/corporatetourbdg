/**
 * Generic page hero for non-homepage routes.
 * Smaller than the main hero — fits below the floating navbar
 * and gives consistent page intro treatment.
 */
type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <section className="relative bg-bone pt-36 pb-16 md:pt-44 md:pb-24 border-b border-divider/60">
      <div className="container-1280">
        <div
          className={[
            "max-w-3xl",
            align === "center" ? "mx-auto text-center" : "",
          ].join(" ")}
        >
          {eyebrow && <span className="eyebrow-brand">{eyebrow}</span>}
          <h1 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-slate leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
