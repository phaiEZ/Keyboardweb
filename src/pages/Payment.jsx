import keyboardlogo from "../img/keyboardlogo.png";
import React , { useState }from "react";
import axios from 'axios';
const Payment = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [datas , setDatas] = useState([]);
    const [check , setcheck] = useState(true);
    const [sum , setSum] = useState(0);
    const [address , setAddress] = useState([]);
    const [numItem , setNumItem] = useState(0);
    const [i , setI] = useState(0);

    function getCart(){
        axios.post('http://191.96.93.178:5000/cart',{
          email : user.email,
        }).then(function(response){
          console.log(response.data);
          setDatas(response.data);
        }).catch(function(err){
          console.log(err);
        })
        
    }
    function removeCart(){
        const idRemove = JSON.parse(localStorage.getItem('carIdRemove'));
        axios.post('http://191.96.93.178:5000/removeCart',{
          _id : idRemove._id,
        }).then(function(response){
          console.log(response);
          refreshPage();
        }).catch(function(err){
          console.log(err);
        })
    }
    
    function removeCartAll(){
        axios.post('http://191.96.93.178:5000/removeCartAll',{
          email : user.email,
        }).then(function(response){
          console.log(response);
          refreshPage();
        }).catch(function(err){
          console.log(err);
        })
      
    }

    function getAddress(){
        axios.post('http://191.96.93.178:5000/getaddress',{
          email : user.email,
        }).then(function(response){
          console.log(response.data);
          setAddress(response.data);
        }).catch(function(err){
          console.log(err);
        })
      }
    function refreshPage() {
        window.location.reload(false);
    }

    if(i == 2)
    {
        refreshPage();
        setI(0);
    }
    if(check)
    {
        setcheck(false);
        getCart();
        getAddress();
    }

    return (
        <div class="w-screen h-screen bg-[#082032]">
        <div class="container mx-auto w-4/6 pt-10">
            <div class="flex justify-center items-between my-10">
                <div class="w-3/4 px-6">
                    <div class=" rounded-2xl bg-[#1e3345] w-full px-9 py-6 ml-3 mb-3">
                        <div class="flex justify-between border-b border-b-gray-600">
                            <h1 class="font-bold text-lg text-white">ADDRESS</h1>
                            {/* <button class="font-normal  mt-2 text-xs hover:text-red-500 text-white border-white hover:border-b hover:border-red-500">
                                Edit
                            </button> */}
                        </div>
                        <div class="mt-5">
                            <span class="font-normal text-sm text-white">
                            {address.map((val,key) => {
              
                                return(
                                    <div class="">{val.name} {val.phone} <br /> {val.info} {val.district} {val.province} {val.postalcode}</div>
                                );
                                })}
                            </span>
                        </div>
                    </div>
                    <div
                        id="orders"
                        class=" rounded-2xl bg-[#1e3345] w-full px-9 py-6 ml-3"
                    >
                        <div class="flex justify-start border-b pb-6 border-b-gray-600">
                            <h1 class="font-bold text-lg text text-white">ORDER(S)</h1>
                        </div>
                        <div class="flex mt-10 mb-5">
                            <h3 class="font-bold text-center text-white text-s uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 class="font-bold text-white text-s uppercase w-2/5 text-center ml-20">
                                Quantity
                            </h3>
                            <h3 class="font-bold text-white text-s uppercase w-2/5 text-center ">
                                Price
                            </h3>
                            <h3 class="font-bold text-white text-s uppercase w-2/5 text-center mr-5">
                                Total
                            </h3>
                        </div>
                        <div class="overflow-y-scroll h-24">

                        {datas.map((val,key) => {
                            return(
                                <div class="flex items-center hover:bg-[#3c4e5c] pl-10 pt-3 pb-6" onLoad={() =>{
                                    setSum((val.price * val.stock) + sum);
                                    setNumItem(key + 1);
                                }}>
                                    <div class="flex w-2/5">
                                        <div class="w-20 h-20 flex items-center bg-white">
                                            <img class="w-24" src={`${val.img}`} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between ml-4 flex-grow">
                                            <span class="font-bold text-sm text-white">{val.name}</span>
                                            <span class="text-xs text-white">JIB</span>
                                            <a href="#" class="font-semibold hover:text-red-500 text-white text-xs"onClick={() =>{
                                            localStorage.setItem('carIdRemove',JSON.stringify(val));
                                            removeCart();
                                            refreshPage();
                                            }}>Remove</a>
                                        </div>
                                    </div>
                                    <div class="flex justify-center ml-9 w-2/5">
                                        <div class="flex justify-center w-1/5 text-white">{val.stock}</div>
                                    </div>
                                    <span class="text-center w-2/5 font-semibold text-sm text-white">$ {val.price }</span>
                                    <span class="text-center w-2/5 font-semibold text-sm text-white">$ {val.price * val.stock }</span>
                                </div>
                            )   
                        })}
                            
                        </div>

                        <a href="/Cart" class="flex font-semibold text-white text-sm mt-10 mb-5">
                            <svg
                                class="fill-current mr-2 text-white w-4"
                                viewBox="0 0 448 512"
                            >
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            back to cart
                        </a>
                    </div>
                </div>

                <div class="rounded-2xl  w-1/4 bg-[#1e3345] px-9 py-6 ">
                    <h1 class="font-bold text-lg border-b pb-6 text-white border-b-gray-600">PAYMENT METHOD</h1>
                    <div className="">
                        <div className="py-5 flex justify-center">
                            <button class="bg-[#F0A500] font-bold  py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                I-Banking
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button class="bg-[#F0A500] font-bold  py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                Credit / Debit Card
                            </button>
                        </div>
                        <div className="py-5 flex justify-center">
                            <button class="bg-[#F0A500] font-bold  py-5 text-sm text-white uppercase w-3/4 rounded-3xl">
                                COD
                            </button>
                        </div>
                        <div class="border-t border-t-gray-600">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase text-white">
                                <span>Total cost</span>
                                <span>$ {sum}</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button class="bg-[#F0A500] font-bold  py-3 text-sm text-white uppercase w-2/4 rounded-3xl" 
                            onClick={() =>{
                                removeCartAll();
                                alert("successsful");
                                refreshPage();
                            }}  
                                
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;