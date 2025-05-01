import { CiMenuBurger } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import DarkmoodSwitch from "./DarkmoodSwitch";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [userBox, setUserBox] = useState(false);

  function handleUserBox() {
    setUserBox(!userBox);
  }

  return (
    <div className="mx-auto flex items-center justify-between py-3 sm:px-3 md:max-w-5xl md:px-2 md:py-4 lg:max-w-6xl xl:max-w-7xl dark:text-gray-100 **:dark:text-gray-100">
      <Link to="/">
        <img
          src="/logo.png"
          alt=""
          className="aspect-square w-16 transition-all duration-300 active:animate-spin"
        />
      </Link>
      <ul className="hidden items-center gap-4 md:flex">
        <li>
          <Link
            to="/about"
            className="cursor-pointer text-base text-gray-800 transition-colors duration-200 hover:text-sky-800 hover:underline"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="cursor-pointer text-base text-gray-800 transition-colors duration-200 hover:text-sky-800 hover:underline"
          >
            contact
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="cursor-pointer text-base text-gray-800 transition-colors duration-200 hover:text-sky-800 hover:underline"
          >
            products
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <DarkmoodSwitch />
        <div className="relative">
          <FaRegUserCircle
            onClick={handleUserBox}
            className="hidden cursor-pointer text-2xl md:block"
          ></FaRegUserCircle>
          {userBox && (
            <div className="absolute top-10 -left-10 hidden flex-col gap-1 rounded-lg bg-slate-300 px-5 py-2 text-slate-950 transition-all duration-200 *:text-base *:hover:text-sky-700 *:hover:underline md:flex dark:bg-slate-900 dark:text-white">
              <p>Signin</p>

              <p>Signup</p>
            </div>
          )}
        </div>

        <CiMenuBurger className="block md:hidden" />
      </div>
    </div>
  );
}

export default Navbar;
