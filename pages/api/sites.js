import db from "@/lib/firebase-admin";
export default async function handler(_, res) {
  const snapshot = await db
    .collection("sites")
    .orderBy("createdAt", "asc")
    .get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
    console.log(doc.id, "=>", doc.data());
  });

  res.status(200).json({ sites });
}
