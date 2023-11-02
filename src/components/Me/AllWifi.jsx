import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {DataGrid }from "@mui/x-data-grid";
import axios from 'axios';
export default function AllWifi() {
    const date = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];

    const [selectedMonth, setSelectedMonth] = useState(month);
    const [Users, setUsers] = useState()

    useEffect(()=>{


        async function name(){
         const {data}=await axios.get('http://localhost:5000/api/v2/get-dis-users')
         setUsers(data.users)
        }
        name();
    },[])

    const columns = [
        { field: "id",
         headerName: "Name",
          minWidth: 150,
           flex: 0.7 },

           { field: "type",
         headerName: "Type",
          minWidth: 70,
           flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
          
        },
        {
            field: "month",
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
            field: "Collected",
            headerName: "Collected by",
            flex: 1,
            minWidth: 150,
            
            type: "number",
            sortable: false,
         
        },
    ];

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
      };

 
      
    const filteredUsers = Users?.filter((user) => user.month === selectedMonth&&user.type==="wifi");
    const Total = filteredUsers?.reduce((accumulator, currentUser) => accumulator + parseFloat(currentUser.price), 0);

    const row = []
    filteredUsers && filteredUsers?.forEach((item) => {
        row.push({
            id: item.name,
            type: item.type ||"Nothing is selected",
            status: item.description,
            total: item.price,
            Collected:item.user.name,
            month:item.month||"Nothing was written"
         
        })
    })
  return (
   <>
      <div className='h-[8vh] w-full p-3 flex gap-x-3 items-center'>
      <select className='text-[17px] outline-none font-semibold' value={selectedMonth} onChange={handleMonthChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <h1 className='text-[20px] font-semibold'>Total user: {" "}{filteredUsers?.length}</h1>

        <h1 className='text-[20px] font-semibold'>Total Amount: {" "}{Total}</h1>

      </div>
   <div className=" pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />

           
        </div>
   </>
  )
}
