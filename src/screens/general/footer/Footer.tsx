import React from 'react'
import logo from '../../../assets/general/logo.png'
import address from '../../../assets/general/addressIcon.svg'
import whatsapp from '../../../assets/general/whatsappIcon.svg'
import whatsappContact from '../../../assets/general/whatsappIcon.png'
import instagram from '../../../assets/general/instagranIcon.svg'
import facebook from '../../../assets/general/facebookIcon.svg'
import mail from '../../../assets/general/mailIcon.svg'
import phone from '../../../assets/general/phoneIcon.svg'
import { ROUTES } from 'src/constants/routes'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='flex w-full mx-auto bg-secondary flex-col lg:flex-row'>
        <div className='flex flex-col items-center pt-[30px] pb-[10px] lg:py-[40px] mx-auto w-[90%] lg:w-[50%] lg:max-w-[1500px]'>
          <div className='flex flex-col items-center mb-[50px] lg:mb-0 text-primary'>
            <img className=' w-[12rem]' src={logo.src} alt='' />
            <Link href={'tel: +57-311-285-7543'} target='_blank' shallow>
              <div className='flex items-center mb-[12px] '>
                <img className='mr-[10px] w-[1rem]' src={phone.src} alt='' />
                <span className=''>+57 311 285 7543</span>
              </div>
            </Link>
            <Link
              href={'mailto: servicioalcliente@aequsstmedicinapreventiva.com'}
              target='_blank'
              shallow
            >
              <div className='flex items-center mb-[25px] max-w-[80%] md:max-w-full mx-auto overflow-hidden'>
                <img className='mr-[10px] w-[1.5rem]' src={mail.src} alt='' />
                <span className=' text-ellipsis inline-block flex-1 truncate'>
                  servicioalcliente@aequsstmedicinapreventiva.com
                </span>
              </div>
            </Link>
            <Link href={ROUTES.CONTACT} shallow>
              <div className='px-6 py-2 bg-primary text-white rounded-lg text-lg font-bold shadow-lg'>
                CONTÁCTANOS
              </div>
            </Link>
            <div className='flex items-center mt-[1rem]'>
              <Link
                href={'https://api.whatsapp.com/send?phone=573112857543'}
                target='_blank'
                shallow
              >
                <img className='mx-[5px] w-[2.5rem]' src={whatsapp.src} alt='' />
              </Link>
              <Link href={'https://instagram.com'} target='_blank' shallow>
                <img className='mx-[5px] w-[2.5rem]' src={instagram.src} alt='' />
              </Link>
              <Link href={'https://facebook.com'} target='_blank' shallow>
                <img className='mx-[5px] w-[2.5rem]' src={facebook.src} alt='' />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full mx-auto mb-12 lg:w-[50%] flex flex-col items-center justify-center px-6 md:px-12 text-primary'>
          <h3 className='text-lg mb-4 font-bold'>NUESTRA UBICACIÓN</h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.11674990609527!2d-74.07382874900655!3d4.605839302875566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9986c2a23c6b%3A0xfa9c14b4f6195cb7!2sAEQUSST%20MEDICINA%20PREVENTIVA%20SAS!5e0!3m2!1ses-419!2sco!4v1712764463721!5m2!1ses-419!2sco'
            width='100%'
            height='50%'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <Link
            className='mt-8'
            href={'https://maps.app.goo.gl/FUXrC87BLhDxZ86x5'}
            target='_blank'
            shallow
          >
            <div className='flex items-center'>
              <img className='mr-[10px] w-[1rem] mb-auto' src={address.src} alt='' />
              <p className='text-center'>
                Calle 18 #9-20 local 405, Barrio las Nieves
                <br />
                Centro comercial centro optico Mira
                <br />
                Bogotá, Colombia
              </p>
            </div>
          </Link>
        </div>

        <Link href={'https://api.whatsapp.com/send?phone=573112857543'} target='_blank' shallow>
          <div className='fixed bottom-8 right-0 h-16 bg-[#2ac664] rounded-tl-xl button-contact-w-container rounded-bl-xl flex justify-center items-center'>
            <img className='w-12 h-12 mx-2 my-2 object-contain' src={whatsappContact.src} alt='' />
            <div className={` mr-2 transition overflow-hidden button-contact-w text-white`}>
              CONTÁCTANOS
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Footer
