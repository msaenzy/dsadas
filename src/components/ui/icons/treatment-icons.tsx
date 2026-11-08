import React from 'react';

export interface TreatmentIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  strokeColor?: string;
  strokeWidth?: number;
}

const defaultProps = {
  size: 28,
  strokeColor: '#0862B5',
  strokeWidth: 1.8,
};

// 1. Implantes Dentales: Diente con un tornillo/perno de implante debajo atravesando la raíz
export const ToothImplantsIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Corona del diente */}
    <path
      d="M16 4C11.5 4 8 6.8 8 11.2c0 3.2 1.2 5.8 2.6 8.8h10.8c1.4-3 2.6-5.6 2.6-8.8C24 6.8 20.5 4 16 4z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 10c1-1 2.3-1.5 3.5-1.5s2.5.5 3.5 1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Tornillo de implante debajo atravesando hacia la raíz */}
    <path
      d="M16 17v11M13 20h6M13.5 23h5M14 26h4M15 28.5h2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Blanqueamiento Dental: Diente con 2-3 destellos/chispitas pequeñas arriba indicando brillo
export const ToothWhiteningIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente base */}
    <path
      d="M16 7C12 7 9 9.5 9 13.5c0 3.5 1.5 6.8 2.5 9.8.7 2 1.3 4 1.8 5 .4.8 1 1.1 1.6.6.7-.5 1.3-2 1.6-4.4.2-1.3.4-1.5.5-1.5s.3.2.5 1.5c.3 2.4.9 3.9 1.6 4.4.6.5 1.2.2 1.6-.6.5-1 1.1-3 1.8-5 1-3 2.5-6.3 2.5-9.8C23 9.5 20 7 16 7z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Destellos / Brillos */}
    {/* Chispita 1 (Arriba Derecha) */}
    <path
      d="M23 4v4M21 6h4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Chispita 2 (Arriba Izquierda) */}
    <path
      d="M8 5v3M6.5 6.5h3"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Chispita 3 (Centro Brillo) */}
    <path
      d="M16 1.5v2.5M14.7 2.7h2.6"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 3. Ortodoncia: Diente con una línea horizontal de brackets (puntos conectados por línea)
export const ToothOrthodonticsIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente base */}
    <path
      d="M16 5C11.5 5 8 7.8 8 12.2c0 3.8 1.5 7.2 2.6 10.5.6 1.8 1.2 3.8 1.6 4.8.4.8 1 1 1.6.5.7-.5 1.3-2 1.6-4.5.2-1.3.4-1.5.6-1.5s.4.2.6 1.5c.3 2.5.9 4 1.6 4.5.6.5 1.2.3 1.6-.5.4-1 1-3 1.6-4.8 1.1-3.3 2.6-6.7 2.6-10.5C24 7.8 20.5 5 16 5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Alambre horizontal de ortodoncia */}
    <path
      d="M5 14.5h22"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Brackets con aletas */}
    <rect
      x="13.5"
      y="12.5"
      width="5"
      height="4"
      rx="1"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="#F3F6FA"
    />
    <path
      d="M16 12.5v4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Brackets laterales */}
    <rect
      x="6.5"
      y="13"
      width="3"
      height="3"
      rx="0.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
    <rect
      x="22.5"
      y="13"
      width="3"
      height="3"
      rx="0.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);

// 4. Ortodoncia Invisible: Diente con contorno punteado superpuesto simulando alineador
export const ToothInvisibleOrthodonticsIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente interior normal */}
    <path
      d="M16 7C12.5 7 9.5 9.2 9.5 12.8c0 3.2 1.3 6 2.2 8.8.5 1.5 1 3.2 1.4 4 .3.7.8.9 1.3.5.6-.4 1.1-1.7 1.4-3.8.2-1.1.4-1.3.6-1.3s.4.2.6 1.3c.3 2.1.8 3.4 1.4 3.8.5.4 1 .2 1.3-.5.4-.8.9-2.5 1.4-4 .9-2.8 2.2-5.6 2.2-8.8C22.5 9.2 19.5 7 16 7z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.65"
    />
    {/* Férula alineadora transparente con trazo punteado envolvente */}
    <path
      d="M16 4C10.8 4 6.8 7 6.8 12c0 4.2 1.6 8 2.8 11.5 1.2 3.5 3 4.5 4.4 4.5h4c1.4 0 3.2-1 4.4-4.5 1.2-3.5 2.8-7.3 2.8-11.5 0-5-4-8-9.2-8z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2.5 2.5"
    />
    {/* Borde inferior del alineador */}
    <path
      d="M11 18.5c3 1.5 7 1.5 10 0"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

