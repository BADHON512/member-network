import React from 'react'

export default function CollectBill() {
  return (
    <div className="container mx-auto p-6">
    <h2 className="text-3xl font-semibold text-center mb-6">ডিস বিল সংগ্রহ</h2>
    <form className="max-w-lg mx-auto p-6 bg-[#dad4d467] rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">গ্রাহকের নাম</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="গ্রাহকের নাম লিখুন "
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600  font-semibold mb-2" htmlFor="price">বর্তমান মাসের ভাড়া</label>
        <input
          type="number"
          id="price"
          inputMode='none'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="এই মাসের ভাড়া লিখুন"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">কিছু ডিসক্রিপশন লিখুন</label>
        <textarea
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
  )
}
