import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="overflow-x-scroll p-4 grid gap-2  bg-black">
        <h1 className="text-2xl text-white font-semibold bg-black">{title}</h1>
        <div className="flex bg-black">
            <div className="flex gap-2">
                {movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard>
                ))}
            </div>
        </div>
    </div>
   
  );
};

export default MovieList;
