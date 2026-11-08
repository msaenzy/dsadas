import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Image as ImageIcon,
  Instagram,
  Sparkles,
  Layers,
  ZoomIn,
  ExternalLink
} from 'lucide-react';
import { ProjectGalleryImage } from '../data/projectsData';
import { ThemeMode } from '../types';

interface AmazonStyleGalleryViewerProps {
  gallery?: ProjectGalleryImage[];
  fallbackImage: string;
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
  theme: ThemeMode;
  instagramHandle?: string;
}

export default function AmazonStyleGalleryViewer({
  gallery,
  fallbackImage,
  projectTitle,
  projectDescription,
  projectUrl,
  theme,
  instagramHandle
}: AmazonStyleGalleryViewerProps) {
  const isLight = theme === 'light';

  // Format slides: If project has defined gallery, use it; otherwise fallback to single image
  const slides: ProjectGalleryImage[] =
    gallery && gallery.length > 0
      ? gallery
      : [{ id: 'portada', title: 'Vista Principal', url: fallbackImage }];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Reset index when gallery changes
  useEffect(() => {
    setActiveIndex(0);
    setIsZoomed(false);
  }, [gallery, fallbackImage]);

  const activeSlide = slides[activeIndex] || slides[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsZoomed(false);
  };

  const handleSelectThumbnail = (index: number) => {
    setActiveIndex(index);
    setIsZoomed(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Touch Swipe support for mobile
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Desktop Hover Zoom (Amazon product style)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div
      className={`rounded-2xl border overflow-hidden shadow-lg transition-all ${
        isLight ? 'bg-[#F2F5F9] border-[#4A6A8C]/20' : 'bg-slate-900 border-slate-800'
      }`}
    >
      {/* Top Browser / Product Header Bar */}
      <div
        className={`px-4 py-2.5 border-b flex items-center justify-between text-xs font-mono ${
          isLight ? 'bg-slate-200/80 border-slate-300' : 'bg-slate-950 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/90 px-3 py-1 rounded-md text-[11px] font-bold border border-slate-300 dark:border-slate-700">
          {projectUrl && (projectUrl.includes('netlify.app') || projectUrl.includes('.com') || projectUrl.includes('.ec')) ? (
            <a
              href={projectUrl.startsWith('http') ? projectUrl : `https://${projectUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#37526E] dark:text-cyan-300 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{projectUrl.replace(/^https?:\/\//, '')}</span>
            </a>
          ) : instagramHandle ? (
            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-pink-600 hover:underline"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>@{instagramHandle}</span>
            </a>
          ) : (
            <div className="flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[#4A6A8C]" />
              <span>https://{projectUrl}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {slides.length > 1 && (
            <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-[#37526E] text-white">
              {activeIndex + 1} / {slides.length}
            </span>
          )}
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold hidden sm:inline">
            ● Catálogo Activo
          </span>
        </div>
      </div>

      {/* Main Layout: Thumbnails list (left on desktop) + Big Main Image (center/right) */}
      <div className="p-3 sm:p-5 flex flex-col md:flex-row gap-4">
        {/* Amazon-style Thumbnails Strip */}
        {slides.length > 1 && (
          <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto max-h-[380px] shrink-0 pb-1 md:pb-0 order-2 md:order-1 select-none">
            {slides.map((slide, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={slide.id || idx}
                  onClick={() => handleSelectThumbnail(idx)}
                  onMouseEnter={() => handleSelectThumbnail(idx)}
                  className={`group relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer w-16 h-16 sm:w-20 sm:h-20 shrink-0 ${
                    isSelected
                      ? isLight
                        ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 scale-102 shadow-md'
                        : 'border-cyan-400 ring-2 ring-cyan-400/40 scale-102 shadow-md'
                      : isLight
                      ? 'border-slate-300 opacity-70 hover:opacity-100 hover:border-[#4A6A8C]'
                      : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500'
                  }`}
                  aria-label={`Ver ${slide.title}`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 py-0.5 px-1 text-[9px] font-mono font-bold text-center truncate ${
                      isSelected
                        ? 'bg-[#37526E] text-white'
                        : 'bg-black/60 text-white/90 backdrop-blur-xs'
                    }`}
                  >
                    {slide.id === 'portada'
                      ? 'Portada'
                      : slide.id.replace('slide', 'Slide ')}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Big Stage Main Image with Zoom and Carousel Arrows */}
        <div className="relative flex-1 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner order-1 md:order-2">
          <div
            className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden flex items-center justify-center cursor-crosshair group"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.url}
                src={activeSlide.url}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full h-full object-contain object-center transition-transform duration-100 select-none pointer-events-none"
                style={
                  isZoomed
                    ? {
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        transform: 'scale(1.75)'
                      }
                    : undefined
                }
              />
            </AnimatePresence>

            {/* Navigation Arrows (Prev / Next) */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Top Right Zoom Hint Badge */}
            <div className="absolute top-3 right-3 bg-slate-950/75 border border-white/20 text-white/90 px-2.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1.5 backdrop-blur-md pointer-events-none z-10 hidden sm:flex">
              <ZoomIn className="w-3 h-3 text-[#C5A059]" />
              <span>Hover para Zoom HD</span>
            </div>

            {/* Bottom Title Bar with Gradient */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 sm:p-4 text-white z-10 pointer-events-none">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
                    {activeSlide.title}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-1">
                    {projectTitle}
                  </p>
                </div>
                {slides.length > 1 && (
                  <div className="flex gap-1">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeIndex
                            ? 'w-6 bg-[#C5A059]'
                            : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Guide for Mobile Users */}
      {slides.length > 1 && (
        <div
          className={`px-4 py-2 border-t text-[11px] font-mono text-center flex items-center justify-center gap-2 ${
            isLight
              ? 'bg-slate-100/90 text-slate-600 border-slate-200'
              : 'bg-slate-950 text-slate-400 border-slate-800'
          }`}
        >
          <span className="inline-block sm:hidden">👈 Desliza con tu dedo para cambiar de foto 👉</span>
          <span className="hidden sm:inline">
            Usa las flechas del teclado o haz clic en las miniaturas de la izquierda para explorar todas las fotos
          </span>
        </div>
      )}
    </div>
  );
}
