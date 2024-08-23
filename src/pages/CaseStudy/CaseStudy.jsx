import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";

const CaseStudy = () => {
  const img =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/66a2245e22fe65b3a74afe8d_logo-pricing-one-p-500.png";
  return (
    <section className="bg-gray-50 p-8 md:p-12 lg:p-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Discover how My Hours makes time tracking better. Real stories from
          real people in a bite-size format.
        </p>
        <Link to="/register">
          <button className="bg-teal-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-500 transition duration-300 ease-in-out">
            Get Started - It's Free
          </button>
        </Link>
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
          <img
            src={img}
            alt="PricingOne Logo"
            className="mx-auto mb-4 w-32 h-auto"
          />
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            <strong>"Easy to implement, easy to use, intuitive."</strong>
          </h2>
          <p className="text-gray-600 text-base">
            PricingOne, a Revenue Growth Management consulting firm,{" "}
            <strong>transitioned from Excel to My Hours,</strong> enhancing time
            tracking efficiency and user adoption within a year.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default CaseStudy;
