import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    if (name && email && password) return setUser({ name, email, password });
    alert("All Fields are required");
  };
  return (
    <div className="flex flex-col gap-5 max-w-xl bg-gradient-to-r from-indigo-600 to-red-600 shadow-xl backdrop-blur-lg border-2 border-white rounded-md p-10 mx-auto">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2 px-1 rounded-md mt-2"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-1 rounded-md mt-2"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-1 rounded-md mt-2"
        />
      </div>
      <button
        onClick={login}
        type="button"
        className="bg-slate-600 py-3 text-xl text-white font-bold rounded-md focus:ring-1 focus:ring-white hover:bg-slate-700"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
