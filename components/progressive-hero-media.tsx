import Image from "next/image";

export function ProgressiveHeroMedia() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/alfter-video-thumbnail.webp"
        alt="Professionelle Schneiderei Arbeitsplatz"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        quality={85}
      />
    </div>
  );
}