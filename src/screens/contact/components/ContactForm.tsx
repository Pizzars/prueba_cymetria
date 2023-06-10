'use client'

import { useState } from 'react'
import Button from 'src/screens/general/buttons/Button'
import { sendContactEmail } from 'src/services/lambda'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    sendContactEmail(form)
  }

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form
      className='flex flex-col items-center flex-1 py-12 p-8 rounded-lg '
      onSubmit={handleSubmit}
    >
      <h2 className='text-secondary mb-4 text-xl font-bold'>Formulario de contacto</h2>
      <label className='flex flex-col w-full'>
        <span className='text-secondary font-bold'>Nombre</span>
        <input
          type='text'
          className='border outline-primary rounded border-secondary mt-2 py-2 px-4 w-full'
          name='name'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Correo</span>
        <input
          type='email'
          className='border rounded outline-primary border-secondary mt-2 py-2 px-4 w-full'
          name='email'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Teléfono</span>
        <input
          type='text'
          className='border rounded outline-primary border-secondary mt-2 py-2 px-4 w-full'
          name='phone'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Mensaje</span>
        <textarea
          className='border rounded outline-primary border-secondary mt-2 py-2 px-4 w-full resize-none h-[10rem]'
          name='message'
          onChange={onChange}
          required
        />
      </label>
      <Button text='Contactar ahora' className='mt-8 ' onClick={() => null}></Button>
    </form>
  )
}

export default ContactForm
