import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn } from "@/Integeration/Function";

const Login = () => {
  const [email, setEmail] = useState("tester@texagon.io");
  const [password, setPassword] = useState("Test@1234");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      setIsLoading(true);
      const bool = await signIn(email, password);
      if (bool) {
        window.location.href = "/admin";
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const forward = (e) => {
    handleSignIn(e);
    //window.location.href = "/admin";
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#181D23] w-full min-h-screen ">
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-[#445A6B] to-[#414762] lg:w-[27%] md:w-[70%] w-[90%] h-[600px] relative rounded-xl">
        <p className="text-white text-5xl font-bold">
          Login
        </p>

        <div className="flex flex-col w-full items-center justify-center mt-20">
          <div className="flex flex-col items-start p-4 w-[90%] gap-4">
            <p className="text-white lg:text-lg text-sm">
              Email address
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 py-1 bg-transparent focus:outline-none text-white   rounded-lg border-2 border-white  "
              required
            ></input>


            <p className="text-white lg:text-lg text-sm">Password</p>
            <div className="flex justify-between w-full py-3">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-transparent py-1  focus:outline-none text-white  focus:bg-transparent w-full outline-none px-4 rounded-lg border-2 border-white "

                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className=" py-1 ">
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    className="w-6 h-6 text-white cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <AiOutlineEye
                    className="w-6 h-6 text-white cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

            </div>

            <div className="flex justify-end w-full">
              <p className="text-white text-lg">Forgot Password?</p>
            </div>
          </div>

          <button
            onClick={forward}
            disabled={loading}
            className="bg-gradient-to-r from-[#334454] to-[#363C56] text-white mt-6 p-2 w-[50%] hover:font-bold rounded-xl ">
              
              {
                loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
                    <p className="text-white">Loading...</p>
                  </div>
                ) : (
                  <p className="text-white">Login</p>
                )
              }
            </button>

        </div>
      </div>
    </div>
  );
};

export default Login;
