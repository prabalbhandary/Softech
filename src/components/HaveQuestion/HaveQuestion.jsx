import React from 'react'
import { TiTick } from 'react-icons/ti'

const HaveQuestion = () => {
  return (
    <section className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Have questions? We're here
        </h1>
        <p className="text-gray-700 mb-8">
            It's always nice to have someone to talk to when facing new software. Get in touch and we'll try our best to help you out.
        </p>
        <div className="flex space-y-4">
            <div className="flex items-center text-teal-500 hover:text-teal-700 transition-colors duration-300 underline hover:no-underline cursor-pointer">
                <TiTick className="mr-3 text-lg" />
                <p className="text-lg font-medium">EMAIL & LIVE CHAT</p>
            </div>
            <div className="flex items-center text-teal-500 hover:text-teal-700 transition-colors duration-300 underline hover:no-underline cursor-pointer">
                <TiTick className="mr-3 text-lg" />
                <p className="text-lg font-medium">TRAINING FOR TEAMS</p>
            </div>
            <div className="flex items-center text-teal-500 hover:text-teal-700 transition-colors duration-300 underline hover:no-underline cursor-pointer">
                <TiTick className="mr-3 text-lg" />
                <p className="text-lg font-medium">KNOWLEDGE BASE</p>
            </div>
        </div>
    </section>
  )
}

export default HaveQuestion
