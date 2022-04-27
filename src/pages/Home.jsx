import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import keyboardlogo from "../img/keyboardlogo.png";
import "swiper/swiper.min.css";

const Home = () => {
  return (
  <div class="w-screen h-screen bg-[#082032]">
    <div class="container mx-auto pt-3">
      <div class="flex justify-center items-between my-10">
        <div class="w-3/5 h-96 px-10">
          <div className="">
            <div
              id="carouselDarkVariant"
              class="carousel slide carousel-fade carousel-dark relative"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="1"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="2"
                  aria-label="Slide 1"
                ></button>
              </div>

              <div class="carousel-inner relative w-full overflow-hidden">
                <a href="/Product" class="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                    class="block w-full"
                    alt="Motorbike Smoke"
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Best Seller</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </a>

                <a href="/Product" class="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                    class="block w-full"
                    alt="Mountaintop"
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Best Seller</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </a>

                <a href="/Product" class="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                    class="block w-full"
                    alt="Woman Reading a Book"
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Best Seller</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </a>
              </div>

              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
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
                data-bs-target="#carouselDarkVariant"
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

      <div className="flex justify-center mx-auto ">
        <a href="/Product">
        <button class="bg-[#334756] shadow-lg rounded-3xl mx-8 w-60 h-60">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
        </a>
        <a href="/Product">
        <button class="bg-[#334756] shadow-lg rounded-3xl mx-8 w-60 h-60">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
        </a>
        <a href="/Product">
        <button class="bg-[#334756] shadow-lg rounded-3xl mx-8 w-60 h-60">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
        </a>
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
    </div>
  );
};
export default Home;
