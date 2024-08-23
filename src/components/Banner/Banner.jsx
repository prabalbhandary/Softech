import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-teal-100 to-teal-200 text-center py-16 px-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-bold text-teal-800 mb-4 leading-tight">
        Waste no more time,
        </h1>
        <h2 className="text-5xl font-bold text-teal-900 mb-6 leading-tight">
        jump right in!
        </h2>
        <p className="text-lg text-gray-800 mb-4 max-w-md mx-auto">
          My Hours is Free for teams of up to 5 users.
        </p>
        <p className="text-lg text-gray-800 mb-8 max-w-md mx-auto">
          <Link to="#" className="text-teal-700 font-medium underline hover:text-teal-900 hover:no-underline transition duration-300">
            Pro paid plan
          </Link>{' '}
          includes advanced features like invoicing, admin controls, and priority support.
        </p>
        <div className="flex justify-center">
          <Link to="/register">
          <button className="bg-teal-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-800 transition duration-300">
            Get Started - It's Free
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
