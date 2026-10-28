<script>
  let { data } = $props();
  let movie = $derived(data.movie);
</script>

<a href="/movies">Back</a>
<h1>{movie.title}</h1>

<div class="row">
  <div class="col-sm-4">
    <img src={movie.poster} alt={movie.title} class="img-fluid" />
  </div>
  <div class="col-sm-8">
    <p>Jahr: {movie.year}</p>
    <p>Dauer: {movie.length}</p>
    <p>Cast:</p>
    <ul>
      {#each movie.actors as actor}
        <li>{actor}</li>
      {/each}
    </ul>
  </div>
</div>