import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store)=> store.movies?.popular);
  const trending = useSelector((store)=> store.movies?.trending);
  const top = useSelector((store)=> store.movies?.topRated);
  return (
    movies  && popular && (
      <div className="bg-black">
        <div className="-mt-60 relative z-20">
          <MovieList title={"Now Playing"} movies={movies}></MovieList>
          <MovieList title={"Popular"} movies={popular}></MovieList>
          <MovieList title={"Trending"} movies={trending}></MovieList>
          <MovieList title={"Toprated"} movies={top}></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondContainer;
