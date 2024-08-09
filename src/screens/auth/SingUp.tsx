import React, { useState } from 'react'
import Input from '../general/inputs/Input'
import Button from '../general/buttons/Button'
import { postData } from 'src/proxy/BackendREST'
import { ResponseType } from 'src/proxy/responseData'
import { toast } from 'react-toastify'
import { saveToken } from 'src/hooks/useAuth'

interface Params {
  change: () => void
}

const SingUp = ({ change }: Params) => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Las contraseñas no coinciden')
      return
    }
    toast.loading('Creando cuenta...')
    const res = await postData('register', { username: user, password })
    if (res.status == ResponseType.ERROR) {
      toast.dismiss()
      toast.error(res.data.message)
      return
    }

    const resLogin = await postData('login', { username: user, password })
    toast.dismiss()
    if (resLogin.data.token) {
      toast.success('Cuenta creada')
      saveToken(resLogin.data.token)
      location.reload()
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-8 px-8'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center border border-primary w-full rounded-lg p-4 shadow-lg bg-white mb-4'
      >
        <Input
          value={user}
          onChange={e => setUser(e.target.value)}
          type='text'
          label='Usuario'
          placeholder='user1'
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          label='Contraseña'
          placeholder='password'
        />
        <Input
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          type='password'
          label='Confirmar contraseña'
          placeholder='password'
        />
        <Button text='Iniciar Sesión' type='submit' className='w-full mt-4' />
        <Button
          text='Registrarse'
          type='button'
          onClick={change}
          className='w-full mt-4 bg-secondary'
        />
      </form>
    </div>
  )
}

export default SingUp
