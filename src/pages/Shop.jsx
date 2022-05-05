import React from "react";
import axios from 'axios';
import { useState , useEffect } from "react";

const Shop = () => {

  const search  = localStorage.getItem('searchVal');

  const [datas, setDatas] = useState([]);
  const [check , setcheck] = useState(true);
  const [numI , setNumI] = useState(4);
  const [numShow , setNumShow] = useState(1);
  function getShop(){
    axios.get('http://191.96.93.178:5000/shop')
      .then((response) =>{
        setDatas(response.data) 
      })
      .catch(function(err){
        console.log(err);
      })
  }
  function getShop2(){
    axios.post('http://191.96.93.178:5000/searchShop',{
      search : search,
    })
    .then((response) =>{
      console.log(response.data);
      setDatas(response.data);
    })
    .catch(function(err){
      console.log(err);
    })
  }
  if(check)
  {
    setcheck(false);
    if(localStorage.getItem('search')){
      getShop2();
    }else{
      getShop();
    }
  }
  const buttonKayP = () => {
    if(!(numShow == 1)){
      setNumI(numI-8);
      setNumShow(numShow-1);
    }
  }
  const buttonKayN = () => {
    if((numI + 4) < JSON.parse(localStorage.getItem('maxKey')))
    {
      setNumI(numI+8);
      setNumShow(numShow+1);
    }

  }
  return (
    <div class="w-auto h-screen bg-[#082032]">
    <div className="text-white flex items-center justify-center py-10">
      <div>
        <div class="bg-[#192F40] w-full rounded-3xl px-16 py-2">
          <div class="">
            <div class="flex items-center">
              <div className="text-white text-s font-bold px-3">Sort By</div>
              <div className="flex px-3">
                <div className="px-3">
                  <a
                    href="#"
                    class="flex items-center px-4 py-2 mx-2 my-0.5 rounded-3xl text-sm font-semibold text-white bg-[#0f2638] hover:bg-[#f0a500]"
                  >
                    Relevance
                  </a>
                </div>
                <div className="px-3">
                  <a
                    href="#"
                    class="flex items-center px-7 mx-2 py-2 my-0.5 rounded-3xl text-sm font-semibold text-white bg-[#0f2638] hover:bg-[#f0a500]"
                  >
                    Latest
                  </a>
                </div>

                <div className="px-3">
                  <a
                    href="#"
                    class="flex items-center px-5 mx-2 py-2 my-0.5 rounded-3xl text-sm font-semibold text-white bg-[#0f2638] hover:bg-[#f0a500]"
                  >
                    Top Sales
                  </a>
                </div>
                <div className="px-3">
                  <a
                    href="#"
                    class="flex items-center px-6 mx-2 py-2 my-0.5 rounded-3xl text-sm font-semibold text-white bg-[#0f2638] hover:bg-[#f0a500]"
                  >
                    In Stock
                  </a>
                </div>
                <div className="px-3">
                  <a
                    href="#"
                    class="flex items-center px-8 mx-2 py-2 my-0.5 rounded-3xl text-sm font-semibold text-white bg-[#0f2638] hover:bg-[#f0a500]"
                  >
                    Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*block products */}
        
        <div className="flex justify-around py-16">
          {datas.map((val,key) => {
            
            localStorage.setItem('maxKey',key);
 
            if(key < numI && key >= numI - 4 )
            {
              return(
                <a href="/Product">
                  <button class="bg-[#334756] rounded-3xl w-52 h-52"
                  onClick={() => {
                    localStorage.setItem('infoData',JSON.stringify(val));
                    localStorage.removeItem('search');
                  }}>
                    <div className="flex justify-center">
                      <img src={`${val.img}`} alt="" className="w-32" />
                    </div>
                    <div className="text-white text-xl font-bold py-2">{val.name}</div>
                    <div className="text-white font-bold">$ {val.price}</div>
                  </button>
                </a>
              )
            }
          })}

          {/* <button class="bg-[#334756] rounded-3xl w-52 h-52">
            <div className="flex justify-center">
              <img src={""} alt="" className="w-32" />
            </div>
            <div className="text-white text-xl font-bold py-2">keyboard</div>
            <div className="text-white font-bold">100 B</div>
          </button>
          <button class="bg-[#334756] rounded-3xl w-52 h-52">
            <div className="flex justify-center">
              <img src={""} alt="" className="w-32" />
            </div>
            <div className="text-white text-xl font-bold py-2">keyboard</div>
            <div className="text-white font-bold">100 B</div>
          </button> */}
        </div>
        <div className="flex justify-around py-3">

        {datas.map((val,key) => {
            if(key >= numI && key < numI+4 )
            {
              return(
                <a href="/Product">
                  <button class="bg-[#334756] rounded-3xl w-52 h-52"
                  onClick={() => {
                    localStorage.setItem('infoData',JSON.stringify(val));
                    
                  }}>
                    <div className="flex justify-center">
                      <img src={`${val.img}`} alt="" className="w-32" />
                    </div>
                    <div className="text-white text-xl font-bold py-2">{val.name}</div>
                    <div className="text-white font-bold">$ {val.price}</div>
                  </button>
                </a>
              )
            }
          })}

        {/* <button class="bg-[#334756] rounded-3xl w-52 h-52">
            <div className="flex justify-center">
              <img src={""} alt="" className="w-32" />
            </div>
            <div className="text-white text-xl font-bold py-2">keyboard</div>
            <div className="text-white font-bold">100 B</div>
          </button>
          <button class="bg-[#334756] rounded-3xl w-52 h-52">
            <div className="flex justify-center">
              <img src={""} alt="" className="w-32" />
            </div>
            <div className="text-white text-xl font-bold py-2">keyboard</div>
            <div className="text-white font-bold">100 B</div>
          </button>
          <button class="bg-[#334756] rounded-3xl w-52 h-52">
            <div className="flex justify-center">
              <img src={""} alt="" className="w-32" />
            </div>
            <div className="text-white text-xl font-bold py-2">keyboard</div>
            <div className="text-white font-bold">100 B</div>
          </button> */}
        </div>
        {/*Page number */}
        <div>
          <div class="my-14">
            <div class="flex-1 flex sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              
              >
                Previous
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-sky hover:bg-gray-50"
                
              >
                Next
              </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center ">
              <div className="">
                <nav
                  class="relative z-0 inline-flex rounded-md -space-x-px justify-center"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md bg-transparent text-sm font-medium text-white hover:-gray-200"
                    onClick={buttonKayP}
                  >
                    <span class="sr-only">Previous</span>

                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>

                  <div
                    aria-current="page"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    {numShow}
                  </div>
                  {/* <a
                    href="#"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    3
                  </a>
                  <span class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium">
                    ...
                  </span>
                  <a
                    href="#"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    class="bg-transparent  text-white hover:text-gray-300 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                  >
                    10
                  </a> */}
                  <a
                    href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-r-md  bg-transparent text-sm font-medium text-white hover:text-gray-300"
                    onClick={buttonKayN}
                  >
                    <span class="sr-only">Next</span>

                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
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
    </div>
  );
};

export default Shop;
