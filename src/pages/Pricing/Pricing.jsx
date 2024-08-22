import React, { useState } from 'react';

const Pricing = () => {
  // State to keep track of the selected pricing plan
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Pick Your Plan</h1>
      <p className="text-lg font-semibold text-center mb-12">
        Track time on projects with your team.
      </p>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-3 mx-2 text-white ${isAnnual ? 'bg-blue-600' : 'bg-blue-500'} rounded-md hover:bg-blue-600 transition`}
          onClick={() => setIsAnnual(true)}
        >
          Annual
        </button>
        <button
          className={`px-6 py-3 mx-2 text-white ${!isAnnual ? 'bg-gray-800' : 'bg-gray-700'} rounded-md hover:bg-gray-800 transition`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
      </div>
      <div className="flex justify-center gap-12">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-2">Free</h2>
          <p className="text-gray-600 mb-4">For individuals or teams just getting started with time tracking.</p>
          <div className="text-4xl font-bold mb-4">$0<span className="text-base font-medium">USD</span></div>
          <ul className="mb-4 list-disc pl-5 space-y-2">
            <li>Up to 5 users</li>
            <li>Unlimited projects and clients</li>
            <li>Track time on projects & tasks</li>
            <li>Set billable rates</li>
            <li>Generate detailed reports</li>
          </ul>
          <button className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition">Select</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-2">Pro</h2>
          <p className="text-gray-600 mb-4">For freelancers and teams actively managing their time.</p>
          <div className="text-4xl font-bold mb-4">
            {isAnnual ? (
              <>
                $8<span className="text-base font-medium">USD</span><span className="text-sm text-gray-500"> per user per month</span>
              </>
            ) : (
              <>
                $9<span className="text-base font-medium">USD</span><span className="text-sm text-gray-500"> per user per month</span>
              </>
            )}
          </div>
          <ul className="mb-4 list-disc pl-5 space-y-2">
            <li>Everything in Free PLUS</li>
            <li>Priority support</li>
            <li>Generate client invoices</li>
            <li>Add & edit logs on behalf of your team</li>
            <li>Approval workflow with Audit log</li>
            <li>Extra features…</li>
            <li className="text-green-500 font-medium">14 day free trial</li>
          </ul>
          <button className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition">Select</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
