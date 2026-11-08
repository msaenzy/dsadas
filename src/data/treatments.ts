import React from 'react';
import {
  ToothImplantsIcon,
  ToothWhiteningIcon,
  ToothOrthodonticsIcon,
  ToothInvisibleOrthodonticsIcon,
  ToothPediatricIcon,
  ToothImmediateLoadIcon,
  ToothVeneersIcon,
  ToothMaxillofacialSurgeryIcon,
  ToothCrownsIcon,
  ToothExtractionsIcon,
  ToothAestheticRestorationIcon,
  ToothCleaningIcon,
  ToothRelaxationSplintIcon,
  ToothProstheticsBridgeIcon,
  ToothRootCanalIcon,
  ToothPeriodontalIcon,
  TreatmentIconProps,
} from '../components/ui/icons/treatment-icons';

export interface TreatmentItem {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: React.FC<TreatmentIconProps>;
  badgeText?: string;
}

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'implantes-dentales',
    name: 'Implantes Dentales',
    shortName: 'Implantes',
    description:
      'Recuperá piezas perdidas con fijación de titanio que devuelve la fuerza y estética natural de tu mordida.',
    icon: ToothImplantsIcon,
    badgeText: 'Fijo y Duradero',
  },
  {
    id: 'blanqueamiento-dental',
    name: 'Blanqueamiento Dental',
    shortName: 'Blanqueamiento',
    description:
      'Aclará varios tonos en una sola sesión con geles de última generación que protegen tu esmalte.',
    icon: ToothWhiteningIcon,
    badgeText: 'Resultados Inmediatos',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    shortName: 'Ortodoncia',
    description:
      'Alineá tu mordida y posición dental con brackets de alta precisión adaptados a tu ritmo.',
    icon: ToothOrthodonticsIcon,
    badgeText: 'Alineación Total',
  },
  {
    id: 'ortodoncia-invisible',
    name: 'Ortodoncia Invisible',
    shortName: 'Ortodoncia Invisible',
    description:
      'Corregí la posición de tus dientes con alineadores transparentes y removibles, sin brackets visibles.',
    icon: ToothInvisibleOrthodonticsIcon,
    badgeText: '100% Discreto',
  },
  {
    id: 'odontopediatria',
    name: 'Odontopediatría',
    shortName: 'Odontopediatría',
    description:
      'Cuidado preventivo y tratamientos adaptados para que los más chicos crezcan sin miedo al dentista.',
    icon: ToothPediatricIcon,
    badgeText: 'Atención Cálida',
  },
  {
    id: 'carga-inmediata',
    name: 'Carga Inmediata',
    shortName: 'Carga Inmediata',
    description:
      'Implante y corona provisional colocados en el mismo día para que no pases tiempo sin tu diente.',
    icon: ToothImmediateLoadIcon,
    badgeText: 'Mismo Día',
  },
  {
    id: 'carillas-dentales',
    name: 'Carillas Dentales',
    shortName: 'Carillas',
    description:
      'Transformá forma, color y armonía dental con finas láminas de porcelana de alta resistencia.',
    icon: ToothVeneersIcon,
    badgeText: 'Estética Premium',
  },
  {
    id: 'cirugia-maxilofacial',
    name: 'Cirugía Maxilofacial',
    shortName: 'Cirugía Maxilofacial',
    description:
      'Procedimientos quirúrgicos especializados para anomalías óseas, articulares y extracciones complejas.',
    icon: ToothMaxillofacialSurgeryIcon,
    badgeText: 'Especialistas',
  },
  {
    id: 'coronas-dentales',
    name: 'Coronas Dentales',
    shortName: 'Coronas Dentales',
    description:
      'Casquetes de porcelana o zirconio que recubren y devuelven la solidez a dientes muy desgastados.',
    icon: ToothCrownsIcon,
    badgeText: 'Máxima Resistencia',
  },
  {
    id: 'extracciones-dentales',
    name: 'Extracciones Dentales',
    shortName: 'Extracciones',
    description:
      'Extracciones simples y de muelas del juicio con técnicas mínimamente invasivas y anestesia localizada.',
    icon: ToothExtractionsIcon,
    badgeText: 'Sin Dolor',
  },
  {
    id: 'estetica-restauradora',
    name: 'Estética y Restauradora',
    shortName: 'Estética & Restauradora',
    description:
      'Reconstrucción con resinas estéticas de alta durabilidad para restaurar caries y fracturas invisibles.',
    icon: ToothAestheticRestorationIcon,
    badgeText: 'Armonía Natural',
  },
  {
    id: 'limpieza-dental',
    name: 'Limpieza Dental',
    shortName: 'Limpieza Dental',
    description:
      'Profilaxis y eliminación de sarro ultrasónica para prevenir caries y mantener encías sanas y frescas.',
    icon: ToothCleaningIcon,
    badgeText: 'Higiene Profunda',
  },
  {
    id: 'placas-relajacion',
    name: 'Placas de Relajación',
    shortName: 'Placas de Relajación',
    description:
      'Férulas oclusales a medida para aliviar el bruxismo, proteger el esmalte y descansar la mandíbula.',
    icon: ToothRelaxationSplintIcon,
    badgeText: 'Anti-Bruxismo',
  },
  {
    id: 'protesis-dental',
    name: 'Prótesis Dental',
    shortName: 'Prótesis Dental',
    description:
      'Soluciones fijas o removibles biocompatibles para rehabilitar tramos dentales completos con confort.',
    icon: ToothProstheticsBridgeIcon,
    badgeText: 'Confort y Ajuste',
  },
  {
    id: 'endodoncia',
    name: 'Tratamiento de Conducto (Endodoncia)',
    shortName: 'Endodoncia',
    description:
      'Eliminá la infección y el dolor preservando tu pieza dental original mediante limpieza radicular digital.',
    icon: ToothRootCanalIcon,
    badgeText: 'Salva tu Diente',
  },
  {
    id: 'periodoncia',
    name: 'Tratamiento Periodontal',
    shortName: 'Periodoncia',
    description:
      'Tratamiento y desinfección de encías para frenar el sangrado, la retracción gingival y la movilidad.',
    icon: ToothPeriodontalIcon,
    badgeText: 'Salud Gingival',
  },
];
