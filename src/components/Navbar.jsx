import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';

function Navbar() {

  const { openSignIn } = useClerk()
  const { user } = useUser();

  const scrollToBottom = () => {
    const documentHeight = document.body.scrollHeight;
    window.scrollTo({
      top: documentHeight,
      behavior: 'smooth'
    });
  }

  return (
    <div className='shadow py-4 bg-black'>
      <div className='container px-4 sm:px-6 md:px-10 lg:px-16 mx-auto flex justify-between items-center'>

        {/* LOGO */}
        <img
          onClick={scrollToBottom}
          className='bg-white p-1 rounded h-8 sm:h-10 md:h-12 w-auto cursor-pointer'
          src={assets.logo}
          alt=""
        />

        {/* RIGHT SIDE */}
        {
          user ? (
            <div className='flex items-center gap-3 max-sm:flex-col max-sm:items-end'>
              <Link className='text-white text-sm sm:text-base' to="/Application">Application</Link>
              <p className='text-white text-sm sm:text-base'>Welcome, {user.firstName}</p>
              <UserButton />
            </div>
          ) : (
            <div className='flex gap-4 max-sm:gap-2 max-sm:flex-col max-sm:items-end max-sm:text-xs'>
              <button className='recruiter text-white border border-white px-3 py-1 rounded sm:px-4 sm:py-2'>
                Recruiter Login
              </button>
              <button
                onClick={e => openSignIn()}
                className='login text-white border border-white px-3 py-1 rounded sm:px-4 sm:py-2'
              >
                Login
              </button>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Navbar
