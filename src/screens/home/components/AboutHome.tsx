import Link from 'next/link'
import about from '../../../assets/home/about.jpg'
import { ROUTES } from 'src/constants/routes'
const AboutHome = () => {
  return (
    <div className='flex items-center py-8 bg-white'>
      <div className='relative w-[38rem] flex justify-center'>
        <img className='w-[30rem] rounded-lg shadow-lg' src={about.src} alt='health' />
      </div>
      <div className='flex-1 px-12 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary'>Conócenos</h2>
        <p className='text-secondary text-center my-4'>
          AEQUSST Medicina Preventiva SAS es una empresa líder en el campo de la seguridad y salud
          en el trabajo en Colombia. Nos especializamos en brindar asesoría y consultoría en salud
          ocupacional a diversas industrias y empresas de todos los tamaños. Además, ofrecemos una
          amplia gama de exámenes médicos ocupacionales para evaluar la aptitud y prevenir riesgos
          laborales.
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
