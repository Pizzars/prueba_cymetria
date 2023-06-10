import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerContact = () => {
  return (
    <Banner
      title='Contactanos'
      text='Contáctanos hoy mismo para conocer nuestros servicios de calidad.'
      image={banner.src}
    ></Banner>
  )
}

export default BannerContact
