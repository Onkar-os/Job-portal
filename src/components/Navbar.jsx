import React from 'react'
import { assets } from '../assets/assets'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';



function Navbar() {
    
    const { openSignIn } = useClerk()
    const {user}=useUser();

    const scrollToBottom=()=>{

         // 1. Get the total height of the document content
    const documentHeight = document.body.scrollHeight;

    // 2. Scroll the window to that height
    window.scrollTo({
      top: documentHeight, // Scroll position is set to the very bottom
      behavior: 'smooth'   // Makes the scroll animation smooth
    });
    }
   
  return (
    <div className='shadow py-4 bg-black'>
      <div className='container px-4 2x1:px-20 mx-auto flex justify-between items-center'>
        <img onClick={scrollToBottom}  className='bg-white p-1 rounded' src={assets.logo} alt="" />
        {
            user
            ?<div className='flex items-center gap-3'>
               <Link className='text-white' to="/Application">Application</Link>
               <p className='text-white'>Welcome, {user.firstName}</p>
               <UserButton />
            </div>
            :<div className='flex gap-4 max-sm:text-xs'>
            <button className='recruiter'>Recruiter Login</button>
            <button onClick={ e=> openSignIn()} className='login'>Login</button>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar
