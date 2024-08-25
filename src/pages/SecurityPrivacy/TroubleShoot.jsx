import React from "react";
import { Link } from "react-router-dom";

const TroubleShoot = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">For Troubleshooting Only</h1>
        <p className="text-lg leading-relaxed">
          Spica and My Hours employees can access customers’ data solely for
          troubleshooting purposes. This{" "}
          <strong className="font-semibold">
            access is restricted, logged, and monitored via secure VPN
            connections.
          </strong>{" "}
          There are audit trails for all time logs and for every time customers’
          data has been accessed.
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Nothing Is Hidden From Our Customers
        </h1>
        <p className="text-lg leading-relaxed">
          In accordance with our{" "}
          <Link to="#" className="underline hover:no-underline text-blue-500">
            Data Processing Agreement
          </Link>
          , we collect the following types of personal data:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="text-lg">Name and surname</li>
          <li className="text-lg">Email</li>
          <li className="text-lg">Contact details</li>
          <li className="text-lg">Client details</li>
          <li className="text-lg">Hourly rates</li>
          <li className="text-lg">Tracked time</li>
        </ul>
        <p className="text-lg mt-4">
          The{" "}
          <strong className="font-semibold">
            data is fully exportable through XLS or via API.
          </strong>{" "}
          We keep our customers’ data up to 90 days after account closure or
          less (upon request).
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Sub-Processors</h1>
        <p className="text-lg leading-relaxed">
          We handle our customers' data alongside a group of sub-processors. To
          get a complete list, contact us at{" "}
          <Link to="#" className="underline hover:no-underline text-blue-500">
            support@myhours.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TroubleShoot;
