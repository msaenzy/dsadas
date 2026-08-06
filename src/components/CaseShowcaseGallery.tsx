import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Stethoscope,
  Coffee,
  Briefcase,
  Sparkles,
  LayoutGrid,
  Search,
  MapPin,
  TrendingUp,
  Quote,
  Star,
  ArrowRight,
  Eye,
  CheckCircle2,
  Code
} from 'lucide-react';
import { projectsData, CaseProject, CategoryId, CATEGORIES_CONFIG } from '../data/projectsData';
import { ThemeMode } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

interface CaseShowcaseGalleryProps {
  theme: ThemeMode;
  onNavigateToContact?: () => void;
  defaultCategory?: CategoryId;
}

export default function CaseShowcaseGallery({
  theme,
  onNavigateToContact,
  defaultCategory = 'medico'
}: CaseShowcaseGalleryProps) {
  const isLight = theme === 'light';

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<CaseProject | null>(null);

  // Filter projects by category and search term
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'todos' || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query)) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

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
    <div className="w-full space-y-10">
      {/* Category Filter & Search Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-3xl border backdrop-blur-md shadow-sm transition-all ${
        isLight ? 'bg-white/80 border-[#4A6A8C]/20' : 'bg-slate-900/60 border-slate-800'
      }">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {CATEGORIES_CONFIG.map((cat) => {
            const Icon = getCategoryIcon(cat.id as CategoryId);
            const isActive = selectedCategory === cat.id;
            const count = projectsData.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryId)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isActive
                    ? isLight
                      ? 'bg-[#37526E] text-white border-[#37526E] shadow-md shadow-[#37526E]/20 scale-105'
                      : 'bg-cyan-400 text-slate-950 border-cyan-300 font-extrabold shadow-md scale-105'
                    : isLight
                    ? 'bg-[#E0E5EC] text-[#2D3436] border-[#4A6A8C]/20 hover:bg-white hover:border-[#4A6A8C]/50'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? (isLight ? 'text-[#C5A059]' : 'text-slate-950') : 'text-[#C5A059]'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    isActive
                      ? isLight
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-950/30 text-slate-950'
                      : 'bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}

          <button
            onClick={() => setSelectedCategory('todos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
              selectedCategory === 'todos'
                ? isLight
                  ? 'bg-[#37526E] text-white border-[#37526E] shadow-md'
                  : 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-md'
                : isLight
                ? 'bg-[#E0E5EC] text-[#2D3436] border-[#4A6A8C]/20 hover:bg-white'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Todos ({projectsData.length})</span>
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50 text-[#37526E] dark:text-cyan-400" />
          <input
            type="text"
            placeholder="Buscar por especialidad o ciudad..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-full text-xs font-medium border focus:outline-none transition-all ${
              isLight
                ? 'bg-white border-[#4A6A8C]/30 text-[#2D3436] focus:border-[#37526E] focus:ring-2 focus:ring-[#37526E]/20'
                : 'bg-slate-800 border-slate-700 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
            }`}
          />
        </div>
      </div>

      {/* Projects Behance/Dribbble Grid */}
      {filteredProjects.length === 0 ? (
        <div
          className={`p-12 text-center rounded-3xl border ${
            isLight ? 'bg-white border-[#4A6A8C]/20 text-[#2D3436]' : 'bg-slate-900 border-slate-800 text-slate-300'
          }`}
        >
          <Search className="w-10 h-10 mx-auto text-[#C5A059] opacity-60 mb-3" />
          <h3 className="font-display font-bold text-lg mb-1">No se encontraron proyectos</h3>
          <p className="text-xs opacity-75 max-w-md mx-auto mb-4">
            No encontramos resultados para "{searchQuery}". Intenta con otra palabra clave o limpia el filtro.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('todos');
            }}
            className="px-5 py-2 rounded-full font-bold text-xs bg-[#37526E] text-white hover:bg-[#2B4057] cursor-pointer"
          >
            Ver todos los proyectos
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`group flex flex-col justify-between rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl ${
                  isLight
                    ? 'bg-white border-[#4A6A8C]/20 hover:border-[#37526E] shadow-[#4A6A8C]/5'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Browser Mockup Image Container */}
                <div className="relative">
                  {/* Top Browser Bar */}
                  <div
                    className={`px-4 py-2 border-b flex items-center justify-between text-[11px] font-mono ${
                      isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate max-w-[150px] font-bold opacity-80">
                      https://{project.url}
                    </span>
                  </div>

                  {/* Preview Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Metric Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold bg-[#37526E] text-white border border-[#C5A059]/60 shadow-md">
                        <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{project.metricBadge}</span>
                      </span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-950/80 text-white backdrop-blur-xs">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{project.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-cyan-400">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3
                      className={`font-display font-extrabold text-xl leading-snug ${
                        isLight ? 'text-[#2D3436]' : 'text-white'
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-[#37526E] dark:text-cyan-300 font-semibold mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-[#2D3436]/80 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[10px] font-medium px-2.5 py-0.5 rounded-md border ${
                            isLight
                              ? 'bg-[#E0E5EC]/60 border-[#4A6A8C]/20 text-[#2D3436]'
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Quote snippet */}
                    <div
                      className={`p-3 rounded-xl border mt-3.5 text-xs italic ${
                        isLight ? 'bg-[#FAF5E4]/60 border-[#C5A059]/30 text-[#2D3436]' : 'bg-slate-900/80 border-slate-800 text-slate-300'
                      }`}
                    >
                      <p className="line-clamp-2">"{project.quote}"</p>
                      <p className="not-italic font-bold text-[10px] text-[#37526E] dark:text-cyan-300 mt-1">
                        — {project.author} ({project.authorRole})
                      </p>
                    </div>
                  </div>

                  {/* Primary Details CTA */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-xs group/btn ${
                      isLight
                        ? 'bg-[#37526E] text-white hover:bg-[#2B4057]'
                        : 'bg-slate-800 border border-slate-700 text-slate-200 hover:bg-cyan-400 hover:text-slate-950'
                    }`}
                  >
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                    <span>Ver Proyecto Completo & Resultados</span>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Detail Modal Dialog */}
      <ProjectDetailModal
        project={activeModalProject}
        theme={theme}
        onClose={() => setActiveModalProject(null)}
        onNavigateToContact={onNavigateToContact}
      />
    </div>
  );
}
