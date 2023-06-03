import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerAbout = () => {
  return (
    <Banner
      title='AEQUSST'
      text='Seguridad y salud en el trabajo: Nuestra prioridad, tu bienestar'
      image={banner.src}
    ></Banner>
  )
}

export default BannerAbout
