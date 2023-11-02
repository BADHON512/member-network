import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {DataGrid }from "@mui/x-data-grid";
import axios from 'axios';



export default function SideAllUser() {
const [user,setUser]=useState()
console.log(user)
useEffect(()=>{
    async function name() {
       const {data}= await axios.get('http://localhost:5000/api/v2/get-all-users',{withCredentials:true})
      setUser(data.users)
    }
    name()
    
},[])



    const columns = [
        { field: "id", headerName: "Name", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
          
        },
        {
            field: "Month",
            headerName: "Month",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Amount",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <button>
                              button
                            </button>
                            
                        </Link>
                    </>
                );
            },
        },
    ];
    const row = []
    user && user.forEach((item) => {
        row.push({
            id: item.name,
            status: item.role,
            total: "US$" + item.totalPrice,
         
        })
    })
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
  )
}
