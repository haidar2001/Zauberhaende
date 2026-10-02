import Image from "next/image";

export function ProgressiveHeroMedia() {
  return (
    <div className="hero-media absolute inset-0">
      <Image
        src="/alfter-video-thumbnail.webp"
        alt="Ladenfront der Zauberhände Änderungsschneiderei in der Holzgasse 13a in Alfter"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        quality={70}
      />
    </div>
  );
}