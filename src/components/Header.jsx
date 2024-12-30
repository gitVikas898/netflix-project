import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse")

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return()=> unsubscribe() // unsubscribe when component unmounts
  }, []);

  return (
    <div className="bg-gradient-to-b from-black w-screen flex items-center justify-between p-4 fixed z-30">
      <div id="left">
        <img src={LOGO_URL} alt="netflix-logo" className="max-w-40" />
      </div>
      {user && (
        <div id="right" className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <img src={user.photoURL} alt="USER" className="w-10 rounded-sm" />
            <p className="text-white font-semibold">{user.name}</p>
          </div>
          <button className=" text-white bg-red-600 rounded-md px-2 py-1" onClick={handleSignOut}>
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
