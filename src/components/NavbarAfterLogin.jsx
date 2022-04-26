import React, { useState } from "react";
import keyboardlogo from "../img/keyboardlogo.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" >
        <img src={keyboardlogo} alt="" className="w-20 invert" />
      </Link>
      <div class="flex items-center text-gray-400 ml-5 focus-within:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2 text-[#2C394B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input class="pl-8 rounded-2xl py-1 text-gray-700 bg-[#334756]" id="search" type="text" placeholder="Search">
        </input>
      </div>
    </div>
  );
};


const NavLists = () => {
  return (
    <div className="flex items-center font-bold text-lg text-white">
      <div className="mr-20">
        <Link to="/Shop" >Shop</Link>
      </div>
      <div className="mr-20">
        <Link to="/Custom">Custom</Link>
      </div>
      <div className="mr-32">
        <Link to="/Community">Community</Link>
      </div>
    </div>
  );
};

const NavUser = () => {
  return (
    <div className="flex justify-between text-white py-1">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </button>

    </div>
  );
}

const NavbarAfterLogin = () => {
  return (
    <div className="flex justify-around bg-[#2C394B] px-8 py-3">
      <NavLogo />
      <NavLists />
      <NavUser />
    </div>
  );
};

export default NavbarAfterLogin;