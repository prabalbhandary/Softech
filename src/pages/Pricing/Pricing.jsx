import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import FAQ from "../FAQ/FAQ";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const handlePlanChange = (isAnnualPlan) => {
    setIsAnnual(isAnnualPlan);
  };

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Pick your plan</h1>
      <strong className="block text-teal-400 text-lg mb-6 text-center">
        Track time on projects with your team.
      </strong>
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => handlePlanChange(true)}
          className={`py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 ${
            isAnnual
              ? "bg-teal-400 text-white hover:bg-teal-500"
              : "border border-gray-300 hover:border-teal-400"
          }`}
        >
          Annual
        </button>
        <button
          onClick={() => handlePlanChange(false)}
          className={`py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 ${
            !isAnnual
              ? "bg-teal-400 text-white hover:bg-teal-500"
              : "border border-gray-300 hover:border-teal-400"
          }`}
        >
          Monthly
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 border border-gray-300 rounded-lg shadow-lg">
          <strong className="text-xl block mb-2">Free</strong>
          <p className="mb-4">
            For individuals or teams just getting started with time tracking.
          </p>
          <p className="text-2xl font-semibold mb-4">
            <span className="text-xl">$</span>
            <strong>0</strong> USD
          </p>
          <p className="mb-4">Up to 5 users.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Unlimited projects and clients</li>
            <li>Track time on projects & tasks</li>
            <li>Set billable rates</li>
            <li>Generate detailed reports</li>
          </ul>
          <button className="w-full py-2 border border-black rounded-lg hover:bg-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300">
            Select
          </button>
        </div>
        <div className="flex-1 p-6 bg-teal-200 border border-teal-300 rounded-lg shadow-lg">
          <strong className="text-xl block mb-2">Pro</strong>
          <p className="mb-4">
            For freelancers and teams actively managing their time.
          </p>
          <p className="text-2xl font-semibold mb-4">
            <span className="text-xl">$</span>
            <strong>{isAnnual ? 8 : 9}</strong> USD
          </p>
          <p className="mb-4">per user per month</p>
          <ul className="list-disc list-inside mb-4">
            <li>Everything in Free PLUS</li>
            <li>Priority support</li>
            <li>Generate client invoices</li>
            <li>Add & edit logs on behalf of your team</li>
            <li>Approval workflow with Audit log</li>
            <li>Extra features…</li>
          </ul>
          <button className="w-full py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300">
            14 day free trial
          </button>
        </div>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Track</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Timer or add manually</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Timesheet - weekly tracking
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Timer - daily tracking</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Timeline view</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Favourites</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Expenses</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Detailed description and attachments
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Daily tracking reminder (mobile app)
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Bulk edit or delete logs</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Track custom fields (numeric)
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Organize</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                Unlimited projects, tasks and clients
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Task and project templates</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Task and project descriptions
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Group tasks and mark as done
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Budget hours, billable or cost amounts
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Budget alerts to email</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Monthly budget</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Task budgets or estimates</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Assign tasks to team members
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Billing</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Billable rate per project</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Billable rate per tasks or team member
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Labor costs (Team costs)</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Calculate profit & loss</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Auto-round billable time</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Invoicing</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Report</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Dashboard</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Customize a detailed report (Activity)
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Download to PDF, export to XLS
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Send reports to Email</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Timesheet report</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Schedule detailed reports to email
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Team pivot report</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Download & customize reports in Excel
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Own logo on PDF reports</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Team</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Role: Administrator</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Role: Normal member</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Unlimited team members</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Role: Project manager</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Group members into Teams</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Hide billing and cost details
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Require project and task input
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Approval workflow</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">
                Add, edit or delete team's logs
              </td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Auto-lock time logs</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Tracking reminders</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Audit log report</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Track team's capacity</td>
              <td className="py-2 px-4 border-b text-center"></td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Integrations & Apps</th>
              <th className="py-2 px-4 border-b">Free</th>
              <th className="py-2 px-4 border-b">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">
                Import timesheets, projects and clients
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Mobile apps</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">API access</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Zapier Integration</td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
              <td className="py-2 px-4 border-b text-center">
                <FaCheck className="text-green-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <FAQ />
    </section>
  );
};

export default Pricing;
