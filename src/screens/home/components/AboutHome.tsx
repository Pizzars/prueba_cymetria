import Link from 'next/link'
import about from '../../../assets/home/about.jpg'
import { ROUTES } from 'src/constants/routes'
const AboutHome = () => {
  return (
    <div
      className='flex-col md:flex-row flex items-center py-8 bg-white-back'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <div className='relative w-[80%] mb-8 md:mb-0 md:w-[38rem] flex justify-center'>
        <img className='w-[30rem] rounded-lg shadow-lg' src={about.src} alt='health' />
      </div>
      <div className='flex-1 px-12 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary'>Conócenos</h2>
        <p className='text-secondary text-center my-4'>
          En AEQUSST estamos comprometidos con la salud y bienestar de los trabajadores y las
          empresas. Somos una empresa especializada en ofrecer servicios integrales de salud
          ocupacional y exámenes médicos ocupacionales, dedicados a garantizar que los empleados se
          desempeñen en un entorno seguro y saludable.
        </p>
        <Link
          href={ROUTES.ABOUT_US}
          className='text-secondary underline font-bold mt-2 hover:text-primary'
        >
          <span>Saber más</span>
        </Link>
      </div>
    </div>
  )
}

export default AboutHome
