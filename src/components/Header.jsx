import { signOut } from "firebase/auth";
import { LOGO_URL} from "../utils/constants"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {


  const navigate = useNavigate();

  const user = useSelector(store=>store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      alert(error);
      navigate("/error")
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen flex items-center justify-between p-4" >
        <div id="left"><img src={LOGO_URL} alt="netflix-logo" className="max-w-52"/></div>
        {user && <div id="right" className="flex gap-3" >
          
            <img src={user.photoURL} alt="USER" className="w-10"/>
            <p>{user.name}</p>
            <button className="bg-yellow-400 p-2 rounded-lg text-white"  onClick={handleSignOut}>Sign Out </button>
        </div>}
    </div>
  )
}
export default Header  