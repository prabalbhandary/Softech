import React from "react";
import HaveQuestion from "../../components/HaveQuestion/HaveQuestion";
import Banner from "../../components/Banner/Banner";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  const img =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3525804d14e8_Customer%20words%20.png";
  const img2 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35d0ac4d156e_Capterra.png";
  const img3 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e353b3c4d156d_GetApp.png";
  const img4 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e3518ba4d156a_Chamber%2520of%2520Commerce-p-500.png";
  const img5 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35102b4d1575_iGeeksBlog-Logo.png";
  const img6 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35086f4d15b7_87RFWch3.png%20small.png";
  const img7 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e352ae04d156b_G2-p-500.png";
  const img8 =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e35805b4d156f_softwareworld-Badge.png";
  return (
    <section>
      <div>
        <h1>What users say about us</h1>
        <strong className="text-teal-400">
          "My Hours makes time tracking simple, insightful, super..."
        </strong>
        <img src={img} alt="" />
      </div>
      <div>
        <h1>Read about and review My Hours on</h1>
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
      <div>
        <h1>If by some chance you are still not convinced...</h1>
        <strong className="text-teal-400">...read some of our reviews</strong>
        <ReviewCard />
      </div>
      <HaveQuestion />
      <Banner />
    </section>
  );
};

export default CustomerReview;
