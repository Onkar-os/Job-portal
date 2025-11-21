import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Appcontext'
import { assets, JobCategories, JobLocations, jobsData } from '../assets/assets'
import JobCard from './JobCard'

function JobListing() {
    const{issearched,searchfilter ,setsearchfilter}=useContext(AppContext)
    const[currentpage,setcurrentpage]=useState(1)
  return (
    <div className='conatiner 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
        <div className='w-full lg:w-1/4 bg-white px-4'>
            {
                issearched && (searchfilter.title !=""|| searchfilter.location !="") &&(
                    <>
                    <h3 className='font-medium text-lg mb-4'>current search results</h3>
                    <div className='mb-4 text-gray-600 flex flex-col gap-2'>
                        {searchfilter.title &&(

                            <span className='inline flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{searchfilter.title}
                            <img onClick={e =>setsearchfilter(prev =>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon}alt=''></img>
                            </span>
                        )}
                        {searchfilter.location &&(

                            <span className='inline flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded' > {searchfilter.location}
                            <img onClick={e =>setsearchfilter(prev =>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon}alt=''></img>
                            </span>
                        )}
                    </div>
                    </>
                )
            }
            <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4'>Search By Category</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobCategories.map((category,index)=>{
                            return(
                                <>
                                 <li className='flex gap-3 items-center' key={index}>
                              <input className='scale-125' type='checkbox' name="" id="" />
                              {category}
                            </li>
                            </>
                            )
                           
                        })
                    }
                </ul>
            </div>
             <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4 pt-14'>Search By Location</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobLocations.map((location,index)=>{
                            return(
                                <>
                                 <li className='flex gap-3 items-center' key={index}>
                              <input className='scale-125' type='checkbox' name="" id="" />
                              {location}
                            </li>
                            </>
                            )
                           
                        })
                    }
                </ul>
            </div>
        </div>
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
            <h3 className='font-medium text-3xl py-2'>Latest Jobs</h3>
            <p className='mb-8'>Get your desired job from top companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
              {/* Job Cards will be placed here */}
              {jobsData.slice((currentpage-1)*6,currentpage*6).map((job,index)=>(
                <JobCard key={index} job={job} />
              ))}
            </div>

            {jobsData.length >0 && (
                    <div className='flex items-center justify-center space-x-2 mt-10'>
                        <a href='#job-list'>
                            <img onClick={()=>setcurrentpage(Math.max(currentpage-1,1))} src={assets.left_arrow_icon} alt=''/>
                        </a>
                        {Array.from({length:Math.ceil(jobsData.length/6)}).map((_,index)=>(
                            <a href='#job-list'>
                                <button onClick={()=>setcurrentpage(index+1)}  className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 rounded ${currentpage==index+1 ? 'bg-blue-300 text-blue-600':'text-gray-500'}`}>{index +1}</button>
                            </a>
                        ))}
                         <a href='#job-list'>
                            <img onClick={()=>setcurrentpage(Math.min(currentpage+1,Math.ceil(jobsData.length/6)))} src={assets.right_arrow_icon} alt=''/>
                        </a>
                    </div>
            )}
        </section>
      
    </div>
  )
}

export default JobListing
