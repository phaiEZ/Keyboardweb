// import { response } from "../../../server/app";
import axios from 'axios';
import { useState, useEffect } from "react";

const EditProfile = ({ isOpen, toggleModel }) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [textProfile, setTextProfile] = useState("");
  const [img, setImg] = useState("");
  const [imgURL, setImgURL] = useState("");

  const [datas , setDatas] = useState();

  function editProfile(){
    axios.post('http://191.96.93.178:5000/profile',{
      email: user.email,
      name: user.name,
      textProfile: textProfile,
      img: img
    }).then((response)=>{
      console.log(response);
      setDatas(response);
      refreshPage();
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    })
  }
  function refreshPage() {
    window.location.reload(false);
  }

  // useEffect(()=>{
  //   if(img.length < 1){
  //     return;
  //   }
  //   const newImgURL = [];
  //   Array.from(img).forEach(image => {
  //     newImgURL.push(URL.createObjectURL({
  //       image
  //     }));
  //   });
  //   // img.forEach((image) => newImgURL.push(URL.createObjectURL(image)));
  //   // Object.keys(img).forEach(image => {
  //   //   newImgURL.push(URL.createObjectURL(image));
  //   // });
  //   setImgURL(newImgURL);
  // },[img]);

  return (
    <div className="">
      <div
        className="font-bold text-white text-xs cursor-pointer hover:text-red-500 hover:border-b border-red-500"
        onClick={toggleModel}
      >
        Edit
      </div>
      {isOpen && (
        <div className="w-screen h-screen flex justify-center absolute top-0 left-0 z-50">
          <div
            className="w-screen h-screen bg-black/70 absolute top-0 left-0"
            onClick={toggleModel}
          ></div>
          <form class="bg-[#082032] rounded-3xl absolute mt-20 px-14 pt-12 pb-16">
            <p class="flex items-center font-bold text-xl text-white pb-2">
              EDIT PROFILE
            </p>

            {/* <div class="flex items-center text-white mb-5">
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
                class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 text-white leading-tight"
                id="name"
                type="text"
                placeholder="Name"
              ></input>
            </div> */}
            {/* <div class="flex items-center text-white mb-5">
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
              ></input>
            </div> */}
            {/* <div class="flex items-center text-white mb-5">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <input
                class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 text-white leading-tight"
                id="password"
                type="password"
                placeholder="Current password"
              ></input>
            </div> */}
            {/* <div class="flex items-center text-white mb-5">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <input
                class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 text-white leading-tight"
                id="newpassword"
                type="password"
                placeholder="New password"
              ></input>
            </div> */}
            {/* <div class="flex items-center text-white mb-5">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <input
                class="bg-[#082032] border-2 rounded-xl w-full py-2 pl-8 text-white leading-tight"
                id="newpassword"
                type="password"
                placeholder="Confirm new password"
              ></input>
            </div> */}
            <div>
              <div class="text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute ml-2 mt-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <textarea
                  class="bg-[#082032] border-2 rounded-xl w-full h-40 py-2 px-8 text-white leading-tight"
                  id="detail"
                  type="text"
                  placeholder="Description"
                  onChange={(event) => {
                    setTextProfile(event.target.value)
                  }}
                ></textarea>
              </div>
            </div>
            <div class="mb-5">
            <p class="mb-2 mr-44">Change profile picture</p>
            <form action="/action_page.php">
              <input type="file" id="myFile" name="filename" 
              onChange={(event) => {
                // setImg(event.target.files)
                if(event.target.files.length !== 0){
                  setImg({image: URL.createObjectURL(event.target.files[0])})
                }
              }}/>
              <input type="submit" />
            </form>
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-[#F0A500] text-white font-bold py-2 px-10 w-full rounded-xl focus:outline-none"
                type="button"
                onClick={()=>{
                  editProfile();
                }}
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

export default EditProfile;
