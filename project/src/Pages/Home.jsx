import React from 'react'
import Deliver from '../components/Deliver'
import Exclusive from '../components/Exclusive'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
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
        <Exclusive/>
        <Footer/>
    </div>
  )
}

export default Home