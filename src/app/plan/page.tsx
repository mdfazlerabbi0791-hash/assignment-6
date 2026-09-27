
"use client";

import React, { useContext, useState } from "react";
import { gimContext } from "../context/Gimcontext";
import PlanList from "../gimLists/PlanList";
import SavedList from "../gimLists/SavedList";
import Link from "next/link";
import { IWorkout } from "../type/GimTypes";

const MyPlanPage = () => {
  const { plan, saved } = useContext(gimContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sort, setSort] = useState<
    "Duration" | "Calories" | "Rating"
  >("Duration");

  const sortGims = (gimCards: IWorkout[]) => {
    const sortedGims = [...gimCards];

    if (sort === "Duration") {
      sortedGims.sort((a, b) => b.duration - a.duration);
    } else if (sort === "Calories") {
      sortedGims.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sort === "Rating") {
      sortedGims.sort((a, b) => b.rating - a.rating);
    }

    return sortedGims;
  };

  const sortPlan = sortGims(plan);
  const sortSaved = sortGims(saved);

  const currentList = activeTab === "plan" ? plan : saved;
  const totalMinutes = currentList.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto my-6 px-4 sm:my-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-xl font-bold text-white sm:text-2xl">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-[#9ca3af] sm:text-[18px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-800 bg-[#15171d] px-4 py-6 sm:mt-8 sm:px-7 sm:py-8">

        <div className="grid grid-cols-3">
          <div className="border-r border-gray-800">

            <p className="text-xs text-gray-400 sm:text-sm">
              Exercises
            </p>

            <p className="mt-2 text-2xl font-bold text-lime-400 sm:text-3xl">
              {currentList.length}
            </p>

          </div>
          <div className="border-r border-gray-800 px-3 sm:px-9">

            <p className="text-xs text-gray-400 sm:text-sm">
              Minutes
            </p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {totalMinutes}
            </p>
          </div>

          <div className="pl-3 sm:pl-9">
            <p className="text-xs text-gray-400 sm:text-sm">
              Calories
            </p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {totalCalories}
            </p>

          </div>

        </div>

      </div>
      <div className="mt-5 flex justify-end sm:mt-6">

        <select
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value as
                | "Duration"
                | "Calories"
                | "Rating"
            )
          }
          className="select w-full max-w-xs appearance-none bg-[#0c0d10] text-sm text-white sm:w-auto sm:text-base"
        >
          <option value="Duration">
            Duration
          </option>

          <option value="Calories">
            Calories
          </option>

          <option value="Rating">
            Rating
          </option>
        </select>

      </div>

      <div className="tabs tabs-box mt-6 rounded-2xl border border-gray-800 bg-[#15181e] px-2 pt-5 sm:mt-8 sm:px-3 sm:pt-8">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab h-11 rounded-xl px-4 text-sm font-medium text-gray-400 checked:bg-[#202631] checked:text-white sm:h-12 sm:px-8 sm:text-base"
          aria-label="Today's Plan"
          defaultChecked
          onChange={() => setActiveTab("plan")}
        />


        {/* TODAY'S PLAN CONTENT */}

        <div className="tab-content p-4 sm:p-10">

          {sortPlan.length > 0 ? (

            sortPlan.map((gimCards) => {

              return (
                <PlanList
                  key={gimCards.id}
                  gimCards={gimCards}
                />
              );

            })

          ) : (

            <div className="flex w-full items-center justify-center px-2 py-6 sm:px-4 sm:py-8">

              <div className="w-full max-w-lg rounded-3xl border border-gray-800 bg-[#15171d] px-4 py-7 text-center shadow-xl sm:px-8 sm:py-10">

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/10 text-xl sm:h-14 sm:w-14 sm:text-2xl">
                  🏋️
                </div>

                <h1 className="text-lg font-bold text-white sm:text-2xl">
                  NOTHING HERE YET
                </h1>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#9ca3af] sm:text-sm">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href="/">
                  <button className="mt-5 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300 active:scale-95 sm:px-6 sm:text-sm">
                    Go to workouts
                  </button>
                </Link>

              </div>

            </div>

          )}

        </div>


        {/* SAVED */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab h-11 rounded-xl px-4 text-sm font-bold text-gray-400 checked:bg-[#202631] checked:text-white sm:h-12 sm:px-8 sm:text-base"
          aria-label="Saved"
          onChange={() => setActiveTab("saved")}
        />


        {/* SAVED CONTENT */}

        <div className="tab-content p-4 sm:p-10">

          {sortSaved.length > 0 ? (

            sortSaved.map((gimCards) => {

              return (
                <SavedList
                  key={gimCards.id}
                  gimCards={gimCards}
                />
              );

            })

          ) : (

            <div className="flex w-full items-center justify-center px-2 py-6 sm:px-4 sm:py-8">

              <div className="w-full max-w-lg rounded-3xl border border-gray-800 bg-[#15171d] px-4 py-7 text-center shadow-xl sm:px-8 sm:py-10">

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/10 text-xl sm:h-14 sm:w-14 sm:text-2xl">
                  🏋️
                </div>

                <h1 className="text-lg font-bold text-white sm:text-2xl">
                  NOTHING HERE YET
                </h1>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#9ca3af] sm:text-sm">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href="/">
                  <button className="mt-5 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold text-black transition hover:bg-lime-300 active:scale-95 sm:px-6 sm:text-sm">
                    Go to workouts
                  </button>
                </Link>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default MyPlanPage;
