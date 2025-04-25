import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <NavBar />
        <main>
          <h1>Loading movie details...</h1>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <main>
          <h1>Error loading movie details: {error}</h1>
        </main>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <NavBar />
        <main>
          <h1>Movie not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        <div>
          Genres:{" "}
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <span key={index} style={{ marginRight: "5px" }}>
                {genre}
              </span>
            ))}
        </div>
      </main>
    </>
  );
}

export default Movie;