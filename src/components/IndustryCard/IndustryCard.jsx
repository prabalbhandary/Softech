import React from "react";
import { Link } from "react-router-dom";

const cards1 = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35e0d04d18e6_2022%25205%252011_Time%2520Tracking%2520%2526%2520Stages%2520of%2520Business%2520Development_MH%2520content%2520marketing%2520grafike-01-p-500.png",
    title: "Optimize Non-Profit Funds and Resources",
    description: "In the world of non-profits, resources are often stretched, and funds are limited. Finding ways to optimize these things is vital.",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e353c284d1920_Time%2520tracking%2520Best%2520practices-01-p-800.png",
    title: "How to encourage Donor Confidence",
    description: "Donor confidence is the key to securing grants. But, it takes more than a bold mission statement to convince individuals and organizations to donate.",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35afc14d1908_2022%25205%252026_On%2520the%2520Effects%2520of%2520Employee%2520Monitoring_MH%2520Content%2520marketing%2520grafike-01-p-500.png",
    title: "Compliance With Non-Profit Rules and Regulations",
    description: "To receive grant funding, non-profits must operate with heavy oversight and ensure they are not in breach of grant terms and conditions.",
  },
];

const cards2 = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/66a00339ccfaa2c3c03bb640_2023%2010%2025_5%20Essential%20Tips%20to%20Becoming%20More%20Time%20Efficient_Header-p-500.jpg",
    title: "Government Contractor Compliance and Regulations",
    description: "Government contractors face stringent regulations and compliance requirements. Time tracking is a critical tool that helps contractors meet these obligations.",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/66a16c8e3dd7c5d7a5fa3fbf_2023%2010%2025_Mastering%20Workflow%20Optimization_Strategies%20and%20Techniques_Header-p-500.jpg",
    title: "Government Contractor Billing and Budgeting",
    description: "Securing government contracts offers great opportunities and strict regulations. To capitalize on these, you need a precise tool for contract billing and budgeting.",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/669a6c1d8ab22142c62ee8e1_2023%2010%2025_Free%20Pay%20Stub%20Template_Header-p-500.jpg",
    title: "Audit Readiness for Government Contractors",
    description: "If you decide to take on government contracts, you also agree to comply with the contractual obligations, regulations, and laws.",
  },
];

const cards3 = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/669fc3a9d181e7a0b7e190bd_2023-5-15_Labour-Laws-in-the-US-and-Time-Tracking_Header-p-500.png",
    title: "Time Tracking for R&D Optimization",
    description: "R&D departments frequently operate under tight constraints. Implementing time-tracking allows these departments to optimize processes and increase efficiency.",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e351be34d18f3_2022%25205%252011_Billing%2520Best%2520Practices_MH%2520content%2520marketing%2520grafike-01-p-500.png",
    title: "Effective Cost Optimization for R&D Teams",
    description: "Effective Cost Optimization is crucial for R&D teams to remain competitive and financially wise. The right tools and streamlined process make this achievable.",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e359eae4d195a_Timesheet%2520Approval-01-p-500.png",
    title: "Maximizing R&D Tax Credits",
    description: "One way to maximize potential cost savings for a business is to take advantage of R&D tax credits.",
  },
];

const cards4 = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/669fc3a9d181e7a0b7e190bd_2023-5-15_Labour-Laws-in-the-US-and-Time-Tracking_Header-p-500.png",
    title: "Winning the Case for Lawyer Time Tracking",
    description: "Accurate time tracking is vital for lawyers to ensure they are correctly billing their clients and account for how each of their precious minutes is spent.",
  },
];

const IndustryCard = () => {
  const renderCard = (cards) => {
    return cards.map((item) => (
      <Link to="#" key={item.id} className="block border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
        <img src={item.src} alt={item.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="space-y-8 p-4">
      <div>
        <h1 className="text-teal-400 text-2xl font-bold mb-4">For Non-Profit Organisations</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderCard(cards1)}
        </div>
      </div>
      <div>
        <h1 className="text-teal-400 text-2xl font-bold mb-4">For Government Contractors</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderCard(cards2)}
        </div>
      </div>
      <div>
        <h1 className="text-teal-400 text-2xl font-bold mb-4">For R&D Departments</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderCard(cards3)}
        </div>
      </div>
      <div>
        <h1 className="text-teal-400 text-2xl font-bold mb-4">For Lawyers</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renderCard(cards4)}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
