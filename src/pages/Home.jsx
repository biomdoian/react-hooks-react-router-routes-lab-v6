import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Home Page</h1>
        <div className="movie-list">
          {movies.map((movie) => (
            <article key={movie.id}>
              <h2>{movie.title}</h2>
              <a href={`/movie/${movie.id}`}>View Info</a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;