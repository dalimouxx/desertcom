import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Bot, Code2, Lightbulb, Megaphone, Minus, MonitorSmartphone, Plus, Rocket, Sparkles } from "lucide-react";
import "../App.css";
import { Brand } from "@/components/Brand";
import { ContactForm } from "@/components/ContactForm";
import { CustomCursor } from "@/components/CustomCursor";
import { DuneField } from "@/components/DuneField";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SiteHeader } from "@/components/SiteHeader";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { identity, portfolioUrl, projects, socials, type Project } from "@/data/portfolio";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const services = [
  { title: "Sites & plateformes web", icon: Code2, text: "Des sites vitrines, e-commerce et plateformes sur mesure qui chargent vite, racontent clairement votre valeur et transforment la visite en action.", tags: ["UX / UI", "Développement", "Performance", "SEO technique"] },
  { title: "Applications mobiles", icon: MonitorSmartphone, text: "De l’idée au prototype puis au produit : nous concevons des applications utiles, fluides et prêtes à évoluer avec vos utilisateurs.", tags: ["iOS & Android", "Produit", "API", "Maintenance"] },
  { title: "Marketing & sponsoring", icon: Megaphone, text: "Nous transformons vos objectifs en campagnes ciblées : positionnement, messages, audiences, diffusion sponsorisée et lecture des résultats.", tags: ["Stratégie", "Social Ads", "Acquisition", "Optimisation"] },
  { title: "Affiches & vidéos", icon: Sparkles, text: "Des contenus pensés pour être remarqués et compris : direction créative, affiches, habillage de campagne et vidéos courtes pour vos lancements.", tags: ["Direction artistique", "Motion", "Campagne", "Contenu"] },
  { title: "Chatbots & automatisations", icon: Bot, text: "Des parcours conversationnels pour accueillir, qualifier et orienter vos visiteurs, tout en libérant votre équipe des tâches répétitives.", tags: ["Chatbot", "Qualification", "Support", "Automatisation"] },
];
const processSteps = [
  { number: "01", title: "Écouter", text: "Vos objectifs, vos utilisateurs, vos contraintes. On commence par ce qui compte vraiment." },
  { number: "02", title: "Concevoir", text: "Stratégie, parcours et direction créative prennent forme dans une vision partagée." },
  { number: "03", title: "Construire", text: "Design et développement avancent ensemble, avec des points d’étape concrets et lisibles." },
  { number: "04", title: "Amplifier", text: "On lance, mesure et améliore. Votre projet reste en mouvement après sa mise en ligne." },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showCurtain, setShowCurtain] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useScrollEffects();
  useEffect(() => {
    if (!showCurtain) return;
    const timer = window.setTimeout(() => setShowCurtain(false), 950);
    return () => window.clearTimeout(timer);
  }, [showCurtain]);
  return <>
    {showCurtain && <div className="page-curtain" aria-hidden="true"><Brand /></div>}
    <CustomCursor /><SiteHeader />
    <main>
      <section className="hero" id="accueil">
        <div className="hero-grid page-shell"><div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span /> AGENCE CRÉATIVE & DIGITALE</p>
          <h1>On fait<br />grandir<br /><em>vos idées.</em></h1>
          <div className="hero-intro"><p>Desertcom unit technologie, design et marketing pour transformer vos ambitions en expériences digitales qui avancent.</p><a className="primary-button wipe-button" href="#contact"><span>Démarrer un projet</span><ArrowUpRight size={20} aria-hidden="true" /></a></div>
        </div><DuneField /></div>
        <div className="hero-bottom page-shell"><a href="#expertises" className="scroll-link">DÉCOUVRIR NOTRE TERRAIN DE JEU <ArrowDown size={16} aria-hidden="true" /></a><span>WEB / MOBILE / MARKETING</span></div>
        <div className="hero-wordmark" aria-hidden="true">desertcom</div>
      </section>
      <div className="services-marquee" aria-label="Nos domaines d’expertise"><div className="marquee-track">{[0, 1].map(copy => <div className="marquee-content" key={copy} aria-hidden={copy === 1}><span>SITES WEB</span><i>✦</i><span>APPLICATIONS</span><i>✦</i><span>CHATBOTS</span><i>✦</i><span>VIDÉOS</span><i>✦</i><span>SPONSORING</span><i>✦</i><span>AFFICHES</span><i>✦</i></div>)}</div></div>
      <section className="manifesto section-pad page-shell">
        <p className="eyebrow dark-ink" data-reveal>NOTRE CONVICTION</p>
        <div className="manifesto-grid"><h2 data-reveal>Pas juste une présence en ligne.<br /><span>Une longueur d’avance.</span></h2><div className="manifesto-note" data-reveal><Lightbulb size={24} strokeWidth={1.6} aria-hidden="true" /><p>Votre site ne doit pas seulement être beau. Votre application ne doit pas seulement fonctionner. Votre campagne ne doit pas seulement être vue.</p><strong>Tout doit travailler dans la même direction : la vôtre.</strong></div></div>
      </section>
      <section className="services-section section-pad" id="expertises"><div className="page-shell services-layout">
        <div className="services-heading"><p className="eyebrow" data-reveal>CE QUE NOUS FAISONS</p><h2 data-reveal>Un partenaire.<br /><span>Tous les leviers.</span></h2><p data-reveal>Pas besoin de multiplier les prestataires. Nous relions le produit, le message et l’acquisition pour créer une expérience cohérente.</p><a href="#contact" className="text-link">Parler de votre besoin <ArrowRight size={18} aria-hidden="true" /></a></div>
        <div className="services-list" data-reveal>{services.map((service, index) => { const Icon = service.icon; const open = activeService === index; return <article className={`service-item ${open ? "is-open" : ""}`} key={service.title}>
          <button type="button" className="service-trigger" onClick={() => setActiveService(open ? -1 : index)} aria-expanded={open} aria-controls={`service-panel-${index}`}><span className="service-index">0{index + 1}</span><Icon className="service-icon" size={25} strokeWidth={1.6} aria-hidden="true" /><span className="service-title">{service.title}</span><span className="service-toggle">{open ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</span></button>
          <div className="service-panel" id={`service-panel-${index}`} hidden={!open}><p>{service.text}</p><ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
        </article>; })}</div>
      </div></section>
      <section className="work-section section-pad" id="projets">
        <div className="page-shell work-heading"><div><p className="eyebrow" data-reveal>RÉALISATIONS / 2025—2026</p><h2 data-reveal>Quatre projets.<br /><span>Du concret.</span></h2></div><p data-reveal>Des plateformes conçues et développées par Mohamed Ali Moussa, du produit métier au déploiement.<a className="work-portfolio-link" href={portfolioUrl} target="_blank" rel="noopener noreferrer">Voir le portfolio GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></p></div>
        <div className="project-list page-shell">{projects.map((project, index) => <article className={`project-row project-${project.kind}`} key={project.name} data-reveal="media">
          <button className="project-media" type="button" onClick={() => setActiveProject(project)} aria-label={`Voir les détails du projet ${project.name}`} data-cursor><ProjectVisual kind={project.kind} /></button>
          <div className="project-meta"><p className="project-category">{project.category} — {project.year}</p><h3 data-parallax>{project.name}<sup>0{index + 1}</sup></h3><h4>{project.title}</h4><p>{project.description}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-actions"><button type="button" className="project-link" onClick={() => setActiveProject(project)}>Détails du projet <ArrowUpRight size={18} aria-hidden="true" /></button><a className="project-external" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visiter en ligne <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </div>
        </article>)}</div>
        <p className="concept-note page-shell">Quatre réalisations réelles — plateformes en ligne et code source consultable.</p>
      </section>
      <section className="process-section section-pad" id="methode"><div className="page-shell"><div className="process-heading"><p className="eyebrow dark-ink" data-reveal>NOTRE FAÇON D’AVANCER</p><h2 data-reveal>Simple à suivre.<br />Sérieux à chaque étape.</h2><p data-reveal>Vous savez où l’on va, ce que l’on fait et pourquoi. La créativité n’empêche pas la clarté.</p></div><div className="process-list">{processSteps.map(step => <article key={step.number} data-reveal><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><ArrowDown size={21} aria-hidden="true" /></article>)}</div></div></section>
      <section className="ceo-section section-pad" id="agence">
        <div className="page-shell ceo-grid"><div className="ceo-visual" data-reveal="media"><span className="ceo-small">DERRIÈRE<br />DESERTCOM</span><strong>CEO</strong><div className="ceo-sun"><Brand compact /></div><p>VISION<br />CRÉATIVITÉ<br />EXÉCUTION</p></div>
          <div className="ceo-copy"><p className="eyebrow" data-reveal>MOHAMED ALI MOUSSA / CEO & FONDATEUR</p><h2 data-reveal>Je ne voulais pas choisir entre <span>tech et créativité.</span></h2><div data-reveal>
            <p className="ceo-lead">Je suis Mohamed Ali Moussa, développeur full-stack et CEO de Desertcom.</p><p>Je conçois et développe des plateformes web, des SaaS et des outils métier — de l’architecture au déploiement, avec une attention égale portée au code et à l’expérience utilisateur.</p><p>Mon expérience de chef de projet et de développeur nourrit une conviction simple : une bonne idée mérite autant d’exigence dans sa construction que dans sa manière d’être racontée.</p>
            <div className="ceo-links"><a href={portfolioUrl} target="_blank" rel="noopener noreferrer">Portfolio GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div><p className="ceo-signature">{identity.fullName} — {identity.role}</p>
          </div></div>
        </div><div className="agency-principles page-shell"><p data-reveal>PENSER COMME DES STRATÈGES.</p><Rocket aria-hidden="true" /><p data-reveal>CONSTRUIRE COMME DES MAKERS.</p></div>
      </section>
      <section className="faq-section section-pad page-shell"><div className="faq-heading"><p className="eyebrow dark-ink" data-reveal>AVANT DE COMMENCER</p><h2 data-reveal>Les questions<br />qui reviennent.</h2></div><div className="faq-list" data-reveal>
        <details><summary>Pouvez-vous prendre en charge tout mon projet ?<Plus aria-hidden="true" /></summary><p>Oui. Nous pouvons cadrer le besoin, concevoir l’identité et les parcours, développer la solution, puis préparer son lancement marketing. Nous pouvons aussi intervenir sur une seule étape si votre équipe gère déjà les autres.</p></details>
        <details><summary>Je n’ai qu’une idée. Est-ce trop tôt ?<Plus aria-hidden="true" /></summary><p>Non. Un premier échange permet de clarifier l’usage, les priorités et le périmètre d’une première version. L’objectif est de transformer une intuition en plan d’action réaliste.</p></details>
        <details><summary>Le marketing est-il inclus dans un projet web ?<Plus aria-hidden="true" /></summary><p>La stratégie de lancement peut être intégrée à une mission globale ou proposée séparément. Nous définissons ensemble les contenus, les audiences et les actions sponsorisées adaptés à vos objectifs.</p></details>
        <details><summary>Un chatbot peut-il passer le relais à un humain ?<Plus aria-hidden="true" /></summary><p>Oui, et c’est essentiel. Un bon parcours automatise les questions répétitives tout en gardant une sortie claire vers votre équipe pour les demandes sensibles ou complexes.</p></details>
      </div></section>
      <section className="contact-section section-pad" id="contact"><div className="page-shell contact-grid"><div className="contact-heading"><p className="eyebrow" data-reveal>UN PROJET EN TÊTE ?</p><h2 data-reveal>Créons la<br /><span>suite ensemble.</span></h2><p data-reveal>Quelques lignes suffisent pour commencer. Racontez-nous où vous voulez aller ; nous vous aiderons à dessiner le chemin.</p><div className="contact-promise" data-reveal><span>DESERTCOM®</span><p>Technologie, création et marketing<br />réunis autour de votre ambition.</p></div></div><ContactForm /></div></section>
    </main>
    <footer className="site-footer"><div className="page-shell footer-top"><a href="#accueil" className="footer-brand" aria-label="Desertcom — retour en haut"><Brand /></a><a className="back-to-top" href="#accueil">RETOUR EN HAUT <ArrowUp size={17} aria-hidden="true" /></a></div><div className="page-shell footer-nav"><nav aria-label="Navigation de pied de page"><a href="#expertises">Expertises</a><a href="#projets">Projets</a><a href="#methode">Méthode</a><a href="#agence">L’agence</a><a href="#contact">Contact</a><a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></nav><p>DES IDÉES AU MOUVEMENT.</p></div><div className="page-shell footer-bottom"><span>© {new Date().getFullYear()} DESERTCOM. TOUS DROITS RÉSERVÉS.</span><span>AGENCE DIGITALE & MARKETING</span></div></footer>
    <Dialog open={Boolean(activeProject)} onOpenChange={open => !open && setActiveProject(null)}>{activeProject && <DialogContent className="project-dialog"><div className={`dialog-visual dialog-${activeProject.kind}`}><ProjectVisual kind={activeProject.kind} /></div><div className="dialog-copy"><p className="eyebrow dark-ink">{activeProject.category} — {activeProject.year} / PROJET RÉEL</p><DialogTitle>{activeProject.name} — {activeProject.title}</DialogTitle><DialogDescription>{activeProject.description}</DialogDescription><div className="dialog-details"><div><strong>Fonctionnalités</strong><ul className="dialog-features">{activeProject.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div><div><strong>Stack technique</strong><p>{activeProject.tags.join(" · ")}</p></div></div><div className="dialog-actions"><a className="primary-button dialog-cta" href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer">Visiter le projet <ArrowUpRight size={19} aria-hidden="true" /></a>{activeProject.repoUrl && <a className="dialog-repo" href={activeProject.repoUrl} target="_blank" rel="noopener noreferrer">Voir le code sur GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>}</div></div></DialogContent>}</Dialog>
  </>;
}
