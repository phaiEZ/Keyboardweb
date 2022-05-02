import React, { useState } from "react";
import UserInfo from "../dummies/userinfo";
import EditProfile from "../components/EditProfile";

const EProfile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const toggleEdit = () => {
    setIsEditOpen(!isEditOpen);
  };
  return (
    <div className="flex items-center font-bold text-white">
      <EditProfile isOpen={isEditOpen} toggleModel={toggleEdit} />
    </div>
  );
}

const Profile = () => {
  return (
    <div class="w-screen h-screen bg-[#082032]">
      <div class="container mx-auto my-auto w-4/6  rounded-3xl pt-6">
        <div class="flex justify-center items-between px-6 mb-5">
          <div>
            <img
              src={UserInfo.img}
              class="rounded-full w-60 ring-2 ring-bg-profile mr-2"
            />
          </div>
          <div class=" bg-[#334756]  ml-24 w-3/6 rounded-xl">
            <div class=" bg-[#1F3647] w-full rounded-t-xl py-1 flex justify-between">
              <h1 class="font-bold text-white  text-2xl pl-5"> Profile </h1>
              <button
              class="pr-5"
            >
              <EProfile />
            </button>
            </div>
            <div class="mt-4 mx-5">
              <h1 class="font-bold text-white text-xl"> {UserInfo.Name} </h1>
              <p class="font-bold text-gray-400 text-sm mt-2">
                {UserInfo.Detail}
              </p>
            </div>
          </div>
        </div>
        <div class=" bg-[#334756] rounded-xl w-9/12  mx-auto  pb-12 ">
          <div class=" bg-[#1F3647] w-full pt-2 pb-2 rounded-t-xl">
            <p class="font-bold text-white  text-2xl ml-5">
              My Keyboards Design
            </p>
          </div>

          <div className="flex justify-center items-center mx-auto mt-10 px-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide relative "
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    class="block w-full"
                    alt="Wild Landscape"
                  />
                </div>
                <div class="carousel-item float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                    class="block w-full"
                    alt="Camera"
                  />
                </div>
                <div class="carousel-item float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    class="block w-full"
                    alt="Exotic Fruits"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default Profile;
