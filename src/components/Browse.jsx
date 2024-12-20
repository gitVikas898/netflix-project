import Header from "./Header"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
const Browse = () => {

  const getNowPlaying = async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);

      const response = await data.json();

      console.log(response);
  }

  useEffect(()=>{
    getNowPlaying()
  },[])



  return (
    <div>
       <Header></Header>
    </div>
  )
}

export default Browse