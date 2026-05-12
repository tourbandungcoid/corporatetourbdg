import Image from "next/image";

/**
 * Editorial photo frame with muted overlay treatment.
 * Sources from Google Drive thumbnails (will be swapped for self-hosted later).
 */
export function PhotoFrame({
  driveId,
  alt,
  className = "",
  aspect = "4/5",
  priority = false,
  fill = false,
  sizes,
}: {
  driveId: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}) {
  const src = `https://lh3.googleusercontent.com/d/${driveId}=w2000`;
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={`object-cover ${className}`}
        unoptimized
      />
    );
  }
  return (
    <div
      className={`relative overflow-hidden bg-[var(--color-cream)] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        priority={priority}
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

/** Curated photo IDs from client's Google Drive */
export const PHOTOS = {
  hero: "1OnugxBWUTD-_crFPfgzWwBTpW_I4vV4c",
  groupActivity: "11Is4skTfPFPtzr-k3oungmki9ERaoyZS",
  outdoorTeam: "1axHboux3e-rkPCO9hUJqGAd01-t5VSOF",
  campfire: "1R48pU_wf-DlzUuMUj75LC81H6RJjw8nh",
  teamPortrait: "11wLceBezA1-5NBotccA17IZlAiZm0txD",
  natureGroup: "1s5khY-klseZU9JdlyVOVb7MSV-YVXyss",
  gathering: "1zgYqXiTsyE4JSgKdvQKN6l4PlsXPLN8w",
  leadership: "1RD0qf2-6ammVPiGuLtxcz5ZKDymPLKFT",
  activity1: "1ix5Yn9DGVkJYYLSdBQIf4LgXrhYrpFkx",
  activity2: "1ahuztewnK0h8ME3uWa0iXF479yZdLrfz",
  retreat: "1tvJ2YdHGqHDLBv1EeuqhUVGuQeaeAKlp",
  ceremony: "1DwvT0VUoo47URJoMQ-m-_KgZI-_JyJ66",
  groupShot: "1uW8m-1cTJ42oPxxDUXxxOdoEZ0i1ZrnU",
  briefing: "1vbVihix6PMdo2m3ADeuEXc2o9qkuMfZW",
  candid: "1LWHo4Muawg79_StBFPdObkGiHo809O_F",
  offroad1: "1rgqw2Gz_QksknxseU2-gVUiQV4UNQZn0",
  offroad2: "1f2LrJYzSY8PuH2Ph8vzbM6c-w6U_icX3",
  paintball: "1V0vyGGgmmFuHEvlg-MGnpkmnj5bZdX9b",
  scenery: "1i510IVnA2ZwW6Jf2huS9ZvQZQ7wnV3KO",
  detail: "1lkXcQUAcmlMX7UuydG41gOreGFiVjqWJ",
  event: "1CKYTzqDu5hauMVCy18MGPnbTLZn7oZ03",
  ciwidey: "1BjvWkII_tpq2kBiZIGU-shBveZrS3Jvi",
  lembang: "11__Sm5oixuIdfeRgCXXtPTv-VlEilIJQ",
  pangalengan: "1mZ0Aufrunl-I2oPKYSbxAVsd24o5PXM8",
  banquet: "1pGtkKBy2SUqCfo2hROK7XGATynGU7BJN",
  venueWide: "1IqwR55HP9hqLdORCK0YFnNiCvLlZTpc6",
  meeting: "136rZUCpCzPSaGx5wxSIrYxsIm2meE4dF",
  evening: "1dnbkIQ31aFlB5HVbzBtePbhae1LTS9OE",
  workshop: "1Yw78WfEHqja2if-99pNRwIjxcI0z4nF2",
  vista: "1FgSvGURuRXmXEmUWe7RKqF86kUzIjpzX",
  arrival: "1vOShAhjBvp9-v_t2lHcthKVMrOS_v3q1",
  ceremonyWide: "1Yhq8Q7tkxqNcUDNZRo-IwAcWTtsalfd6",
};