// 5. Odontopediatría: Diente de proporciones redondeadas con carita sonriente simple dentro
export const ToothPediatricIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente infantil redondeado y tierno */}
    <path
      d="M16 6C11 6 7.5 9 7.5 13.5c0 3.5 1.2 6.5 2.2 9.2.5 1.5 1 3 1.5 3.8.4.7 1 .8 1.5.4.6-.4 1.1-1.6 1.4-3.5.2-1 .4-1.2.6-1.2s.4.2.6 1.2c.3 1.9.8 3.1 1.4 3.5.5.4 1.1.3 1.5-.4.5-.8 1-2.3 1.5-3.8 1-2.7 2.2-5.7 2.2-9.2C24.5 9 21 6 16 6z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ojos de carita feliz */}
    <circle cx="12.5" cy="13" r="1" fill={strokeColor} />
    <circle cx="19.5" cy="13" r="1" fill={strokeColor} />
    {/* Sonrisa feliz */}
    <path
      d="M12.5 16.5c1 1.8 6 1.8 7 0"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Pequeño corazón o estrella decorativa */}
    <path
      d="M23 6.5c-.8-.8-2 0-2 .8 0 .8 1.2 1.6 2 2.2.8-.6 2-1.4 2-2.2 0-.8-1.2-1.6-2-.8z"
      stroke={strokeColor}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Carga Inmediata: Diente con tornillo de implante + pequeño rayo/flash al costado
export const ToothImmediateLoadIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Corona y perno de implante */}
    <path
      d="M14 5C10 5 7 7.5 7 11.5c0 3 1 5.5 2.2 8.5h8.6c1.2-3 2.2-5.5 2.2-8.5C20 7.5 17 5 14 5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 17.5v9.5M11 20.5h5M11.5 23.5h4M12 26h3"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Rayo indicador de inmediatez y velocidad */}
    <path
      d="M25 6l-4.5 7h4l-3.5 9 7.5-9.5h-4.5l3-6.5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#F3F6FA"
    />
  </svg>
);

// 7. Carillas Dentales: Dos dientes frontales con una fina lámina superpuesta por delante
export const ToothVeneersIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente frontal izquierdo */}
    <path
      d="M9 7h6.5v16c0 1.5-1.2 2.5-3.2 2.5S9 24.5 9 23V7z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Diente frontal derecho */}
    <path
      d="M16.5 7h6.5v16c0 1.5-1.2 2.5-3.2 2.5S16.5 24.5 16.5 23V7z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Fina lámina / carilla de porcelana superpuesta por delante */}
    <path
      d="M6.5 9c2.5-1.5 5.5-2 9.5-2s7 0.5 9.5 2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M6.5 9.5c0 6 .8 11.5 2.5 14.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Destello de brillo de la carilla */}
    <path
      d="M24 11v3M22.5 12.5h3"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 8. Cirugía Maxilofacial: Perfil simplificado de mandíbula con pequeña cruz médica
export const ToothMaxillofacialSurgeryIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Arco maxilofacial / mandibular anatómico */}
    <path
      d="M6 9c0 5 1.5 11 5 14.5 3.5 3.5 8.5 3.5 12 0l3-3c.8-.8 1.2-2 .8-3L25 13c-.5-1.5-2-2.5-3.5-2.5h-4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Dientes en la mandíbula */}
    <path
      d="M10 12c1.5-1 4-1 6 0M10 15c1.5-1 4-1 6 0"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Cruz médica quirúrgica */}
    <rect
      x="19"
      y="4"
      width="8"
      height="8"
      rx="2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="#F3F6FA"
    />
    <path
      d="M23 6v4M21 8h4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 9. Coronas Dentales: Diente con tapa delineada en forma de casquete cubriendo la parte superior
