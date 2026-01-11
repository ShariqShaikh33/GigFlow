import React from 'react'
import CustomButton from '../../components/common/CustomButton'
import CustomTextInput from '../../components/common/CustomTextInput'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar'
import JobFeed from '../../components/Home/JobFeed'

function Home() {
  return (
    <>
      <Header/>
      {/* Gig creation form pending */}
      <SearchBar/>

      <JobFeed/>
    </>
  )
}

export default Home