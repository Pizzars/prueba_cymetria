import service1 from '../../../assets/services/ANALISI_DE_PUESTO_DE_TRABAJO.jpg'
import service2 from '../../../assets/services/FONOAUDILOGIA.jpg'
import service3 from '../../../assets/services/MEDICINA_GENERAL.jpg'
import service4 from '../../../assets/services/OPTOMETRIA.jpg'
import service5 from '../../../assets/services/PSICOLOGIA.jpg'
import ServiceItem from './ServiceItem'

export const services = [
  {
    id: 1,
    title: 'ANALISI DE PUESTO DE TRABAJO',
    description: '',
    icon: service1.src
  },
  {
    id: 2,
    title: 'FONOAUDILOGIA',
    description: '',
    icon: service2.src
  },
  {
    id: 3,
    title: 'MEDICINA GENERAL',
    description: '',
    icon: service3.src
  },
  {
    id: 4,
    title: 'OPTOMETRIA',
    description: '',
    icon: service4.src
  },
  {
    id: 5,
    title: 'PSICOLOGIA',
    description: '',
    icon: service5.src
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
