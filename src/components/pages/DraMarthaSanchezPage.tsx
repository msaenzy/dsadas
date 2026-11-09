import React from 'react';
import { ExternalLink, Headphones, ArrowLeft, ShieldCheck, Info, CheckCircle2, Lock } from 'lucide-react';

interface DraMarthaSanchezViewProps {
  onBackToHome?: () => void;
}

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw1S53Uf_nC1JLTFKg8O-KO2euTqvGS8nZJe0e2pmDv1Iv3uLZel6FHoJ8azDL5yB0D/exec';

export default function DraMarthaSanchezView({ onBackToHome }: DraMarthaSanchezViewProps) {
  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 flex flex-col font-body">
      {/* Top Header */}
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
                  Portal Seguro
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Alojado y administrado por Spondylus Soluciones Digitales
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/593958876957?text=Hola%20Spondylus,%20tengo%20una%20consulta%20sobre%20el%20portal%20de%20la%20Dra.%20Martha%20S%C3%A1nchez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-xs transition-colors"
          >
            <Headphones className="w-3.5 h-3.5 text-[#37526E]" />
            <span>Soporte</span>
          </a>
        </div>
      </header>

      {/* Main Hub Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EEF4F9] border border-[#D6E4F0] flex items-center justify-center mx-auto mb-5 text-[#37526E]">
            <Lock className="w-8 h-8 text-[#37526E]" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
            Sistema de Gestión Clínica
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8 leading-relaxed">
            Bienvenida al portal de acceso exclusivo para la <strong>Dra. Martha Sánchez</strong>. Pulse el botón inferior para ingresar al sistema seguro en Google Workspace.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={APPS_SCRIPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-[#37526E] text-white hover:bg-[#283e54] shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-5 h-5 text-[#C5A059]" />
              <span>Ingresar al Sistema (Abrir Aplicación)</span>
            </a>
          </div>

          {/* Explanation Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-left text-xs text-slate-600 space-y-3">
            <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
              <Info className="w-4 h-4 text-[#37526E]" />
              <span>¿Por qué Google rechaza la conexión en un iframe incrustado?</span>
            </div>
            <p className="leading-relaxed">
              Google Apps Script bloquea por defecto que sus sistemas se muestren dentro de marcos (<code>&lt;iframe&gt;</code>) en páginas externas para prevenir suplantaciones y proteger cuentas de Google (política <em>X-Frame-Options: SAMEORIGIN</em>).
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-900">
              <span className="font-bold flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                ¿Cómo permitir que cargue embebido directamente sin salirse?
              </span>
              <p className="text-[11px] leading-relaxed">
                Si eres el administrador y deseas que se abra dentro del recuadro, en tu archivo <code>Código.gs</code> de Google Apps Script dentro de la función <code>doGet()</code>, añade:
              </p>
              <pre className="mt-2 bg-amber-100/70 p-2 rounded text-[11px] font-mono text-amber-950 overflow-x-auto">
{`return HtmlService.createHtmlOutputFromFile('Index')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);`}
              </pre>
              <p className="text-[11px] mt-1.5 text-amber-800">
                Luego haz clic en <strong>Implementar &gt; Nueva versión</strong>.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Portal oficial configurado en spondylussolucionesdigitales.com
          </p>
        </div>
      </main>
    </div>
  );
}
