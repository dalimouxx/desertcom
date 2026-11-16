import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { trpc } from "@/providers/trpc";

const services = [
  "Site ou plateforme web", "Application mobile", "Marketing et sponsoring",
  "Affiche et vidéo", "Chatbot et automatisation", "Projet global",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const createLead = trpc.lead.create.useMutation();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    const form = event.currentTarget;
    const data = new FormData(form);
    createLead.mutate({
      name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""), service: String(data.get("service") ?? "") as (typeof services)[number],
      budget: String(data.get("budget") ?? ""), message: String(data.get("message") ?? ""), website: String(data.get("website") ?? ""),
    }, { onSuccess: () => { form.reset(); setSubmitted(true); } });
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Votre nom <span>*</span><input name="name" type="text" autoComplete="name" placeholder="Comment vous appelez-vous ?" minLength={2} maxLength={100} required /></label>
        <label>Votre e-mail <span>*</span><input name="email" type="email" autoComplete="email" placeholder="vous@entreprise.com" maxLength={320} required /></label>
      </div>
      <div className="form-row">
        <label>Entreprise<input name="company" type="text" autoComplete="organization" placeholder="Le nom de votre structure" maxLength={160} /></label>
        <label>Budget indicatif<select name="budget" defaultValue=""><option value="">À définir ensemble</option><option value="Moins de 2 000 €">Moins de 2 000 €</option><option value="2 000 € — 5 000 €">2 000 € — 5 000 €</option><option value="5 000 € — 15 000 €">5 000 € — 15 000 €</option><option value="Plus de 15 000 €">Plus de 15 000 €</option></select></label>
      </div>
      <label>De quoi avez-vous besoin ? <span>*</span><select name="service" defaultValue="" required><option value="" disabled>Choisissez une expertise</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
      <label>Parlez-nous du projet <span>*</span><textarea name="message" placeholder="Votre idée, vos objectifs, votre calendrier…" minLength={20} maxLength={3000} rows={4} required /></label>
      <label className="honeypot" aria-hidden="true">Site web<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-submit-row">
        <p>En envoyant ce formulaire, vous acceptez que Desertcom utilise ces informations pour répondre à votre demande.</p>
        <button className="submit-button wipe-button" type="submit" disabled={createLead.isPending}><span>{createLead.isPending ? "Envoi en cours…" : "Envoyer ma demande"}</span>{createLead.isPending ? <LoaderCircle className="spin" size={20} aria-hidden="true" /> : <ArrowUpRight size={20} aria-hidden="true" />}</button>
      </div>
      <div className="form-feedback" aria-live="polite">
        {submitted && <p className="success-message"><CheckCircle2 size={20} aria-hidden="true" /> Merci ! Votre demande est bien enregistrée. Desertcom reviendra vers vous par e-mail.</p>}
        {createLead.isError && <p className="error-message"><AlertCircle size={20} aria-hidden="true" /> L’envoi n’a pas abouti. Vérifiez les champs et réessayez dans un instant.</p>}
      </div>
    </form>
  );
}
