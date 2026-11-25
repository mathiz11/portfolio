/**
 * Informations générales et textes de la section « À propos ».
 * Tout le contenu du site se modifie dans src/data/ — pas besoin de toucher aux composants.
 */
import etangs from '../assets/images/apropos-etangs.jpg';

export const site = {
  name: 'Mathis',
  title: 'Mathis — portfolio',
  description:
    "Mathis, ingénieur logiciel à Lyon. Projets, parcours, sport, hobbies et voyages.",
  github: 'https://github.com/mathiz11',
};

export const about = {
  greeting: "Salut, moi c'est Mathis.",
  paragraphs: [
    "J'ai grandi à Mauguio, dans le Sud, entre Montpellier et la mer : un village au bord des étangs, bercé par les traditions espagnoles et camarguaises. Je vis aujourd'hui à Lyon.",
    "Ce que j'aime avant tout, c'est découvrir de nouveaux horizons : des lieux, des paysages, de la nature. Le sport tient une place importante dans ma vie, et c'est souvent lui qui m'y emmène, en courant, en pédalant ou en marchant.",
    "J'aime profiter des bons moments : boire un verre, regarder un match, simplement passer du temps avec ma famille, ma copine et mes amis.",
  ],
  /** Dernier paragraphe, affiché en gris */
  outro:
    "Mon côté créatif m'a amené au développement, que j'ai trouvé accessible : on peut y construire à peu près tout. Aujourd'hui, je suis ingénieur logiciel et je crée des applications pour la logistique.",
  photos: [
    { src: etangs, alt: 'Coucher de soleil sur les étangs, près de Mauguio' },
  ],
};
