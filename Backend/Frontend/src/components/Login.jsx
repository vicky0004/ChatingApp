import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("chatapp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error("Error : " + error.response.data.error, {
            duration: 1000,
          });
        }
      });
  };
  return (
      <div className="flex min-h-screen flex-col justify-center bg py-2 sm:py-5">
        <div className="relative py-1 sm:mx-auto sm:max-w-xl">
          <div className="absolute glass2 inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative glass1 px-2 py-4 shadow-lg sm:rounded-3xl sm:p-8">
            <div className="mx-auto max-w-md">
              <form
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="text-2xl text-center">
                  Chat<span className="text-green-500 font-semibold pr-3">App</span>Login
                </h1>
                <div className="divide-y divide-gray-200">
                  <div className="space-y-4 py-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="email"
                        {...register("email", { required: true })}
                        type="text"
                        className="focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent bg-transparent rounded focus:outline-none"
                        placeholder="Email address"
                      />
                      <label
                        for="email"
                        className="cursor-text peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-1.5 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white peer-focus:rounded"
                      >
                        Email
                      </label>
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        autocomplete="off"
                        id="password"
                        {...register("password", { required: true })}
                        type="password"
                        className="focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent bg-transparent rounded focus:outline-none"
                        placeholder="Password"
                      />
                      <label
                        for="password"
                        className="cursor-text peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-1.5 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white peer-focus:rounded"
                      >
                        Password
                      </label>
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>
                    
                    <div class="relative flex items-center justify-between">
                      <button type="submit" class="rounded-md bg-black hover:bg-white hover:text-black duration-300 px-2 py-1 text-white">
                        Submit
                      </button>
                      <p class="text-sm">
                        Don't have account?{" "}
                        <Link to="/signup" className="text-blue underline ml-1">
                          create
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <p>
                Developed with 💌 by 「 ✦{" "}
                <span>
                  <a href="https://csevicky.netlify.app/" target="_blank">
                    Vicky Kumar
                  </a>
                </span>{" "}
                ✦ 」
              </p>
              <nav>
                <div className="flex justify-center items-center gap-5 mt-3 ">
                  <a
                    href="https://www.linkedin.com/in/vicky-cse04/"
                    target="_blank"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                      className="h-[30px]"
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/vicky0004" target="_blank">
                    <img
                      src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                      className="h-[30px]"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/csevicky03"
                    target="_blank"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=OUPsEPLKIebZ&format=png&color=000000"
                      className="h-[30px]"
                      alt=""
                    />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
  );
}