export const ToothCrownsIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Raíces inferiores del diente */}
    <path
      d="M10 15c.6 2.5 1.3 5 1.7 6.2.4.9 1 1.2 1.6.6.7-.5 1.3-2 1.6-4.5.2-1.2.4-1.3.6-1.3s.4.1.6 1.3c.3 2.5.9 4 1.6 4.5.6.6 1.2.3 1.6-.6.4-1.2 1.1-3.7 1.7-6.2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Casquete / Corona protectora superior */}
    <path
      d="M8 15C8 9.5 11.5 5 16 5s8 4.5 8 10H8z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#F3F6FA"
    />
    {/* Línea de ajuste de corona y almenas sutiles */}
    <path
      d="M6.5 15h19"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M12 9l2 2 2-2 2 2 2-2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 10. Extracciones Dentales: Diente sujetado por fórceps/pinza simplificada con flecha hacia afuera
export const ToothExtractionsIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente siendo extraído */}
    <path
      d="M16 11C12.5 11 10 13 10 16c0 2.8 1.1 5.2 1.9 7.8.4 1.3.8 2.8 1.2 3.5.3.6.8.8 1.2.4.5-.4.9-1.5 1.2-3.2.2-.9.3-1 .5-1s.3.1.5 1c.3 1.7.7 2.8 1.2 3.2.4.4.9.2 1.2-.4.4-.7.8-2.2 1.2-3.5.8-2.6 1.9-5 1.9-7.8 0-3-2.5-5-6-5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pinza / Fórceps odontológico sujetando desde arriba */}
    <path
      d="M9 3c1 4 3.5 7 5.5 8M23 3c-1 4-3.5 7-5.5 8"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <circle
      cx="16"
      cy="5"
      r="1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="#F3F6FA"
    />
    {/* Flecha hacia arriba indicando extracción suave */}
    <path
      d="M4 14l2-2 2 2M6 12v6"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 11. Estética y Restauradora: Diente dividido a la mitad (lado dañado vs lado liso restaurado)
export const ToothAestheticRestorationIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Línea divisoria central */}
    <path
      d="M16 4v23"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    {/* Lado izquierdo: irregular / dañado / caries */}
    <path
      d="M16 4.5c-3.5 0-6.5 2-7.5 5.5l2 1.5-2 2 1.5 2-2 2 1.5 2-1 2.5c.6 1.8 1.2 3.8 1.6 4.8.4.8 1 1 1.6.5.7-.5 1.3-2 1.6-4.5.2-1.3.4-1.5.6-1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lado derecho: perfecto, liso y restaurado */}
    <path
      d="M16 4.5c4.5 0 8 2.8 8 7.2 0 3.8-1.5 7.2-2.6 10.5-.6 1.8-1.2 3.8-1.6 4.8-.4.8-1 1-1.6.5-.7-.5-1.3-2-1.6-4.5-.2-1.3-.4-1.5-.6-1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Brillo en lado restaurado */}
    <path
      d="M21 9v3M19.5 10.5h3"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 12. Limpieza Dental: Diente con cepillo pequeño apoyado y 2-3 burbujas/gotas alrededor
export const ToothCleaningIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente base */}
    <path
      d="M15 8C11 8 8 10.5 8 14.5c0 3.5 1.3 6.8 2.3 9.8.6 1.8 1.2 3.8 1.6 4.8.4.8 1 1 1.6.5.7-.5 1.3-2 1.6-4.5.2-1.3.4-1.5.6-1.5s.4.2.6 1.5c.3 2.5.9 4 1.6 4.5.6.5 1.2.3 1.6-.5.4-1 1-3 1.6-4.8 1-3 2.3-6.3 2.3-9.8C22.8 10.5 19.5 8 15 8z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cepillo dental apoyado en ángulo */}
    <path
      d="M26 5l-8 8M23 4l-4 4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M17 11c1-1 3-1 4 0"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Burbujas de limpieza profunda */}
    <circle
      cx="6.5"
      cy="8.5"
      r="1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
    <circle
      cx="7"
      cy="15"
      r="1"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
    <circle
      cx="24.5"
      cy="18.5"
      r="1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </svg>
);

