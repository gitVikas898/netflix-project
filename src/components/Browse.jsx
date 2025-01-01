import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useTopRated from "../hooks/useTopRated";
import Gptsearch from "./Gptsearchpage";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlaying();
  usePopularMovies();
  useTrending();
  useTopRated();

  const displaySearch = useSelector((store)=>store.gpt?.showgptSearch)
  
  return (
    <div>
        <Header></Header>
        {
          displaySearch ? (<Gptsearch></Gptsearch>)  : (
          <>
             <MainContainer></MainContainer>
             <SecondContainer></SecondContainer>
          </>
        )
        }
    </div>
  )
}

export default Browse