import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerContact = () => {
  return (
    <Banner
      title='Contactanos'
      text='Contáctanos, estamos aquí para brindarte soluciones integrales y personalizadas que priorizan la salud y bienestar de tus empleados.'
      image={banner.src}
    ></Banner>
  )
}

export default BannerContact
