"use client";

import React, { useContext } from "react";
import { gimContext } from "../context/Gimcontext";
import PlanList from "../gimLists/PlanList";
import SavedList from "../gimLists/SavedList";
import Link from "next/link";

const MyPlanPage = () => {
  const { plan, saved } = useContext(gimContext);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-white text-2xl font-bold">MY PLAN</h1>
        <p className="text-[#9ca3af] text-[18px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="text-right">
        <select
          defaultValue="Pick a color"
          className="select appearance-none bg-[#0c0d10] text-white"
        >
          <option disabled={true}>Sort by</option>
          <option value="Duration">Duration</option>
          <option value="Calories">Calories</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      <div className="tabs tabs-box rounded-2xl border border-gray-800 bg-[#15181e] pt-8 pl-3">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab h-12 rounded-xl px-8 text-base font-medium text-gray-400
    checked:bg-[#202631] checked:text-white"
          aria-label="Today's Plan"
        />

        <div className="tab-content p-10">
          {plan.length > 0 ? (
            plan.map((gimCards) => {
              return <PlanList key={gimCards.id} gimCards={gimCards} />;
            })
          ) : (
            <div className="flex w-full items-center justify-center px-4 py-8">
              <div className="w-full max-w-lg rounded-3xl border border-gray-800 bg-[#15171d] px-5 py-8 text-center shadow-xl sm:px-8 sm:py-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime-400/10 text-2xl">
                  🏋️
                </div>

                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  NOTHING HERE YET
                </h1>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-5 text-[#9ca3af]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href="/">
                  <button className="mt-5 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300 active:scale-95">
                    Go to workouts
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab h-12 rounded-xl px-8 text-base font-bold text-gray-400
    checked:bg-[#202631] checked:text-white"
          aria-label="Saved"
          defaultChecked
        />

        <div className="tab-content p-10">
          {saved.length > 0 ? (
            saved.map((gimCards) => {
              return <SavedList key={gimCards.id} gimCards={gimCards} />;
            })
          ) : (
            <div className="flex w-full items-center justify-center px-4 py-8">
              <div className="w-full max-w-lg rounded-3xl border border-gray-800 bg-[#15171d] px-5 py-8 text-center shadow-xl sm:px-8 sm:py-10">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime-400/10 text-2xl">
                  🏋️
                </div>

                <h1 className="text-xl font-bold text-white sm:text-2xl">
                  NOTHING HERE YET
                </h1>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-5 text-[#9ca3af]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href="/">
                  <button className="mt-5 rounded-full bg-lime-400 px-6 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300 active:scale-95">
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
