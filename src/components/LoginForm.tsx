import { Mail, Lock } from "lucide-react";

// bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300

function LoginForm() {
  return (
    <div className="flex items-center justify-center pt-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 py-12 shadow-lg dark:bg-slate-900 *:dark:text-white">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login Form
        </h2>

        <form className="space-y-4">
          <div className="relative">
            <Mail
              className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 py-3 pr-4 pl-10 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 py-3 pr-4 pl-10 focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
