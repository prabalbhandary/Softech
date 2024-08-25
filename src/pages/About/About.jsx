import React from 'react'

const About = () => {
    const img = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e352ca84d1761_myhours-logo.svg"
  
    return (
        <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <strong className="block text-teal-400 text-xl mb-4">The story behind My Hours</strong>
            <p className="text-gray-700 mb-6">We launched My Hours back in 2002. Since then, it has been rewritten twice to meet growing demands. My Hours is a product of Spica, a company headquartered in Ljubljana with 100+ employees.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">We are building My Hours because we believe that:</h2>
            
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Time tracking is Communication</h3>
                    <p className="text-gray-700">Individuals communicate work done to clients or leaders.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">No one likes being constantly monitored</h3>
                    <p className="text-gray-700">The best companies lead with purpose, not fear of being fired.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">P. A.C. T.</h3>
                    <p className="text-gray-700">Teams and individuals are motivated with Purpose, Autonomy, Clarity, and Transparency.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">The future belongs to autonomous teams</h3>
                    <p className="text-gray-700">The best ideas come from unsupervised work in autonomous environments.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Work-life + Remote-office symphonies</h3>
                    <p className="text-gray-700">The best work is done in remote-friendly environments with a good work-life balance.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Budgets breed creativity</h3>
                    <p className="text-gray-700">Time or cost budgets form constraints that lead to increased creativity.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Software should be fun to use while getting the job done</h3>
                    <p className="text-gray-700">You rarely see “fun” and “getting things done” in the same sentence, but we strive to combine them in My Hours.</p>
                </div>
            </div>
            
            <div className="mt-6 flex justify-center">
                <img src={img} alt="My Hours Logo" className="w-32 h-auto" />
            </div>
        </section>
    )
}

export default About
