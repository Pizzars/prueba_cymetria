'use client'
import { useState } from 'react'
import ContextPage from 'src/screens/general/base/ContextPage'
import './globals.css'
import bg from '../src/assets/general/bg.jpg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [splash, setSplash] = useState(false)

  return (
    <ContextPage.Provider
      value={
        {
          splash,
          setSplash: setSplash
        } as any
      }
    >
      <html lang='en'>
        <head>
          <title>AEQUSST Medicina Preventiva SAS</title>
          {/* will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
        </head>
        <body
          className='bg-secondary-200'
          style={{
            background: `url(${bg.src})`
          }}
        >
          {children}
          <ToastContainer />
        </body>
      </html>
    </ContextPage.Provider>
  )
}
