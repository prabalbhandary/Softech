import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  const img =
    "https://allhoursproductb0b1.blob.core.windows.net/static-files/f45ff764-794c-4652-972e-1287f90c7b81/logo-svg";
  const img2 =
    "https://pngimg.com/uploads/windows_logos/windows_logos_PNG31.png";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <Link to="/">
          <img src={img} alt="Logo" className="w-24 h-auto" />
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-MAIL
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          PASSWORD
        </label>
        <div className="relative mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <FaEye className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        <button onClick={handleClick} className="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-500">
          Login
        </button>
        <hr className="my-6" />
        <button className="w-full bg-gray-50 border border-gray-300 rounded-md py-2 flex items-center justify-center hover:bg-gray-100">
          <img src={img2} alt="Microsoft Logo" className="w-6 h-6 mr-2" />
          <p className="text-teal-400">Sign in with Microsoft</p>
        </button>
      </div>
      <div className="flex gap-12 mt-6 space-y-2">
        <Link to="#" className="text-teal-400 hover:underline">
          Forgot password?
        </Link>
        <Link to="/register" className="text-teal-400 hover:underline">
          Sign up for an account
        </Link>
      </div>
    </section>
  );
};

export default Login;
