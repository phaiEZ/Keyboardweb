import React from "react";
import keyboardlogo from "../img/keyboardlogo.png";
const Community = () => {
  return (
    <div class="w-auto h-screen bg-[#082032]">
    <div class="container mx-auto pt-10">
      <div class="flex justify-center items-between my-5 px-6">
          <a href="/Profile" class=" rounded-full flex justify-center ring-2 ring-black items-center w-44 h-44 mb-3 mr-20 hover:brightness-50">
          <img src={keyboardlogo} alt="" className="w-40" />
          </a>
        <div class="relative flex justify-around rounded-3xl bg-bg-profile w-6/12 px-3 pb-3 pt-10 mb-3">
          <h1 class="absolute top-1.5 left-7 text-white text-xl font-bold">
            OppKung
          </h1>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 bg-cover">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
        </div>
      </div>
      <div class="border-b border-gray-700 ml-40 mr-40"></div>
      <div class="flex justify-center items-between py-5 my-5 px-6">
      <a href="/Profile" class=" rounded-full flex justify-center  ring-2 ring-black items-center w-44 h-44 mb-3 mr-20 hover:brightness-50">
      <img src={keyboardlogo} alt="" className="w-40" />
      </a>
        <div class="relative flex justify-around rounded-3xl bg-bg-profile w-6/12 px-3 pb-3 pt-10 mb-3">
          <h1 class="absolute top-1.5 left-7 text-white text-xl font-bold">
            Toto
          </h1>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 bg-cover">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
        </div>
      </div>
      <div class="border-b border-gray-700 ml-40 mr-40"></div>
      <div class="flex justify-center items-between py-5 my-5 px-6">
      <a href="/Profile" class=" rounded-full flex justify-center  ring-2 ring-black items-center w-44 h-44 mb-3 mr-20 hover:brightness-50">
      <img src={keyboardlogo} alt="" className="w-40" />
      </a>
        <div class="relative flex justify-around rounded-3xl bg-bg-profile w-6/12 px-3 pb-3 pt-10 mb-3">
          <h1 class="absolute top-1.5 left-7 text-white text-xl font-bold">
            Aomzupp
          </h1>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 bg-cover">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
          <a href="/Product" class="rounded-2xl bg-white w-1/2 ml-3 bg-cover ">
          <img src={keyboardlogo} alt="" className="" />
          </a>
        </div>
      </div>
      <div class="border-b border-gray-700 ml-40 mr-40"></div>
      <div className="fixed bottom-20 right-48">
        <a href="/Cart">
        <button class="rounded-full px-4 py-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Community;
/*
import React from "react";
const Community = () => {
  return (
    <div>
    <div class="flex items-stretch ">
          <a
            href="id-profile"
            className="user-pic1"
            class="absolute w-40 h-40 left-60 top-1/6 mt-5 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile1-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 top-1/6 mt-5 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            OppKunG
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard1-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard2-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard3-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>

          <a
            href="id-profile"
            className="user-pic2"
            class="absolute w-40 h-40 left-60 top-1/3 mt-16 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile2-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 top-1/3 mt-16 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            Toto
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard4-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard5-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard6-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>

          <a
            href="id-profile"
            className="user-pic3"
            class="absolute w-40 h-40 left-60 bottom-10 mt-10 bg-bg-profile rounded-full"
          >
            <div class="absolute w-36 h-36 left-0 top-1/6 m-2 bg-profile3-pic bg-cover rounded-full hover:brightness-50"></div>
          </a>
          <div
            className="community-keyboard1"
            class="absolute w-1/2 h-40 right-60 bottom-10 mt-10 bg-bg-profile rounded-xl
            text-white font-bold leading-5 px-3 py-2 text-xl"
          >
            Phai
            <div class="w-full h-full bg-transparent flex items-stretch space-x-6 px-5 py-2">
              <a
                href="id-profile_keyboard1"
                class="w-1/3 h-4/5 bg-keyboard7-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard2"
                class="w-1/3 h-4/5 bg-keyboard8-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
              <a
                href="id-profile_keyboard3"
                class="w-1/3 h-4/5 bg-keyboard9-pic bg-cover rounded-xl hover:brightness-50"
              >
                {" "}
              </a>
            </div>
          </div>
          <a
            href="cart"
            class="absolute w-16 h-16 right-32 bottom-10 bg-cart-icon bg-cover rounded-full
            hover:brightness-50 font-bold text-5xl px-3"
          >
            {" "}
          </a>
        </div>
    </div>
  );
};

export default Community;*/
