import './globals.css'
import bg from '../src/assets/general/bg.jpg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <title>Cymetria</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo192.png' />
        <meta name='theme-color' content='#007ec7' />
        <meta name='description' content='' />
      </head>
      <body
        className='bg-secondary-200'
        style={{
          background: `url(${bg.src})`
        }}
      >
        {/* <ContextPage.Provider
          value={
            {
              splash,
              setSplash: setSplash
            } as any
          }
        >
          <> */}
        {children}
        <ToastContainer />
        {/* </>
        </ContextPage.Provider> */}
      </body>
    </html>
  )
}
