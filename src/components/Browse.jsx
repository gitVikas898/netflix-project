import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {

  useNowPlaying();
  usePopularMovies();
  useTrending();
  useTopRated();
  
  return (
    <div>
        <Header></Header>
        <MainContainer></MainContainer>
        <SecondContainer></SecondContainer>
    </div>
  )
}

export default Browse