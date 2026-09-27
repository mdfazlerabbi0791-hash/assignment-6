"use client";

import Image from "next/image";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { IWorkout } from "../type/GimTypes";
import { useContext, useState } from "react";
import { gimContext } from "../context/Gimcontext";
import { toast } from "react-toastify";
import Link from "next/link";

const PlanList = ({ gimCards }: { gimCards: IWorkout }) => {
  const { plan, setPlan } = useContext(gimContext);
  const [done, setDone] = useState(false);

  const handleDone = () => {
     setDone(!done);

  if (!done) {
    toast.success("Workout completed!");
  } else {
    toast.success("Workout marked as not done!");
  }
  };

  const handleRemove = () => {
    const updatedPlan = plan.filter((item) => item.id !== gimCards.id);

    setPlan(updatedPlan);
    toast.success("Removed from plan list");
  };

  return (
    <div className="my-6 flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#15171d] p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
      
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        
        <div className="h-52 w-full shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-48">
          <Image
            src={gimCards.image}
            alt={gimCards.name}
            width={400}
            height={250}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="min-w-0">
          <h2
            className={`text-xl font-bold sm:text-2xl ${
              done ? "text-gray-500 line-through" : "text-white"
            }`}
          >
            {gimCards.name}
          </h2>

          <p className="mt-1 text-gray-400">{gimCards.equipment}</p>

          
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

      
      <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
        <Link href={`/gimCenter/${gimCards.id}`}>
        <button className="w-full rounded-full border border-gray-700 px-7 py-3 text-white transition hover:bg-gray-800 sm:w-auto">
          View Details
        </button>
        </Link>

        <button
          onClick={handleDone}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-3 font-bold text-black transition hover:bg-lime-300 sm:w-auto"
        >
          <Check size={18} />
          {done ? "Done" : "Mark as Done"}
        </button>

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

export default PlanList;
