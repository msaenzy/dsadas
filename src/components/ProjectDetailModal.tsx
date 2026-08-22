import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Stethoscope,
  Coffee,
  Briefcase,
  Sparkles,
  TrendingUp,
  MapPin,
  Smartphone,
  Check,
  CheckCircle2,
  Star,
  ArrowRight,
  ExternalLink,
  Code,
  Target,
  Trophy,
  HelpCircle
} from 'lucide-react';
import { CaseProject } from '../data/projectsData';
import { ThemeMode } from '../types';
import AmazonStyleGalleryViewer from './AmazonStyleGalleryViewer';
import { Instagram } from 'lucide-react';

interface ProjectDetailModalProps {
  project: CaseProject | null;
  theme: ThemeMode;
  onClose: () => void;
  onNavigateToContact?: () => void;
}

export default function ProjectDetailModal({
  project,
  theme,
  onClose,
  onNavigateToContact
}: ProjectDetailModalProps) {
  if (!project) return null;

  const isLight = theme === 'light';

  const handleContactClick = () => {
    onClose();
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const el = document.getElementById('contacto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const CategoryIcon =
    project.category === 'medico'
      ? Stethoscope
      : project.category === 'cafeteria'
      ? Coffee
      : project.category === 'consultoria'
      ? Briefcase
      : Sparkles;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl z-10 my-6 overflow-hidden max-h-[92vh] flex flex-col ${
            isLight
              ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436]'
              : 'bg-[#0B0F19] border-slate-700 text-slate-200'
          }`}
        >
          {/* Top Bar / Header */}
          <div
            className={`px-6 py-4 border-b flex items-center justify-between sticky top-0 z-20 backdrop-blur-md ${
              isLight
                ? 'bg-white/95 border-[#4A6A8C]/15'
                : 'bg-[#0B0F19]/95 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                  isLight
                    ? 'bg-[#E0E5EC] text-[#37526E]'
                    : 'bg-slate-800 text-cyan-300'
                }`}
              >
                <CategoryIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{project.categoryLabel}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-[#37526E] text-white border border-[#C5A059]/40">
                <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{project.metricBadge}</span>
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-[#E0E5EC] border-[#4A6A8C]/20 hover:bg-[#4A6A8C] hover:text-white text-[#2D3436]'
                  : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Title & Metadata */}
            <div>
              <h2
                className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl ${
                  isLight ? 'text-[#2D3436]' : 'text-white'
                }`}
              >
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#4A6A8C] dark:text-cyan-400 font-semibold mt-1.5 flex items-center gap-2">
                <span>{project.subtitle}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#C5A059]">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </span>
              </p>
            </div>

            {/* Interactive Amazon-Style Multi-Image Gallery Viewer */}
            <AmazonStyleGalleryViewer
              gallery={project.gallery}
              fallbackImage={project.image}
              projectTitle={project.title}
              projectDescription={project.description}
              projectUrl={project.url}
              theme={theme}
              instagramHandle={project.instagram}
            />

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {project.stats.map((st, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-center transition-all ${
                    isLight
                      ? 'bg-[#FAF5E4]/60 border-[#C5A059]/30 text-[#2D3436]'
                      : 'bg-slate-900/90 border-slate-800 text-slate-200'
                  }`}
                >
                  <p className="text-[10px] sm:text-xs font-mono uppercase font-bold text-[#4A6A8C] dark:text-cyan-400">
                    {st.label}
                  </p>
                  <p className="font-extrabold text-lg sm:text-2xl text-[#37526E] dark:text-emerald-400 mt-1">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Objective & Result Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className={`p-5 rounded-2xl border ${
                  isLight
                    ? 'bg-[#F2F5F9] border-[#4A6A8C]/20'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#4A6A8C]" />
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#37526E] dark:text-cyan-300">
                    Objetivo del Proyecto:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{project.objective}</p>
              </div>

              <div
                className={`p-5 rounded-2xl border ${
                  isLight
                    ? 'bg-white border-[#C5A059]/30'
                    : 'bg-slate-900/80 border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-[#C5A059]" />
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Resultado Obtenido:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className={`p-5 rounded-2xl border ${
                  isLight
                    ? 'bg-rose-50/50 border-rose-200/60'
                    : 'bg-rose-950/20 border-rose-900/30'
                }`}
              >
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Desafío Inicial:</span>
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">{project.challenge}</p>
              </div>

              <div
                className={`p-5 rounded-2xl border ${
                  isLight
                    ? 'bg-emerald-50/50 border-emerald-200/60'
                    : 'bg-emerald-950/20 border-emerald-900/30'
                }`}
              >
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Solución Spondylus:</span>
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Technologies Used Badges */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-cyan-400 mb-2.5 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-[#C5A059]" />
                <span>Tecnologías & Integraciones Usadas:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs font-semibold px-3 py-1 rounded-lg border font-mono ${
                      isLight
                        ? 'bg-white border-[#4A6A8C]/25 text-[#2D3436] shadow-xs'
                        : 'bg-slate-800 border-slate-700 text-slate-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Included Features Checklist */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#37526E] dark:text-cyan-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Funcionalidades Implementadas en la Landing Page:</span>
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5 text-xs">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <div className="p-0.5 rounded-full mt-0.5 shrink-0 bg-[#37526E] text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Testimonial Card */}
            <div
              className={`p-5 rounded-2xl border ${
                isLight
                  ? 'bg-[#FAF5E4]/80 border-[#C5A059]/40'
                  : 'bg-amber-950/20 border-amber-500/30'
              }`}
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm italic font-medium leading-relaxed mb-3">
                "{project.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#37526E] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {project.initials}
                </div>
                <div>
                  <p className="font-bold text-xs">{project.author}</p>
                  <p className="text-[11px] opacity-80">{project.authorRole}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Modal Footer CTA */}
          <div
            className={`p-4 sm:p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20 backdrop-blur-md ${
              isLight
                ? 'bg-white/95 border-[#4A6A8C]/15'
                : 'bg-[#0B0F19]/95 border-slate-800'
            }`}
          >
            <div className="text-xs text-center sm:text-left">
              <span className="font-bold text-[#37526E] dark:text-cyan-300">
                ¿Te gusta este estilo para tu negocio?
              </span>{' '}
              <span className="opacity-80">
                Lo adaptamos a tu marca con entrega en 2 a 5 días.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              {project.instagram && (
                <a
                  href={`https://ig.me/m/${project.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full font-bold text-xs bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400 text-white shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver en Instagram @{project.instagram}</span>
                </a>
              )}
              <button
                onClick={handleContactClick}
                className="cta-shimmer w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Quiero una Landing Page como esta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
