import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef({ value: "" });

  const toogleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  /* const handleButtonClick = () => {
  let message = null;

  if (!isSignInForm && (!name.current || !name.current.value.trim())) {
    message = "Please enter your full name.";
  } else if (!email.current || !email.current.value.trim()) {
    message = "Please enter your email address.";
  } else if (!password.current || !password.current.value.trim()) {
    message = "Please enter your password.";
  } else {
    const message = checkValidateData(
  isSignInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    // }
    setErrorMessage(message);
    if (message) return;

    //Sign Up Or Sign In Logic

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "-", errorMessage);
        });
    }else{
      //Sign In
    }
  }; */

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;
    //Sign Up Or Sign In Logic

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "-", errorMessage);
        });
    } else {
      //Sign In
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black  absolute p-12 w-3/12 my-36 left-0 right-0 mx-auto text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-600"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-700 bg-opacity-60 border border-gray-600"
        />
        <div className="text-red-700 font-bold text-lg py-2">
          {errorMessage}
        </div>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm ? (
            <>
              <span className="text-gray-500">New to Netflix?</span> Sign Up
              Now.
            </>
          ) : (
            <>
              <span className="text-gray-500">Already Member?</span> Sign In
              Now.
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
