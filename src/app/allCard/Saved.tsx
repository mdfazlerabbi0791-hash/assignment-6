"use client";
import React, { useContext } from "react";
import { IWorkout } from "../type/GimTypes";
import { gimContext } from "../context/Gimcontext";
import { Bookmark, CalendarPlus } from "lucide-react";

const SavedCard = ({ gimCards }: { gimCards: IWorkout }) => {
  const { saved, setSaved } = useContext(gimContext);

  const handleClick = () => {
    setSaved([...saved, gimCards]);
  };

  return (
    <div>
      {/* <button className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:bg-[#181b21] cursor-pointer" onClick={() => handleClick()}>
              ♡ Save for later
            </button> */}
      <button className="flex items-center gap-4 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:bg-[#181b21] cursor-pointer" onClick={() => handleClick()}>
        <Bookmark className="h-8 w-8" />
        <span>Save for later</span>
      </button>
    </div>
  );
};

export default SavedCard;
