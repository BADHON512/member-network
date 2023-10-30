import React from 'react'

export default function Pricing() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Pricing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">ডিস লাইন</h3>
          <img src="/dish.jpg" alt="Category 1" className="mx-auto mb-4" />
          <ul className="list-disc pl-6 mb-4">
            <li className='text-[17px] font-semibold'>প্রথমবার কানেকশন ১৪৯৯ টাকা.</li>
            <li className='text-[17px] font-semibold'>নির্দিষ্ট দূরত্বের চেয়ে বেশি হলে এক্সট্রা চার্জ প্রযোজ্য.</li>
            <li className='text-[17px] font-semibold'>প্রাকৃতিক কারণে লাইনে কোন সমস্যা হলে ফ্রি সার্ভিস.</li>
          </ul>
          <p className="text-xl text-center font-semibold mb-4"> <span className='text-[30px]'>৳</span> ১৯৯/ মাসে</p>
       
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Category 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">ওয়াইফাই লাইন</h3>
          <img src="/wifi.png" alt="Category 1" className="mx-auto mb-4 h-[180px]" />
          <ul className="list-disc pl-6 mb-4">
            <li className='text-[17px] font-semibold'>প্রথমবার কানেকশন ৫৯৯৯ টাকা.</li>
            <li className='text-[17px] font-semibold'>নির্দিষ্ট দূরত্বের চেয়ে বেশি হলে এক্সট্রা চার্জ প্রযোজ্য.</li>
            <li className='text-[17px] font-semibold'>প্রাকৃতিক কারণে লাইনে কোন সমস্যা হলে ফ্রি সার্ভিস.</li>
          </ul>
          <p className="text-xl text-center font-semibold mb-4"> <span className='text-[30px]'>৳</span> ৫৯৯/ মাসে</p>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
