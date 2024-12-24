import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying"
import MainContainer from "./MainContainer";
const Browse = () => {

  useNowPlaying();
  
  return (
    <div className="grid gap-4">
        <Header></Header>
        <MainContainer></MainContainer>
       </div>
  )
}

export default Browse