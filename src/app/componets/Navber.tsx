"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/app/photos/logo.png";
import { gimContext } from "../context/Gimcontext";

const Navber = () => {
  const { plan, saved } = useContext(gimContext);
  return (
    <div className="border border-b-white/5 ">
      <div className=" container mx-auto flex justify-between items-center my-4  pb-5">
        <div className="flex items-center gap-4 pl-6 md:pr-0">
          <Image src={logo} alt="logo" />
          <h1 className="text-[22px] text-white font-bold hidden md:block">
            FITLOG
          </h1>
        </div>
        <ul className="flex items-center gap-10 text-[#9ca3af]">
          <li>
            <Link
              href={"/"}
              className="hover:rounded-full hover:bg-lime-950 hover:px-7 hover:py-3 hover:text-lg hover:font-semibold hover:text-lime-400"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href={"/plan"}
              className="hover:rounded-full hover:bg-lime-950 hover:px-7 hover:py-3 hover:text-lg hover:font-semibold hover:text-lime-400"
            >
              My Plan
            </Link>
          </li>
        </ul>
        <div>
          <ul className="flex items-center gap-7 text-[#9ca3af] pr-6 md:pr-0">
            <li>
              <Link href="/plan" className="flex items-center gap-3">
                <span>Plan</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black font-bold">
                  {plan.length}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/plan" className="flex items-center gap-3">
                <span>Saved</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-300">
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
