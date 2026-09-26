import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/app/photos/logo.png'


const Navber = () => {
  return (
    <div className="border border-b-white/5 ">
    <div className=" container mx-auto flex justify-between items-center my-4  pb-5">
      <div className="flex items-center gap-4 pl-6 md:pr-0">
    <Image src={logo} alt="logo"/>
    <h1 className="text-[22px] text-white font-bold hidden md:block">FITLOG</h1>
      </div>
      <ul className="flex items-center gap-10 text-[#9ca3af]">
    <li><Link href={'/'} className="hover:rounded-full hover:bg-lime-950 hover:px-7 hover:py-3 hover:text-lg hover:font-semibold hover:text-lime-400">Workouts</Link></li>
    <li><Link href={'/plan'} className="hover:rounded-full hover:bg-lime-950 hover:px-7 hover:py-3 hover:text-lg hover:font-semibold hover:text-lime-400">My Plan</Link></li>
      </ul>
      <div>
        <ul className="flex items-center gap-7 text-[#9ca3af] pr-6 md:pr-0">
            <li><Link href={'/plan'}>Plan</Link></li>
        <li><Link href={'/plan'}>Saved</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navber;
