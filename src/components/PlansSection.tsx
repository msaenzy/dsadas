import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { ThemeMode, PricingPlan } from '../types';

interface PlansSectionProps {
  theme: ThemeMode;
  onSelectPlan?: (planTitle: string) => void;
}

export default function PlansSection({ theme, onSelectPlan }: PlansSectionProps) {
  const isLight = theme === 'light';

  const plans: PricingPlan[] = [
    {
      id: 'plan-1',
      planNumber: 'PLAN 01',
      title: 'Landing Page One-Page',
      subtitle: 'Mono-Página · Sin Dominio Propio',
      description:
        'Estructura de página única de alto impacto diseñada para profesionales independientes y servicios que requieren presencia digital ágil.',
      features: [
        'Estructura One-Page (1 sola página / Todas las secciones integradas)',
        'Alojamiento Cloud en Netlify de alta velocidad',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Diseño 100% Mobile-First adaptativo',
        'Velocidad de Carga Extrema (<1s)',
        'Atención y soporte técnico directo en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura One-Page (Página única)', included: true, highlight: true },
        { text: 'Alojamiento Cloud en Netlify incluido', included: true, highlight: true },
        { text: 'Conversión Directa a WhatsApp (UX/UI)', included: true },
        { text: 'Diseño 100% Mobile-First adaptativo', included: true },
        { text: 'Velocidad de Carga Extrema (<1s)', included: true },
        { text: 'Atención y soporte directo en Ecuador', included: true },
        { text: 'Dominio propio .COM (Requiere Plan 02/03)', included: false },
      ],
      ctaText: 'Quiero el Plan One-Page',
    },
    {
      id: 'plan-2',
      badge: 'MÁS RECOMENDADO',
      planNumber: 'PLAN 02',
      title: 'Landing Corporativa Pro',
      subtitle: 'Landing Page + Dominio .COM Incluido',
      description:
        'Landing page de alta autoridad y conversión con tu propio dominio institucional para proyectar máxima credibilidad y captar clientes.',
      features: [
        'Estructura Landing Page de alta conversión',
        'Dominio propio .COM incluido (1 año)',
        'Hosting Cloud de Alto Rendimiento & SSL Seguro',
        'Conversión Directa a WhatsApp (UX/UI)',
        'Galería de proyectos, trabajos o testimonios',
        'SEO Local Básico para motores de búsqueda',
        'Diseño Mobile-First & Carga <1s',
        'Atención y soporte directo en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura Landing Page de Alta Conversión', included: true, highlight: true },
        { text: 'Dominio propio .COM incluido (1 año)', included: true, highlight: true },
        { text: 'Hosting Cloud de Alto Rendimiento & SSL', included: true, highlight: true },
        { text: 'Conversión Directa a WhatsApp (UX/UI)', included: true },
        { text: 'Galería de proyectos / testimonios', included: true },
        { text: 'SEO Local y optimización en buscadores', included: true },
        { text: 'Diseño Mobile-First & Carga <1s', included: true },
      ],
      ctaText: 'Quiero el Plan con Dominio',
      isPopular: true,
    },
    {
      id: 'plan-3',
      badge: 'MÁXIMA AUTORIDAD',
      planNumber: 'PLAN 03',
      title: 'Sitio Web Corporativo Completo',
      subtitle: 'Multi-Página + Dominio + Correo Receptor',
      description:
        'Sitio web integral multi-página para empresas y marcas que requieren múltiples secciones y canal de recepción corporativo centralizado.',
      features: [
        'Estructura Multi-Página completa (Múltiples vistas)',
        'Dominio propio .COM incluido (1 año)',
        'Buzón de Correo Corporativo Receptor (Recepción institucional y reenvío directo a tu bandeja personal/WhatsApp)',
        'Hosting Corporativo Premium & SSL Dedicado',
        'Formulario de contacto y cotización personalizado',
        'Catálogo / Menú interactivo ampliado de servicios',
        'SEO Local Avanzado + Integración Google Maps',
        'Atención y asesoría prioritaria en Ecuador',
      ],
      featureItems: [
        { text: 'Estructura Multi-Página Completa', included: true, highlight: true },
        { text: 'Dominio propio .COM incluido (1 año)', included: true, highlight: true },
        { text: 'Correo Corporativo Receptor (Recepción & Reenvío)', included: true, highlight: true },
        { text: 'Hosting Corporativo Premium & SSL Dedicado', included: true, highlight: true },
        { text: 'Formulario de cotización personalizado', included: true },
        { text: 'Catálogo / Menú interactivo de servicios', included: true },
        { text: 'SEO Local Avanzado + Google Maps', included: true },
      ],
      ctaText: 'Quiero el Sitio Web Completo',
    },
  ];

  return (
    <section
      id="planes"
      className={`relative py-10 md:py-12 lg:py-8 xl:py-10 lg:min-h-[calc(100vh-4rem)] lg:flex lg:flex-col lg:justify-center px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/15 text-[#2D3436] shell-ridges-light'
          : 'bg-[#070911] border-slate-900 text-slate-300 shell-ridges-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-5 lg:mb-6"
        >
          <span
            className={`font-mono text-[11px] tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full border ${
              isLight ? 'bg-white/80 border-[#4A6A8C]/30 text-[#37526E]' : 'bg-slate-900 border-slate-800 text-cyan-300'
            }`}
          >
            Inversión Transparente & Comparativa
          </span>
          <h2
            className={`font-display font-extrabold text-2xl sm:text-3xl lg:text-[2rem] mt-2 tracking-tight ${
              isLight ? 'text-[#2D3436]' : 'text-white'
            }`}
          >
            Planes hechos para cada etapa de tu negocio
          </h2>
          <p className={`mt-1.5 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
            Diseño mobile-first, velocidad ultra rápida y conversión directa a WhatsApp con atención local en Ecuador.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-4.5 xl:gap-5 items-stretch">
          {plans.map((p, index) => {
            const isPopular = p.isPopular;
            const includedList = p.featureItems?.filter((item) => item.included) || [];
            const excludedList = p.featureItems?.filter((item) => !item.included) || [];

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between rounded-2xl p-4 sm:p-5 lg:p-4.5 xl:p-5 border transition-all duration-300 ${
                  isPopular
                    ? isLight
                      ? 'bg-white border-[#C5A059] shadow-xl shadow-[#4A6A8C]/15 ring-2 ring-[#C5A059]/40'
                      : 'bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 border-cyan-400 shadow-xl shadow-cyan-950/70 ring-1 ring-cyan-400/40'
                    : isLight
                    ? 'bg-[#F2F5F9] border-[#4A6A8C]/20 shadow-xs hover:border-[#4A6A8C]/50 hover:bg-white'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {p.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 font-extrabold tracking-wider text-[10px] px-3 py-0.5 rounded-full uppercase shadow-xs flex items-center gap-1 z-10 ${
                      isPopular
                        ? 'bg-[#37526E] text-white border border-[#C5A059]/60'
                        : isLight
                        ? 'bg-[#4A6A8C] text-white'
                        : 'bg-slate-800 text-cyan-300 border border-cyan-400/30'
                    }`}
                  >
                    {isPopular && <Sparkles className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />}
                    <span>{p.badge}</span>
                  </span>
                )}

                {/* Top Content (Header + Features) */}
                <div>
                  {/* Plan Header */}
                  <div className="mb-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-display font-extrabold text-lg lg:text-xl ${
                          isLight ? 'text-[#2D3436]' : 'text-white'
                        }`}
                      >
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-wider shrink-0">
                        {p.planNumber}
                      </span>
                    </div>

                    {/* Subtitle Pill */}
                    {p.subtitle && (
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#4A6A8C]/10 border border-[#4A6A8C]/20 text-[#37526E] dark:text-cyan-300 text-[11px] font-bold">
                        <Layers className="w-3 h-3 text-[#C5A059]" />
                        <span>{p.subtitle}</span>
                      </div>
                    )}

                    <p className={`text-xs mt-1.5 leading-snug line-clamp-2 ${isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}`}>
                      {p.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#4A6A8C]/15 dark:bg-slate-800 my-2" />

                  {/* Features Section */}
                  <div className="space-y-3 mb-3">
                    {/* INCLUYE (✓) */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4A6A8C] dark:text-emerald-400 mb-1.5 flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[3] text-[#C5A059]" />
                        <span>Incluye:</span>
                      </h4>

                      <ul className="space-y-1.5 text-xs">
                        {includedList.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div
                              className={`p-0.5 rounded-full shrink-0 bg-[#4A6A8C]/15 text-[#4A6A8C] dark:text-emerald-400 border border-[#4A6A8C]/30`}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span
                              className={`leading-tight text-[11.5px] sm:text-xs ${
                                item.highlight
                                  ? isLight
                                    ? 'text-[#2D3436] font-bold'
                                    : 'text-white font-bold'
                                  : isLight
                                  ? 'text-[#2D3436]/90 font-medium'
                                  : 'text-slate-300'
                              }`}
                            >
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Excluded Features (✕) if any */}
                    {excludedList.length > 0 && (
                      <div className="pt-1.5 border-t border-dashed border-[#4A6A8C]/15 dark:border-slate-800">
                        <ul className="space-y-1 text-xs">
                          {excludedList.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="p-0.5 rounded-full shrink-0 bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20">
                                <X className="w-2.5 h-2.5 stroke-[2.5]" />
                              </div>
                              <span className="text-[#2D3436]/45 dark:text-slate-500 text-[11px]">
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-1.5">
                  <a
                    href="#contacto"
                    onClick={() => onSelectPlan && onSelectPlan(p.title)}
                    className={`cta-shimmer w-full text-center font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                      isPopular
                        ? isLight
                          ? 'bg-[#4A6A8C] hover:bg-[#37526E] text-white shadow-[#4A6A8C]/25'
                          : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/25'
                        : isLight
                        ? 'border border-[#4A6A8C]/40 hover:border-[#4A6A8C] bg-white hover:bg-[#F2F5F9] text-[#2D3436]'
                        : 'border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 text-slate-200 bg-slate-800/60'
                    }`}
                  >
                    <span>{p.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

