import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="p-5 w-full mt-5">
      <div className="">
        <h1 className="text-[30px] font-semibold">আমাদের সার্ভিস সমূহ</h1>
        <p className="ml-4 text-[20px]">
          আমরা ডিস লাইনের যেসব জিনিস সার্ভিসিং করে থাকি লাইনের যেমন এমপ্লিফায়ার
          টিভি ইলেকট্রিক সরঞ্জাম ইত্যাদি আমরা রিপিয়ার করে থাকি আমাদের কাছে
          উন্নত টেকনিশিয়ান রয়েছে যাদের দ্বারা এইসব মালামাল রিপেয়ার করা হয়
        </p>
      </div>
      <div className="mt-5 min-h-[70vh] w-[90%] mx-auto">
        <div className="flex h-full w-full justify-center items-center flex-wrap gap-3">
          <motion.div
            initial={{ x: -3000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Cart
              img={"/services/images.jpg"}
              text={
                "আমরা যে কোন ডিস লাইনের এমপ্লিফায়ার টেকনিক্যাল ফল্ট সমাধান করে থাকি"
              }
            />
          </motion.div>
          <motion.div
            initial={{ x: -3000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Cart
              img={"/services/electric.webp"}
              text={
                "আমরা ডিস লাইনের এমপ্লিফায়ার এর বৈদ্যুতিক সংযোগ কারেন্টের খুঁটি থেকে দিয়ে থাকি"
              }
            />
          </motion.div>
          <motion.div
            initial={{ x: -3000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Cart
              img={"/services/tv.jpg"}
              text={
                "হাই ভোল্টেজ এর কারণে অথবা কোন টেকনিক্যাল ইস্যুর কারণে এলইডি টিভি যদি নষ্ট হয়ে থাকে তবে এখানে রিপেয়ার করে "
              }
            />
          </motion.div>{" "}
          <motion.div
            initial={{ x: -3000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <Cart
              img={"/services/download.jpg"}
              text={
                "ডিস লাইনের ফাইবার কেবল যদি ছিড়ে যায় তাহলে আমাদের উন্নত মেশিন দ্বারা তা পুনরায় রিপেয়ার করা হয়"
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Cart = ({ img, text }) => {
  return (
    <div className="h-[30vh] hover:transition hover:scale-110 hover:duration-300 shadow-md cursor-pointer border w-full 800px:w-[40vw]  flex gap-x-4 p-3">
      <div className="h-[200px] w-[220px] ">
        <img src={img} className="h-[200px] w-[220px] rounded-sm" alt="" />
      </div>
      <h1 className="text-[20px] font-semibold w-[70%] mt-4">{text}</h1>
    </div>
  );
};
