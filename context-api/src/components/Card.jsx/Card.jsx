import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Card() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="bg-slate-600 max-w-xs rounded-lg text-white p-10 mx-auto mt-10">
      <p>Name :: {user.name}</p>
      <p>Email :: {user.email} </p>
      <p>Password :: {user.password}</p>
      <button
        type="button"
        onClick={() => setUser({ name: "", email: "", password: "" })}
        className="bg-orange-700 py-1 px-8 mt-2 font-bold rounded-full focus:ring-1 focus:ring-white"
      >
        Log Out
      </button>
    </div>
  );
}

export default Card;
