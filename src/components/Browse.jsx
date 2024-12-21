import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {

  useNowPlaying();
  
  return (
    <div className="grid gap-4">
       <Header></Header>
         <MainContainer></MainContainer>
         <SecondContainer></SecondContainer>
       </div>
  )
}

export default Browse