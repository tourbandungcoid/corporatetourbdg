import { buildWaLink } from "@/lib/site";
import { Whatsapp } from "./icons/Icons";

type Props = {
  context?: string;
  className?: string;
};

/**
 * Floating sticky WhatsApp CTA — appears bottom-right on all pages.
 */
export function WhatsAppFloat({ context, className }: Props) {
  return (
    <a
      href={buildWaLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className={[
        "fixed bottom-6 right-6 z-50",
        "flex items-center gap-2 rounded-full",
        "bg-[#25D366] px-5 py-3.5 text-white shadow-lg",
        "hover:scale-105 hover:shadow-xl transition-all duration-200",
        "no-print",
        className ?? "",
      ].join(" ")}
    >
      <Whatsapp size={22} />
      <span className="hidden sm:inline text-sm font-medium">Chat WhatsApp</span>
    </a>
  );
}
