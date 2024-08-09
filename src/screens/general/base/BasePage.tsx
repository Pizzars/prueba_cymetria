import React from 'react'
import Header from '../header/Header'
// import Footer from '../footer/Footer'
import Splash from '../splash/Splash'

interface Params {
  children: any
}

const BasePage = ({ children }: Params) => {
  return (
    <div className='w-full flex justify-center max-w-screen'>
      <Header />
      {children}
      {/* <Footer /> */}
      {/* <Splash /> */}
    </div>
  )
}

export default BasePage
