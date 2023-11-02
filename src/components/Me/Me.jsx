import React, { useState } from "react";
import SideAllUuser from "./SideAllUuser";
import axios from "axios";
import { toast } from "react-toastify";
import AllBill from "./AllBill";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/Action/user";
import Account from "./Account";
import AllWifi from "./AllWifi";


// Sidebar component

function Sidebar({ Border, setBorder }) {

 
  return (
    <div className="w-[50%] 800px:w-[20%] h-[92vh] bg-gray-800 text-white p-4">
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
        onClick={() => {
          setBorder(7);
          // LogOut();
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
function MainContent({ Border,setBorder,LogOut }) {
  const {user}=useSelector((state)=>state.user)
  return (
    <div className="w-4/5 p-4">
        {Border === 1 && <Account user={user} />}
      {Border === 2 && <SideAllUuser />}

      {Border === 3 && <AllBill />}
      {Border === 4 && <AllWifi />}

      {Border === 7 && <div className="h-[80vh] w-full flex justify-center items-center">
        <div className="w-full h-[20vh] 800px:h-[30vh] 800px:w-[30vw] bg-black rounded-md p-2 800px:p-5">
          <h1 className="font-semibold text-[20px] text-white text-center">Are you sure you want to logout ?</h1>
          <div className="h-[80%] w-full flex justify-center items-end">

            <div className="w-full flex justify-between text-white">
              <button onClick={()=>setBorder(45)} className="p-2 bg-[green] rounded-sm w-[100px]">Cancel</button>
              <button onClick={()=>LogOut()} className="p-2 bg-[red] rounded-sm w-[50px] font-semibold ">Yes</button>
            </div>
          </div>
        </div>
        </div>}

      

    </div>
  );
}

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogOut = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v2/log-out", {
      withCredentials: true,
    });
    toast.success(data.message);
    badhon(data);
    dispatch(loadUser());
  };
  const badhon = (data) => {
    if (data) {
      navigate("/");
    }
  };

  const [Border, setBorder] = useState(1);
  return (
    <div className="flex">
      <Sidebar Border={Border} setBorder={setBorder} />
      <MainContent Border={Border} setBorder={setBorder} LogOut={LogOut}  />
    </div>
  );
}

export default Dashboard;
