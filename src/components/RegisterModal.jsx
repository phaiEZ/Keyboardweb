import axios from 'axios';
import { useState } from "react";
const RegisterModal = ({isOpen,toggleModel}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  function addUser(){
    axios.post('http://191.96.93.178:5000/register',{
      name : name,
      email : email,
      username : username,
      phoneNumber : phoneNumber,
      password : password,
      passwordConf : passwordConf,
    }).then((response) => {
      console.log(response);
      refreshPage();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    }) 
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="">
      <div className="font-bold text-black rounded-3xl text-lg cursor-pointer px-4 py-2 bg-white my-1 mr-10"
        onClick={toggleModel}>
        Register
      </div>
      {isOpen && (
        <div className="w-screen  h-screen  flex justify-center items-center absolute top-0 left-0 z-50">
          <div className="w-screen h-screen bg-black/50 absolute top-0 left-0"
            onClick={toggleModel}>
          </div>
            <form class="bg-[#082032] rounded-3xl absolute px-14 pt-16 pb-20 mb-15">
              <p class="flex items-center font-extrabold justify-center text-lg text-white pb-6">CREATE ACCOUNT</p>
              <div class="flex items-center text-white mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="name" type="text" placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center text-white mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="email" type="text" placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="phonenum" type="text" placeholder="Phone No."
                  onChange={(event) => {
                    setPhoneNumber(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center text-white mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="username" type="text" placeholder="Username"
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center text-white mb-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="password" type="password" placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center text-white mb-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                  <input class="bg-[#082032] border-2 rounded-2xl w-full py-2 px-10 text-white leading-tight" id="password" type="password" placeholder="Confirm Password"
                  onChange={(event) => {
                    setPasswordConf(event.target.value)
                  }}></input>
                </div>
                <div class="flex items-center justify-center">
                <button class="bg-white hover:bg-blue-800 text-black font-bold py-2 px-10 w-full rounded-2xl focus:outline-none" type="button" onClick={addUser}>
                    SIGN UP
                </button>
                </div>
              </form>
          </div>
      )}
    </div>
  );
};

export default RegisterModal;