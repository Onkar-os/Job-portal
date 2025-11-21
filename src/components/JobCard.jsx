import React from 'react'
import { assets } from '../assets/assets'

const JobCard = ({ job }) => {
  return (
    <div className='border p-4 sm:p-6 shadow rounded bg-white'>
      
      {/* TOP LOGO */}
      <div className='flex justify-between items-center'>
        <img className='h-6 sm:h-8 w-auto' src={assets.company_icon} alt="" />
      </div>

      {/* TITLE */}
      <h4 className='font-medium text-lg sm:text-xl mt-2'>
        {job.title}
      </h4>

      {/* TAGS */}
      <div className='flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-xs'>
        <span className='bg-blue-50 border border-blue-200 px-3 py-1 rounded text-xs sm:text-sm'>
          {job.level}
        </span>

        <span className='bg-red-50 border border-blue-200 px-3 py-1 rounded text-xs sm:text-sm'>
          {job.location}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p
        className='text-gray-500 text-xs sm:text-sm mt-4 leading-relaxed'
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-stretch sm:items-center mt-4'>
        
        <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm w-full sm:w-auto'>
          Apply Now
        </button>

        <button className='bg-red-600 text-white px-4 py-2 rounded text-sm w-full sm:w-auto'>
          Learn More
        </button>

      </div>
    </div>
  )
}

export default JobCard
