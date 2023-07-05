import Link from 'next/link'
import service1 from '../../../assets/services/service1.jpg'
import service2 from '../../../assets/services/service2.jpg'
import ServiceItem from './ServiceItem'

export const services = [
  {
    id: 1,
    title: 'Exámenes Médicos',
    description: 'Realizamos exámenes médicos completos para evaluar tu estado de salud general.',
    icon: service1.src
  },
  {
    id: 2,
    title: 'Consultas Especializadas',
    description: 'Ofrecemos consultas con médicos especializados en diversas áreas de la salud.',
    icon: service2.src
  },
  {
    id: 3,
    title: 'Exámenes Médicos 2',
    description: 'Realizamos exámenes médicos completos para evaluar tu estado de salud general.',
    icon: service1.src
  },
  {
    id: 4,
    title: 'Consultas Especializadas 2',
    description: 'Ofrecemos consultas con médicos especializados en diversas áreas de la salud.',
    icon: service2.src
  },
  {
    id: 5,
    title: 'Exámenes Médicos 3',
    description: 'Realizamos exámenes médicos completos para evaluar tu estado de salud general.',
    icon: service1.src
  },
  {
    id: 6,
    title: 'Consultas Especializadas 3',
    description: 'Ofrecemos consultas con médicos especializados en diversas áreas de la salud.',
    icon: service2.src
  },
  {
    id: 7,
    title: 'Exámenes Médicos 4',
    description: 'Realizamos exámenes médicos completos para evaluar tu estado de salud general.',
    icon: service1.src
  },
  {
    id: 8,
    title: 'Consultas Especializadas 4',
    description: 'Ofrecemos consultas con médicos especializados en diversas áreas de la salud.',
    icon: service2.src
  },
  {
    id: 9,
    title: 'Exámenes Médicos 5',
    description: 'Realizamos exámenes médicos completos para evaluar tu estado de salud general.',
    icon: service1.src
  },
  {
    id: 10,
    title: 'Consultas Especializadas 5',
    description: 'Ofrecemos consultas con médicos especializados en diversas áreas de la salud.',
    icon: service2.src
  }
]

const ServiceList = () => {
  return (
    <div className='flex flex-col justify-center items-center py-12 bg-white'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 content-center '>
        {services.map(service => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}

export default ServiceList
