"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export function ProgressiveHeroMedia() {
  const [videoReadyToShow, setVideoReadyToShow] = useState(false)
  const [mountVideo, setMountVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Nach Page-Load das <video> einhängen und laden
    const load = () => {
      setMountVideo(true)
      // kleines Timeout, damit das Element im DOM ist
      setTimeout(() => {
        videoRef.current?.load()
      }, 0)
    }

    if (document.readyState === "complete") {
      load()
    } else {
      window.addEventListener("load", load)
      return () => window.removeEventListener("load", load)
    }
  }, [])

  const handleVideoReady = () => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(err => {
      console.log("[hero] autoplay failed:", err)
    })
    // weiche Überblendung vom Bild zum Video
    setTimeout(() => setVideoReadyToShow(true), 100)
  }

  return (
    <>
      {/* Fallback-Bild für schnelles LCP */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          videoReadyToShow ? "opacity-0" : "opacity-100"
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

      {/* Video */}
      {mountVideo && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            videoReadyToShow ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={videoRef}
            // Autoplay-Policy kompatibel
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            // zuverlässiger als canplay
            onLoadedData={handleVideoReady}
            // (alternativ): onCanPlayThrough={handleVideoReady}
          >
            <source
              src="/aenderungsschneiderei-alfter-hero-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  )
}
