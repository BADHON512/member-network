import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

export default function Account({ user }) {
  return (
    <div className="h-[50vh] w-full p-5 mt-20">
      <div className="w-full flex justify-center">
        <div className="relative">
          <img
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
            src={user?.image?.url}
            alt="img not found"
          />
          <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
            <input type="file" className="hidden" id="images" />
            <label htmlFor="images">
              <AiOutlineCamera />
            </label>
          </div>
        </div>
      </div>

      <div className="h-[10vh] w-full flex flex-col gap-y-4 800px:flex-row justify-center mt-20 gap-x-5">
        <div className=" ">
          <label className="block pb-2 font-semibold">Full Name</label>
          <input
            type="text"
            className={ `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 font-semibold`}
            required
            value={user?.name}
          />
        </div>

        <div className=" ">
          <label className="block pb-2 font-semibold">Email</label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 font-semibold`}
            required
            value={user?.email}
          />
        </div>

        <div className=" ">
          <label className="block pb-2 font-semibold">User role</label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 font-semibold`}
            required
            value={user?.role}
          />
        </div>
      </div>

   
    </div>
  );
}
