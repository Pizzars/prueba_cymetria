'use client'

import { useState } from 'react'
import Button from 'src/screens/general/buttons/Button'
import { sendContactEmail } from 'src/services/lambda'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [load, setLoad] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoad(true)
    toast.loading('Enviando solicitud')
    const response = await sendContactEmail(form)
    toast.dismiss()
    if (response) {
      toast.success('Solicitud de contacto enviada')
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } else {
      toast.error('Error al enviar la solicitud de contacto')
    }
    setLoad(false)
  }

  const onChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form
      className='flex flex-col items-center flex-1 pb-0 md:py-12 p-8 rounded-lg '
      onSubmit={handleSubmit}
    >
      <h3 className='md:hidden text-2xl text-primary font-bold mb-4'>HABLA CON NOSOTROS</h3>
      <h2 className='text-secondary mb-4 text-xl font-bold'>Formulario de contacto</h2>
      <label className='flex flex-col w-full'>
        <span className='text-secondary font-bold'>Nombre</span>
        <input
          type='text'
          className='border outline-primary bg-white rounded border-secondary mt-2 py-2 px-4 w-full text-secondary'
          name='name'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Correo</span>
        <input
          type='email'
          className='border bg-white rounded outline-primary border-secondary mt-2 py-2 px-4 w-full text-secondary'
          name='email'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Teléfono</span>
        <input
          type='text'
          className='border bg-white rounded outline-primary border-secondary mt-2 py-2 px-4 w-full text-secondary'
          name='phone'
          onChange={onChange}
          required
        />
      </label>
      <label className='flex flex-col w-full mx-12 mt-8'>
        <span className='text-secondary font-bold'>Mensaje</span>
        <textarea
          className='border bg-white rounded outline-primary border-secondary mt-2 py-2 px-4 w-full resize-none h-[10rem] text-secondary'
          name='message'
          onChange={onChange}
          required
        />
      </label>
      <Button
        disabled={load}
        text='Contactar ahora'
        className='mt-8 '
        onClick={() => null}
      ></Button>
    </form>
  )
}

export default ContactForm
