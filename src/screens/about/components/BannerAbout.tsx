import Link from 'next/link'
import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerAbout = () => {
  return (
    <Banner
      title='AEQUSST'
      text='Seguridad y salud en el trabajo: Nuestra prioridad, tu bienestar'
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
