<script>
  import MovieCard from "#lib/components/MovieCard.svelte";

  let { data } = $props();               // Daten aus der load-Funktion
  let movies = $derived(data.movies);    // damit der restliche Code "movies" weiter nutzen kann
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<a href="/movies/create" class="btn btn-primary mb-3">Add New Movie</a>
<div class="row">
  {#each movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <MovieCard movie={movie}></MovieCard>
    </div>
  {/each}
</div>
