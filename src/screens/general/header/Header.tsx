'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from 'src/constants/routes'
import logo from '../../../assets/general/logo.png'
// import LinkHeader from './LinkHeader'
import useAuth, { saveToken } from 'src/hooks/useAuth'

const Header = () => {
  // const [show, setShow] = useState(false)
  const auth = useAuth()
  const route = usePathname()
  const isApp = route === '/app'
  return (
    <div
      className={`absolute top-o left-0 w-full max-w-full z-10 h-[7rem] flex justify-between items-center px-8 ${
        isApp ? 'bg-primary' : ' bg-gradient-to-b from-primary to-transparent'
      } `}
    >
      <Link href={ROUTES.HOME} shallow>
        <img className='w-[10rem] md:w-[16rem]' src={logo.src} alt='Logo' />
      </Link>
      <div className='flex flex-1 items-center justify-end'>
        {auth && (
          <button
            onClick={() => {
              saveToken('')
              location.reload()
            }}
          >
            <div className='px-4 py-1 ml-8 bg-secondary text-white rounded-lg texl-sm shadow-sm'>
              Cerrar Sessión
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
