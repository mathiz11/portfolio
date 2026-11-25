import trail from '../assets/images/sport-trail.jpg';
import velo from '../assets/images/sport-velo.jpg';
import trek from '../assets/images/sport-trek.jpg';
import type { IconName } from '../components/icons';

export const sportIntro =
  "J'ai toujours eu besoin de bouger. Aujourd'hui, ça passe par la course et les montées dans les rues de Lyon.";

export interface Race {
  date: string;
  name: string;
  distance: string;
  elevation: string;
  time: string;
  rank: string;
  url: string;
}

/** 3 dernières courses de trail (liens Strava). Du plus récent au plus ancien. */
export const races: Race[] = [
  {
    date: '7 nov. 2026',
    name: 'BerjaTrail 24k',
    distance: '20,7 km',
    elevation: '515 m',
    time: '1:44:17',
    rank: '—',
    url: 'https://www.strava.com/activities/20899400694',
  },
  {
    date: '17 oct. 2026',
    name: 'Trail Côte-Rôtie',
    distance: '26,7 km',
    elevation: '1 238 m',
    time: '2:40:22',
    rank: '35 / 574',
    url: 'https://www.strava.com/activities/20625101783',
  },
  {
    date: '5 juil. 2026',
    name: 'Trail des Bauges',
    distance: '47,7 km',
    elevation: '2 755 m',
    time: '6:46:12',
    rank: '49 / 178',
    url: 'https://www.strava.com/activities/19189564233',
  },
];

export const sportPhotos = [
  { src: trail, alt: 'Montée en trail dans un alpage, face à un sommet' },
  { src: velo, alt: 'Sortie vélo sur une voie verte en forêt' },
  { src: trek, alt: 'Trek dans la neige, sac sur le dos' },
];

export const otherSports: { icon: IconName; label: string }[] = [
  { icon: 'bike', label: 'Vélo' },
  { icon: 'mountain', label: 'Trek' },
  { icon: 'road', label: 'Course sur route' },
];

export const pastSports: { icon: IconName; label: string; detail: string }[] = [
  { icon: 'football', label: 'Football', detail: 'pendant 15 ans, latéral droit' },
  { icon: 'scooter', label: 'Trottinette freestyle', detail: 'pendant 7 ans' },
];
