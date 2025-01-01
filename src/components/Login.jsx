import { useState, useRef } from "react";
import validateForm from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
 

  
  const dispatch = useDispatch();

  //using use ref hook

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  // now creating a state variable to manage Sign Up and Sign In Feature

  const [isSignIn, setSignIn] = useState(true);

  //now creating a satate variable to manage error state

  const [errorMessage, setErrorMessage] = useState({});

  // writing a function that handles the Sign in state

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };
  //Now Handling Error state like what if Button is Clicked and Input field is empty

  const handleButtonClick = () => {
    const emailValue = email.current.value;

    const passValue = password.current.value;

    const name = !isSignIn ? displayName.current.value : null;

    const message = validateForm(emailValue, passValue, name);

    setErrorMessage(message);

    if (!Object.keys(message).length) {
      //sign in sign up logic

      if (!isSignIn) {
        createUserWithEmailAndPassword(auth, emailValue, passValue)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name,
              photoURL: "https://avatars.githubusercontent.com/u/175826425?v=4",
            })
              .then(() => {
               const {uid,displayName,email,photoURL} = auth.currentUser;
                       dispatch(addUser({uid:uid,email:email,name:displayName,photoURL:photoURL}));
               
              })
              .catch((error) => {
                // An error occurred
  
              });
           
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);

    
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passValue)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
           
           
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
     
          });
      }
    }
  };
  return (
    <div className="min-h-screen  bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg)]">
      <Header></Header>
      <div className="min-h-screen grid place-items-center">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="bg-black rounded-lg bg-opacity-70 flex flex-col gap-2 p-8 m-3"
        >
          <div className="p-3 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            <input
              ref={email}
              className="text-white w-96 bg-gray-600 bg-opacity-55 p-2 outline-none border border-gray-200 border-solid  rounded-md"
              type="text"
              placeholder="Enter email"
            ></input>
            {errorMessage.email && (
              <p className="text-red-500 font-semibold">{errorMessage.email}</p>
            )}
            {!isSignIn && (
              <>
                <input ref={displayName} type="text" placeholder="Full Name"  className="text-white w-96 bg-gray-600 bg-opacity-55 p-2 outline-none border border-gray-200 border-solid  rounded-md" />
                {errorMessage.name && <p className="text-red-500">{errorMessage.name}</p>}
              </>
            )}
            <input
              ref={password}
              className=" text-white bg-gray-600 bg-opacity-55 p-2 outline-none border border-gray-200 border-solid  rounded-md"
              type="password"
              placeholder="Enter password"
            />
            {errorMessage.password && (
              <p className="text-red-500 font-semibold">
                {errorMessage.password}
              </p>
            )}
            <button
              onClick={handleButtonClick}
              className="bg-red-600 p-3 text-white text-xl rounded-md  "
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white cursor-pointer hover:underline decoration-white"
              onClick={handleSignIn}
            >
              {" "}
              {isSignIn
                ? "New to Netflix ? Sign up now"
                : "Already a User ? Sign In now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
