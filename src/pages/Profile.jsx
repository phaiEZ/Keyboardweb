import React from "react";

const Profile = () => {
    return (
        <div class="container mx-auto pt-5">
            <div class="flex justify-center items-center my-10">
                <a href="/Profile">
                    <button class=" rounded-full flex justify-center bg-profile2-pic bg-cover ring-2 ring-black items-center px-32 py-32 mr-10 hover:brightness-50">
                    </button>
                </a>
                <div class="flex justify-around rounded-3xl bg-bg-profile px-52 py-36 ml-5">
                <div class="absolute border-b">
                 <h1 class="font-bold text-lg">SHOPPING CART</h1>
                 </div>
                </div>
                <button class="rounded-full rounded-full bg-bg-profile flex justify-center items-center px-10 py-10 mb-52 hover:brightness-50 ml-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-bg-profile text-white rounded-full absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                </button>
            </div>
            <div class="rounded-3xl bg-bg-profile py-48 ml-80 mr-80">
                </div>
        </div>
    )
    /*return (
        <div class="container mx-auto mt-1 pt-10 ">
            <div class="">
                <div
                    className="profile-pic"
                    class="absolute w-60 h-60 left-60 top-1/6 m-10 bg-bg-profile rounded-full"
                >
                    <div class="absolute w-56 h-56 left-0 top-1/6 m-2 bg-profile1-pic bg-cover rounded-full"></div>
                </div>
                <div
                    className="profile-detail"
                    class="absolute w-96 h-60 right-1/4 top-1/6 m-10 bg-bg-profile rounded-xl "
                >
                    <div
                        className="username"
                        class="absolute w-full h-40 bg-transparent text-white font-bold leading-10 px-4 py-1 text-2xl "
                    >
                        OppKunG
                    </div>
                    <div
                        className="edit-profile"
                        class="absolute w-10 h-40 bg-transparent right-3 top-3"
                    >
                        <a
                            href="edit"
                            class="text-white font-semibold leading-5 underline hover:text-navbar-ptr-color"
                        >
                            Edit
                        </a>
                    </div>
                    <div
                        class="absolute w-auto h-40 left-4 right-4 top-1/4 bg-transparent overflow-auto
    text-white text-base"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <a
                    href="add-comment"
                    class="absolute w-14 h-14 left-3/4 top-1/6 m-10 bg-bg-profile rounded-full
      text-white  hover:text-white hover:bg-navbar-ptr-color font-bold text-5xl px-3"
                >
                    +
                </a>
                <div
                    className="my-keyboard"
                    class="absolute w-2/3 h-60 right-60 bottom-5 bg-bg-profile rounded-xl
      text-white font-bold leading-5 px-3 py-3 text-xl"
                >
                    My Keyboard Design
                    <div class="w-full h-full bg-transparent flex items-stretch space-x-7 px-5 py-5">
                        <a
                            href="id-profile_keyboard1"
                            class="w-1/3 h-5/6 bg-keyboard1-pic bg-cover rounded-xl hover:brightness-50"
                        >
                            {" "}
                        </a>
                        <a
                            href="id-profile_keyboard2"
                            class="w-1/3 h-5/6 bg-keyboard2-pic bg-cover rounded-xl hover:brightness-50"
                        >
                            {" "}
                        </a>
                        <a
                            href="id-profile_keyboard3"
                            class="w-1/3 h-5/6 bg-keyboard3-pic bg-cover rounded-xl hover:brightness-50"
                        >
                            {" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );*/
};

export default Profile;
