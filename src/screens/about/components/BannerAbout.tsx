import Link from 'next/link'
import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerAbout = () => {
  return (
    <Banner
      // title='AEQUSST'
      title='EXÁMENES MÉDICOS OCUPACIONALES'
      // text='Contáctanos, estamos aquí para brindarte soluciones integrales y personalizadas que priorizan la salud y bienestar de tus empleados.'
      image={banner.src}
    >
      <div className='mt-8'>
        <Link
          href='/contacto'
          className='bg-white text-secondary font-bold text-lg py-2 px-4 rounded-lg'
        >
          Contáctanos
        </Link>
        <Link
          href='/servicios'
          className='bg-secondary text-white ml-4 font-bold text-lg py-2 px-4 rounded-lg'
        >
          Ver servicios
        </Link>
      </div>
    </Banner>
  )
}

export default BannerAbout
