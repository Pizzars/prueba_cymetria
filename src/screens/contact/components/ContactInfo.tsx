import mail from '../../../assets/general/mailIcon.svg'
import phone from '../../../assets/general/phoneIcon.svg'

const ContactInfo = () => {
  return (
    <div className='flex-1 flex flex-col items-center p-12'>
      <h3 className='hidden md:block text-2xl text-primary font-bold mb-4'>HABLA CON NOSOTROS</h3>
      <p className='text-secondary text-center mb-8'>
        Gracias por visitar nuestro sitio web! Si tienes alguna pregunta, comentario o consulta
        sobre nuestro servicios, no dudes en ponerte en contacto con nosotros a través de nuestro
        formulario de contacto.
      </p>
      <h3 className='text-2xl text-primary font-bold mb-4'>Información de contacto</h3>
      <div className='flex items-center mb-[25px] text-secondary'>
        <img className='mr-[10px] w-[1rem]' src={phone.src} alt='' />
        <span className='text-secondary'>+57 ### ### ####</span>
      </div>
      <div className='flex items-center mb-[25px]text-secondary'>
        <img className='mr-[10px] w-[1.5rem] ' src={mail.src} alt='' />
        <span className='text-secondary'>correo@correo.com</span>
      </div>
    </div>
  )
}

export default ContactInfo
