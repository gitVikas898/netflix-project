import { CDN_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 hover:scale-110 transition-all ease-in-out">
      <img src={CDN_POSTER_URL + posterPath} alt="" className="w-full" />
    </div>
  );
};

export default MovieCard;
