import React from "react";
import { Link } from "react-router-dom";
import OurSecurity from "./OurSecurity";

const SecurityPrivacy = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Security & Privacy
        </h1>
        <p className="text-base text-gray-600 mb-6">
          With over 30 years of developing and implementing smart workforce
          management solutions, we at Spica International, the company behind My
          Hours, are continuously working on earning and maintaining the trust
          of our valued customers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Trust Is Not Given It Is Earned
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Headquartered in Ljubljana (EU), we employ 100+ people across the
          entire CEE region. Thanks to our diverse staff and strong belief in
          constant innovation, we’ve been able to accrue more than 10,000
          satisfied customers worldwide and over 1,000,000 daily users of our
          various solutions.
        </p>
        <p className="text-base text-gray-600 mb-6">
          For the past three decades, we've been at the forefront of workforce
          management technology. We aim to continue improving upon our solutions
          and keep pushing the boundaries of workforce management software for
          many years to come.
        </p>

        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Certification and Compliances
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ISO Certifications
        </h2>
        <p className="text-base text-gray-600 mb-6">
          We are proud holders of both the <strong>ISO 9001</strong> and{" "}
          <strong>ISO 27001 Certification,</strong> including the latest
          27001:2017 and 27001:2018 standards. These certifications represent
          the highest international standards for managing information security
          and the quality of management systems. For further details regarding
          all our certificates, feel free to contact us via email at{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            support@myhours.com
          </Link>{" "}
          or through the chat-box on our webpage.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          GDPR Compliance
        </h2>
        <p className="text-base text-gray-600 mb-6">
          We are in full compliance with{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            The General Data Protection Regulation
          </Link>{" "}
          (GDPR) that enacts rules and regulations pertaining to the rights of
          individuals concerning their personal data inside the territory of the
          European Union.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          CCPA Compliance
        </h2>
        <p className="text-base text-gray-600 mb-6">
          We are fully compliant with{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            The California Consumer Privacy Act
          </Link>{" "}
          (CCPA), which gives the residents of California increased privacy
          rights regarding their sensitive personal information and how
          businesses are allowed to treat such data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          DCAA Compliance
        </h2>
        <p className="text-base text-gray-600 mb-6">
          We follow ALL guidelines concerning timekeeping and accounting rules
          as set by the{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            Defense Contract Audit Agency
          </Link>{" "}
          (DCAA), operating as an extended arm of the{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            United States Department of Defence
          </Link>{" "}
          (DOD) and under the direct control of the Under Secretary of Defense.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Microsoft Gold-Certified Partner
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Thanks to our dedicated team, which has repeatedly shown high levels
          of expertise and competence in Microsoft technologies, we’ve been able
          to meet the rigorous requirements set by Microsoft and become a
          Gold-Certified Partner.
        </p>

        <p className="text-base text-gray-600 mb-6">
          For further details regarding all our certificates, feel free to
          contact us via email at{" "}
          <Link to="#" className="text-blue-500 hover:underline">
            support@myhours.com
          </Link>
          , or through the chat-box on our webpage.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Our Servers
        </h2>
        <p className="text-base text-gray-600 mb-6">
          Our{" "}
          <strong>
            servers are hosted on Microsoft's cloud computing platform Azure,
          </strong>{" "}
          with the main database center{" "}
          <strong>located in Amsterdam, Netherlands, EU.</strong>
        </p>

        <p className="text-base text-gray-600 mb-6">
          By utilizing the Azure platform, we can ensure that our customer’s
          data is being handled in accordance with all of the latest privacy and
          security standards.
        </p>

        <p className="text-base text-gray-600 mb-6">
          Our server's host, the Microsoft Azure platform, is in full compliance
          with the SOC II cybersecurity operations framework set by the
          Assurance Services Executive Committee (ASEC) of the American
          Institute of Certified Public Accountants (AICPA). They regularly
          undergo third-party audits to ensure AICPA's Trust Services Criteria
          (TSC) standards are being met and adhered to.
        </p>

        <p className="text-base text-gray-600">
          The average <strong>server uptime was 99.98%</strong> in the past 365
          days.
        </p>
      </section>
      <OurSecurity />
    </>
  );
};

export default SecurityPrivacy;
