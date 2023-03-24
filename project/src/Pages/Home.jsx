import React from 'react'
import Deliver from '../components/Deliver'
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
    </div>
  )
}

export default Home