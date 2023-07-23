'use client'
import { useEffect, useState } from 'react'
import ServiceItem from 'src/screens/services/components/ServiceItem'
import { services } from 'src/screens/services/components/ServiceList'

const ServicesHome = () => {
  const [position, setPosition] = useState(1)

  const change = (next: boolean) => {
    debugger
    const container = document.getElementById('container-services')
    const pos = next
      ? position + 1 > services.length
        ? 1
        : position + 1
      : position - 1 === 0
      ? services.length
      : position - 1

    const item = document.getElementById(`service-${pos}`)
    if (container && item) {
      container.scrollTo({
        left: item.offsetLeft,
        behavior: 'smooth'
      })
    }
    setPosition(pos)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      change(true)
    }, 5000)
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [position])

  // const list1 = services.slice(0, 4)
  // const list2 = services.slice(4, 8)

  return (
    <div className='flex flex-col justify-center items-center py-12 md:px-24'>
      <h2 className=' text-primary mb-8 font-bold text-2xl'>Nuestros servicios</h2>
      <div className='w-full relative '>
        <div className='absolute top-0 z-10 left-0 bg-gradient-to-r from-secondary-200 to-transparent primary w-12 h-[10rem] md:h-[12rem] flex justify-center items-center'>
          <button
            className=' w-[2rem] justify-center items-center flex h-full'
            onClick={() => change(false)}
          >
            <div className='w-[1.5rem] h-[1.5rem] border-b-4 border-l-4 border-primary rotate-45'></div>
          </button>
        </div>

        <div
          className='w-full px-8 container-scroll x mandatory-scroll-snapping relative overflow-hidden'
          dir='ltr'
          id='container-services'
        >
          {services.map(service => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>

        <div className='absolute top-0 z-10 right-0 bg-gradient-to-l from-secondary-200 to-transparent primary w-12 h-[10rem] md:h-[12rem] flex justify-center items-center'>
          <button
            className=' w-[2rem] justify-center items-center flex h-full'
            onClick={() => change(true)}
          >
            <div className='w-[1.5rem] h-[1.5rem] border-t-4 border-r-4 border-primary rotate-45'></div>
          </button>
        </div>
      </div>

      {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 content-center '> */}
      {/* {services.map(service => (
            <ServiceItem service={service} key={service.id} />
          ))} */}
      {/* </div> */}
      <a href='#' className='text-secondary underline font-bold mt-8 hover:text-primary'>
        Ver más servicios
      </a>
    </div>
  )
}

export default ServicesHome
