import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CollectBill() {
  const { user, isAuthenticate } = useSelector((state) => state.user);
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Dish-bill");
  const [description, setDescription] = useState("");
  console.log(type)

  const BillSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios
      .post("http://localhost:5000/api/v2/bill-post", {
        name,
        price,
        description,
        month,
        user,
        type
      })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      
      });
    console.log(name, price, description, month, user);
  };

  console.log(month); // This will log the current month as a string

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        ডিস বিল সংগ্রহ
      </h2>
      <form
        onSubmit={BillSubmit}
        className="max-w-lg mx-auto p-6 bg-[#dad4d467] rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold mb-2"
            htmlFor="name"
          >
            গ্রাহকের নাম
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="গ্রাহকের নাম লিখুন "
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600  font-semibold mb-2"
            htmlFor="price"
          >
            বর্তমান মাসের ভাড়া
          </label>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            inputMode="none"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="এই মাসের ভাড়া লিখুন"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600  font-semibold mb-2"
            htmlFor="price"
          >
         কি ইউজার ?
          </label>
          <select
             value={type}
            onChange={(e) => setType(e.target.value)}
            
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          
          >
            <option className="mt-2" value="Dish-bill">ডিস লাইন</option>
          <option className="mt-2" value="Net-bill">ওয়াইফাই</option>
        
         
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold mb-2"
            htmlFor="description"
          >
            কিছু ডিসক্রিপশন লিখুন
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
