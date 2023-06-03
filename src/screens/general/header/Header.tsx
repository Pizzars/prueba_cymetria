'use client'

import Link from 'next/link'
import React from 'react'
import { ROUTES } from 'src/constants/routes'
import logo from '../../../assets/general/logo_header.png'
import LinkHeader from './LinkHeader'

const Header = () => {
  return (
    <div className='w-full h-[5rem] flex justify-between items-center px-8 shadow-lg bg-white'>
      <Link href={ROUTES.HOME} shallow>
        <img className='w-[12rem]' src={logo.src} alt='Logo' />
      </Link>
      <div className='flex-1 flex items-center justify-end'>
        <LinkHeader href={`${ROUTES.HOME}`} text='Home' />
        <LinkHeader href={`${ROUTES.ABOUT_US}`} text='Quienes somos' />
        <LinkHeader href={`${ROUTES.SERVICES}`} text='Servicios' />
        <LinkHeader href={`${ROUTES.CONTACT}`} text='Contacto' />
        <Link href={ROUTES.APP} shallow>
          <div className='px-4 py-1 ml-8 bg-primary text-white rounded-lg texl-sm shadow-sm'>
            Iniciar Sesión
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
