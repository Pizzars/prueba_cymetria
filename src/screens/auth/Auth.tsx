import { useState } from 'react'
import Login from './Login'
import SingUp from './SingUp'

const Auth = () => {
  const [login, setLogin] = useState(true)
  if (login) return <Login change={() => setLogin(false)} />

  return <SingUp change={() => setLogin(true)} />
}

export default Auth
