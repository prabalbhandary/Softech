import React from 'react';

const Card = () => {
    const img = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/660bcab198925ffebc9174c7_Track_Time%20Logo.png";
    const img2 = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/660bcab111e98a96128a7c49_27%202%202024_Minimize%20Errors.png";
    const img3 = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/660bcab1a75123250927b68d_27%202%202024_Export%20Data.png";

    return (
        <section className="p-6 bg-gray-100">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img 
                        src={img} 
                        alt="Track Time" 
                        className="w-full h-32 object-cover mb-4 rounded-md" 
                        loading='lazy' 
                        sizes='(max-width: 479px) 54vw, (max-width: 969px) 86vw, 834px' 
                    />
                    <h3 className="text-xl font-semibold mb-2">Track time</h3>
                    <p className="mb-2">
                        Most of{" "}
                        <strong className="font-bold">our customers enter hours at the end of the day or week.</strong>
                    </p>
                    <p className="mb-2">
                        We offer a {" "}
                        <strong className="font-bold">stopwatch timer</strong>{" "}
                        if you need more precision.
                    </p>
                    <p>
                        <strong className="font-bold">Setup tracking remainders</strong>{" "}
                        so users don't forget to submit their hours.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img 
                        src={img2} 
                        alt="Minimize Errors" 
                        className="w-full h-32 object-cover mb-4 rounded-md" 
                        loading='lazy' 
                        sizes='(max-width: 479px) 54vw, (max-width: 969px) 86vw, 834px' 
                    />
                    <h3 className="text-xl font-semibold mb-2">Minimize errors</h3>
                    <p className="mb-2">
                        Managers can{" "}
                        <strong className="font-bold">review submitted timesheets</strong>{" "}
                        and easily find users who missed their hourly quotas or made other mistakes.
                    </p>
                    <p>
                        A {" "}
                        <strong className="font-bold">simple approval workflow</strong>{" "}
                        keeps everyone in the loop through comments and emails.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <img 
                        src={img3} 
                        alt="Export Data" 
                        className="w-full h-32 object-cover mb-4 rounded-md" 
                        loading='lazy' 
                        sizes='(max-width: 479px) 54vw, (max-width: 969px) 86vw, 834px' 
                    />
                    <h3 className="text-xl font-semibold mb-2">Export data</h3>
                    <p className="mb-2">
                        Stop splicing various spreadsheets for billing or payroll.
                    </p>
                    <p className="mb-2">
                        <strong className="font-bold">Summarize and filter time,</strong>{" "}
                        costs, billable amounts and budgets across time periods and projects, tasks, or users.
                    </p>
                    <p>
                        <strong className="font-bold">Export to XLS, PDF,</strong>{" "}
                        or {" "}
                        <strong className="font-bold">schedule reports to email</strong>{" "}
                        or {" "}
                        <strong className="font-bold">integrate with BI tools.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Card;