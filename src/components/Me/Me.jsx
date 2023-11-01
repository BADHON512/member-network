import React, { useState } from "react";
import SideAllUuser from "./SideAllUuser";
import axios from "axios";
import { toast } from "react-toastify";

// Sidebar component

function Sidebar({Border,setBorder}) {

  const LogOut=async()=>{
     const {data} = await axios.get('http://localhost:5000/api/v2/log-out')
      toast.success(data.message)
      console.log(data)
  }

  return (
    <div className="w-1/5 h-screen bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold text-center ">Dashboard</h1>
      <div className="border-b-2 mx-auto mt-2" />

      <h1
        onClick={() => setBorder(1)}
        className={`${
          Border === 1 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        Account
      </h1>

      <h1
        onClick={() => setBorder(2)}
        className={`${
          Border === 2 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        All user
      </h1>

      <h1
        onClick={() => setBorder(3)}
        className={`${
          Border === 3 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        All dis user
      </h1>

      <h1
        onClick={() => setBorder(4)}
        className={`${
          Border === 4 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        All wifi user
      </h1>

      <h1
        onClick={() => setBorder(5)}
        className={`${
          Border === 5 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        Bill status
      </h1>

      <h1
        onClick={() => setBorder(6)}
        className={`${
          Border === 6 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        Role changer
      </h1>

    

      <h1
        onClick={() => {
          setBorder(7)
          LogOut()
        }}
        className={`${
          Border === 7 ? "bg-[#d6ceceaf] " : ""
        } text-[20px] font-semibold hover:bg-[#d6ceceaf] hover:duration-300 cursor-pointer p-2 rounded-md mt-3 `}
      >
        Log Out
      </h1>
    </div>
  );
}

// Main content component
function MainContent({Border}) {
  return (
    <div className="w-4/5 p-4">
         {
          Border===2&&(<SideAllUuser/>)
         }
    </div>
  );
}

function Dashboard() {
  const [Border, setBorder] = useState(1);
  return (
    <div className="flex">
   <Sidebar Border={Border} setBorder={setBorder} />
      <MainContent Border={Border} />
    </div>
  );
}

export default Dashboard;
