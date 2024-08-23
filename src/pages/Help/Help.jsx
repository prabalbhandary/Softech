import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";

const Help = () => {
  const videoUrl = "https://www.youtube.com/embed/FkQWpQd9Zdo";

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <h2 className="text-2xl text-teal-400 font-semibold mb-4">
          Read our help guides or send us a message.
        </h2>
        <p className="text-lg mb-4">
          Contact us to schedule a pre-sales call, get customer support, or with
          any other question you might have.
        </p>
        <p className="text-lg mb-4">
          We're available via email <strong>(support@myhours.com)</strong>, live
          chat, or the form below.
        </p>
        <p className="text-lg mb-8">
          Our typical <strong>response time is less than 3 hours</strong> - even
          on nights & weekends.
        </p>
        <Link to="/register">
          <button className="bg-teal-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-500 transition duration-300 ease-in-out">
            Go to Help Center
          </button>
        </Link>
      </div>
      <div className="mt-12 max-w-3xl mx-auto relative">
        <div
          className="relative w-full max-w-3xl mx-auto mb-12"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src={videoUrl}
            title="YouTube video player"
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; muted;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-12">
        <Contact />
      </div>
    </section>
  );
};

export default Help;
