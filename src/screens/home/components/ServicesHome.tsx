import service1 from '../../../assets/services/service1.jpg'
import service2 from '../../../assets/services/service2.jpg'

const services = [
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
  }
]

const ServicesHome = () => {
  return (
    <div className='flex flex-col justify-center items-center py-12 bg-white'>
      <h2 className=' text-primary mb-8 font-bold text-2xl'>Nuestros servicios</h2>
      <div className='grid grid-cols-4 gap-8 content-center '>
        {services.map(service => (
          <div
            key={service.id}
            className='bg-white rounded-lg overflow-hidden shadow-lg w-[14rem] h-[14rem] relative cursor-pointer'
          >
            <img
              src={service.icon}
              alt={service.title}
              className='w-[14rem] h-[14rem] object-cover'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-secondary hover:from-primary to-transparent '>
              <h3 className='text-lg font-bold flex items-end justify-center mx-8 text-center h-full pb-4'>
                {service.title}
              </h3>
              {/* <p className='text-gray-700'>{service.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      <a href='#' className='text-secondary underline font-bold mt-8 hover:text-primary'>
        Ver más servicios
      </a>
    </div>
  )
}

export default ServicesHome
