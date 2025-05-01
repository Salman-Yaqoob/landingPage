import { Link } from "react-router-dom";

function Welcome() {
  return (
    <section className="">
      {/* semi-transparent overlay */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center dark:text-white">
        <h1 className="mb-2 pt-16 font-serif text-4xl sm:text-5xl md:text-6xl">
          Grow Your Business <br /> with Us
        </h1>
        <p className="mb-10 max-w-xl text-lg sm:text-xl">
          We provide the tools and resources to help your business succeed.
        </p>
        <Link
          to="/about"
          className="w-10/12 cursor-pointer rounded-xl bg-blue-600 px-6 py-2 text-lg text-white transition-all duration-300 hover:bg-blue-700 active:animate-pulse"
        >
          About
        </Link>
      </div>
    </section>
  );
}

export default Welcome;
