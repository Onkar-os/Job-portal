import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>

      <Navbar></Navbar>
      <Hero></Hero>
      <JobListing></JobListing>
      <AppDownload></AppDownload>
      <Footer></Footer>
    </div>
  )
}

export default Home
