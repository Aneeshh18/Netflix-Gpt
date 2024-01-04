import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkValidName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NetflixBG } from "../utils/constant";
import USER_AVATAR from "../utils/images/red profile icon.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handler = () => {
    //1st validate
    const emailMsg = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    const fullNameMsg = checkValidName(fullName?.current?.value);
    if (emailMsg || fullNameMsg) {
      setErrorMessage(emailMsg || fullNameMsg);
      return;
    }

    //sign in / sign up
    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover bg-gradient-to-b from-black z-10"
          src={NetflixBG}
          alt="bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full bg-black opacity-[0.87] absolute md:w-3/12 p-12 m-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 h-[58px] w-[315px] left-[68px] top-5 rounded-b-[3px] rounded-t-[3px]  bg-[#333333] text-[16px]"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 m-2 h-[58px] w-[315px] left-[68px] top-5 rounded-b-[3px] rounded-t-[3px] bg-[#333333] text-[16px] text-[#BCBBBA] "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="on"
          className="p-2 m-2 h-[58px] w-[315px] left-[68px] top-5 rounded-b-[3px] rounded-t-[3px]  bg-[#333333] text-[16px]"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="bg-[#E50914] hover:bg-[#C11119] text-white text-[24px] border-solid rounded-b-[3px] rounded-t-[3px]  h-[58px] w-[315px] mt-[30px] ml-[11px]"
          onClick={handler}
        >
          {isSignIn ? "Sign in" : " Sign up"}
        </button>

        <h1 className="h-[58px] w-[315px] left-[68px] mt-[60px] ml-[68px] text-[#737373] font-body font-normal text-[16px]">
          {isSignIn ? "New to Netflix?" : "Already Registered?"}
          <span
            className="underline underline-offset-2 cursor-pointer text-white"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now" : " Sign in here"}
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
