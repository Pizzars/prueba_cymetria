'use client'
import { useParams } from 'next/navigation'
import InfoSection from 'src/screens/about/components/InfoSection'
import about from '../../../assets/home/about.jpg'
import BannerServices from '../components/BannerServices'
import { services } from '../components/ServiceList'

const DetailService = () => {
  const { id } = useParams()

  const service = services.find(s => s.title.toLowerCase().replaceAll(' ', '-') == (id as any))

  if (!service) return <div></div>

  return (
    <div>
      <BannerServices />
      <InfoSection
        color='bg-secondary-200'
        title={service.title}
        text={service.description}
        image={service.icon}
      />
      <InfoSection
        title='Contáctanos'
        text={`Si deseas más información sobre nuestros servicios o tienes alguna consulta, no dudes en contactarnos. Estamos aquí para ayudarte. ¡Estamos ansiosos por escucharte y colaborar en tus necesidades de seguridad y salud en el trabajo! Puedes comunicarte con nosotros.`}
      >
        <button className='bg-secondary text-primary font-bold text-md mt-8 py-2 px-4 rounded-lg'>
          Contactar ahora
        </button>
      </InfoSection>
    </div>
  )
}

export default DetailService
