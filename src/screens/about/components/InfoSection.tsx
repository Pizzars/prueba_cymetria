interface Params {
  image?: string
  title: string
  text: string
  left?: boolean
  color?: string
  children?: any
}

const InfoSection = ({ image, title, text, left = true, color = 'bg-white', children }: Params) => {
  return (
    <div
      className={`${
        left ? 'flex-col-reverse md:flex-row' : 'flex-col md:flex-row'
      } flex items-center py-8 ${color}`}
    >
      {left && image && (
        <div className='relative w-[80%] mb-8 md:mb-0 md:w-[38rem] flex justify-center'>
          <img className='w-[100%] md:w-[30rem] rounded-lg shadow-lg' src={image} alt='health' />
        </div>
      )}
      <div className='flex-1 px-12 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary'>{title}</h2>
        <p
          className={`text-secondary text-center my-4 ${
            image ? '' : 'max-w-[80vw] w-[100%] md:w-[40rem] '
          }`}
        >
          {text}
        </p>
        {children}
      </div>
      {!left && image && (
        <div className='relative w-[80%] mb-8 md:mb-0 md:w-[38rem] flex justify-center'>
          <img className='w-[100%] md:w-[30rem] rounded-lg shadow-lg' src={image} alt='health' />
        </div>
      )}
    </div>
  )
}

export default InfoSection
