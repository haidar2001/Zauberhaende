"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface GalleryItem {
  id: number
  type: "image" | "video"
  src: string
  title: string
  description: string
}

interface GalleryLightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({ items, currentIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const currentItem = items[currentIndex]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1)
      if (e.key === "ArrowRight" && currentIndex < items.length - 1) onNavigate(currentIndex + 1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, items.length, onClose, onNavigate])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleVideoToggle = () => {
    const video = document.getElementById("lightbox-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Schließen"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Previous button */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Vorheriges"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next button */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Nächstes"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Media content */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <div className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center">
          {currentItem.type === "image" ? (
            <div className="relative w-full h-[70vh] md:h-[80vh]">
              <Image
                src={currentItem.src || "/placeholder.svg"}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          ) : (
            <div className="relative w-full max-w-5xl">
              <video
                id="lightbox-video"
                src={currentItem.src}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] rounded-lg"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
              <button
                onClick={handleVideoToggle}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label={isPlaying ? "Pause" : "Abspielen"}
              >
                {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
              </button>
            </div>
          )}

          {/* Caption */}
          <div className="mt-4 text-center max-w-2xl">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{currentItem.title}</h3>
            <p className="text-sm md:text-base text-white/80">{currentItem.description}</p>
            <p className="text-xs text-white/60 mt-2">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
