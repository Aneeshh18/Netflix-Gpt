import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORT_LANG } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => { });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-40" src={LOGO} alt="logo" />
      <div className="flex items-center">
        {user && (
          <>
            { showGptSearch && <select
              className="p-2 text-base bg-slate-300 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={handleLanguageChange}
            >
              {SUPPORT_LANG.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-gray-800 hover:bg-gray-100"
                >
                  {lang.name}
                </option>
              ))}
            </select>}



            <button className="p-2 m-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mr-3 shadow-lg rounded-md transform hover:scale-105 transition-transform" onClick={handleGptSearchClick}>
              {showGptSearch ? "HomePage" : "GPT-Search"}
            </button>

            <img
              src={user.photoURL}
              alt="icon"
              className="w-11 h-11 rounded-sm text-white border border-white mr-2 transform hover:scale-105 transition-transform"
            />
            <button
              onClick={handleSignOut}
              className="text-white hover:text-gray-300"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
