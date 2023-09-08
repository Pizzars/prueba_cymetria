'use client'
import { useParams } from 'next/navigation'
import InfoSection from 'src/screens/about/components/InfoSection'
import BannerServices from '../components/BannerServices'
import { services } from '../components/ServiceList'

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

const DetailService = () => {
  const { id } = useParams()

  const service = services.find(
    s => removeSpecial(s.title).toLowerCase().replaceAll(' ', '-') == (id as any)
  )

  if (!service) return <div></div>

  return (
    <div>
      <BannerServices />
      <InfoSection
        color='bg-secondary-200'
        title={service.title}
        text={service.description}
        image={service.icon}
        textPosition={1}
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
