import React from "react";
import { TbCircleCheckFilled } from "react-icons/tb";
import { FaMinusCircle } from "react-icons/fa";

const List = () => {
  return (
    <section className="w-full p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        Not your average <span className="text-teal-500">time tracker</span>
      </h1>
      <p className="text-lg mb-6">
        <strong>Many time trackers are built for freelancers </strong>
        who need to record every second of work,
        <strong>others spy on your employees</strong>, and
        <strong>most are difficult to setup and use.</strong>
      </p>
      <ul className="list-disc pl-5 space-y-4">
        <li className="flex items-start space-x-3">
          <TbCircleCheckFilled className="text-teal-500 text-xl" />
          <p>
            My Hours is{" "}
            <strong>
              built for companies looking to automate timesheet processes.
            </strong>
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <TbCircleCheckFilled className="text-teal-500 text-xl" />
          <div>
            <p>
              We offer a{" "}
              <strong>familiar timesheet interface</strong>
            </p>
            <p className="text-gray-600">that's just like a spreadsheet your team already knows.</p>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          <TbCircleCheckFilled className="text-teal-500 text-xl" />
          <p>
            Setup takes one day and{" "}
            <strong>onboarding is a breeze.</strong>
          </p>
        </li>
        <li className="flex items-start space-x-3">
          <FaMinusCircle className="text-red-600 text-xl" />
          <p className="text-gray-600">No employee monitoring</p>
        </li>
      </ul>
    </section>
  );
};

export default List;
