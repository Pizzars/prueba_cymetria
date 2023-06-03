import Banner from 'src/screens/general/banner/Banner'
import banner from '../../../assets/home/banner.jpg'

const BannerHome = () => {
  return (
    <Banner
      title='Toma el control de tu salud'
      text='Contáctanos hoy mismo para conocer nuestros servicios de calidad.'
      image={banner.src}
    >
      <div>
        <button className='bg-white text-secondary font-bold text-lg py-2 px-4 rounded-lg'>
          Contáctanos
        </button>
        <button className='bg-secondary text-white ml-4 font-bold text-lg py-2 px-4 rounded-lg'>
          Ver servicios
        </button>
      </div>
    </Banner>
    // <div className='bg-primary flex justify-between items-center'>
    //   <div className='p-4 mr-8 text-start ml-14'>
    //     <h1 className='text-5xl font-bold text-white mb-2'>Toma el control de tu salud</h1>
    //     <p className='text-xl text-white mb-4'>
    //       Contáctanos hoy mismo para conocer nuestros servicios de calidad.
    //     </p>
    //     <div>
    //       <button className='bg-white text-secondary font-bold text-lg py-2 px-4 rounded-lg'>
    //         Contactar
    //       </button>
    //       <button className='bg-secondary text-white ml-4 font-bold text-lg py-2 px-4 rounded-lg'>
    //         Ver servicios
    //       </button>
    //     </div>
    //   </div>
    //   <div className='relative'>
    //     <img className='w-[38rem] ' src={banner.src} alt='health' />
    //     <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent ' />
    //   </div>
    // </div>
  )
}

export default BannerHome
