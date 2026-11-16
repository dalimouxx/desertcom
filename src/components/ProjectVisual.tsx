import { ArrowUpRight, Check, CheckCircle2, Clock3, GraduationCap, PackageSearch, ShoppingBag, Store, Utensils, WalletCards, Wrench } from "lucide-react";
import type { ProjectKind } from "@/data/portfolio";

export function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === "tunicommerce") {
    return <div className="project-visual tunicommerce-visual" role="img" aria-label="Aperçu stylisé de la plateforme Tunicommerce">
      <span className="visual-giant-word">TUNI</span>
      <div className="commerce-dashboard">
        <div className="mock-topbar"><span className="mock-brand"><ShoppingBag size={17} /> tunicommerce</span><span className="mock-status"><i /> MULTI-BOUTIQUES</span></div>
        <div className="commerce-layout">
          <div className="mock-sidebar" aria-hidden="true"><span className="is-active"><Store size={15} /> Boutiques</span><span><PackageSearch size={15} /> Catalogue</span><span><CheckCircle2 size={15} /> Commandes</span></div>
          <div className="commerce-main">
            <div className="mock-heading"><div><small>ESPACE MARCHAND</small><strong>Tout piloter, simplement.</strong></div><span>Gérer <ArrowUpRight size={14} /></span></div>
            <div className="commerce-stats"><div><small>COMMANDES</small><strong>COD & suivi</strong><span>Centralisées</span></div><div><small>CATALOGUE</small><strong>Stock</strong><span>Synchronisé</span></div><div><small>VENTES</small><strong>Statistiques</strong><span>Lecture claire</span></div></div>
            <div className="commerce-orders"><div className="mock-section-title"><strong>Commandes récentes</strong><span>Voir tout</span></div>{["Commande confirmée", "Facture générée", "Stock mis à jour"].map((label, index) => <div className="commerce-order" key={label}><span><Check size={14} /> {label}</span><small>0{index + 1}</small></div>)}</div>
          </div>
        </div>
      </div>
      <span className="visual-edge-label">NEXT.JS — NODE.JS — POSTGRESQL — PRISMA</span>
    </div>;
  }
  if (kind === "study") {
    return <div className="project-visual study-visual" role="img" aria-label="Aperçu stylisé de la plateforme Study in World">
      <span className="visual-giant-word">WORLD</span><div className="study-sticker">FR<br />×<br />AR</div>
      <div className="study-dashboard">
        <div className="mock-topbar"><span className="mock-brand"><GraduationCap size={18} /> study in world</span><span className="language-switch">FR / العربية</span></div>
        <div className="study-content">
          <div className="study-intro"><small>ESPACE AGENCE</small><strong>Chaque dossier,<br />au bon endroit.</strong></div>
          <div className="study-pipeline"><div><span>01 / CANDIDAT</span><strong>Dossier</strong><p>Informations et documents réunis.</p><i>CRM</i></div><div><span>02 / PARCOURS</span><strong>Visa</strong><p>Les étapes restent lisibles.</p><i>SUIVI</i></div><div><span>03 / GESTION</span><strong>Finance</strong><p>Une vision claire pour l’agence.</p><i>PILOTAGE</i></div></div>
          <div className="study-progress"><span><CheckCircle2 size={16} /> Dossier candidat complété</span><div><i /><i /><i /></div></div>
        </div>
      </div>
      <span className="visual-edge-label">NEXT.JS — NESTJS — POSTGRESQL — RTL</span>
    </div>;
  }
  if (kind === "fixi") {
    return <div className="project-visual fixi-visual" role="img" aria-label="Aperçu stylisé de l’écosystème Fixi Web">
      <span className="visual-giant-word">FIXI</span><div className="fixi-sticker">RÉPARER<br />PARTAGER<br />AVANCER</div>
      <div className="phone-shell fixi-phone"><div className="phone-speaker" /><div className="phone-screen fixi-screen">
        <div className="app-top"><strong>fixi.</strong><Wrench size={17} /></div><div className="app-search"><PackageSearch size={13} /> Une pièce, un expert…</div><p className="app-kicker">LE RÉSEAU DES RÉPARATEURS</p>
        <div className="app-product fixi-product"><span>SOS pièce<br /><b>urgente</b></span><ArrowUpRight size={20} /></div><div className="app-mini-row"><span>Experts</span><span>Academy</span></div><div className="app-order"><WalletCards size={15} /> Wallet client synchronisé</div><div className="fixi-offline"><i /> DISPONIBLE MÊME HORS-LIGNE</div>
      </div></div>
      <span className="visual-edge-label">TYPESCRIPT — RUST — DOCKER — POSTGRESQL</span>
    </div>;
  }
  return <div className="project-visual restaurant-visual" role="img" aria-label="Aperçu stylisé de l’application Restaurant App">
    <span className="visual-giant-word">SALLE</span>
    <div className="restaurant-window"><div className="mock-topbar"><span className="mock-brand"><Utensils size={17} /> restaurant app</span><span className="service-live"><i /> SERVICE EN COURS</span></div>
      <div className="restaurant-layout"><div className="floor-plan"><div className="restaurant-heading"><div><small>VUE SALLE</small><strong>Les tables</strong></div><span>Service</span></div><div className="table-grid">{["01", "02", "03", "04", "05", "06"].map((table, index) => <div className={index === 1 || index === 4 ? "is-busy" : ""} key={table}><span>T{table}</span><small>{index === 1 || index === 4 ? "En service" : "Disponible"}</small></div>)}</div></div>
        <div className="order-ticket"><div className="ticket-top"><span>COMMANDE</span><Clock3 size={17} /></div><strong>Table 02</strong><p><span>Prise de commande</span><Check size={14} /></p><p><span>Envoi en cuisine</span><Check size={14} /></p><p><span>Suivi du service</span><ArrowUpRight size={14} /></p><div className="ticket-status">SERVICE EN SALLE</div></div>
      </div>
    </div><span className="visual-edge-label">TYPESCRIPT — NODE.JS — POSTGRESQL — RENDER</span>
  </div>;
}
