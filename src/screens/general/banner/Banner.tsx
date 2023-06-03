interface Params {
  image: string
  title: string
  text: string
  children?: any
}

const Banner = ({ image, title, text, children }: Params) => {
  return (
    <div className='bg-primary flex justify-between items-center'>
      <div className='p-4 mr-8 text-start ml-14'>
        <h1 className='text-5xl font-bold text-white mb-2'>{title}</h1>
        <p className='text-xl text-white mb-4'>{text}</p>
        {children}
      </div>
      <div className='relative'>
        <img className='w-[38rem] ' src={image} alt='health' />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent ' />
      </div>
    </div>
  )
}

export default Banner
