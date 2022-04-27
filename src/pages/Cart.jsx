import React from "react";
import keyboardlogo from "../img/keyboardlogo.png";

const Cart = () => {
  return (
    <div class="w-auto h-screen bg-[#082032]">
    <div class="container mx-auto w-4/6 pt-10 ">
      <div class="flex items-between my-10">
        <div class="rounded-2xl w-3/4 bg-[#1e3345]">
          <div class="flex justify-start border-b pb-6 mx-9 py-6 border-gray-600">
            <h1 class="font-bold text-lg text-white">SHOPPING CART</h1>
            <h2 class="font-bold text-lg text-white">(4 Items)</h2>
          </div>
          <div class="flex mt-10 pl-16 py-2 pb-5">
            <h3 class="font-bold text-white text-s uppercase w-2/5">Product Details</h3>
            <h3 class="font-bold text-center text-white text-s uppercase w-2/5 pl-4">Quantity</h3>
            <h3 class="font-bold text-center text-white text-s uppercase w-2/5 pr-2 pl-2">Price</h3>
            <h3 class="font-bold text-center text-white text-s uppercase w-2/5 pr-7">Total</h3>
          </div>
          <div class="overflow-y-scroll h-96">
            <div class="flex items-center hover:bg-[#3c4e5c] pl-10 pt-5 pb-6">
              <div class="flex w-2/5 ml-5">
                <div class="w-20 h-20 bg-white flex items-center">
                  <img class="w-24" src={keyboardlogo} alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow text-white">
                  <span class="font-bold text-sm text-white">Keyboard</span>
                  <span class="text-xs text-white">JIB</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-white text-xs">Remove</a>
                </div>
              </div>
              <div class="flex justify-center pl-6 w-2/5">
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input class="mx-2 border text-center w-8 rounded-xl" type="text" value="1" />
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span class="text-center w-2/5 font-semibold text-white text-sm pl-2">$150.00</span>
              <span class="text-center w-2/5 font-semibold text-white text-sm">$150.00</span>
            </div>
            <div class="flex items-center hover:bg-[#3c4e5c] pl-10 pt-5 pb-6">
              <div class="flex w-2/5 ml-5">
              <div class="w-20 h-20 bg-white flex items-center">
                  <img class="w-24" src={keyboardlogo} alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-white text-sm">Keyboard</span>
                  <span class="text-xs text-white">JIB</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-white text-xs">Remove</a>
                </div>
              </div>
              <div class="flex justify-center pl-6 w-2/5">
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input class="mx-2 border text-center w-8 rounded-xl" type="text" value="1" />
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span class="text-center w-2/5 font-semibold text-white text-sm pl-2">$150.00</span>
              <span class="text-center w-2/5 font-semibold text-white text-sm">$150.00</span>
            </div>

            <div class="flex items-center hover:bg-[#3c4e5c] pl-10 pt-5 pb-6">
              <div class="flex w-2/5 ml-5">
              <div class="w-20 h-20  bg-white flex items-center">
                  <img class="w-24" src={keyboardlogo} alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-white text-sm">Keyboard</span>
                  <span class="text-xs text-white">JIB</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-white text-xs">Remove</a>
                </div>
              </div>
              <div class="flex justify-center pl-6 w-2/5">
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input class="mx-2 border text-center w-8 rounded-xl" type="text" value="1" />
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span class="text-center w-2/5 font-semibold text-white text-sm pl-2">$150.00</span>
              <span class="text-center w-2/5 font-semibold text-white text-sm">$150.00</span>
            </div>
            <div class="flex items-center hover:bg-[#3c4e5c] pl-10 pt-5 pb-6">
              <div class="flex w-2/5 ml-5">
              <div class="w-20 h-20 bg-white flex items-center">
                  <img class="w-24" src={keyboardlogo} alt="" />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm text-white">Keyboard</span>
                  <span class="text-xs text-white">JIB</span>
                  <a href="#" class="font-semibold hover:text-red-500 text-white text-xs">Remove</a>
                </div>
              </div>
              <div class="flex justify-center pl-6 w-2/5">
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input class="mx-2 border text-center w-8 rounded-xl" type="text" value="1" />
                <button>
                  <svg class="fill-current text-white w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <span class="text-center w-2/5 font-semibold text-white text-sm pl-2">$150.00</span>
              <span class="text-center w-2/5 font-semibold text-white text-sm">$150.00</span>
            </div>
          </div>    
          <a href="/Shop" class="flex font-semibold text-white  text-sm mt-7 px-9">
            <svg class="fill-current mr-2 text-white w-4 " viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </a>
        </div>
        <div class="">
          <div class=" rounded-2xl bg-[#1e3345] w-full px-9 py-6 ml-3 mb-3">
            <div class="flex justify-between border-b pb-5 border-gray-600">
              <h1 class="font-bold text-lg text-white">ADDRESS</h1>
              <button class="font-normal  mt-2 text-xs hover:text-red-500 hover:border-b border-red-500 text-white">edit</button>
            </div>
            <div class="mt-5">
              <span class="font-normal text-sm text-white">ถ.ฉลองกรุง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520</span>
            </div>
          </div>
          <div id="summary" class=" rounded-2xl bg-[#1e3345] w-full px-9 py-6 ml-3">
            <h1 class="font-bold text-lg border-b pb-6 text-white border-gray-600">ORDER SUMMARY</h1>
            <div class="flex justify-between mt-10 mb-5 text-white">
              <span class="font-semibold text-sm uppercase text-white">4 Items</span>
              <span class="font-semibold text-sm text-white">$600</span>
            </div>
            <div class="py-4">
              <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase text-white">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" class="p-2 border-2 text-sm w-full rounded-2xl bg-[#1e3345]" />
            </div>
            <button class=" hover:bg-indigo-600 px-5 py-2 text-sm font-bold text-white uppercase rounded-2xl w-full bg-[#F0A500]">Apply</button>
            <div class="border-t mt-8 border-gray-600">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase text-white">
                <span class="text-white">Total cost</span>
                <span class="text-white">$600</span>
              </div>
              <a href="/Payment">
              <button class=" font-bold  py-3 text-sm text-white uppercase w-full rounded-2xl bg-[#F0A500]">Checkout</button>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
