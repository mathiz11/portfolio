import aporteedetrain from '../assets/images/projet-aporteedetrain.png';
import rallyTools from '../assets/images/projet-rally-tools.png';
import type { ImageMetadata } from 'astro';

export interface Website {
  name: string;
  url: string;
  description: string;
  tags?: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Fond derrière la capture (utile pour les captures sombres) */
  imageBg?: string;
  imagePosition?: string;
}

export interface Repo {
  name: string;
  description: string;
  lang: string;
  url: string;
}

export const websites: Website[] = [
  {
    name: 'À portée de train',
    url: 'https://aporteedetrain.fr/',
    description: "Blog de voyage bas carbone : des destinations qu'on rejoint en train.",
    tags: ['Nuxt', 'Supabase'],
    image: aporteedetrain,
    imageAlt: 'Carte interactive du blog À portée de train',
  },
  {
    name: 'Rally Tools',
    url: 'https://rally-tools.vercel.app/',
    description: "Calculs pour l'assistance rallye : carburant, vitesse de roue, volumétrique.",
    image: rallyTools,
    imageAlt: "Écran d'accueil de Rally Tools",
    imageBg: '#131313',
    imagePosition: 'center top',
  },
];

/** Dépôts GitHub mis en avant (ajoute-en autant que tu veux). */
export const repos: Repo[] = [
  {
    name: 'travel-blog',
    description: 'Blog de voyage bas carbonne',
    lang: 'Web',
    url: 'https://github.com/mathiz11/travel-blog',
  },
  {
    name: 'rally-tools',
    description: "Calculs pour l'assistance rallye",
    lang: 'Web',
    url: 'https://github.com/mathiz11/rally-tools',
  },
  // {
  //   name: 'nom-du-depot',
  //   description: 'Description courte du projet',
  //   lang: 'TypeScript',
  //   url: 'https://github.com/mathiz11/nom-du-depot',
  // },
];
