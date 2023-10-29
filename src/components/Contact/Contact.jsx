import React from 'react'
import {BsTelephoneOutboundFill }from 'react-icons/bs'

export default function Contact() {
  return (
    <div>

        <div className='p-5 mt-3'>
           <h1 className=' text-[30px] font-semibold text-center '>যোগাযোগ করুন</h1>
           <p className='border-b w-[300px] border-[#7a7676ee] mx-auto'></p>


           <div className='w-full min-h-[20vh] flex flex-col justify-center items-center gap-y-4 mt-5'>
              <div className='flex gap-x-3 items-center'>
                 <img src="/abba.jpg" className='h-[60px] w-[60px] rounded-full object-cover' alt="" />
                 <h1 className='text-[20px] font-semibold flex gap-x-3 items-center'><BsTelephoneOutboundFill/>01768943286</h1>
              </div>
              <div className='flex gap-x-3 items-center'>
                 <img src="/badhon.jpg" className='h-[60px] w-[60px] rounded-full object-cover' alt="" />
                 <h1 className='text-[20px] font-semibold flex gap-x-3 items-center'><BsTelephoneOutboundFill/>01712124128</h1>
              </div>
              <div className='flex gap-x-3 items-center'>
                 <img src="/raja.jpg" className='h-[60px] w-[60px] rounded-full object-cover' alt="" />
                 <h1 className='text-[20px] font-semibold flex gap-x-3 items-center'><BsTelephoneOutboundFill/>01602309579</h1>
              </div>
           </div>
        </div>
    </div>
  )
}
