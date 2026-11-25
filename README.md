# Portfolio — Mathis

Site personnel minimaliste, sur une seule page : à propos, projets, parcours, sport, hobbies et voyages.

- **[Astro](https://astro.build)** : site 100 % statique, aucun framework JS envoyé au navigateur (seulement ~1 Ko de script pour le mode sombre et le menu actif).
- **[Tailwind CSS v4](https://tailwindcss.com)** pour le style, avec les couleurs du design en variables (`bg`, `fg`, `muted`, `line`, `card`, `accent`).
- Photos optimisées au build (AVIF / WebP, plusieurs tailles) avec `astro:assets`.
- Police Space Grotesk auto-hébergée (aucun appel à Google Fonts).

## Démarrer

Node **22.23.4 ou plus récent** est requis (Astro 7).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ en local
```

## Modifier le contenu

Tout le contenu est dans `src/data/`, séparé de la mise en page :

| Fichier | Contenu |
|---|---|
| `site.ts` | Nom, lien GitHub, textes et photos de « À propos » |
| `projects.ts` | Sites en ligne et dépôts GitHub mis en avant |
| `career.ts` | Parcours études / pro |
| `sport.ts` | Phrase d'intro, courses de trail (Strava), photos, sports actuels et passés |
| `hobbies.ts` | Cartes hobbies |
| `travels.ts` | Voyages (regroupés automatiquement par année) |

**Ajouter un voyage** : mettre la photo dans `src/assets/images/` (ex. `voyage-2025-albanie.jpg`), puis ajouter une entrée dans `travels.ts` :

```ts
import albanie from '../assets/images/voyage-2025-albanie.jpg';
// …
{ year: 2025, month: 'Septembre', title: 'Albanie', type: 'Voyage à vélo', meta: '18 jours · 900 km', image: albanie, imageAlt: '…' },
```

Les photos peuvent être ajoutées en pleine taille : elles sont redimensionnées et compressées au build.

Les icônes sont dans `src/components/icons.ts` (SVG au trait, 24×24).

## Structure

```
src/
  assets/images/      photos (optimisées au build)
  components/
    sections/         une section = un composant
    Sidebar.astro     menu latéral (icônes, mode sombre, section active)
    Photo.astro       cadre photo + <picture> responsive
    Icon.astro, icons.ts
  data/               contenu du site
  layouts/Layout.astro
  pages/index.astro
  styles/global.css   tokens de couleur, Tailwind, animations
public/favicon.svg
```

## Déployer sur Vercel

1. Pousser le dossier sur un dépôt GitHub.
2. Sur Vercel : **Add New → Project**, importer le dépôt. Le preset **Astro** est détecté automatiquement (build `npm run build`, sortie `dist`). Aucun adaptateur n'est nécessaire, le site est statique.
3. Une fois le domaine connu, le renseigner dans `site` de `astro.config.mjs`.

## Design

Référence : maquette « Portfolio minimaliste personnel » (Claude Design). Noir, blanc et gris, un seul accent jaune `#FFD60A` en traits fins, bordures 1 px, mode sombre. Les animations sont coupées si le système demande de réduire les mouvements.
