import React from 'react'
import { Link } from 'react-router-dom';
import {DataGrid }from "@mui/x-data-grid";



export default function SideAllUser() {

    const orders = [
        {
            _id: "badhon",
            orderItems: [
                { name: "Samphony p6 Pro max" }
            ],
            totalPrice: 120,
            orderStatus: "Unpaid"
        },
    ]


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
    const row = [{
        id:"raja",
        status:"Unpaid",
        total:"200",
        Month:"january"

    }]
    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: orders.length,
            total: "US$" + item.totalPrice,
            status: item.orderStatus
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
