import Link from 'next/link'
import React from 'react'
export interface ServiceModel {
  id: string | number
  title: string
  description: string
  icon: string
}
interface Params {
  service: ServiceModel
}

const ServiceItem = ({ service }: Params) => {
  return (
    <Link
      href={`/servicios/${service.id}`}
      key={service.id}
      className='bg-white rounded-lg overflow-hidden shadow-lg w-[40vw] md:w-[14rem] h-[7rem] md:h-[14rem] relative cursor-pointer'
    >
      <img src={service.icon} alt={service.title} className='w-[14rem] h-[14rem] object-cover' />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-secondary hover:from-primary to-transparent text-white '>
        <h3 className='text-lg font-bold flex items-end justify-center mx-8 text-center h-full pb-4 '>
          {service.title}
        </h3>
        {/* <p className='text-gray-700'>{service.description}</p> */}
      </div>
    </Link>
  )
}

export default ServiceItem
