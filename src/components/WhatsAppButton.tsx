import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Instagram } from 'lucide-react';
import { ThemeMode } from '../types';

interface WhatsAppButtonProps {
  theme: ThemeMode;
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  theme,
  phoneNumber = '593958876957',
  defaultMessage = '¡Hola Spondylus! Quisiera cotizar un proyecto web para mi negocio.',
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isLight = theme === 'light';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`w-72 sm:w-80 rounded-2xl shadow-2xl border overflow-hidden ${
              isLight
                ? 'bg-white border-slate-200 text-slate-800'
                : 'bg-[#0f172a] border-slate-800 text-slate-100'
            }`}
          >
            {/* Header */}
            <div className="bg-[#075e54] text-white p-4 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-[#075e54] text-sm border-2 border-white">
                    SD
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075e54] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Asesor Spondylus</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    Responde habitualmente en minutos
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white cursor-pointer"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div
              className={`p-4 text-xs space-y-3 ${
                isLight ? 'bg-slate-50/80' : 'bg-[#0b101d]'
              }`}
            >
              <div
                className={`p-3 rounded-2xl rounded-tl-none max-w-[90%] shadow-xs ${
                  isLight
                    ? 'bg-white text-slate-800 border border-slate-100'
                    : 'bg-[#1e293b] text-slate-200 border border-slate-700/50'
                }`}
              >
                <p className="font-medium text-[12px] leading-relaxed">
                  👋 ¡Hola! ¿Buscas una página web de alta conversión o cotizar tu proyecto en Ecuador?
                </p>
                <span className="text-[10px] text-slate-400 block text-right mt-1">
                  En línea
                </span>
              </div>
            </div>

            {/* CTA Button Inside Chat */}
            <div className="p-3 bg-white dark:bg-[#0f172a] border-t border-slate-100 dark:border-slate-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Iniciar conversación por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Soft Glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 blur-sm animate-pulse pointer-events-none" />

        <button
          onClick={handleToggle}
          aria-label="Contactar por WhatsApp"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 flex items-center justify-center transition-all cursor-pointer group"
        >
          {/* Custom Official WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-current transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
