import { IWorkout } from "@/app/type/GimTypes";
import Image from "next/image";
import Link from "next/link";

interface ICardDitlsProps {
  params: Promise<{
    id: string;
  }>;
}

const getGimCard = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const DetilsPage = async ({ params }: ICardDitlsProps) => {
  const { id } = await params;
  const detilsCard = await getGimCard();

  const gimCards = detilsCard.find(
    (card) => card.id === Number(id),
  ) as IWorkout;

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8 md:px-8 mb-15">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* LEFT : IMAGE */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={gimCards.image}
            alt={gimCards.name}
            width={800}
            height={800}
            className="h-full min-h-125 w-full object-cover md:min-h-175"
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            {gimCards.name}
          </h1>

          {/* Description */}
          <p className="mt-4 text-base leading-7 text-gray-400">
            {gimCards.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex flex-wrap gap-3">
            {gimCards.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* INFORMATION CARD */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-700 bg-[#15181e]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </span>

              <span className="text-sm text-gray-200">{gimCards.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </span>

              <span className="text-sm text-gray-200">{gimCards.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </span>

              <span className="text-sm text-gray-200">
                ⭐ {gimCards.rating}
              </span>
            </div>
          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase text-white">
              Instructions
            </h2>

            <div className="mt-5 space-y-5">
              {gimCards.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-4 text-gray-400">
                  <span className="font-semibold text-gray-500">
                    {index + 1}.
                  </span>

                  <p className="leading-6">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300">
              ➕ Add to todays plan
            </button>

            <button className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-gray-200 transition hover:bg-[#181b21]">
              ♡ Save for later
            </button>
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="mt-6 text-sm text-gray-500 transition hover:text-lime-400"
          >
            ← Back to workouts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetilsPage;
