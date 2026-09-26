import Image from "next/image";
import React from "react";
import logo from "@/app/photos/logo.png";

const FoterSction = () => {
  return (
    <div className="border border-t-white/10">
    <div className="my-10 container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4 pl-6 md:pr-0">
        <Image src={logo} alt="logo" />
        <h1 className="text-[20px] text-white font-bold hidden md:block">
          FITLOG
        </h1>
      </div>
      <div>
        <p className="text-[#9ca3af]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
    </div>
  );
};

export default FoterSction;
