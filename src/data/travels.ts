import slovenie from '../assets/images/voyage-2026-slovenie.jpg';
import costaBrava from '../assets/images/voyage-2026-costa-brava.jpg';
import belgique from '../assets/images/voyage-2026-belgique.jpg';
import type { ImageMetadata } from 'astro';

export interface Travel {
  year: number;
  /** Mois affiché au-dessus du titre */
  month: string;
  title: string;
  /** Optionnel : « Voyage à vélo », « Trek », « Train »… */
  type?: string;
  /** Optionnel : « 12 jours · 640 km » */
  meta?: string;
  image: ImageMetadata;
  imageAlt: string;
}

/**
 * Ajouter un voyage = ajouter une entrée ici (et sa photo dans src/assets/images/).
 * Les voyages sont regroupés par année automatiquement, l'année la plus récente en premier.
 * Dans une même année, l'ordre de la liste est conservé.
 */
export const travels: Travel[] = [
  {
    year: 2026,
    month: 'Septembre',
    title: 'Slovénie',
    type: 'Road trip',
    image: slovenie,
    imageAlt: 'Le lac de Bled et son église, en Slovénie',
  },
  {
    year: 2026,
    month: 'Août',
    title: 'Costa Brava',
    type: 'Trail',
    image: costaBrava,
    imageAlt: 'Barque au coucher du soleil sur la Costa Brava',
  },
  {
    year: 2026,
    month: 'Juin',
    title: 'Belgique',
    image: belgique,
    imageAlt: 'Le Manneken-Pis à Bruxelles',
  },
];
