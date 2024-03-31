import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const handleSignInForm = () => {
    setisSignInForm(!isSignInForm);
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
        action=""
        className="bg-black  absolute p-12 w-3/12 my-36 left-0 right-0 mx-auto text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-600"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 bg-opacity-60 border border-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-700 bg-opacity-60 border border-gray-600"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignInForm}>
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
