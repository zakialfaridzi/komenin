import { getAllSites } from "@/lib/db-admin";
import db from "@/lib/firebase-admin";

export default async function handler(_, res) {
  const { sites, error } = await getAllSites();

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ sites });
}
