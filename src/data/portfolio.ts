export const identity = {
  firstName: "Mohamed Ali",
  lastName: "Moussa",
  fullName: "Mohamed Ali Moussa",
  role: "Développeur full-stack & CEO de Desertcom",
  location: "Tunisie",
  email: "dalimoussa00@gmail.com",
};

export const portfolioUrl = "https://portfolio-aesd.vercel.app/";
export const socials = {
  github: "https://github.com/dalimouxx",
  linkedin: "https://www.linkedin.com/in/mohamed-ali-moussa-75b98438b/",
};

export type ProjectKind = "tunicommerce" | "study" | "fixi" | "restaurant";
export type Project = {
  kind: ProjectKind;
  name: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  features: string[];
  liveUrl: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    kind: "tunicommerce", name: "Tunicommerce", title: "Une seule plateforme. Toutes vos boutiques.",
    category: "E-COMMERCE / MULTI-BOUTIQUES", year: "2026",
    description: "Plateforme multi-boutiques complète : espaces marchands et super-admin distincts, catalogue, stock, commandes, COD, factures et statistiques.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    features: ["Espaces marchands et super-admin distincts", "Catalogue, stock et gestion des commandes", "COD, factures et statistiques"],
    liveUrl: "https://tunicom.shop/", repoUrl: "https://github.com/dalimouxx/tunicommerce",
  },
  {
    kind: "study", name: "Study in World", title: "Piloter les dossiers. Simplifier les départs.",
    category: "SAAS / CRM / FR—AR", year: "2026",
    description: "Plateforme de gestion pour agence d’études à l’étranger : CRM, dossiers candidats, visas, finance — interface bilingue français / arabe (RTL).",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"],
    features: ["CRM et dossiers candidats centralisés", "Suivi des visas et de la finance", "Interface bilingue français / arabe (RTL)"],
    liveUrl: "https://study-in-world.vercel.app", repoUrl: "https://github.com/dalimouxx/study-in-world",
  },
  {
    kind: "fixi", name: "Fixi Web", title: "Le réseau qui fait avancer la réparation.",
    category: "RÉSEAU / MARKETPLACE / OFFLINE", year: "2026",
    description: "Écosystème pour réparateurs : marché de pièces, SOS pièce urgente, appels d’experts, academy, wallet client et synchronisation hors-ligne.",
    tags: ["TypeScript", "Rust", "Docker", "PostgreSQL"],
    features: ["Marché de pièces et SOS pièce urgente", "Appels d’experts et academy", "Wallet client et synchronisation hors-ligne"],
    liveUrl: "https://fixiphone.io/", repoUrl: "https://github.com/dalimouxx/fixi-web",
  },
  {
    kind: "restaurant", name: "Restaurant App", title: "Du comptoir à la salle, tout est synchronisé.",
    category: "GESTION / RESTAURATION", year: "2025",
    description: "Application de gestion pour restaurant : prise de commandes, suivi des tables et service en salle, déployée en ligne.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Render"],
    features: ["Prise de commandes", "Suivi des tables et du service en salle", "Application déployée en ligne"],
    liveUrl: "https://service-restaurant.onrender.com/",
  },
];
