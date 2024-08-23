import React from "react";
import Testimonials from "../../components/Testimonials/Testimonials";
import UseCards from "../../components/UseCards/UseCards";
import { Link } from "react-router-dom";

const UseCases = () => {
  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">
        Use Cases
      </h1>
      <p className="text-center text-lg text-gray-600 mb-6">
        From tracking time to reporting and billing your clients, My Hours is
        there for you.
      </p>
      <div className="flex justify-center mb-8">
        <Link to="/register">
          <button className="bg-teal-400 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-500 transition duration-300 ease-in-out">
            Get Started - It's Free
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <UseCards />
      </div>
      <div className="mt-8">
        <Testimonials />
      </div>
    </section>
  );
};

export default UseCases;
