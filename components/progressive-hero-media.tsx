"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ProgressiveHeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Falls Autoplay doch blockiert wurde: einmal nachladen & erneut versuchen
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch (err) {
        // kleiner Retry nach kurzem Delay
        setTimeout(() => v.play().catch(() => {}), 150);
      }
    };
    // Wenn bereits Medien-Daten geladen sind, direkt versuchen
    if (v.readyState >= 2) tryPlay();
  }, []);

  const handleLoadedData = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
    } catch {}
    // sanfter Übergang, sobald erste Daten da sind
    setTimeout(() => setShowVideo(true), 100);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error("[hero-video] Fehler beim Laden/Abspielen:", e);
    // Fallback: Video ausgeblendet lassen, Bild bleibt sichtbar
    setShowVideo(false);
  };

  return (
    <div className="absolute inset-0">
      {/* Bild: LCP-sicher, zuerst sichtbar */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/alfter-video-thumbnail.webp"
          alt="Professionelle Schneiderei Arbeitsplatz"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Video: lädt sofort, spielt inline und stumm automatisch */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          // Autoplay-Policy: diese drei sind entscheidend
          muted
          playsInline
          autoPlay
          // Ladeverhalten: frühes Event und zuverlässiger als onCanPlay
          preload="metadata"
          // Optional Poster (gleiches Bild, verhindert „schwarzer Frame“)
          poster="/alfter-video-thumbnail.webp"
          loop
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source
            src="/aenderungsschneiderei-alfter-hero-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
