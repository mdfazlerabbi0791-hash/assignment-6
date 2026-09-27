
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/app/photos/logo.png";
import { gimContext } from "../context/Gimcontext";


const Navber = () => {
  const { plan, saved } = useContext(gimContext);

  return (
    <div className="border-b border-white/5">
      <div className="container mx-auto my-4 flex items-center justify-between border-b border-white/5 pb-5 px-4 md:px-6">

        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src={logo}
            alt="logo"
            width={38}
            height={38}
            className="h-9 w-9 md:h-10 md:w-10"
          />

          <h1 className="hidden text-[22px] font-bold text-white sm:block">
            FITLOG
          </h1>
        </div>

        <ul className="flex items-center gap-2 text-[#9ca3af] sm:gap-4 md:gap-10">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition hover:bg-lime-950 hover:text-lime-400 sm:px-4 md:px-7 md:py-3 md:text-base"
            >
             
              <span>Workouts</span>
            </Link>
          </li>

          <li>
            <Link
              href="/plan"
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition hover:bg-lime-950 hover:text-lime-400 sm:px-4 md:px-7 md:py-3 md:text-base"
            >
              <span>My Plan</span>
            </Link>
          </li>
        </ul>

        
        <div>
          <ul className="flex items-center gap-3 text-[#9ca3af] sm:gap-5 md:gap-7">

            <li>
              <Link
                href="/plan"
                className="flex items-center gap-1.5 transition hover:text-lime-400 sm:gap-2"
              >
              
                <span className="hidden sm:block">Plan</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black sm:h-8 sm:w-8 sm:text-sm">
                  {plan.length}
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/plan"
                className="flex items-center gap-1.5 transition hover:text-lime-400 sm:gap-2"
              >
                

                <span className="hidden sm:block">Saved</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-600 text-xs text-gray-300 sm:h-8 sm:w-8 sm:text-sm">
                  {saved.length}
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;


