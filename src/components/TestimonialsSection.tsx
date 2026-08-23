import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';
import ProjectCarousel from './ProjectCarousel';
import ProjectDetailModal from './ProjectDetailModal';
import { CaseProject, CategoryId } from '../data/projectsData';

interface TestimonialsSectionProps {
  theme: ThemeMode;
  onNavigateToContact?: () => void;
  onNavigateToGallery?: () => void;
}

export default function TestimonialsSection({
  theme,
  onNavigateToContact,
  onNavigateToGallery
}: TestimonialsSectionProps) {
  const isLight = theme === 'light';
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('medico');
  const [selectedModalProject, setSelectedModalProject] = useState<CaseProject | null>(null);

  return (
    <section
      id="casos"
      className={`relative py-10 md:py-12 lg:py-8 xl:py-10 lg:min-h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-center px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436]'
          : 'bg-[#070911] border-slate-900 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6 lg:mb-7"
        >
          <span
            className={`font-mono text-[11px] tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full border ${
              isLight
                ? 'bg-white/80 border-[#C5A059]/40 text-[#37526E] font-bold'
                : 'bg-cyan-950/60 border-cyan-400/30 text-cyan-300'
            }`}
          >
            Showcase & Casos de Éxito
          </span>
          <h2
            className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-[2rem] mt-2 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Galería Interactiva de Proyectos Realizados
          </h2>
          <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Explora nuestros trabajos por categoría sectorial. Cada proyecto es una Landing Page optimizada para la captación real de clientes en Ecuador.
          </p>
        </motion.div>

        {/* Automatic 4-Column Carousel Component */}
        <ProjectCarousel
          theme={theme}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProjectDetail={setSelectedModalProject}
          onNavigateToGallery={onNavigateToGallery}
        />
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedModalProject}
        theme={theme}
        onClose={() => setSelectedModalProject(null)}
        onNavigateToContact={onNavigateToContact}
      />
    </section>
  );
}
