import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <div className="mb-6">
        <Link to="/">
          <img src="https://allhoursproductb0b1.blob.core.windows.net/static-files/f45ff764-794c-4652-972e-1287f90c7b81/logo-svg" alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Free trial of My Hours</h1>
      <div className="flex flex-col items-start mb-6 space-y-2">
        <div className="flex items-center space-x-2">
          <FaRegCheckCircle className="text-teal-400" />
          <span>14 day trial of PRO plan</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegCheckCircle className="text-teal-400" />
          <span>Downgrade to free anytime</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegCheckCircle className="text-teal-400" />
          <span>No credit card</span>
        </div>
      </div>
      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            <strong>FULL NAME</strong>
          </label>
          <p className="text-gray-600 text-xs mb-2">Enter First name and Last name</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            <strong>EMAIL</strong>
          </label>
          <p className="text-gray-600 text-xs mb-2">You will use this email to login</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            <strong>PASSWORD</strong>
          </label>
          <p className="text-gray-600 text-xs mb-2">Set password</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-1">
            <strong>Company NAME</strong>
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter Your Company Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-semibold mb-1">
            <strong>COUNTRY</strong>
          </label>
          <p className="text-gray-600 text-xs mb-2">We will adapt your experience to the specifics of your region</p>
          <select
            name="country"
            id="country"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <option value="us">United States</option>
            <option value="np">Nepal</option>
            <option value="in">India</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label htmlFor="company-size" className="block text-sm font-semibold mb-1">
            <strong>COMPANY SIZE</strong>
          </label>
          <p className="text-gray-600 text-xs mb-2">So we can customize your experience</p>
          <div className="flex gap-4">
            {["1-5", "6-20", "21-100", "101-300", "300+"].map(size => (
              <button
                key={size}
                type="button"
                className={`bg-teal-200 px-4 py-2 rounded-lg text-sm`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-400 text-white py-2 rounded-lg mt-4 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
