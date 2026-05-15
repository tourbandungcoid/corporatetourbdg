"use client";

import { useRef, useEffect } from "react";

type LogoItem = {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
};

type PlaceholderItem = string;

type Props =
  | { mode: "logos"; items: LogoItem[]; speed: number; allowSwipe: boolean }
  | { mode: "placeholders"; items: PlaceholderItem[]; speed: number; allowSwipe: boolean };

export function LogoCarousel(props: Props) {
  const doubled =
    props.mode === "logos"
      ? [...props.items, ...props.items]
      : [...props.items, ...props.items];

  if (!props.allowSwipe) {
    return (
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="marquee flex items-center gap-16 whitespace-nowrap"
          style={{ animationDuration: `${props.speed}s` }}
        >
          {props.mode === "logos"
            ? (doubled as LogoItem[]).map((logo, i) => (
                <LogoCell key={`${logo.id}-${i}`} logo={logo} />
              ))
            : (doubled as PlaceholderItem[]).map((label, i) => (
                <PlaceholderCell key={i} label={label} />
              ))}
        </div>
      </div>
    );
  }

  return (
    <SwipeCarousel
      mode={props.mode}
      items={props.items as LogoItem[] & PlaceholderItem[]}
      speed={props.speed}
    />
  );
}

function SwipeCarousel({
  mode,
  items,
  speed,
}: {
  mode: "logos" | "placeholders";
  items: LogoItem[] | PlaceholderItem[];
  speed: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const rafRef = useRef<number>(0);

  // pixels per ms — calibrated so speed=35s ≈ same visual pace as CSS marquee
  // CSS marquee at 35s scrolls ~50% of content width. We approximate here.
  const pxPerMs = 120 / speed;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let lastTs = 0;

    function tick(ts: number) {
      if (el && !isDragging.current) {
        const delta = lastTs ? ts - lastTs : 0;
        el.scrollLeft += pxPerMs * delta;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      lastTs = ts;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pxPerMs]);

  function startDrag(clientX: number) {
    isDragging.current = true;
    startX.current = clientX;
    scrollStart.current = scrollRef.current?.scrollLeft ?? 0;
  }

  function moveDrag(clientX: number) {
    const el = scrollRef.current;
    if (!isDragging.current || !el) return;
    const dx = startX.current - clientX;
    el.scrollLeft = scrollStart.current + dx;
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
      scrollStart.current -= half;
    } else if (el.scrollLeft < 0) {
      el.scrollLeft += half;
      scrollStart.current += half;
    }
  }

  function endDrag() {
    isDragging.current = false;
  }

  const doubled =
    mode === "logos"
      ? [...(items as LogoItem[]), ...(items as LogoItem[])]
      : [...(items as PlaceholderItem[]), ...(items as PlaceholderItem[])];

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-16 whitespace-nowrap overflow-x-scroll cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      style={{ scrollbarWidth: "none" }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => moveDrag(e.clientX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {mode === "logos"
        ? (doubled as LogoItem[]).map((logo, i) => (
            <LogoCell key={`${logo.id}-${i}`} logo={logo} />
          ))
        : (doubled as PlaceholderItem[]).map((label, i) => (
            <PlaceholderCell key={i} label={label} />
          ))}
    </div>
  );
}

function LogoCell({ logo }: { logo: LogoItem }) {
  const inner = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.logo_url}
      alt={logo.name}
      className="max-h-12 max-w-[160px] object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  );
  return (
    <div className="flex items-center justify-center min-w-[180px] h-12 px-6 shrink-0">
      {logo.website_url ? (
        <a href={logo.website_url} target="_blank" rel="noopener noreferrer" aria-label={logo.name}>
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

function PlaceholderCell({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center min-w-[180px] h-12 px-6 shrink-0 grayscale opacity-50">
      <span className="font-display text-base tracking-wide text-slate">{label}</span>
    </div>
  );
}
