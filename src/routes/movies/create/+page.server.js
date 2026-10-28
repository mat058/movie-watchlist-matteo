import db from "#lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  // "default" wird ausgeführt, wenn das Formular abgeschickt wird
  default: async ({ request }) => {
    const data = await request.formData(); // Formulardaten auslesen

    const movie = {
      title: data.get("title"),        // name="title"
      year: Number(data.get("year")),  // Formular liefert Text, darum in Zahl umwandeln
      length: data.get("length"),
    };

    await db.createMovie(movie); // ergänzt Poster (Platzhalter), actors [] und watchlist false
    redirect(303, "/movies");    // danach zurück zur Übersicht
  },
};