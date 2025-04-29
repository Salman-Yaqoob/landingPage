import { CiMenuBurger } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="mx-auto flex items-center justify-between px-5 py-3 sm:px-3 md:max-w-5xl md:px-2 md:py-4 lg:max-w-6xl xl:max-w-7xl">
      <a href="#">
        <img src="/logo.png" alt="" className="aspect-square w-10" />
      </a>
      <ul className="hidden items-center gap-4 md:flex">
        <li>
          <a
            href="/about"
            className="cursor-pointer text-sm text-gray-800 transition-colors duration-200 hover:text-gray-950 hover:underline"
          >
            about
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="cursor-pointer text-sm text-gray-800 transition-colors duration-200 hover:text-gray-950 hover:underline"
          >
            contact
          </a>
        </li>
        <li>
          <a
            href="/products"
            className="cursor-pointer text-sm text-gray-800 transition-colors duration-200 hover:text-gray-950 hover:underline"
          >
            products
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <button>mood</button>
        <FaRegUserCircle className="hidden md:block" />

        <CiMenuBurger className="block md:hidden" />
      </div>
    </div>
  );
}

export default Navbar;
