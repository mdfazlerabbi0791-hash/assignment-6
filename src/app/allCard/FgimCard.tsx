import React from 'react';
import { IWorkout } from '../type/GimTypes';
import Image from 'next/image';

const FgimCard = ({card}:{card: IWorkout}) => {
    return (
        
  <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#15171d]">

   
    <div className="h-60 w-full overflow-hidden sm:h-64 lg:h-72">
      <Image
        src={card.image}
        alt={card.name}
        width={400}
        height={400}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    
    <div className="p-4 sm:p-5 lg:p-6">

      
      <div className="mb-4 flex flex-wrap gap-2 sm:mb-5 lg:mb-6">
        {card.muscleGroups.map((muscle) => (
          <span
            key={muscle}
            className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black sm:px-4 sm:text-sm"
          >
            {muscle}
          </span>
        ))}
      </div>

      
      <h2 className="mb-2 text-xl font-extrabold uppercase text-white sm:text-2xl">
        {card.name}
      </h2>

      
      <p className="text-base text-gray-400 sm:text-lg">
        {card.equipment}
      </p>

      
      <div className="my-4 border-t border-gray-700 sm:my-5 lg:my-6"></div>

      
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 sm:gap-5 sm:text-base lg:gap-6">

       
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">◷</span>
          <span>{card.duration} min</span>
        </div>

        
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">●</span>
          <span>{card.caloriesBurned} kcal</span>
        </div>

        
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">☆</span>
          <span>{card.rating}</span>
        </div>

      </div>
    </div>
  </div>


    );
};

export default FgimCard;