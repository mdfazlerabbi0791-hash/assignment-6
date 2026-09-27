
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f1117] px-4 text-center text-white">
      <h1 className="text-7xl font-extrabold text-lime-400">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

