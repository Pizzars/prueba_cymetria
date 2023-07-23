import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Splash from '../splash/Splash'
import ContextState from './ContextState'

interface Params {
  children: any
}

const BasePage = ({ children }: Params) => {
  return (
    <div className='w-full'>
      <Header />
      {children}
      <Footer />
      <Splash />
    </div>
  )
}

export default BasePage
