import React from 'react';
import { ExternalLink, ArrowLeft, ShieldCheck, Database, Smartphone, Stethoscope, Lock } from 'lucide-react';

interface DraMarthaSanchezViewProps {
  onBackToHome?: () => void;
}

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxz-0XuwBzASimIJ3sX3eUFQHU2QNwSd7jJ09nWuKjiASDZsiFc5dJZL_9cAFlCQm2j/exec';

export default function DraMarthaSanchezView({ onBackToHome }: DraMarthaSanchezViewProps) {
  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 flex flex-col font-body">
      {/* Header Bar */}
      <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
        <div className="flex items-center gap-3">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
              title="Volver a la web principal"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#37526E]/10 border border-[#37526E]/20 flex items-center justify-center text-[#37526E] font-bold shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#37526E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-900 leading-tight">
                  Dra. Martha Sánchez
                </span>
                <span className="font-mono text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Acceso Oficial
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Diseñado por Spondylus Soluciones Digitales
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hub Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EEF4F9] border border-[#D6E4F0] flex items-center justify-center mx-auto mb-6 text-[#37526E]">
            <Stethoscope className="w-8 h-8 text-[#37526E]" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Panel de Control Pediatría
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
            Bienvenida al portal oficial para la <strong>Dra. Martha Sánchez</strong>. Ingrese a continuación para administrar la información de su consultorio, horarios y canales de contacto.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <a
              href={APPS_SCRIPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#37526E] text-white hover:bg-[#283e54] shadow-md transition-all hover:scale-[1.01] active:scale-[0.98]"
            >
              <ExternalLink className="w-5 h-5 text-[#C5A059]" />
              <span>Ingresar al Sistema (Abrir Panel)</span>
            </a>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-3 mb-8 text-center">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
              <div className="text-xs font-semibold text-slate-700">Acceso Seguro</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <Database className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
              <div className="text-xs font-semibold text-slate-700">Google Sheets</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
              <Smartphone className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
              <div className="text-xs font-semibold text-slate-700">Móvil & PC</div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 text-left text-xs text-slate-600">
            <div className="flex items-center gap-2 font-bold text-slate-800 text-xs mb-1.5">
              <Lock className="w-3.5 h-3.5 text-[#37526E]" />
              <span>Entorno Seguro de Google Workspace</span>
            </div>
            <p className="leading-relaxed text-[11.5px] text-slate-500">
              Por políticas de autenticación de cuentas Google, la sesión se abre en una ventana independiente certificada, garantizando que sus contraseñas y datos del consultorio permanezcan siempre protegidos.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
