import db from "#lib/db.js";

// params enthält die Teile der URL, hier: params.movie_id
export async function load({ params }) {
  const movie = await db.getMovie(params.movie_id); // einen Film per ID holen
  return { movie };
}