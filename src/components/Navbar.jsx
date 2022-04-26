import React, { useState } from "react";
import LoginModal from "./LoginModal";
import keyboardlogo from "../img/keyboardlogo.png";
import RegisterModal from "./RegisterModal";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div className="flex items-center pl-9">
      <Link to="/" >
        <img src={keyboardlogo} alt="" className="w-20 invert" />
      </Link>
      <div class="flex items-center text-gray-400 ml-5 focus-within:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input class="pl-8 rounded-2xl py-1 text-gray-700" id="search" type="text" placeholder="Search">
        </input>
      </div>
    </div>
  );
};


const NavLists = () => {
  return (
    <div className="flex items-center font-bold text-lg text-white">
      <div className="mr-20 ml-16">
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

const NavLogin = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };
  const forceOpenRegister = () => {
    setIsLoginOpen(false)
    setIsRegisterOpen(true)
  }
  return (
    <div className="flex items-center font-bold text-white">
      <LoginModal isOpen={isLoginOpen} toggleModel={toggleLogin} forceOpenRegister={forceOpenRegister} />
      <RegisterModal isOpen={isRegisterOpen} toggleModel={toggleRegister} />
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="flex justify-around bg-black px-7 py-2 w-screen">
      <NavLogo />
      <NavLists />
      <NavLogin />
    </div>
  );
};

export default Navbar;