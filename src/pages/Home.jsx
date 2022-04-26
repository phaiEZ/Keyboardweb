import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import keyboardlogo from "../img/keyboardlogo.png";
import "swiper/swiper.min.css";

const Home = () => {
  return (
    <div class="container mx-auto mt-1 pt-3">
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
                <div class="carousel-item active relative float-left w-full">
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
                </div>

                <div class="carousel-item relative float-left w-full">
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
                </div>

                <div class="carousel-item relative float-left w-full">
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
                </div>
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

      <div className="flex justify-center ">
        <button class="bg-white shadow-lg rounded-3xl mx-12 w-72 h-72">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
        <button class="bg-white shadow-lg rounded-3xl mx-12 w-72 h-72">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
        <button class="bg-white shadow-lg rounded-3xl mx-12 w-72 h-72">
          <div className="flex justify-center">
            <img src={keyboardlogo} alt="" className="w-32" />
          </div>
          <div className="text-black text-xl font-bold py-2">keyboard</div>
          <div className="text-black font-normal">100B</div>
        </button>
      </div>
    </div>
  );
};

export default Home;
