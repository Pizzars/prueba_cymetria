'use client'
import React, { useContext, useEffect, useState } from 'react'
import logo1 from '../../../assets/general/splash/logo_1.png'
import logo2 from '../../../assets/general/splash/logo_2.png'
import ContextPage from '../base/ContextPage'

const Splash = () => {
  const [step, setStep] = useState(0)
  // const { splash, setSplash } = useContext(ContextPage) as any
  const [splash, setSplash] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStep(1)
      setTimeout(() => {
        setStep(2)

        setTimeout(() => {
          setStep(3)

          setTimeout(() => {
            setStep(4)
            setSplash(true)
          }, 1000)
        }, 2000)
      }, 1000)
    }, 100)
  }, [])

  if (step > 3 || splash) return <></>

  return (
    <div
      className={`z-50 fixed transition-all duration-1000 left-0 top-0 w-full h-full bg-white justify-center items-center flex ${
        step > 2 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`w-[10rem] transition-all duration-1000 ${
          step > 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img src={logo1.src} alt='logo 1' />
      </div>
      <div
        className={`overflow-hidden duration-1000 transition-all ${step > 1 ? 'w-[20rem]' : 'w-0'}`}
      >
        <img src={logo2.src} alt='logo 1' />
      </div>
    </div>
  )
}

export default Splash
