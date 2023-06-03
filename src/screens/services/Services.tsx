import React from 'react'
import BannerServices from './components/BannerServices'
import ServiceList from './components/ServiceList'
import InfoSection from '../about/components/InfoSection'

const Services = () => {
  return (
    <div>
      <BannerServices />
      <ServiceList />
      <InfoSection
        title='Contáctanos'
        text={`Si deseas más información sobre nuestros servicios o tienes alguna consulta, no dudes en contactarnos. Estamos aquí para ayudarte. ¡Estamos ansiosos por escucharte y colaborar en tus necesidades de seguridad y salud en el trabajo! Puedes comunicarte con nosotros.`}
        color='bg-transparent'
      >
        <button className='bg-secondary text-primary font-bold text-md mt-8 py-2 px-4 rounded-lg'>
          Contactar ahora
        </button>
      </InfoSection>
    </div>
  )
}

export default Services
