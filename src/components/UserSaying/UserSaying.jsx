import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const UserSaying = () => {
  return (
    <section className="p-8 bg-white shadow-md rounded-lg">
      <div className="bg-teal-200 p-6 flex items-center rounded-lg">
        <strong className="text-5xl text-teal-600 mr-2">"</strong>
        <h3 className="text-lg text-gray-800">
          I have tested similar time tracking apps but they all have limits. My
          Hours is without a doubt the most important tool I use in my business.
        </h3>
        <strong className="text-5xl text-teal-600">"</strong>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <p className="text-gray-600">- Kevin from St. Petersburg, FL, USA</p>
        <div className="flex items-center text-teal-400 underline hover:no-underline">
          <Link to="#">Read more reviews</Link>
          <FaChevronRight className="ml-2" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h2 className="text-gray-500 text-sm">MEMBERS</h2>
          <h1 className="text-3xl font-bold text-gray-800">
            250 <span className="text-teal-400">k</span>
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-gray-500 text-sm">LOGGED HOURS</h2>
          <h1 className="text-3xl font-bold text-gray-800">
            1.6 <span className="text-teal-400">b</span>
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-gray-500 text-sm">AVERAGE RATING</h2>
          <h1 className="text-3xl font-bold text-gray-800">
            4.7 <span className="text-teal-400">/5</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default UserSaying;
