import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div className="relative isolate h-screen w-full gap-2 text-black dark:text-white">
      <img
        src="/john.jpg"
        alt=" "
        className="absolute -z-20 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 -z-10 bg-slate-300/30 dark:bg-slate-900/80"></div>

      <Navbar />
      <div className="px-10 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
