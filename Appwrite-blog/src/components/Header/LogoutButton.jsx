import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";

function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/");
    });
  };
  return (
    <button
      type="button"
      onClick={logoutHandler}
      className="rounded-full bg-gradient-to-r from-orange-700 to-indigo-700 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
