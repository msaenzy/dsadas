import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Stethoscope,
  Coffee,
  Briefcase,
  Sparkles,
  TrendingUp,
  MapPin,
  ExternalLink,
  ArrowRight,
  Eye,
  LayoutGrid,
  Layers
} from 'lucide-react';
import { projectsData, CaseProject, CategoryId, CATEGORIES_CONFIG } from '../data/projectsData';
import { ThemeMode } from '../types';

interface ProjectCarouselProps {
  theme: ThemeMode;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenProjectDetail: (project: CaseProject) => void;
  onNavigateToGallery?: () => void;
}

export default function ProjectCarousel({
  theme,
  selectedCategory,
  onSelectCategory,
  onOpenProjectDetail,
  onNavigateToGallery
}: ProjectCarouselProps) {
  const isLight = theme === 'light';

  // Filter projects according to category
  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'todos') return true;
    return p.category === selectedCategory;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Automatic advancement every 2 seconds (2000ms)
  useEffect(() => {
    if (!isPlaying || isHovered || filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, filteredProjects.length]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Compute visible items for 4-column layout on desktop, 2 on tablet, 1 on mobile
  const getVisibleProjects = () => {
    if (filteredProjects.length === 0) return [];
    const visible: CaseProject[] = [];
    const count = Math.min(4, filteredProjects.length);
    for (let i = 0; i < count; i++) {
      const idx = (currentIndex + i) % filteredProjects.length;
      visible.push(filteredProjects[idx]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'medico':
        return Stethoscope;
      case 'cafeteria':
        return Coffee;
      case 'consultoria':
        return Briefcase;
      case 'mas':
        return Sparkles;
      default:
        return LayoutGrid;
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {/* Option for 'Todos los proyectos' first */}
        <button
          onClick={() => onSelectCategory('todos')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border shadow-xs ${
            selectedCategory === 'todos'
              ? isLight
                ? 'bg-[#37526E] text-white border-[#37526E] font-bold shadow-md shadow-[#37526E]/20 scale-105'
                : 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-md scale-105'
              : isLight
              ? 'bg-white text-[#2D3436] border-[#4A6A8C]/20 hover:bg-[#F2F5F9]'
              : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Todos los Proyectos ({projectsData.length})</span>
        </button>

        {CATEGORIES_CONFIG.map((cat) => {
          const Icon = getCategoryIcon(cat.id as CategoryId);
          const isActive = selectedCategory === cat.id;
          const count = projectsData.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as CategoryId)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border shadow-xs ${
                isActive
                  ? isLight
                    ? 'bg-[#37526E] text-white border-[#37526E] shadow-md shadow-[#37526E]/20 scale-105 font-bold'
                    : 'bg-cyan-400 text-slate-950 border-cyan-300 font-bold shadow-md shadow-cyan-400/20 scale-105'
                  : isLight
                  ? 'bg-white text-[#2D3436] border-[#4A6A8C]/20 hover:bg-[#F2F5F9] hover:border-[#4A6A8C]/50'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive
                    ? isLight
                      ? 'text-[#C5A059]'
                      : 'text-slate-950'
                    : isLight
                    ? 'text-[#4A6A8C]'
                    : 'text-cyan-400'
                }`}
              />
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  isActive
                    ? isLight
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-950/30 text-slate-950'
                    : isLight
                    ? 'bg-[#E0E5EC] text-[#2D3436]/80'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Carousel Container */}
      <div
        className="relative px-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Carousel Header Controls */}
        <div className="flex items-center justify-between mb-4 px-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={isLight ? 'text-[#37526E] font-bold' : 'text-cyan-300 font-bold'}>
              Avanza automáticamente cada 2s
            </span>
            {isHovered && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-[#C5A059] font-bold">
                Pausado al pasar el cursor
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/20 text-[#2D3436] hover:bg-slate-100'
                  : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                aria-label="Anterior proyecto"
                className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/20 text-[#2D3436] hover:bg-[#4A6A8C] hover:text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-cyan-400 hover:text-slate-950'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente proyecto"
                className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/20 text-[#2D3436] hover:bg-[#4A6A8C] hover:text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-cyan-400 hover:text-slate-950'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Active Track - 4 cards visible on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={`${project.id}-${idx}-${currentIndex}`}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/20 hover:border-[#37526E] shadow-[#4A6A8C]/5'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Browser Preview Header */}
                <div className="relative">
                  {/* Browser Bar */}
                  <div
                    className={`px-3 py-1.5 border-b flex items-center justify-between text-[10px] font-mono ${
                      isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate max-w-[120px] opacity-75 font-bold">
                      {project.url}
                    </span>
                  </div>

                  {/* Preview Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Metric Badge Overlay */}
                    <div className="absolute top-2 right-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#37526E] text-white border border-[#C5A059]/60 shadow-md">
                        <TrendingUp className="w-3 h-3 text-[#C5A059]" />
                        <span>{project.metricBadge}</span>
                      </span>
                    </div>

                    {/* Category / Location Label Overlay */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-950/80 text-white backdrop-blur-xs">
                        <MapPin className="w-3 h-3 text-[#C5A059]" />
                        <span>{project.location}</span>
                      </span>
                      {project.gallery && project.gallery.length > 1 && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-pink-600/90 text-white shadow-xs backdrop-blur-xs">
                          <Layers className="w-2.5 h-2.5 text-pink-200" />
                          <span>{project.gallery.length}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#4A6A8C] dark:text-cyan-400 block mb-1">
                      {project.categoryLabel}
                    </span>

                    <h3
                      className={`font-display font-extrabold text-base leading-snug line-clamp-1 ${
                        isLight ? 'text-[#2D3436]' : 'text-white'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#2D3436]/70 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[9px] font-medium px-2 py-0.5 rounded-md border ${
                          isLight
                            ? 'bg-[#E0E5EC]/60 border-[#4A6A8C]/20 text-[#2D3436]'
                            : 'bg-slate-800 border-slate-700 text-slate-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => onOpenProjectDetail(project)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      isLight
                        ? 'bg-[#F2F5F9] border border-[#4A6A8C]/25 text-[#37526E] hover:bg-[#37526E] hover:text-white'
                        : 'bg-slate-800 border border-slate-700 text-slate-200 hover:bg-cyan-400 hover:text-slate-950'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Ver Detalles</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel Indicators Bar */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {filteredProjects.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Ir al proyecto ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === currentIndex
                  ? isLight
                    ? 'w-6 bg-[#37526E]'
                    : 'w-6 bg-cyan-400'
                  : isLight
                  ? 'w-2 bg-[#4A6A8C]/30 hover:bg-[#4A6A8C]/60'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prominent Main Action Button: "Ver más proyectos" */}
      <div className="pt-4 text-center">
        <button
          onClick={onNavigateToGallery}
          className="cta-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm sm:text-base bg-[#37526E] hover:bg-[#2B4057] text-white shadow-lg cursor-pointer transition-transform hover:-translate-y-1"
        >
          <Sparkles className="w-5 h-5 text-[#C5A059]" />
          <span>Ver Más Proyectos (Galería Completa)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
