import React from "react";
import { IWorkout } from "../type/GimTypes";
import FgimCard from "../allCard/FgimCard";
import Link from "next/link";

const getGimCard = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const GimCenterPage = async () => {
  const gimAllCard = await getGimCard();

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-white font-bold text-[22px]">THE LIBRARY</h1>
      <p className="text-[#9ca3af]">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gimAllCard.map((card: IWorkout) => {
          return (
            <Link key={card.id} href={`/gimCenter/${card.id}`}>
              <FgimCard card={card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GimCenterPage;
