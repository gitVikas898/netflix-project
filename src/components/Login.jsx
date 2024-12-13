import { useState, useRef } from "react";
import validateForm from "../utils/validation";

const Login = () => {
  //using use ref hook

  const email = useRef(null);
  const password = useRef(null);

  // now creating a state variable to manage Sign Up and Sign In Feature

  const [isSignIn, setSignIn] = useState(true);

  //now creating a satate variable to manage error state

  const [errorMessage,setErrorMessage] = useState({});

  // writing a function that handles the Sign in state

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };
  //Now Handling Error state like what if Button is Clicked and Input field is empty

  const handleButtonClick = () => {

    const emailValue = email.current.value;

    const passValue = password.current.value;

    const message = validateForm(emailValue,passValue);

    setErrorMessage(message);

    if(!Object.keys(message).length){
      setTimeout(()=>{
        alert("Form Submitted Succesfully!")
      },1500)
    }

  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_small.jpg)]">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="bg-black rounded-lg bg-opacity-70 flex flex-col gap-4 p-16 w-1/3 "
      >
        <div className="p-3 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <input ref={email}
            className="text-white bg-gray-600 bg-opacity-55 p-4 outline-none border border-gray-200 border-solid  rounded-md"
            type="text"
            placeholder="Enter email"
          ></input>
          {errorMessage.email && (<p className="text-red-500 font-semibold">{errorMessage.email}</p>)}
          
          {!isSignIn && (
            <input
              className=" text-white bg-gray-600 bg-opacity-55 p-4 outline-none border border-gray-200 border-solid  rounded-md"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input ref={password}
            className=" text-white bg-gray-600 bg-opacity-55 p-4 outline-none border border-gray-200 border-solid  rounded-md"
            type="password"
            placeholder="Enter password"
          />
           {errorMessage.password && (<p className="text-red-500 font-semibold">{errorMessage.password}</p>)}
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
  );
};

export default Login;
