interface Params {
  image: string
  title: string
  text: string
  children?: any
}

const Banner = ({ image, title, text, children }: Params) => {
  return (
    <div className='bg-primary flex flex-col-reverse md:flex-row justify-between items-center'>
      <div className='hidden md:block pb-8 mt-24 md:mt-10 md:py-4 p-4 md:mr-8 text-center md:text-left md:ml-14'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'>{title}</h1>
        <p className='text-xl text-white mb-4'>{text}</p>
        {children}
      </div>
      <div className='relative'>
        <img className='w-[40rem] h-[25rem] object-cover md:h-[auto]' src={image} alt='health' />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent'>
          <div className='block md:hidden pb-8 mt-24 md:mt-10 md:py-4 p-4 md:mr-8 text-center md:text-left md:ml-14'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'>{title}</h1>
            <p className='text-xl text-white mb-4'>{text}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
