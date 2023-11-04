export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 md:mr-4">
          <img
            src="/abba.jpg"
            alt="Founder"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-[30px] font-semibold">
            Founder of member network
          </h2>
          <p className="text-[15px]">
            আমি আব্দুল খালেক , মেম্বার নেটওয়ার্কের প্রতিষ্ঠাতা। আমি একজন
            উদ্যোক্তা এবং মানুষকে সংযুক্ত করার এবং তাদের জীবনধারা উন্নত করার
            জন্য প্রযুক্তি ব্যবহার করতে চাই । আমরা বিশ্বাস করি যে সকলেরই তাদের
            সম্প্রদায়ের সাথে সংযুক্ত থাকার এবং তাদের জীবন উন্নত করার জন্য
            সরঞ্জাম এবং সম্পদ থাকা উচিত। মেম্বার নেটওয়ার্কের মাধ্যমে, আমরা সেই
            সরঞ্জাম এবং সম্পদগুলি সরবরাহ করছি যাতে আমাদের সদস্যরা তাদের সেরা
            জীবনযাপন করতে পারে
          </p>

          <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
          <p>
            মেম্বার নেটওয়ার্কের ভবিষ্যতের লক্ষ্য হল বাংলাদেশের সবচেয়ে বড় এবং
            সবচেয়ে সক্রিয় অনলাইন সম্প্রদায় হয়ে উঠা। আমরা চাই আমাদের
            প্ল্যাটফর্মটি এমন একটি জায়গা হতে পারে যেখানে সদস্যরা তাদের আগ্রহের
            বিষয়ে তথ্য এবং সম্পদ শেয়ার করতে পারে, নতুন বন্ধু খুঁজে পেতে পারে
            এবং তাদের জীবন উন্নত করার জন্য প্রয়োজনীয় সহায়তা পেতে পারে।
          </p>
        </div>
      </div>
    </div>
  );
}
