
const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1117] px-4">
      <div className="flex flex-col items-center text-center">
        
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400"></div>

        
        <h2 className="mt-6 text-xl font-bold text-white">
          Loading Workouts...
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Preparing your workout experience
        </p>
      </div>
    </div>
  );
};

export default Loading;

