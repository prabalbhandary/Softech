import React from "react";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Link } from "react-router-dom";
import IndustryCard from "../../components/IndustryCard/IndustryCard";

const Industries = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Industries</h1>
        <p className="text-lg text-gray-700 mb-8">
          Learn how My Hours works best in your industry with helpful articles and
          real examples.
        </p>
        <div className="flex justify-center mb-12">
          <Link to="/register">
            <button className="bg-teal-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-500 transition duration-300 ease-in-out">
              Get Started - It's Free
            </button>
          </Link>
        </div>
        <IndustryCard />
        <Testimonials />
      </div>
    </section>
  );
};

export default Industries;
