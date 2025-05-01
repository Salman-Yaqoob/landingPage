import { MoonIcon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

function DarkModeSwitch() {
  // 1. Read from localStorage, default to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  // 2. Whenever `theme` changes, update <html> class and localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Flip between light ↔ dark
  function toggleMode() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="flex items-center justify-center">
      {/* <label className="relative inline-flex cursor-pointer items-center gap-3">
       
        <input
          type="checkbox"
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={toggleMode}
        />
        <div className="peer h-7 w-12 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-slate-950" />
        <span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5" />
      </label> */}
      <button
        className="cursor-pointer transition-all duration-300 text-shadow-2xs text-shadow-black/80 hover:text-gray-950 active:rotate-180 dark:text-white"
        onClick={toggleMode}
      >
        {theme === "light" ? <MoonIcon /> : <SunMedium />}
      </button>
    </div>
  );
}

export default DarkModeSwitch;
