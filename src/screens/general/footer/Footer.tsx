import React from 'react'
import logo from '../../../assets/general/logo.png'
import whatsapp from '../../../assets/general/whatsappIcon.svg'
import instagram from '../../../assets/general/instagranIcon.svg'
import facebook from '../../../assets/general/facebookIcon.svg'
import mail from '../../../assets/general/mailIcon.svg'
import phone from '../../../assets/general/phoneIcon.svg'
import { ROUTES } from 'src/constants/routes'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex w-full mx-auto bg-secondary'>
      <div className='flex flex-col lg:flex-row lg:justify-around items-center py-[50px] lg:py-[80px] mx-auto w-[90%] lg:max-w-[1500px]'>
        <div className='flex flex-col items-center mb-[50px] lg:mb-0'>
          <img className=' w-[12rem]' src={logo.src} alt='' />
          <div className='flex items-center mt-[1rem]'>
            <Link href={'https://api.whatsapp.com/send?phone=573112857543'} target='_blank' shallow>
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
        <div className='flex flex-col items-center font-Classico-URW text-primary'>
          <Link href={ROUTES.CONTACT} shallow>
            <div className='px-6 py-2 bg-primary text-white rounded-lg text-lg font-bold shadow-lg'>
              CONTÁCTANOS
            </div>
          </Link>

          <Link href={'tel: +57-311-285-7543'} target='_blank' shallow>
            <div className='flex items-center my-[25px] '>
              <img className='mr-[10px] w-[1rem]' src={phone.src} alt='' />
              <span className=''>+57 311 285 7543</span>
            </div>
          </Link>
          <Link
            href={'mailto: servicioalcliente@aequsstmedicinapreventiva.com'}
            target='_blank'
            shallow
          >
            <div className='flex items-center mb-[25px]'>
              <img className='mr-[10px] w-[1.5rem]' src={mail.src} alt='' />
              <span>servicioalcliente@aequsstmedicinapreventiva.com</span>
            </div>
          </Link>
          {/*<div className='flex items-center'>*/}
          {/*  <img className='mr-[10px] w-[1rem]' src={address.src} alt='' />*/}
          {/*  <span>Carrera 26 # 39-58, Bogotá, Colombia</span>*/}
          {/*</div>*/}
        </div>
      </div>
      <Link href={'https://api.whatsapp.com/send?phone=573112857543'} target='_blank' shallow>
        <div className='fixed bottom-8 right-0 h-16 bg-secondary border-primary border border-r-0 rounded-tl-xl button-contact-w-container rounded-bl-xl flex justify-center items-center'>
          <img className='w-12 h-12 mx-2 my-2 object-contain' src={whatsapp.src} alt='' />
          <div className={` mr-2 transition overflow-hidden button-contact-w text-primary`}>
            CONTÁCTANOS
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Footer
