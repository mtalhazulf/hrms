import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert("Sign in failed. Please check your credentials and try again.");
      } else {
        alert("Sign in successful!");
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

  const forward = () => {
    window.location.href = "/admin";
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#181D23] w-full min-h-screen ">
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-[#445A6B] to-[#414762] lg:w-[27%] md:w-[70%] w-[90%] h-[600px] relative">
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
          
            required
            className="w-full px-4 py-1 bg-transparent focus:outline-none text-zinc-500 focus:bg-transparent"
          ></input>
        

          <p className="text-white lg:text-lg text-sm">Password</p>
          <div className="flex justify-between w-full py-3">
            <input
              type={showPassword ? "text" : "password"}
              className="bg-transparent py-1  focus:outline-none text-zinc-500 focus:bg-transparent w-full outline-none px-4"
            
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className=" pr-4 ">
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="w-6 h-6 text-zinc-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiOutlineEye
                  className="w-6 h-6 text-zinc-500 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

          </div>

          <div className="flex justify-start w-full">
           <p className="text-white text-lg">Forgot Password</p>
          </div>
        </div>

        <button
        onClick={forward}
        className="bg-gradient-to-r from-[#334454] to-[#363C56] text-white mt-6 p-2 w-[80%] hover:font-bold ">Login</button>

        </div>
      </div>
    </div>
  );
};

export default Login;
