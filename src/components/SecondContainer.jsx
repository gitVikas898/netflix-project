import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    movies && (
      <div>
        <div className="-mt-60">
          <MovieList title={"Now Playing"} movies={movies}></MovieList>
          <MovieList title={"Popular"} movies={movies}></MovieList>
          <MovieList title={"Trending"} movies={movies}></MovieList>
          <MovieList title={"Horror"} movies={movies}></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondContainer;
