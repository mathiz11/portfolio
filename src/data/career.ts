export interface CareerStep {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
  tags?: string[];
  /** Projets détaillés, chacun avec sa stack */
  projects?: { name: string; tags: string[] }[];
}

/** Du plus récent au plus ancien */
export const career: CareerStep[] = [
  {
    period: '2022 — auj.',
    title: 'Ingénieur logiciel · fullstack',
    subtitle: 'Meritis (ESN) · en mission chez Geodis',
    description: 'Applications et outils internes pour la logistique.',
    tags: ['TypeScript', 'Vue', 'NestJS', 'OpenShift'],
  },
  {
    period: '2019 — 2022',
    title: 'IMT Mines Alès · Informatique & Réseaux',
    subtitle: "École d'ingénieur · alternance chez IOcean",
    projects: [
      { name: 'Générateur de sites éco-responsable', tags: ['Angular', 'Spring', 'Gatsby'] },
      { name: 'Applications internes, notamment pour une mutuelle', tags: ['Angular', 'Spring'] },
    ],
  },
  {
    period: '2017 — 2019',
    title: 'IUT Informatique',
    subtitle: 'Arles · Aix-Marseille Université',
  },
];
