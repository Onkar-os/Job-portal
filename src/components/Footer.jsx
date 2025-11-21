import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={160} src={assets.logo} alt=''/>
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden'>copyright © 2024 Job-Portal. All rights reserved.</p>
        <div className='flex gap-2.5' >
            <img width={38} src={assets.facebook_icon} alt=''/>
            <img width={38} src={assets.instagram_icon} alt=''/>
            <img width={38} src={assets.twitter_icon} alt=''/>

        </div>
      
    </div>
  )
}

export default Footer
