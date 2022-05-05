import axios from 'axios';
import { useState } from "react";
const AddressPopup = ({ isOpen, toggleModel }) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [info, setInfo] = useState("");

  function addAddress(){
    axios.post('http://191.96.93.178:5000/addAddress',{
      email : user.email,
      name : name,
      phone : phone,
      province : province,
      district : district,
      postalcode : postalcode,
      info : info,
    }).then((response) => {
      console.log(response);
      refreshPage();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    }) 
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="">
      <div
        className="font-bold text-white text-xs cursor-pointer hover:text-red-500 hover:border-b border-red-500"
        onClick={toggleModel}
      >
        Edit
      </div>
      {isOpen && (
        <div className="w-screen  h-screen  flex justify-center items-center absolute top-0 left-0 z-50">
          <div
            className="w-screen h-screen bg-black/70 absolute top-0 left-0"
            onClick={toggleModel}
          ></div>
          <form class="bg-[#082032] rounded-3xl absolute px-14 pt-12 pb-16">
            <p class="flex items-center font-bold text-xl text-white pb-2">
              ADDRESS
            </p>
            <p class="flex items-center font-normal  text-white pb-6 text-sm">
              please add a delivery address
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <input
                  class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 pr-24 text-white leading-tight"
                  id="name"
                  type="text"
                  placeholder="Full name"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                ></input>
              </div>
              <div class="flex items-center text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <input
                  class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 pr-24 text-white leading-tight"
                  id="phonenum"
                  type="text"
                  placeholder="Phone No."
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                ></input>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="flex items-center text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <input
                  class="bg-[#082032] border-2 rounded-xl pl-8 py-2  mr-4 text-white leading-tight"
                  id="province"
                  type="text"
                  placeholder="Province"
                  onChange={(event) => {
                    setProvince(event.target.value)
                  }}
                ></input>
              </div>
              <div class="flex items-center text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <input
                  class="bg-[#082032] border-2 rounded-xl pl-8 py-2  text-white leading-tight"
                  id="district"
                  type="text"
                  placeholder="District"
                  onChange={(event) => {
                    setDistrict(event.target.value)
                  }}
                ></input>
              </div>
              <div class="flex items-center text-white mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  class="bg-[#082032] border-2 rounded-xl pl-8 py-2 ml-4 text-white leading-tight"
                  id="postalCode"
                  type="text"
                  placeholder="Postal Code"
                  onChange={(event) => {
                    setPostalcode(event.target.value)
                  }}
                ></input>
              </div>
            </div>
            <div>
              <div class="text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2 mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <textarea
                  class="bg-[#082032] border-2 rounded-xl w-full h-40 py-2 px-8 text-white leading-tight"
                  id="detail"
                  type="text"
                  placeholder="Street Name, Buildings, House No."
                  onChange={(event) => {
                    setInfo(event.target.value)
                  }}
                ></textarea>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-[#F0A500] text-white font-bold py-2 px-10 w-full rounded-xl focus:outline-none"
                type="button"
                onClick={addAddress}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddressPopup;
