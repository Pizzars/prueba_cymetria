import './globals.css'
import bg from '../src/assets/general/bg.jpg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head>
        <title>AEQUSST Medicina Preventiva SAS</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo192.png' />
        <meta name='theme-color' content='#75b6b6' />
        <meta
          name='description'
          content='Somos una IPS de salud ocupacional especializada en servicios integrales y exámenes médicos ocupacionales. Garantizamos un entorno seguro y saludable.'
        />
        <meta
          name='keywords'
          content='salud ocupacional, exámenes médicos, bienestar laboral, seguridad laboral, productividad empresarial, salud y trabajo, servicios de salud, evaluaciones personalizadas, entorno laboral seguro, equipo multidisciplinario, expertos en salud ocupacional'
        />
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
