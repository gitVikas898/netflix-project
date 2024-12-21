import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)

    if(!movies) return ;

    const displayMovie = movies[Math.floor(Math.random()*20)];

    const {original_title,overview} = displayMovie
    // console.log(displayMovie);

   

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
    </div>
  )
}

export default MainContainer