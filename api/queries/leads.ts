import { getDb } from "./connection";
import { projectLeads, type InsertProjectLead } from "../../db/schema";

export async function createProjectLead(data: InsertProjectLead) {
  const [result] = await getDb().insert(projectLeads).values(data).$returningId();
  return result.id;
}
