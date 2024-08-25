import React from "react";
import Frequent from "../FAQ/Frequent";
import TroubleShoot from "./TroubleShoot";

const OurSecurity = () => {
  return (
    <div className="p-6 space-y-8">
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Our Security</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Newest TLS Standards</h2>
          <p className="text-base mb-2">
            All of the data on our systems is encrypted via the newest{" "}
            <strong className="font-semibold">TLS 1.3 security protocol</strong>{" "}
            (an upgraded version and a successor of the SSL protocol). The TLS
            security protocol uses sophisticated algorithms to encrypt your data
            during transit, preventing unauthorized third parties from gaining
            any access to it.
          </p>
          <p className="text-base">
            With the TLS protocol, only the sender and intended receiver can
            access the data via a decryption key, uniquely generated for every
            transit point.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Regular Security Penetration Tests</h2>
          <p className="text-base mb-2">
            We are proactively testing all of our organization's networks,
            applications, and systems for potential vulnerabilities, exploits, and
            weaknesses.
          </p>
          <p className="text-base mb-2">
            We perform <strong className="font-semibold">regular security penetration tests</strong>{" "}
            (RSPT) to stay ahead of the evolving cybersecurity threat landscape and
            ensure your data and our systems remain secure.
          </p>
          <p className="text-base">
            For further details regarding all our pen tests, feel free to contact
            us via email at <a href="mailto:support@myhours.com" className="text-blue-500 underline hover:no-underline">support@myhours.com</a>, or through the chat-box on our
            webpage.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Constant Monitoring & Incident Reporting Protocols</h2>
          <p className="text-base">
            We constantly monitor our systems to ensure the security and safety of
            our customer’s data. With a framework that follows all the latest{" "}
            <strong className="font-semibold">incident reporting protocols</strong>, we can manage security
            incidents and minimize the impact of data breaches.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Best Security Practices When Developing Apps</h2>
          <p className="text-base">
            We prioritize security throughout the entirety of our Software
            Development Life Cycle by following the{" "}
            <strong className="font-semibold">Secure Development Life-cycle practices</strong>{" "}
            (SDL). We start development with defined security parameters and
            constantly work on updating them to adhere to all the latest industry standards.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
        <h1 className="text-2xl font-bold mb-4">Our Customer's Data</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Single Sign-On Available</h2>
          <p className="text-base mb-2">
            Single Sign-On (SSO) allows administrators to verify user accounts
            across multiple applications and websites with a single set of
            credentials.
          </p>
          <p className="text-base">
            <strong className="font-semibold">Microsoft Azure SSO (Entra ID)</strong>{" "}
            is currently available as the preferred SSO choice.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
        <h1 className="text-2xl font-bold mb-4">Regular Backups</h1>
        <p className="text-base">
          The <strong className="font-semibold">Azure platform</strong> that hosts our servers offers the
          latest in Data Protection Management <strong className="font-semibold">(DPM)</strong> services.
          All of our customers' data is{" "}
          <strong className="font-semibold">backed up multiple times per hour</strong>, not allowing for a
          loss of more than a few minutes of data in emergency situations.
        </p>
      </section>

      <TroubleShoot />
      <Frequent />
    </div>
  );
};

export default OurSecurity;
