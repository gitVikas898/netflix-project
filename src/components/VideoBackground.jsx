import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailers } from "../utils/moviesSlice";

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((store)=>store.movies?.trailers)

    const dispatch = useDispatch();

    const fetchTrailers = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const response = await data.json();
        

        const filterData = response.results.filter((video)=>video.type === "Trailer");

        const trailer = filterData.length ? filterData[0] : response.results[0];

        dispatch(addTrailers(trailer));
        
    }

    useEffect(()=>{
        
            fetchTrailers();
        
    },[movieId])

  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground