import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Security = () => {
  const img = 'https://cdn.prod.website-files.com/64148069036e35d5954d1323/642c011b61ba26948d4fb726_Enterprise%20security%20and%20support-41%201.svg'
  const img2 = 'https://cdn.prod.website-files.com/64148069036e35d5954d1323/642c0147b6cdb761d04d2896_Enterprise%20security%20and%20support-42%201.svg'
  
  return (
    <section className='bg-gray-200 py-12'>
      <h1 className='text-center text-3xl font-semibold mb-8'>
        Enterprise-grade <span className='font-bold text-teal-500'>security & support</span>
      </h1>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img src={img} alt="Secure and compliant" className='w-full h-48 object-cover rounded-t-lg' loading='lazy' />
          <h3 className='text-xl font-semibold mt-4 mb-2'>Secure and compliant</h3>
          <p className='text-gray-700 mb-4'>We are based in the EU so data security and privacy have been at the core of our business for over 30 years.</p>
          <ul className='list-disc list-inside mb-4'>
            <li><strong>GDPR compliant</strong></li>
            <li><strong>ISO7001 certified</strong></li>
            <li><strong>Hosted on Microsoft Azure</strong></li>
          </ul>
          <div className='flex items-center space-x-2'>
            <Link to="#" className='text-teal-600 underline hover:no-underline'>Learn more</Link>
            <FaArrowRight className='text-teal-600' />
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img src={img2} alt="World class support" className='w-full h-48 object-cover rounded-t-lg' loading='lazy' />
          <h3 className='text-xl font-semibold mt-4 mb-2'>World class support</h3>
          <p className='text-gray-700 mb-4'>We have one of the best support teams in the business ready to help at any time.</p>
          <ul className='list-disc list-inside mb-4'>
            <li><strong>No GPT or other AI responses</strong></li>
            <li><strong>In-app chat or email support</strong></li>
            <li><strong>Handled by a human with deep understanding of the product</strong></li>
          </ul>
          <div className='flex items-center space-x-2'>
            <Link to="#" className='text-teal-600 underline hover:no-underline'>Learn more</Link>
            <FaArrowRight className='text-teal-600' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security
