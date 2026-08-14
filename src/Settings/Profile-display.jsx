import React, { useRef, useState } from "react";
import { FaCamera, FaPen } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

export default function Profile({
  userName,
  onEditClick,
  userEmail,
  userPhoneNumber,
}) {
  const [image, setImage] = useState(null);
  const [active, setActive] = useState(false);

  const hidePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";

    return phoneNumber.replace(/(\d{3})\d{4}(\d{3})/, "$1****$2");
  };
  const menuRef = useRef(null);

  return (
    <div className="mb-5 relative bg-blue-900 font-sans shadow-md rounded-lg p-2 py-5 sm:w-4/5 w-full mx-auto text-[#E0B030]">
      <div className="flex justify-between items-center text-xl">
        <h3 className=" font-bold mb-4 ml-5 lg:ml-18">My Profile</h3>
        <button
          onClick={() => setActive(!active)}
          className="md:hidden active:bg-yellow-500 hover:bg-[#E0B030] text-[#E0B030] hover:text-black font-bold -mt-5 text-2xl border border-[#E0B030] px-2 text-center rounded-full"
        >
          ≡
        </button>
      </div>

      <div className="flex justify-between items-center w-9/10 mx-auto">
        {/* image and details */}
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full bg-white object-cover g"
            src={
              image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRo5RsazUIy3LPn-DG57NPTKgVyRcUqqJODFRmkEdbg&s=10"
            }
            alt={userName}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="hidden"
            id="file-input"
          />
          <label
            className="absolute left-22 p-1 md:left-27 sm:left-25  lg:left-30 bg-gray-200 shadow-md hover:bg-gray-100 rounded-full top-28 cursor-pointer text-black"
            htmlFor="file-input"
          >
            <FaCamera />
          </label>
          <div>
            <p className="text-xl">
              Hello, <span className="font-bold">{userName}</span>
            </p>
            <p>{userEmail}</p>
            <p>{hidePhoneNumber(userPhoneNumber)}</p>
          </div>
        </div>

        <div className="md:flex gap-4 hidden">
          <button
            onClick={onEditClick}
            className="bg-[#E0B030] text-black py-2 px-4 rounded font-bold  active:text-black active:bg-[#E0B030] hover:bg-blue-900  hover:border-[#E0B030] border hover:text-[#E0B030] flex items-center gap-2"
          >
            Edit Profile
          </button>
          <button className="border border-[#E0B030] hover:bg-[#E0B030] text-[#E0B030] hover:text-black py-2 px-4 rounded flex items-center gap-2 font-bold">
            Sign Out <PiSignOutBold />
          </button>
        </div>
        {/* dropdown div */}
        {active && (
          <div className=" absolute top-5 right-0 bg-[#fff8e7] text-[#E0B030]  rounded shadow-lg z-10 flex flex-col w-1/2">
            <div className="flex justify-between items-center border-b border-[#E0B030] p-4">
              <p className="font-bold">Menu</p>
              <button
                onClick={() => setActive(!active)}
                className=" hover:text-black font-bold active:text-amber-400"
                text-end
              >
                ✕
              </button>
            </div>

            <button
              onClick={onEditClick}
              className="border-b border-[#E0B030] p-4 hover:bg-[#E0b030] hover:text-black font-bold active:bg-amber-400 text-start"
            >
              Edit Profile
            </button>
            <button className=" flex items-center justify-start p-4 hover:bg-[#E0b030] hover:text-black font-bold active:bg-amber-400 gap-2 ">
              Sign Out <PiSignOutBold />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}