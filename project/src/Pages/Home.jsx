import React from 'react'
import Deliver from '../components/Deliver'
import Feedback from '../components/Feedback'
import GetStarted from '../components/GetStarted'
import Navbar from '../components/Navbar'
import Proxyproviders from '../components/Proxyproviders'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <GetStarted/>
        <Proxyproviders/>
        <Deliver/>
        <Feedback/>
    </div>
  )
}

export default Home