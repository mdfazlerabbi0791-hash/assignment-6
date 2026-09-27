

"use client";

import Image from "next/image";
import {Clock3, Flame, Star, X } from "lucide-react";
import { IWorkout } from "../type/GimTypes";
import { useContext } from "react";
import { gimContext } from "../context/Gimcontext";
import { toast } from "react-toastify";
import Link from "next/link";


const SavedList = ({ gimCards }: { gimCards: IWorkout }) => {
    const {saved, setSaved} = useContext(gimContext)


  const handleRemove = () => {
    const updatedPlan = saved.filter((item) => item.id !== gimCards.id);

    setSaved(updatedPlan);
    toast.success("Removed from saved list");
    
  };

  return (
    <div className="my-6 flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#15171d] p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

  {/* LEFT SIDE */}
  <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">

    {/* Image */}
    <div className="h-52 w-full shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-48">
      <Image
        src={gimCards.image}
        alt={gimCards.name}
        width={400}
        height={250}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="min-w-0">
      <h2 className="text-xl font-bold text-white sm:text-2xl">
        {gimCards.name}
      </h2>

      <p className="mt-1 text-gray-400">
        {gimCards.equipment}
      </p>

      {/* Stats */}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-300 sm:gap-5">

        <div className="flex items-center gap-2">
          <Clock3 size={18} className="text-lime-400" />
          <span>{gimCards.duration} min</span>
        </div>

        <div className="flex items-center gap-2">
          <Flame size={18} className="text-lime-400" />
          <span>{gimCards.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-2">
          <Star size={18} className="text-lime-400" />
          <span>{gimCards.rating}</span>
        </div>

      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
    <Link href={`/gimCenter/${gimCards.id}`}>
    <button className="w-full rounded-full border border-gray-700 px-7 py-3 text-white transition hover:bg-gray-800 sm:w-auto">
      View Details
    </button>
    </Link>
    <button
      onClick={handleRemove}
      className="flex items-center justify-center text-gray-500 transition hover:text-white sm:px-2"
    >
      <X size={24} />
    </button>

  </div>
</div>
  );
};

export default SavedList;