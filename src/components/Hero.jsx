import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

function Hero() {
  const { setsearchfilter, setissearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onsearch = () => {
    setsearchfilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setissearched(true);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-20 mx-auto my-10">

      {/* HERO TOP SECTION */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 sm:p-8 rounded mb-8 text-center">

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          over 10,00+ Jobs to Apply
        </h2>

        <p className="mb-6 sm:mb-8 max-w-xl mx-auto text-xs sm:text-sm font-light px-3">
          Find your dream job from thousands of listings.
        </p>

        {/* SEARCH BOX */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded text-gray-600 max-w-xl mx-4 sm:mx-auto p-3">

          {/* TITLE INPUT */}
          <div className="flex items-center border sm:border-none px-2 py-1 rounded sm:rounded-none">
            <img className="h-4 sm:h-5 mr-2" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="text-xs sm:text-sm rounded outline-none w-full"
              ref={titleRef}
            />
          </div>

          {/* LOCATION INPUT */}
          <div className="flex items-center border sm:border-none px-2 py-1 rounded sm:rounded-none">
            <img className="h-4 sm:h-5 mr-2" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="text-xs sm:text-sm rounded outline-none w-full"
              ref={locationRef}
            />
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={onsearch}
            className="bg-blue-500 px-4 sm:px-6 py-2 rounded text-white text-sm w-full sm:w-auto"
          >
            Search Jobs
          </button>

        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-4 sm:p-6 rounded-md">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-bold">Our Hiring Partners</p>

          <div className="flex justify-center flex-wrap gap-6 sm:gap-10">
            <img className="h-5 sm:h-6" src={assets.microsoft_logo} alt="" />
            <img className="h-5 sm:h-6" src={assets.amazon_logo} alt="" />
            <img className="h-5 sm:h-6" src={assets.accenture_logo} alt="" />
            <img className="h-5 sm:h-6" src={assets.walmart_logo} alt="" />
            <img className="h-5 sm:h-6" src={assets.samsung_logo} alt="" />
            <img className="h-5 sm:h-6" src={assets.adobe_logo} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
