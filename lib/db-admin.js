import firebase from "./firebase-admin";
import { compareDesc, compareAsc, parseISO } from "date-fns";

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firebase
      .collection("feedback")
      .where("siteId", "==", siteId)
      .get();

    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await firebase
      .collection("sites")
      .orderBy("createdAt", "asc")
      .get();

    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
      console.log(doc.id, "=>", doc.data());
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}
