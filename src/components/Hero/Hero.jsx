import React from "react";
import { TbStarFilled } from "react-icons/tb";

const Hero = () => {
  const img =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/667d4e7d7fcb662adcb91270_export%20ready.svg";
  const videoUrl = "https://www.youtube.com/embed/FkQWpQd9Zdo";
  const img2 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/642a9641b5393188913c5a9a_AUTOCAD%20logo%20grey%202.png";
  const img3 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35e1214d17c2_kpmg_logo%201.png";
  const img4 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e352d5d4d17c6_logo_heading.png";
  const img5 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e355f174d17c3_typefox%201.png";
  const img6 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/642a95f2be797c08750dbb82_Mayo%20Clinic%20logo%20grey%201.png";
  const img7 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/642a9583ca4db26da31bf727_parlor%20logo%20grey%201.png";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          <span className="text-teal-600">Project Time Tracking</span>
          <br />
          <span className="text-gray-800">Software for Teams</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Efficient time tracking for your team. Enhance profitability, and streamline payroll and billing processes with our solution.
        </p>
        <img
          src={img}
          alt="Time Tracking"
          loading="lazy"
          className="w-full max-w-lg mx-auto mb-8 md:hidden lg:block"
        />
        <div className="relative w-full max-w-3xl mx-auto mb-12" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={videoUrl}
            title="YouTube video player"
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; muted;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mb-12">
        {[img2, img3, img4, img5, img6, img7].map((src, index) => (
          <img key={index} src={src} alt="Company Logo" className="h-12 mx-4" />
        ))}
      </div>
      <div className="w-full max-w-4xl px-4">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center w-full sm:w-80">
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <TbStarFilled key={index} className="text-green-500 mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-2 text-center">
              "Since we started using My Hours, our timesheet reporting problems have been solved."
            </p>
            <p className="text-gray-500 text-sm text-center">
              - Chirag P. Software Development
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center w-full sm:w-80">
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => (
                <TbStarFilled key={index} className="text-green-500 mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-2 text-center">
              "Nobody loves time tracking, but with My Hours at least you won't hate it."
            </p>
            <p className="text-gray-500 text-sm text-center">
              - João F. Software Development
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center w-full sm:w-80">
            <div className="flex mb-4">
              <TbStarFilled className="text-green-500 mr-1" />
            </div>
            <p className="text-gray-700 mb-2 text-center">
              "The app doesn't have any employee monitoring features."
            </p>
            <p className="text-gray-500 text-sm text-center">- Anonymous, CEO</p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-600 font-semibold text-xl mt-8">
        <span className="text-teal-600">100,000+</span> businesses make time tracking work with My Hours.
      </p>
      <br />
      <button className="bg-teal-500 text-white px-5 py-4 rounded hover:bg-teal-600">Start Free Trial</button>
    </section>
  );
};

export default Hero;
