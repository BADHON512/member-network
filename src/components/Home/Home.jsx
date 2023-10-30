import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Services from "../Services/Services";
import Contact from "../Contact/Contact.jsx";
import Header from "../Layout/Header";
import Footer from "../Footer";

export default function Home() {
  return (
    <>

      <div>
        <div className="h-[5vh] w-full bg-red-200 flex items-center animation-container ">
          <h1 className="animated-div text-[20px] font-semibold">
          আসসালামু আলাইকুম জরুরী নোটিশ যারা 5 তারিখের মধ্যে ডিস বিল সম্পন্ন করবেনা  তা  না হলে  ডিস লাইন কেটে দেওয়া হবে তাই যত তাড়াতাড়ি সম্ভব ৫ তারিখের মধ্যে রাজা মিয়ার কাছে বিল  দিবেন তা না হলে রাজা মিয়া  ডিস লাইন কেটে দিবে কোন কথা বলা যাবে না 
          </h1>
        </div>

        <div className="h-[80vh] w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slide/slide (1).jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-[80vh] w-full "
              >
                <div className=" h-full 800px:w-[70%] flex justify-between px-8 gap-x-5 items-center">
                  <div>
                    <h1 className="text-[25px] font-semibold">
                    প্রিয় গ্রাহক আমরা ২০২৪ সাল উপলক্ষে বিশেষ ডিসকাউন্ট মাধ্যমে নতুন ইউজার গ্রহণ করতেছি আপনারা আগ্রহ থাকলে আবেদন করুন
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[20vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="h-[90vh] w-full bg-black">
                <img
                  src="/images/slide/slide (6).jpg"
                  alt=""
                  className="bg-cover bg-center bg-no-repeat h-full w-full"
                />
              </div>
            </SwiperSlide>{" "}
       
              <SwiperSlide>
          <div className='h-[90vh] w-full bg-black'>
             <img src="/images/slide/slide (3).jpg" alt="" 
             className="bg-cover bg-center bg-no-repeat  h-full w-full"
             />
          </div>
        </SwiperSlide>  
          <SwiperSlide>
          <div className='h-[90vh] w-full bg-black'>
             <img src="/images/slide/slide (2).jpg" alt="" 
             className="bg-cover bg-center bg-no-repeat  h-full w-full"
             />
          </div>
        </SwiperSlide>
  
        <SwiperSlide>
          <div className='h-[90vh] w-full bg-black'>
             <img src="/images/slide/slide (5).jpg" alt="" 
             className="bg-cover bg-center bg-no-repeat  h-full w-full"
             />
          </div>
        </SwiperSlide> */}
          </Swiper>
        </div>

        {/* services */}
        <Services />
{/* contact */}
<Contact/>
      </div>

    </>
  );
}
