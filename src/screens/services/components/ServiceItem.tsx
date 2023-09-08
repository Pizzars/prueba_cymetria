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

function removeSpecial(text: string) {
  // Definir arrays de vocales con y sin tilde
  const vocalesConTilde = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú']
  const vocalesSinTilde = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  // Reemplazar vocales con tilde por vocales sin tilde
  for (let i = 0; i < vocalesConTilde.length; i++) {
    const regex = new RegExp(vocalesConTilde[i], 'g')
    text = text.replace(regex, vocalesSinTilde[i])
  }

  return text
}

const ServiceItem = ({ service }: Params) => {
  return (
    <div
      id={`service-${service.id}`}
      className=' mx-4 bg-white rounded-full overflow-hidden w-[10rem] md:w-[12rem] h-[10rem] md:h-[12rem] relative cursor-pointer carousel-item'
    >
      <Link
        href={`/servicios/${removeSpecial(service.title).toLowerCase().replaceAll(' ', '-')}`}
        key={service.id}
      >
        <img src={service.icon} alt={service.title} className='w-[14rem] h-[14rem] object-cover' />
        <div className='absolute top-0 left-0 w-full h-full bg-secondary bg-opacity-30 hover:bg-primary hover:bg-opacity-30 text-white '>
          <h3 className='text-lg text-white drop-shadow-lg shadow-black font-bold flex items-center hover:pb-0 justify-center mx-8 text-center h-full transition-all'>
            {service.title}
          </h3>
          {/* <p className='text-gray-700'>{service.description}</p> */}
        </div>
      </Link>
    </div>
  )
}

export default ServiceItem
