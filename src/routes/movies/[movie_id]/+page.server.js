import db from "#lib/db.js";
import { error } from "@sveltejs/kit";

// params enthält die Teile der URL, hier: params.movie_id
export async function load({ params }) {
  const movie = await db.getMovie(params.movie_id); // einen Film per ID holen

  // ungültige oder unbekannte ID -> 404 statt Absturz beim Rendern
  if (!movie) {
    error(404, "Film nicht gefunden");
  }

  return { movie };
}
