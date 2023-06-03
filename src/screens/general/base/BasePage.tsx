import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

interface Params {
  children: any
}

const BasePage = ({ children }: Params) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BasePage
