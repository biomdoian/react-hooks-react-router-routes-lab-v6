import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <h3>{movie.title}</h3>
      <a href={`/movie/2${movie.id}`}>View Info</a>
    </article>
  );
}

export default MovieCard;