import {
  mysqlTable,
  serial,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const projectLeads = mysqlTable("project_leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 160 }),
  service: varchar("service", { length: 80 }).notNull(),
  budget: varchar("budget", { length: 80 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type ProjectLead = typeof projectLeads.$inferSelect;
export type InsertProjectLead = typeof projectLeads.$inferInsert;
