import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";



const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)||[];

    const displayMovie = movies[Math.floor(Math.random() * movies.length)] ||[];

    const {original_title,overview,id : movieId} = displayMovie  

  return (
    <div>
        <VideoBackground movieId={movieId}></VideoBackground>
        <VideoTitle title={original_title} overview={overview} ></VideoTitle>
    </div>
  )
}

export default MainContainer