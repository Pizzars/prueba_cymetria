import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerServices = () => {
  return (
    <Banner
      title='Nuestros servicios'
      text='Contáctanos hoy mismo para conocer nuestros servicios de calidad.'
      image={banner.src}
    >
      <div>
        <button className='bg-white text-secondary font-bold text-lg py-2 px-4 rounded-lg'>
          Contáctanos
        </button>
      </div>
    </Banner>
  )
}

export default BannerServices
