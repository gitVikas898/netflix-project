import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addTrending } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTrending = ()=>{

    const dispatch = useDispatch();

    const getTrending = async()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
        const data = await response.json();
        dispatch(addTrending(data.results));
    }

    useEffect(()=>{
        getTrending()
    },[])
}

export default useTrending;