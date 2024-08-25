import React, { useState } from 'react';
import { FaChevronDown, FaAngleUp } from 'react-icons/fa';

const questions = [
    "What is a ISO 27001 Certification?",
    "What is a ISO 9001 Certification?",
    "Where does My Hours store customer data?",
    "Does anyone outside the EU have access to my data?",
    "How long does My Hours keep my data?",
    "Does My Hours keep payment processing data?",
    "Can I report a security problem?",
    "What does it mean to have a Microsoft Gold Certificate?"
];

const answers = [
    "<strong>ISO 27001</strong> is an international regulation standard set by the International Organization for Standardization (<strong>ISO</strong>) that details various security requirements for setting up the information security system of an organization.<br /> <p className='underline hover:no-underline cursor-pointer'>ISO 27001</p> specifies 14 clauses for security control and additional 144 security controls developed to protect the integrity and data privacy of the organization, as well as the availability of such information. <br /> My Hours - Spica is a proud{' '}<strong>holder</strong> of the{' '}<strong>ISO 27001 Certification,</strong> meaning we are in{' '}<strong>full compliance</strong>{' '}with all security protocols set by ISO 27001. <br /> To get access to the complete list of our certifications or request further details about them, contact us via email at{' '}<p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>",
    "<p className='underline hover:no-underline cursor-pointer'>ISO 9001</p> is an international standard set by the International Organization for Standardization (<strong>ISO</strong>)  that details over 350 different requirements for <strong>implementing and maintaining quality management systems.</strong> <br /> A quality management system defines how a business can meet the requirements of customers and stakeholders, affected by the work they’re doing or the services they’re providing. <br /> <strong>ISO 9001</strong> is designed to help businesses and various organizations <strong>become more efficient and improve their customers’ overall satisfaction.</strong> <br /> ‍My Hours - Spica <strong>holds the ISO 9001 certification,</strong> meaning that We adhere to all standards for quality management systems set by ISO 9001. <br /> To get access to the complete list of all our certifications or request further details about them, contact us via email at <p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>.",
    "My Hours is a <strong>cloud-based smart workforce management solution,</strong> meaning We store all of our customers’ <strong>data on the cloud.</strong> We rely on the <strong>Microsoft Azure platform</strong> to host our servers, <strong>securely storing</strong> our clients' data.<br /> Does My Hours keep a backup of my data? <br /> Yes. Through the <strong>Microsoft Azure platform,</strong> We generate regular backups, <strong>multiple times an hour,</strong> to ensure <strong>minimal data loss</strong> in an emergency situation. <br /> <strong>All customer data backups</strong> are stored on the cloud via <strong>the MS Azure platform,</strong> as per our agreement.",
    "<p className='underline hover:no-underline cursor-pointer'>GDPR</p>, which we are in full compliance with, requires that all data of EU citizens must be either stored in the EU, where it’s subject to European privacy laws, or within a jurisdiction that calls for similar levels of protection. <br /> At the moment, some of our third-party sub-processors (read our <p className='underline hover:no-underline cursor-pointer'>personal data processing agreement</p> to learn more) are outside of the EU but have entered into written agreements with us to adhere to the data protection obligations set by European laws. <br /> If you wish to get the full list of our sub-processors, contact us via email at <p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>.",
    "We keep customers’ data for <strong>as long as they have an open account with us.</strong>  In the case of account closure, which has to be performed via the web application, and in accordance with our data retention policy, we keep customers’ data for an <strong>additional 90 days.</strong> After the 90 days have expired, we delete said data. <br /> For all who want their data to be removed from our servers sooner or before the usual 90 days retention time period, feel free to contact us via email at <p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>",
    "No, My Hours does not keep the payment processing data of our users. We rely on <p className='underline hover:no-underline cursor-pointer'>Stripe</p> to process payments, and they are the ones who retain such information.",
    "To report any incidents or security problems, contact us via email at <p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>. Our support staff will analyze the situation and respond to your query in a most timely fashion.",
    "We’ve received our <strong>Microsoft Gold Certificate</strong> for showing high levels of competence and skill in Microsoft technologies and offering free and custom integrations with various Microsoft tools, such as Teams, Azure, PowerBI, and more.<br /> Only 1-2% of all Microsoft partners are <strong>Gold-Certified,</strong> putting us in the exclusive group of highly-trusted and capable Microsoft partners.<br /> To get access to the full list of all our certifications or request further details about them, contact us via email at <p className='underline hover:no-underline cursor-pointer'>support@myhours.com</p>"
];

const Frequent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <h1>FAQ</h1>
      {questions.map((question, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question flex gep-8" onClick={() => handleToggle(index)}>
            <span>{question}</span>
            {expandedIndex === index ? <FaAngleUp /> : <FaChevronDown />}
          </div>
          {expandedIndex === index && (
            <div
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: answers[index] }}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Frequent;
