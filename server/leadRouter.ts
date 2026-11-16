import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { createProjectLead } from "../api/queries/leads";

const services = [
  "Site ou plateforme web",
  "Application mobile",
  "Marketing et sponsoring",
  "Affiche et vidéo",
  "Chatbot et automatisation",
  "Projet global",
] as const;

export const leadRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().trim().min(2).max(100),
        email: z.string().trim().email().max(320),
        company: z.string().trim().max(160).optional().default(""),
        service: z.enum(services),
        budget: z.string().trim().max(80).optional().default(""),
        message: z.string().trim().min(20).max(3000),
        website: z.string().max(0).optional().default(""),
      }),
    )
    .mutation(async ({ input }) => {
      const id = await createProjectLead({
        name: input.name,
        email: input.email,
        company: input.company || null,
        service: input.service,
        budget: input.budget || null,
        message: input.message,
      });
      return { ok: true as const, id };
    }),
});
