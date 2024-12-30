import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () =>{
    const dispatch = useDispatch();

    const getTopRated = async()=>{

        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTIONS);
        const data = await response.json();

        dispatch(addTopRated(data.results));
    }

    useEffect(()=>{
        getTopRated();
    },[])
}

export default useTopRated;