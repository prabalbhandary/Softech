import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Works = () => {
  const videoUrl = "https://www.youtube.com/embed/FkQWpQd9Zdo";
  const imgUrls = [
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e359d194d196e_Timer%20and%20timesheet%20time%20tracking.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35ebdf4d196d_Analyze%20project%20costs%20and%20billings%20-%20sm.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3557124d1972_Project%20time%20budgets%20and%20estimates.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35d2ca4d1955_Online%2520timesheet%2520approval%2520app-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3527b84d1953_Online%2520Timesheet%2520employee%2520report%2520-%2520My%2520Hours-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3527cd4d1976_time-tracking-roles-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3538964d1975_time-tracking-in-browser-and-mobile-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3527394d1970_My%2520Hours%2520integrations%2520time%2520tracking-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e353e2b4d1971_My%2520Hours%2520security-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35c7d14d1973_My%2520Hours%2520support-p-500.png",
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e354e444d1974_no%2520spy%2520software-p-500.png",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">How it works</h1>
          <h2 className="text-2xl text-gray-700 mb-6">
            and why you should switch to My Hours
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Time tracking was a pain. We fixed it and made time tracking worth
            the effort. My Hours is easy to use and makes teams more productive,
            efficient and organized.
          </p>
          <Link to="/register">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
              Get Started - It's Free
            </button>
          </Link>
        </header>

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

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Simple Timesheet or Timer</h1>
          <p className="text-lg text-gray-600 mb-4">
            Each team member gets their own intuitive timesheet where they can
            log hours for pre-assigned clients, projects, and tasks.{" "}
            <strong>No more messy spreadsheets.</strong>
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[0]}
              alt="Timesheet"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Use our <strong>stopwatch</strong> for precise time tracking
                  down to the second. Add optional <strong>descriptions</strong>{" "}
                  or attach files to document completed work.
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Use timer or input time manually
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Add custom or required fields
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Add description, tags, or other details
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Set most used logs as favorites
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Mark time logs as non-billable
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  See budget spent while tracking time
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Get a daily or weekly reminder to log time
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Analyze project costs</h1>
          <p className="text-lg text-gray-600 mb-4">
            Set billing and labor rates for teams, projects, or tasks.
            Everything is calculated in real-time,{" "}
            <strong>
              removing the need for spreadsheet exports and manual work.
            </strong>
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[1]}
              alt="Analyze project costs"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Define an up to 4-level deep hierarchy with{" "}
                  <strong>Clients, Projects, and sub-projects.</strong> Use Tags
                  when you need more flexibility.
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Log expenses to track other costs
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Create templates for common tasks
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Assign tasks to team members
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Estimate and track budgets
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Set and track budgets for clients, projects, and tasks. Monitor
            progress and ensure you stay within limits.
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[2]}
              alt="Estimate and track budgets"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Set custom <strong>budget caps</strong> for each project and
                  track expenses to stay on top of your financials.
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Budget tracking by project, client, or task
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Detailed progress reports
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Set project milestones
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Track and approve time</h1>
          <p className="text-lg text-gray-600 mb-4">
            Use online timesheets and manage approvals without the hassle. Keep
            track of who worked on what and when,{" "}
            <strong>from any device.</strong>
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[3]}
              alt="Track and approve time"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Customize approval workflows to suit your team’s needs, and{" "}
                  <strong>review and approve timesheets effortlessly.</strong>
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Automatic reminders for approvals
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Timesheet approval and rejection
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Custom approval workflows
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Reporting and Insights</h1>
          <p className="text-lg text-gray-600 mb-4">
            Generate reports on time tracking, budget usage, and more. Gain
            valuable insights into productivity and project status.
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[4]}
              alt="Reporting and Insights"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Use our robust reporting tools to generate detailed insights,
                  and export reports to share with stakeholders.
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Customizable reports and dashboards
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Export reports in various formats
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Real-time analytics and trends
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">
            Integration with Other Tools
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Seamlessly integrate My Hours with your favorite tools for a more
            connected workflow.
          </p>
          <div className="flex items-center mb-6">
            <img
              src={imgUrls[5]}
              alt="Integration with Other Tools"
              className="w-1/2 h-auto rounded-lg shadow-md"
            />
            <div className="ml-6 w-1/2">
              <div className="border border-purple-600 border-dashed p-4 mb-6">
                <p className="text-gray-700">
                  Connect My Hours with your project management, communication,
                  and accounting tools to streamline your processes.
                </p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg mb-6">
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Integration with popular apps
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Sync data across platforms
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <FaRegCheckCircle className="text-teal-400 mr-2" />
                  Custom API for advanced integrations
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Works;
