import React from "react";
import { BsFacebook, BsTelephoneOutboundFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="h-[50vh] w-full bg-[#0b0b22] p-5 flex justify-center items-center">
      <div>
        <div className="flex gap-x-20">
          <div className="flex flex-col items-center gap-y-5">
            <img
              src="/abba.jpg"
              className="h-[60px] w-[60px] rounded-full object-cover"
              alt=""
            />
            <a
              href="https://www.facebook.com/profile.php?id=100076950188792"
              target="blank"
            >
              <BsFacebook
                size={50}
                className="text-white cursor-pointer hover:text-[red] hover:duration-300"
              />
            </a>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <img
              src="/badhon.jpg"
              className="h-[60px] w-[60px] rounded-full object-cover"
              alt=""
            />
            <a href="https://www.facebook.com/md.badhon.984991/" target="blank">
              <BsFacebook
                size={50}
                className="text-white cursor-pointer hover:text-[red] hover:duration-300"
              />
            </a>
          </div>
          <div className="flex flex-col items-center gap-y-5">
            <img
              src="/raja.jpg"
              className="h-[60px] w-[60px] rounded-full object-cover"
              alt=""
            />
            <a
              href="https://www.facebook.com/profile.php?id=100061843826681"
              target="blank"
            >
              <BsFacebook
                size={50}
                className="text-white cursor-pointer hover:text-[red] hover:duration-300"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-[#bdb3b3dc] mt-20 text-[20px] te">Copyright © 2023 Elegant Themes ®</h1>
        </div>
      </div>
    </div>
  );
}
