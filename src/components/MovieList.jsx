import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return ( 
    movies &&
    <div className="overflow-x-scroll p-8 grid gap-8 ">
        <h1 className="text-2xl text-white font-semibold">{title}</h1>
        <div className="flex">
            <div className="flex gap-8">
                {movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard>
                ))}
            </div>
        </div>
    </div>
   
  );
};

export default MovieList;
