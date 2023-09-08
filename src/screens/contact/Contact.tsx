import BannerContact from './components/BannerContact'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

const Contact = () => {
  return (
    <div>
      <BannerContact />
      <div
        className='bg-white flex justify-center w-full'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
      >
        <div className='flex-col-reverse md:flex-row flex items-center'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
