"use client";

import React, { useContext } from "react";
import { IWorkout } from "../type/GimTypes";
import { gimContext } from "../context/Gimcontext";
import { CalendarPlus } from "lucide-react";
import { toast } from "react-toastify";

const PlanCard = ({ gimCards }: { gimCards: IWorkout }) => {
  const { plan, setPlan } = useContext(gimContext);

  const handleClick = () => {
    const alreadyAdded = plan.some((item) => item.id === gimCards.id);

    if (alreadyAdded) {
      toast.warning("Already added to today's plan");
      return;
    }
    setPlan([...plan, gimCards]);
    toast.success("Added to today's plan");
  };

  return (
    <div>
      
      <button className="flex items-center gap-4 rounded-xl  bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300 cursor-pointer" onClick={() => handleClick()}>
        <CalendarPlus className="h-8 w-8" />
        <span>Add to todays plan</span>
      </button>
    </div>
  );
};

export default PlanCard;
