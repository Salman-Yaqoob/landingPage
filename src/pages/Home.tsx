import Welcome from "../components/Welcome";
import LoginForm from "../components/LoginForm";

function Home() {
  return (
    <div className="mx-auto grid max-h-full grid-cols-2 justify-center gap-2 pt-10 lg:w-6xl">
      <Welcome />
      <LoginForm />
    </div>
  );
}

export default Home;
