import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          My Hours has{" "}
          <span className="text-teal-400 font-bold">changed the way</span> our
          customers work
        </h1>
        <p className="text-lg mb-2">
          We've <span className="text-teal-400">250,000+ people</span> track
          their work since 2002.
        </p>
        <p className="text-lg">
          Our software{" "}
          <span className="text-teal-400">
            does not include employee monitoring
          </span>{" "}
          and never will.
        </p>
      </div>

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-4">
              <span className="text-teal-400 text-4xl">"</span>
              {testimonial.quote}
              <span className="text-teal-400 text-4xl">"</span>
            </p>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-600">{testimonial.position}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-teal-400 underline hover:no-underline flex items-center justify-center cursor-pointer">
          Read more reviews
          <FaArrowRight className="ml-2" />
        </p>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote: "Simple to use, perfect for the price, genuinely the best hour tracker I've used yet.",
    author: "Leah M.",
    position: "Engineer",
  },
  {
    quote: "Easy tracking of billable hours across various projects. Makes time tracking for different tasks simple.",
    author: "Paul H.",
    position: "Business Owner",
  },
  {
    quote: "My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the week WAY FASTER.",
    author: "Michael B.",
    position: "Manager",
  },
  {
    quote: "I've enjoyed using My Hours, and I use it every day. Great tool for tracking my time!",
    author: "Cody H.",
    position: "Engineer",
  },
  {
    quote: "Ease of use, simplicity, streamlined, it really helped me get my hour tracking in order. No negatives for the purpose and scope for which I am using the software.",
    author: "Arieh F.",
    position: "CFO",
  },
  {
    quote: "The software is very easy to set up, and you can start using it right away to track your time, assigning different hourly rates for different types of work.",
    author: "Naomi S.",
    position: "Marketing Manager",
  },
  {
    quote: "This is the easiest-to-use software that I've found in terms of tracking hours and minutes for multiple projects.",
    author: "Michelle W.",
    position: "Virtual Assistant",
  },
  {
    quote: "Easy to use for my team members who are remote but hourly. My Hours provides a simple and easy way to record, track and manage activity.",
    author: "Thomas S.",
    position: "Head of Customer Success",
  },
  {
    quote: "I really love this time tracking software. It keeps track of all my hours and is really easy to use. I would definitely recommend this software. There is nothing that I don't like about this software.",
    author: "Christina C.",
    position: "Paralegal",
  },
  {
    quote: "I love that I can track my hours and use it to generate meaningful reports to measure time spent. It's intuitive, easy-to-use, and highly customizable.",
    author: "Kristen B.",
    position: "Business Owner",
  },
];

export default Testimonials;