import React, { useContext, useState } from 'react'
import { AppContext } from "../context/AppContext";

import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets'
import JobCard from './JobCard'

function JobListing() {
  const { issearched, searchfilter, setsearchfilter } = useContext(AppContext)
  const [currentpage, setcurrentpage] = useState(1)

  return (
    <div className="container px-4 sm:px-6 lg:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">

      {/* LEFT FILTER PANEL */}
      <div className="w-full lg:w-1/4 bg-white px-4">

        {/* CURRENT SEARCH FILTERS */}
        {issearched && (searchfilter.title !== "" || searchfilter.location !== "") && (
          <>
            <h3 className="font-medium text-lg mb-4">Current search results</h3>

            <div className="mb-4 text-gray-600 flex flex-col gap-2">
              {searchfilter.title && (
                <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded text-sm">
                  {searchfilter.title}
                  <img
                    onClick={() => setsearchfilter(prev => ({ ...prev, title: "" }))}
                    className="cursor-pointer h-3"
                    src={assets.cross_icon}
                    alt=""
                  />
                </span>
              )}

              {searchfilter.location && (
                <span className="inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded text-sm">
                  {searchfilter.location}
                  <img
                    onClick={() => setsearchfilter(prev => ({ ...prev, location: "" }))}
                    className="cursor-pointer h-3"
                    src={assets.cross_icon}
                    alt=""
                  />
                </span>
              )}
            </div>
          </>
        )}

        {/* SEARCH BY CATEGORY */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search By Category</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center text-sm" key={index}>
                <input className="scale-110" type="checkbox" />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* SEARCH BY LOCATION */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4 pt-10">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center text-sm" key={index}>
                <input className="scale-110" type="checkbox" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE JOB LIST */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">

        <h3 className="font-medium text-3xl py-2">Latest Jobs</h3>
        <p className="mb-8 text-sm text-gray-600">Get your desired job from top companies</p>

        {/* JOB GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {jobsData
            .slice((currentpage - 1) * 6, currentpage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* PAGINATION */}
        {jobsData.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">

            <button
              onClick={() => setcurrentpage(Math.max(currentpage - 1, 1))}
            >
              <img className="h-4" src={assets.left_arrow_icon} alt="" />
            </button>

            {Array.from({ length: Math.ceil(jobsData.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setcurrentpage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center border rounded-full text-sm 
                  ${currentpage === index + 1 ? "bg-blue-300 text-blue-700" : "text-gray-600"}`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setcurrentpage(Math.min(currentpage + 1, Math.ceil(jobsData.length / 6)))
              }
            >
              <img className="h-4" src={assets.right_arrow_icon} alt="" />
            </button>

          </div>
        )}
      </section>
    </div>
  )
}

export default JobListing
