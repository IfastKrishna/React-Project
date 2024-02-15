import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { login } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Logo, Input, Button } from "../index.js";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm(); // Destructure setError and errors from useForm
  const [apiError, setApiError] = useState(""); // Renamed error to apiError to avoid confusion

  const create = (data) => {
    setApiError("");
    authService
      .createAccount(data)
      .then((user) => {
        if (user) {
          dispatch(login(user));
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.message === `Missing required parameter: "email"`) {
          navigate("/login");
        } else {
          setApiError(err.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <Logo />
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign Up to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {apiError && (
          <p className="text-red-500 text-center font-bold">{apiError}</p>
        )}{" "}
        {/* Display apiError instead of error */}
        <form onSubmit={handleSubmit(create)}>
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}{" "}
          {/* Display error message if name field is empty */}
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}{" "}
          {/* Display error message for invalid email */}
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}{" "}
          {/* Display error message if password field is empty */}
          <Button type="submit" className="w-full mt-4">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
