'use client'

import useAuth from 'src/hooks/useAuth'
import Auth from 'src/screens/auth/Auth'
import BasePage from 'src/screens/general/base/BasePage'
import Home from 'src/screens/home/Home'

export default function HomePahe() {
  const auth = useAuth()

  return <BasePage>{!auth ? <Auth /> : <Home />}</BasePage>
}
