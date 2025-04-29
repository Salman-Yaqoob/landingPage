import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative isolate h-screen w-full">
      <img
        src="/john.jpg"
        alt=" "
        className="absolute -z-10 h-full w-full object-cover object-top"
      />
      <Navbar />
    </div>
  );
}

export default App;
