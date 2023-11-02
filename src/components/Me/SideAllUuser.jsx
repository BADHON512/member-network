import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

export default function SideAllUser() {
const{user}=useSelector((state)=>state.user)
console.log(user)
  const [role, setRole] = useState("");
  const [I, setI] = useState(0);

  const [users, setUser] = useState();

  useEffect(() => {
    async function name() {
      const { data } = await axios.get(
        "http://localhost:5000/api/v2/get-all-users",
        { withCredentials: true }
      );
      setUser(data.users);
    }
    name();
  }, [I]);

  
  const badhon= async(email)=>{
 
    if(user.role==="admin"){
        await axios.post('http://localhost:5000/api/v2/role-update',{email,role}).then((res)=>{
       toast.success(res.data.message)
   }).catch((err)=>{
       toast.success(err.response.data.message)
   })
  
    }else{
        toast.error("You are not Admin")
    }
   
   

}

  const columns = [
    {
      field: "img",
      headerName: "Image",
      minWidth: 70,
      flex: 0.7,
      renderCell: (params) => {
        return (
          <>
            <img src={params.row.img} className="h-[5vh] rounded-full" alt="" />
          </>
        );
      },
    },

    {
      field: "name",
      headerName: "Name",
      type: "",
      minWidth: 100,
      flex: 0.8,
    },

    {
      field: "status",
      headerName: "Role Changer",
      minWidth: 130,
      flex: 0.7,
      renderCell: (params) => {
    
      

        return (
          <div className="flex gap-x-4">
            <select onChange={(e) => setRole(e.target.value)} name="" id="">
              <option value="user"> choose</option>
              <option value="user"> User</option>
              <option value="admin">Admin </option>
            </select>

            <button
              onClick={() =>{ badhon(params.row.email)
                setI(I+1)
            }}
              className="bg-[green] px-1 rounded-sm text-white"
            >
              ok
            </button>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "Role",
      headerName: "Role",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];
  const row = [];
  users &&
    users.forEach((item) => {
      row.push({
        id: item.name,
        img: item.image.url,
        status: item.emile,
        email: item.email,
        name: item.name,
        Role: item.role,
      });
    });
  return (
    <div className=" pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
}
