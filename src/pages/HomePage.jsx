import React from 'react'
import Hero from '../components/Hero'
import BrowseJob from '../components/BrowseJob'
import HomeCard from '../components/HomeCard'
import ViewAllJobs from '../components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <BrowseJob isHome ={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default Homepage