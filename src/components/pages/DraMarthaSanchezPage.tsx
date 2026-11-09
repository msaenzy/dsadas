import React, { useState } from 'react';
import { ExternalLink, RotateCw, Headphones, ArrowLeft, ShieldCheck } from 'lucide-react';

interface DraMarthaSanchezViewProps {
  onBackToHome?: () => void;
}

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw1S53Uf_nC1JLTFKg8O-KO2euTqvGS8nZJe0e2pmDv1Iv3uLZel6FHoJ8azDL5yB0D/exec';

export default function DraMarthaSanchezView({ onBackToHome }: DraMarthaSanchezViewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F4F6F9] w-screen h-screen overflow-hidden">
      {/* Header Bar */}
      <header className="h-14 sm:h-16 min-h-[56px] sm:min-h-[64px] bg-white border-b border-slate-200 px-3 sm:px-6 flex items-center justify-between gap-3 shadow-xs shrink-0 z-20">
        <div className="flex items-center gap-3">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
              title="Volver al inicio"
              aria-label="Volver al inicio"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#37526E] font-bold text-xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#37526E]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-tight">
                  Dra. Martha Sánchez
                </span>
                <span className="font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Portal Seguro
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Alojado en Spondylus Soluciones Digitales
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReload}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            title="Recargar sistema"
            aria-label="Recargar sistema"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <a
            href={APPS_SCRIPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-colors"
            title="Abrir en pestaña nueva"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ventana Completa</span>
          </a>

          <a
            href="https://wa.me/593958876957?text=Hola%20Spondylus,%20tengo%20una%20consulta%20sobre%20el%20portal%20de%20la%20Dra.%20Martha%20S%C3%A1nchez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#37526E] text-white hover:bg-[#283e54] shadow-xs transition-colors"
            title="Contactar soporte técnico"
          >
            <Headphones className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Soporte</span>
          </a>
        </div>
      </header>

      {/* Main Container / Iframe */}
      <main className="relative flex-1 w-full h-[calc(100%-56px)] sm:h-[calc(100%-64px)] bg-white">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white gap-3.5">
            <div className="w-10 h-10 border-3 border-slate-200 border-t-[#37526E] rounded-full animate-spin"></div>
            <p className="text-sm font-semibold text-slate-800">Conectando al Sistema Clínico...</p>
            <p className="text-xs text-slate-500 max-w-xs text-center">
              Cargando el entorno de la Dra. Martha Sánchez. Por favor, espere un momento.
            </p>
          </div>
        )}

        <iframe
          key={iframeKey}
          src={APPS_SCRIPT_URL}
          title="Sistema Dra. Martha Sánchez"
          className="w-full h-full border-none block"
          allow="camera; microphone; geolocation; clipboard-read; clipboard-write; fullscreen"
          loading="eager"
          onLoad={() => {
            setTimeout(() => setIsLoading(false), 400);
          }}
        />
      </main>
    </div>
  );
}
