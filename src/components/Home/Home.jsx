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
                <div className=" h-full 800px:w-[70%] flex flex-col  800px:justify-between 800px:flex-row px-8 gap-x-5 items-center">
                  <div className="mt-[20vh] 800px:mt-0 mb-5 800px:mb-0">
                    <h1 className="text-[25px] font-semibold bg-black text-white p-2 rounded-md">
                    প্রিয় গ্রাহক আমরা ২০২৪ সাল উপলক্ষে বিশেষ ডিসকাউন্ট মাধ্যমে নতুন ইউজার গ্রহণ করতেছি আপনারা আগ্রহ থাকলে আবেদন করুন
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[40vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slide/slide (2).jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-[80vh] w-full "
              >
                <div className=" h-full 800px:w-[70%] flex flex-col  800px:justify-between 800px:flex-row px-8 gap-x-5 items-center">
                  <div className="mt-[20vh] 800px:mt-0 mb-5 800px:mb-0">
                    <h1 className="text-[25px] font-semibold bg-black text-white p-2 rounded-md">
                    প্রিয় গ্রাহক আমরা ২০২৪ সাল উপলক্ষে বিশেষ ডিসকাউন্ট মাধ্যমে নতুন ইউজার গ্রহণ করতেছি আপনারা আগ্রহ থাকলে আবেদন করুন
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[40vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slide/slide (3).jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-[80vh] w-full "
              >
                <div className=" h-full 800px:w-[70%] flex flex-col  800px:justify-between 800px:flex-row px-8 gap-x-5 items-center">
                  <div className="mt-[20vh] 800px:mt-0 mb-5 800px:mb-0">
                    <h1 className="text-[25px] font-semibold bg-black text-white p-2 rounded-md">
                    আমরা উন্নত অপ্রতিকাল ফাইবারের মাধ্যমে কেবল সংযোগ দিয়ে থাকি এবং আমাদের সংযোগকৃত টিভি স্বচ্ছ এবং পরিষ্কার কোন ঝিরঝির নেই আগ্রহীরা আবেদন করতে পারেন
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[40vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slide/slide (5).jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-[80vh] w-full "
              >
                <div className=" h-full 800px:w-[70%] flex flex-col  800px:justify-between 800px:flex-row px-8 gap-x-5 items-center">
                  <div className="mt-[20vh] 800px:mt-0 mb-5 800px:mb-0">
                    <h1 className="text-[25px] font-semibold bg-black text-white p-2 rounded-md">
                    আমাদের কাছ থেকে ওয়াইফাই নিলে আপনারা যে যে সুবিধাগুলো পাবেন উন্নত স্পিড এবং উন্নত অপটিক্যাল ফাইবারের মাধ্যমে আমরা সিগনাল প্রেরণ করে থাকি যার কারণে নেটে প্রচুর স্পিড থাকে
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[40vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: 'url("/images/slide/slide (6).jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-[80vh] w-full "
              >
                <div className=" h-full 800px:w-[70%] flex flex-col  800px:justify-between 800px:flex-row px-8 gap-x-5 items-center">
                  <div className="mt-[20vh] 800px:mt-0 mb-5 800px:mb-0">
                    <h1 className="text-[25px] font-semibold bg-black text-white p-2 rounded-md">
                    প্রিয় গ্রাহক আমরা ২০২৪ সাল উপলক্ষে বিশেষ ডিসকাউন্ট মাধ্যমে নতুন ইউজার গ্রহণ করতেছি আপনারা আগ্রহ থাকলে আবেদন করুন
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[green] w-[40vw] 800px:w-[15vw] text-white p-2 rounded-sm hover:scale-125  hover:transition hover: duration-300 text-[20px]">
                      আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
   
          </Swiper>
        </div>

        {/* services */}
        <Services />
{/* contact */}
<Contact/>
      </div>
<Footer/>
    </>
  );
}
