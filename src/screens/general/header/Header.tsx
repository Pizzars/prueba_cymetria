'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ROUTES } from 'src/constants/routes'
import logo from '../../../assets/general/logo_header-white.png'
import LinkHeader from './LinkHeader'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='absolute top-o left-0 w-full z-10 h-[7rem] flex justify-between items-center px-8 '>
      <Link href={ROUTES.HOME} shallow>
        <img className='w-[16rem]' src={logo.src} alt='Logo' />
      </Link>
      <div className='md:flex flex-1 hidden items-center justify-end'>
        <LinkHeader href={`${ROUTES.HOME}`} text='Home' />
        <LinkHeader href={`${ROUTES.ABOUT_US}`} text='Quienes somos' />
        <LinkHeader href={`${ROUTES.SERVICES}`} text='Servicios' />
        <LinkHeader href={`${ROUTES.CONTACT}`} text='Contacto' />
        <Link href={ROUTES.APP} shallow>
          <div className='px-4 py-1 ml-8 bg-secondary text-white rounded-lg texl-sm shadow-sm'>
            Iniciar Sesión
          </div>
        </Link>
      </div>
      <div
        className={`fixed w-full h-full top-0 ${
          show ? 'left-0' : ' -left-[100vw]'
        } md:hidden transition-all delay-500 flex-col flex-1 flex items-center justify-center bg-white z-50`}
      >
        <LinkHeader href={`${ROUTES.HOME}`} text='Home' />
        <LinkHeader href={`${ROUTES.ABOUT_US}`} text='Quienes somos' />
        <LinkHeader href={`${ROUTES.SERVICES}`} text='Servicios' />
        <LinkHeader href={`${ROUTES.CONTACT}`} text='Contacto' />
        <Link href={ROUTES.APP} shallow>
          <div className='my-4 md:my-0 px-4 py-1 md:ml-8 bg-primary text-white rounded-lg text-2xl md:texl-sm shadow-sm'>
            Iniciar Sesión
          </div>
        </Link>
        <button
          className='absolute top-0 right-0 rounded-full w-10 h-10 text-white bg-primary flex justify-center items-center text-xl font-bold m-4'
          onClick={() => setShow(false)}
        >
          x
        </button>
      </div>
      <div className='md:hidden'>
        <button
          className='w-10 h-10 bg-primary rounded-full flex flex-col justify-center items-center'
          onClick={() => setShow(true)}
        >
          <div className='w-6 h-1 rounded-lg bg-white'></div>
          <div className='w-6 h-1 rounded-lg bg-white my-1'></div>
          <div className='w-6 h-1 rounded-lg bg-white'></div>
        </button>
      </div>
    </div>
  )
}

export default Header
