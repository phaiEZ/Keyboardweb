import React from "react";
import keyboardlogo from "../img/keyboardlogo.png";

const Payment = () => {
    return (
        <div class="container mx-auto w-4/6 mt-1 pt-10">
            <div class="flex justify-center items-between my-10">
                <div class="w-3/4 px-6">
                    <div class=" rounded-2xl bg-gray-100 w-full px-9 py-6 ml-3 mb-3">
                        <div class="flex justify-between border-b ">
                            <h1 class="font-bold text-lg ">ADDRESS</h1>
                            <button class="font-normal  mt-2 text-xs hover:text-red-500 hover:border-b border-red-500">
                                edit
                            </button>
                        </div>
                        <div class="mt-5">
                            <span class="font-normal text-sm ">
                                ถ.ฉลองกรุง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520
                            </span>
                        </div>
                    </div>
                    <div
                        id="orders"
                        class=" rounded-2xl bg-gray-100 w-full px-9 py-6 ml-3"
                    >
                        <div class="flex justify-start border-b pb-6">
                            <h1 class="font-bold text-lg">ORDER(S)</h1>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-bold text-center text-black text-s uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 class="font-bold text-center text-black text-s uppercase w-2/5 text-center ml-20">
                                Quantity
                            </h3>
                            <h3 class="font-bold text-center text-black text-s uppercase w-2/5 text-center ">
                                Price
                            </h3>
                            <h3 class="font-bold text-center text-blacks text-s uppercase w-2/5 text-center mr-5">
                                Total
                            </h3>
                        </div>
                        <div class="overflow-y-scroll h-24">
                            <div class="flex items-center hover:bg-gray-200 pl-10 pt-5 pb-6">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="w-24" src={keyboardlogo} alt="" />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">Keyboard</span>
                                        <span class="text-xs">JIB</span>
                                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                    </div>
                                </div>
                                <div class="flex justify-center ml-9 w-2/5">
                                    <div class="flex justify-center w-1/5">1</div>
                                </div>
                                <span class="text-center w-2/5 font-semibold text-sm">$150.00</span>
                                <span class="text-center w-2/5 font-semibold text-sm">$150.00</span>
                            </div>
                        </div>

                        <a href="/Cart" class="flex font-semibold text-black text-sm mt-10 mb-5">
                            <svg
                                class="fill-current mr-2 text-black w-4"
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>
                </div>

                <div class="rounded-2xl  w-1/4 bg-gray-100 px-9 py-6">
                    <h1 class="font-bold text-lg border-b pb-6">PAYMENT METHOD</h1>
                    <div className="">
                        <div className="py-5 flex justify-center">
                            <button class="bg-black font-semibold hover:bg-indigo-600 py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                I-Banking
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button class="bg-black font-semibold hover:bg-indigo-600 py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                Credit / Debit Card
                            </button>
                        </div>
                        <div className="py-5 flex justify-center">
                            <button class="bg-black font-semibold hover:bg-indigo-600 py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                COD
                            </button>
                        </div>
                        <div class="border-t">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button class="bg-black font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-2/4 rounded-3xl">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;