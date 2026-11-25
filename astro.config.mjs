// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // À décommenter avec le domaine final une fois le site déployé sur Vercel
  // (sert aux URL absolues : balises Open Graph, sitemap…)
  // site: 'https://ton-domaine.fr',
  // Le site est 100 % statique : Vercel sert le dossier dist/ tel quel.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