// 13. Placas de Relajación: Forma ovalada de placa/férula sobre una línea simple de mandíbula
export const ToothRelaxationSplintIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Férula de descarga / Placa de relajación oclusal */}
    <path
      d="M5 13C5 7.5 9.5 4 16 4s11 3.5 11 9c0 2-1 4-2.5 5.5-3.5-2-6.5-2.5-8.5-2.5s-5 .5-8.5 2.5C6 17 5 15 5 13z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#F3F6FA"
    />
    {/* Ranuras dentales dentro de la placa */}
    <path
      d="M9 10c1.5-1 3.5-1.5 7-1.5s5.5.5 7 1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Línea simple de mandíbula anatómica inferior */}
    <path
      d="M7 21c2.5 4 5.5 6 9 6s6.5-2 9-6"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 24h8"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 14. Prótesis Dental: Fila de 3-4 dientes conectados en arco como un puente
export const ToothProstheticsBridgeIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Barra conector puente superior */}
    <path
      d="M5 9c3.5-1.5 7.5-2 11-2s7.5.5 11 2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Diente 1 (Pilar Izquierdo) */}
    <path
      d="M5 10c0 4 1 8 2.5 12h3c1.5-4 2.5-8 2.5-12H5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Diente 2 (Póntico Central) */}
    <path
      d="M13 10c0 3.5.8 7 2 10.5h2c1.2-3.5 2-7 2-10.5h-6z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Diente 3 (Pilar Derecho) */}
    <path
      d="M19 10c0 4 1 8 2.5 12h3c1.5-4 2.5-8 2.5-12h-8z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 15. Tratamiento de Conducto (Endodoncia): Diente con raíz resaltada y lima/aguja vertical dentro
export const ToothRootCanalIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Corona y silueta del diente */}
    <path
      d="M16 6C11.5 6 8 8.8 8 13c0 3.5 1.5 7 2.6 10.2.6 1.8 1.2 3.8 1.6 4.8.4.8 1 1 1.6.5.7-.5 1.3-2 1.6-4.5.2-1.3.4-1.5.6-1.5s.4.2.6 1.5c.3 2.5.9 4 1.6 4.5.6.5 1.2.3 1.6-.5.4-1 1-3 1.6-4.8 1.1-3.2 2.6-6.7 2.6-10.2C24 8.8 20.5 6 16 6z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lima endodóntica vertical milimétrica dentro del conducto radicular */}
    <path
      d="M16 2.5v18"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Mango de la lima arriba */}
    <rect
      x="14"
      y="2"
      width="4"
      height="3"
      rx="0.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="#F3F6FA"
    />
    {/* Espirales / estrías de la aguja de conducto */}
    <path
      d="M14.5 9h3M14.5 12h3M14.5 15h3M15 17.5h2"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

// 16. Tratamiento Periodontal: Diente con línea de encía marcada y pequeño signo "+" junto a la encía
export const ToothPeriodontalIcon: React.FC<TreatmentIconProps> = ({
  className = '',
  size = defaultProps.size,
  strokeColor = defaultProps.strokeColor,
  strokeWidth = defaultProps.strokeWidth,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Diente */}
    <path
      d="M15 5C11 5 8 7.5 8 11.5c0 3.8 1.5 7.2 2.6 10.5.6 1.8 1.2 3.8 1.6 4.8.4.8 1 1 1.6.5.7-.5 1.3-2 1.6-4.5.2-1.3.4-1.5.6-1.5s.4.2.6 1.5c.3 2.5.9 4 1.6 4.5.6.5 1.2.3 1.6-.5.4-1 1-3 1.6-4.8 1.1-3.3 2.6-6.7 2.6-10.5C23 7.5 19 5 15 5z"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Línea anatómica de encía / margen periodontal marcado */}
    <path
      d="M4 17.5c3-2 6.5-2 9.5 0s6.5 2 9.5 0"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    {/* Signo "+" de salud / cuidado gingival */}
    <rect
      x="21"
      y="18"
      width="7"
      height="7"
      rx="1.5"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="#F3F6FA"
    />
    <path
      d="M24.5 19.5v4M22.5 21.5h4"
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
