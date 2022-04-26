import React from "react";
import KeyboardInfo from "../dummies/keyboardinfo";

const Product = () => {
  return (
    <div class="container mx-auto w-4/6 pt-5">
      <div class="flex justify-center">
        <div class="flex justify-around rounded-2xl bg-bg-profile py-60 ml-5 ml w-4/6"></div>
      </div>
      <div class="flex justify-center pt-1">
      <div class="flex justify-around rounded-2xl bg-bg-profile py-28 ml-5 ml w-4/6"></div>
      </div>
      
      
      <div className="fixed bottom-20 right-48">
        <a href="/Cart">
          <button class="rounded-full px-4 py-4 bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
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

export default Product;
