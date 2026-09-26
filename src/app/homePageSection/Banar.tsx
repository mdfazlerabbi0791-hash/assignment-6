import Image from "next/image";
import React from "react";
import baner from "@/app/photos/banner.png";

const BanarSction = () => {
  return (
   
<div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-12 bg-[#15171d] py-10 px-6 md:py-12 md:px-10 lg:py-15 rounded-2xl">

  
  <div className="col-span-1 md:col-span-7 lg:col-span-8 space-y-5 md:space-y-6 lg:space-y-7 text-center md:text-left">

    <p className="text-lime-400 font-semibold">
      WORKOUT LIBRARY
    </p>

    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
      TRAIN WITH INTENT. LOG EVERY SET.
    </h1>

    <p className="text-[#9ca3af] text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
      into todays plan, and watch the weeks work add up.
    </p>

    <button className="bg-lime-400 text-black py-3 px-5 rounded-2xl font-bold hover:bg-lime-300 transition cursor-pointer">
      BROWSE WORKOUTS
    </button>

  </div>

  
  <div className="col-span-1 md:col-span-5 lg:col-span-4 flex justify-center items-center mt-8 md:mt-0">
    <Image
      src={baner}
      alt="banar"
      className="w-full max-w-sm md:max-w-full object-contain"
    />
  </div>

</div>
    
  );
};

export default BanarSction;
