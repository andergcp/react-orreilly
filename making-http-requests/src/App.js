import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import { addMovie, fetchMovies } from "./services/moviesService";

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async (movie) => {
    await addMovie(movie);
    await fetchMovies(setIsLoading, setMoviesList, setError);
  };

  const fetchMoviesHandler = useCallback(async () => {
    await fetchMovies(setIsLoading, setMoviesList, setError);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <>
      <section className="add-movie-container">
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className="fetch-movie-container">
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section className="list-movie-container">
        {!isLoading && moviesList.length > 0 && (
          <MoviesList movies={moviesList} />
        )}
        {!isLoading && moviesList.length === 0 && !error && (
          <p>No movies found.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
