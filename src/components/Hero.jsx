import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/Appcontext";

function Hero() {
  const { setsearchfilter, setissearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onsearch = () => {
    setsearchfilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    })
    setissearched(true)

  }
  return (
    <div className="container 2x1:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded mb-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          {" "}
          over 10,00+ Jobs to Apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Find your dream job from thousands of listings.
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="max-sm:text-xs rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button onClick={onsearch} className="bg-blue-500 px-6 py-2 rounded text-white m-l">
            Search Jobs
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 flex-wrap lg:gap-15">
          <p className="font-bold">
            <strong>Our Hiring Patners</strong>
          </p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
