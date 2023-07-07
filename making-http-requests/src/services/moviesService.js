const MOVIES_URL = process.env.REACT_APP_MOVIES_FIREBASE_URL;

export const addMovie = async (movie) => {
  try {
    // const response = await fetch(MOVIES_URL, {
    await fetch(MOVIES_URL, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
  } catch (error) {
    console.error("Hubo un error guardando la película", error);
  }
};

export const fetchMovies = async (setIsLoading, setMoviesList, setError) => {
  try {
    setIsLoading(true);
    // const response = await fetch("https://swapi.dev/api/films/"); // Fetching the swapi API
    const response = await fetch(MOVIES_URL);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    // const moviesList = [];
    // for (const key in data) {
    //   moviesList.push({
    //     id: key,
    //     title: data[key].title,
    //     releaseDate: data[key].releaseDate,
    //     openingText: data[key].openingText,
    //   });
    // }
    const moviesList = Object.keys(data).map((key) => ({
      id: key,
      title: data[key].title,
      releaseDate: data[key].releaseDate,
      openingText: data[key].openingText,
    }));
    setMoviesList(moviesList);
  } catch (error) {
    setError(error.message);
  }
  setIsLoading(false);
};

// Function using then
// function fetchMovies() {
//   fetch("https://swapi.dev/api/films/")
//     .then((response) => response.json())
//     .then((data) => {
//       const tranformedData = data.results.map((movieData) => {
//         return {
//           id: movieData.episode_id,
//           title: movieData.title,
//           releaseDate: movieData.release_date,
//           openingText: movieData.opening_crawl,
//         };
//       });
//       setMoviesList(tranformedData);
//     });
// }
