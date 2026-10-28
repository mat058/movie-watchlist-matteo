import db from "#lib/db.js";

// load läuft auf dem Server, bevor die Seite angezeigt wird
export async function load() {
  const movies = await db.getMovies(); // alle Filme aus MongoDB holen
  return { movies };                   // landet in +page.svelte als data.movies
}