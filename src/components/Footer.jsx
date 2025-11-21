import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  function open() {
    window.open("https://www.facebook.com/", "_blank");
  }
  function open1() {
    window.open("https://www.instagram.com/", "_blank");
  }
  function open2() {
    window.open("https://www.twitter.com/", "_blank");
  }
   const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img onClick={scrollToTop} width={160} src={assets.logo} alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden">
        copyright © 2024 Job-Portal. All rights reserved.
      </p>
      <div className="flex gap-2.5">
        <img onClick={open} width={38} src={assets.facebook_icon} alt="" />
        <img onClick={open1} width={38} src={assets.instagram_icon} alt="" />
        <img onClick={open2} width={38} src={assets.twitter_icon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
