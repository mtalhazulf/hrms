import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
    const [contact, setContact] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    try {
      setIsLoading(true);
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert('Sign up failed. Please check your credentials and try again.');
      } else {
        alert('Sign up successful!');


      }
    } catch (error) {
      console.log('Error:', error.message);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

    }, 2000);


  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#13111A] w-full min-h-screen ">
      <div className="flex flex-col items-center justify-center gap-4 bg-indigo-950 rounded-[28px] lg:w-[27%] md:w-[70%] w-[90%] h-[670px] relative">
        <div className="flex flex-col absolute top-2 right-2 p-4">
          <p className="text-white text-[13px] font-normal ">
            Have an Account ?
          </p>
          <p
            onClick={() => (window.location.href = "/login")}
            className="text-red-400 text-[13px] font-normal cursor-pointer"
          >
            Sign in
          </p>
        </div>
        <p className="text-white text-5xl font-bold absolute left-2 top-10 p-8">
          Sign Up
        </p>

        <div className="flex flex-col w-full items-center justify-center mt-20">
          <div className="w-[298px] h-[55px] flex items-center justify-center bg-gray-800 rounded-[9px] gap-6 mt-6">
            <FcGoogle className=" text-2xl" />
            <p className="text-white">Sign up with Google</p>
          </div>

          <div className="flex flex-col items-start p-4 w-[90%] gap-4">
            <p className="text-white lg:text-lg text-sm">
              Enter your email address
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or Email Address"
              required
              className="w-full py-3 px-4 bg-indigo-900 rounded-[9px] focus:outline-none text-zinc-500"
            ></input>

            <div className="flex items-center justify-between gap-2 w-full">

                <div className="flex flex-col items-start">
              <p className="text-white lg:text-lg text-sm">
                Username
              </p>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                required
                className="w-full py-3 px-4 bg-indigo-900 rounded-[9px] focus:outline-none text-zinc-500"
              ></input>
              </div>

              <div className="flex flex-col items-start">
              <p className="text-white lg:text-lg text-sm">
                Contact Number
              </p>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact"
                required
                className="w-full py-3 px-4 bg-indigo-900 rounded-[9px] focus:outline-none text-zinc-500"
              ></input>
              </div>
            </div>

            <p className="text-white lg:text-lg text-sm">Enter your Password</p>
            <div className="flex justify-between w-full py-3 bg-indigo-900 rounded-[9px]">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-transparent focus:outline-none text-zinc-500 focus:bg-transparent w-full outline-none px-4"
                placeholder="Password"
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
          </div>
          <button
            onClick={handleSignUp}
            className="bg-red-400 rounded-[9px] text-white mt-2 p-4 w-[28%] hover:font-bold hover:bg-red-800"
          >
            {" "}
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
