import keyboardlogo from "../img/keyboardlogo.png";
const LoginModal = ({isOpen,toggleModel,forceOpenRegister}) => {

  return (
    <div className="">
      <div className="font-bold text-white text-lg cursor-pointer mr-16"
        onClick={toggleModel}>
        Login
      </div>

      {isOpen && (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-50">
          <div className="w-screen h-screen bg-black/70 absolute top-0 left-0"
            onClick={toggleModel}>
          </div>
              <form class="bg-[#082032] shadow-lg rounded-3xl absolute px-16 pt-20 pb-20 mb-15">
              <div class="flex justify-center items-center pb-10">
              <img src={keyboardlogo} alt="" className="w-32 invert" />
              </div>
                <div class="flex items-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  <input class="bg-[#082032] pr-3 pl-8 border-2 rounded-2xl w-full py-2 px-3 text-white leading-tight" id="username" type="text" placeholder="Username">
                  </input>
                </div>
                <div class="flex items-center text-white mb-6 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                  <input class="bg-[#082032] pr-3 pl-8 border-2 rounded-2xl w-full py-2 px-3 text-white leading-tight" id="password" type="password" placeholder="Password"></input>
                </div>
                <div class="flex items-center justify-center">
                  <button class="bg-white hover:bg-gray-200 text-black font-bold py-2 px-10 w-full rounded-2xl focus:outline-none focus:shadow-outline" type="button">
                    LOGIN
                  </button>
                </div>
                <div class="flex justify-center text-xs mt-5">
                  <p class="font-normal text-white">Not a member yet ?&nbsp;</p>
                  <button onClick={forceOpenRegister} class="text-white font-bold">
                    Create Account
                  </button>
                </div>  
              </form>
          </div>
      )}
    </div>

    
  );
};

export default LoginModal;
