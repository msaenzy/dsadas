import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
}

export default function Footer({ theme }: FooterProps) {
  const isLight = theme === 'light';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t px-5 md:px-8 py-12 transition-colors duration-300 ${
        isLight
          ? 'bg-[#E0E5EC] border-[#4A6A8C]/20 text-[#2D3436]'
          : 'bg-[#05070d] border-slate-900 text-slate-400'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Brand & Mission */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt="Spondylus Logo"
                className="w-8 h-8 object-contain shrink-0"
              />
              <span
                className={`font-display font-extrabold text-xl ${
                  isLight ? 'text-[#4A6A8C]' : 'text-white'
                }`}
              >
                Spondylus
                <span className={isLight ? 'text-[#C5A059]' : 'text-cyan-400'}>.</span>
              </span>
            </div>
            <p className={`text-xs mt-2 leading-relaxed ${isLight ? 'text-[#2D3436]/75' : 'text-slate-400'}`}>
              Landing Pages estratégicas de alta conversión para marcas, clínicas y empresas en Ecuador.
            </p>
          </div>

          {/* Contact Direct Channels */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs">
            <a
              href="https://wa.me/593958876957"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/20 hover:border-emerald-500 text-[#2D3436] hover:text-emerald-700 shadow-xs'
                  : 'bg-slate-900 border-slate-800 hover:border-emerald-500 text-slate-300 hover:text-emerald-400'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-bold font-mono">+593 958 876 957</span>
            </a>

            <a
              href="mailto:contacto@spondylussolucionesdigitales.com"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all ${
                isLight
                  ? 'bg-white border-[#4A6A8C]/20 hover:border-[#4A6A8C] text-[#2D3436] hover:text-[#4A6A8C] shadow-xs'
                  : 'bg-slate-900 border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-cyan-500" />
              <span className="font-semibold">contacto@spondylussolucionesdigitales.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/spondylussoluciones/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @spondylussoluciones"
              title="Instagram @spondylussoluciones"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                isLight
                  ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-pink-600 hover:border-pink-500 hover:bg-white shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40'
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/593958876957"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Spondylus"
              title="WhatsApp +593 958 876 957"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                isLight
                  ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-emerald-600 hover:border-emerald-500 hover:bg-white shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                isLight
                  ? 'border-[#4A6A8C]/30 text-[#4A6A8C] hover:text-[#4A6A8C] hover:border-[#4A6A8C] hover:bg-white shadow-xs'
                  : 'border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40'
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${isLight ? 'border-[#4A6A8C]/15' : 'border-slate-800/80'}`}>
          <ul className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <li>
              <a
                href="#inicio"
                className={`transition-colors ${
                  isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
                }`}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className={`transition-colors ${
                  isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
                }`}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#planes"
                className={`transition-colors ${
                  isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
                }`}
              >
                Planes
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`transition-colors ${
                  isLight ? 'hover:text-[#4A6A8C]' : 'hover:text-cyan-400'
                }`}
              >
                Contacto
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-center">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className={isLight ? 'text-[#2D3436]/80' : 'text-slate-400'}>
              Guayaquil, Ecuador · Cobertura y atención en todo el país
            </span>
          </div>
        </div>

        <p
          className={`text-center text-xs pt-4 font-mono ${
            isLight ? 'text-[#2D3436]/70' : 'text-slate-500'
          }`}
        >
          © {currentYear} Spondylus Soluciones Digitales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
