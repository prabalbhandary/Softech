import React from 'react';
import { Link } from 'react-router-dom';

const images = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e355e3c4d16db_Billable%2520settings-p-500.png",
    title: "Billing & invoicing",
    description: "Choose the billing method that is fair for your client and represents your actual work."
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3584f94d16e2_HP-3-1-p-500.png",
    title: "Time reports & Project analytics",
    description: "Always know how much time has been spent on your projects and tasks in a specific period of time with easy-to-create reports."
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e350a8e4d16f7_HIW-4-p-500.png",
    title: "Team payroll",
    description: "Know who was present at work and track absences and the reasons behind them. Make your payroll faster and more accurate by exporting all the tracked data. Time, attendance and absence tracking in one streamlined solution."
  },
  {
    id: 4,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e357bee4d1704_Chickens(1).png",
    title: "Expense Tracking",
    description: "Get expenses off your mind and into your invoice, without losing a cent or a receipt."
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e357bee4d1704_Chickens(1).png",
    title: "Project Costing",
    description: "Grow your business faster by prioritizing the projects that are worth your time, effort, and resources."
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3547e04d175c_Frame%252027(1)(1)-p-500.png",
    title: "Timesheet time tracking",
    description: "Track time just as you used to, but simpler. Because you are tired of using unmanageable stacks of paper, excel templates, or complex apps week in week out."
  }
];

const UseCards = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
      {images.map(item => (
        <div key={item.id} className="w-80 max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <Link to="#">
          <img src={item.src} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
            <p className="text-base text-gray-600">{item.description}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UseCards;
