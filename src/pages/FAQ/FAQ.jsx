import React, { useState } from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import Banner from "../../components/Banner/Banner";

const Questions = [
  "Will I be charged after the 14 day trial?",
  "Can I switch to a Free account after the Pro Trial ends?",
  "What if we need more than 14 days to test the Pro edition?",
  "What's included in the Pro Trial?",
  "What kind of payment do you accept?",
  "Do you offer discounts?",
  "What type of support is included?",
  "Can I get a refund?",
  "Can I deactivate inactive team members?",
];

const Answers = [
  "No, you don't have to enter your credit card details to start your Free trial. When you decide to continue using My Hours, enter your payment details and you'll be automatically charged each period (monthly or annually).",
  "Sure! You'll always have a choice between staying on the Pro version that comes with a subscription or downgrading to a Free account. Just keep in mind that you will lose access to Pro features.",
  "Just send us an email to support@myhours.com and we'll provide you with an extension.",
  "Pro Trial comes with every feature that My Hours offers. If you have trouble finding a functionality you need, send us an email.",
  "We accept Visa, MasterCard, American Express, Discover, and PayPal. Additional payment options, including wire transfer, are available for larger teams with 50+ members and an annual payment.",
  "We offer discounts to non-profit companies and larger teams.",
  "All My Hours users receive email and live chat support, while Pro customers have priority. Our typical response time is less than 12 hours. Teams with 20+ members can sign up for a free demo call here.",
  "We issue a refund when My Hours account with active subscription was not being used for a few months.",
  "You can archive inactive team members while keeping their data for reporting. We do not charge for archived team members.",
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <div>
        {Questions.map((question, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center cursor-pointer p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <span className="mr-3 text-gray-600">
                {activeIndex === index ? (
                  <CiCircleChevUp className="w-5 h-5" />
                ) : (
                  <CiCircleChevDown className="w-5 h-5" />
                )}
              </span>
              <strong className="text-gray-800">{question}</strong>
            </div>
            {activeIndex === index && (
              <div className="mt-2 pl-8 text-gray-600">{Answers[index]}</div>
            )}
          </div>
        ))}
      </div>
      <Banner />
    </section>
  );
};

export default FAQ;
