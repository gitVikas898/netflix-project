import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailers } from "../utils/moviesSlice";

const useTrailer = (movieId)=>{

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

}
export default useTrailer;