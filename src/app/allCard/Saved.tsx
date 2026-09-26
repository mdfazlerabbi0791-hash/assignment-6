"use client";
import React, { useContext } from "react";
import { IWorkout } from "../type/GimTypes";
import { gimContext } from "../context/Gimcontext";
import { Bookmark } from "lucide-react";
import { toast } from "react-toastify";

const SavedCard = ({ gimCards }: { gimCards: IWorkout }) => {
  const { saved, setSaved } = useContext(gimContext);

  const handleClick = () => {
    const alreadySaved = saved.some((item) => item.id === gimCards.id);

    if(alreadySaved){
        toast.warning("Already saved!")
        return;
    }
    setSaved([...saved, gimCards]);
    toast.success (`Saved for later`)
  };

  return (
    <div>
     
      <button className="flex items-center gap-4 rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:bg-[#181b21] cursor-pointer" onClick={() => handleClick()}>
        <Bookmark className="h-8 w-8" />
        <span>Save for later</span>
      </button>
    </div>
  );
};

export default SavedCard;
