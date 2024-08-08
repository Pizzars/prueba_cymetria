'use client'
import Button from '../general/buttons/Button'
import Input from '../general/inputs/Input'

const Home = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <Input type='number' label='Documento' placeholder='1001001001' />
        <Button text='Consultar' type='submit' className='w-full mt-4' />
      </form>
    </div>
  )
}

export default Home
