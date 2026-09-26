
import PlanCard from "@/app/allCard/Plan";
import SavedCard from "@/app/allCard/Saved";
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
        
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={gimCards.image}
            alt={gimCards.name}
            width={800}
            height={800}
            className="h-full min-h-125 w-full object-cover md:min-h-175"
          />
        </div>

        
        <div className="flex flex-col">
          
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            {gimCards.name}
          </h1>

          
          <p className="mt-4 text-base leading-7 text-gray-400">
            {gimCards.description}
          </p>

          
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

          
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-700 bg-[#15181e]">
            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.equipment}
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.difficulty}
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </span>

              <span className="text-sm text-gray-200">{gimCards.sets}</span>
            </div>

            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </span>

              <span className="text-sm text-gray-200">{gimCards.reps}</span>
            </div>

            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.duration} min
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </span>

              <span className="text-sm text-gray-200">
                {gimCards.caloriesBurned} kcal
              </span>
            </div>

            
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </span>

              <span className="text-sm text-gray-200">
                ⭐ {gimCards.rating}
              </span>
            </div>
          </div>

          
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

          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PlanCard gimCards={gimCards}/>

            <SavedCard gimCards={gimCards}/>
          </div>

          
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
