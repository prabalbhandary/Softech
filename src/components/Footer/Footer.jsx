import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const Logo = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e351c984d171e_Logo-300px.png";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-gray-400 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between mb-12">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src={Logo} alt="Logo" width={73} className="mb-4" />
            <p>&copy; {year} My Hours. All rights reserved</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white">How it works</Link></li>
              <li><Link to="#" className="hover:text-white">Mobile app</Link></li>
              <li><Link to="#" className="hover:text-white">Browser extension</Link></li>
              <li><Link to="#" className="hover:text-white">Industries</Link></li>
              <li><Link to="#" className="hover:text-white">Use case collection</Link></li>
              <li><Link to="#" className="hover:text-white">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white">Articles</Link></li>
              <li><Link to="#" className="hover:text-white">Guides</Link></li>
              <li><Link to="#" className="hover:text-white">Customer Reviews</Link></li>
              <li><Link to="#" className="hover:text-white">Start Free</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white">About</Link></li>
              <li><Link to="#" className="hover:text-white">Terms of Use</Link></li>
              <li><Link to="#" className="hover:text-white">Sitemap</Link></li>
              <li><Link to="#" className="hover:text-white">Time Clock App</Link></li>
              <li><Link to="#" className="hover:text-white">Free Timesheet Templates</Link></li>
              <li><Link to="#" className="hover:text-white">Time Management Apps</Link></li>
              <li><Link to="#" className="hover:text-white">Best Time Tracking Apps for {year}</Link></li>
              <li><Link to="#" className="hover:text-white">Time Management Skills, Techniques and Strategies</Link></li>
              <li><Link to="#" className="hover:text-white">Free Time Card Calculator</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white">Project billing</Link></li>
              <li><Link to="#" className="hover:text-white">Time reports and Project analytics</Link></li>
              <li><Link to="#" className="hover:text-white">Attendance and Absence tracking</Link></li>
              <li><Link to="#" className="hover:text-white">Expense tracking</Link></li>
              <li><Link to="#" className="hover:text-white">Calculating project profitability</Link></li>
              <li><Link to="#" className="hover:text-white">Timesheet time tracking</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Integrations</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white">Zapier</Link></li>
              <li><Link to="#" className="hover:text-white">API Documentation</Link></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white">Facebook</Link></li>
              <li><Link to="#" className="hover:text-white">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex text-center mt-8 border-t border-gray-600 pt-6">
          <p className="mb-4">Looking for employee attendance and absence tracking? Visit &nbsp;</p>
          <Link to="#" className="underline hover:no-underline text-white">All Hours.</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;