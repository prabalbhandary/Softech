import React from 'react'

const ImageContainer = () => {
    const img = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/663b636fee2257b28a8fab5b_29%204%202024_My%20Hours_Before-After-B1-p-800.png"
    const img2 = "https://cdn.prod.website-files.com/64148069036e35d5954d1323/663b63b3ca4b5e64975dd13a_29%204%202024_My%20Hours_Before-After-B2-p-800.png"
  
    return (
        <section className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-8'>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl font-bold mb-2'>From</h1>
                <p className='text-lg text-gray-600 mb-4'>Messy Spreadsheets</p>
                <img src={img} alt="Before" className='max-w-full h-auto rounded-lg shadow-md' />
            </div>
            <div className='text-center md:text-left'>
                <h1 className='text-2xl font-bold mb-2'>To</h1>
                <p className='text-lg text-teal-500 mb-4'>Tidy Timesheets</p>
                <img src={img2} alt="After" className='max-w-full h-auto rounded-lg shadow-md' />
            </div>
        </section>
    )
}

export default ImageContainer