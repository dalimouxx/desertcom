# Desertcom V1

Site vitrine de Desertcom, agence digitale fondée et dirigée par Mohamed Ali Moussa.

## Contenu

- Présentation des expertises, de la méthode et de la vision du CEO.
- Portfolio de quatre réalisations réelles : Tunicommerce, Study in World, Fixi Web et Restaurant App.
- Fiches détaillées avec liens vers les plateformes en ligne et les dépôts GitHub disponibles.
- Liens vers le portfolio en ligne (https://portfolio-aesd.vercel.app/), le profil GitHub et LinkedIn de Mohamed Ali Moussa.
- Formulaire de contact connecté à l’API tRPC et à la base de données.

Les contenus du portfolio sont centralisés dans `src/data/portfolio.ts`. Les composants `src/components/Brand.tsx` et `public/favicon.svg` constituent les logos d’origine et sont conservés sans modification.

## Stack

React 19, TypeScript, Vite, Tailwind CSS, tRPC, Drizzle ORM et Hono. Les aperçus de projets sont dessinés en HTML/CSS avec des icônes Lucide, sans image externe.

## Commandes

```bash
npm install
npm run dev       # développement sur le port 3000
npm run check     # contrôle TypeScript
npm run build     # build client et serveur dans dist/
npm start         # exécution de production
```

## Déploiement Vercel

La configuration `vercel.json` utilise `npm run build`, publie le contenu de `dist/public` et redirige les requêtes `/api/*` vers la fonction unique `api/boot.ts`. Les modules partagés sont regroupés dans `server/` afin que Vercel ne crée pas une fonction séparée pour chaque route interne.

Pour activer l’API et le formulaire de contact, configurer les variables d’environnement `APP_ID`, `APP_SECRET` et `DATABASE_URL` dans le projet Vercel, puis appliquer le schéma de la base avec `npm run db:push`. Ne jamais enregistrer ces valeurs dans GitHub.
