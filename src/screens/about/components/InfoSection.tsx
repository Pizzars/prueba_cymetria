import Text from './Text'

interface Params {
  image?: string
  title: string
  text: string
  left?: boolean
  color?: string
  children?: any
  textPosition?: number
}

const InfoSection = ({
  image,
  title,
  text,
  left = true,
  color = 'bg-white',
  children,
  textPosition = 0
}: Params) => {
  return (
    <div
      className={`${
        left ? 'flex-col-reverse md:flex-row' : 'flex-col md:flex-row'
      } flex items-center py-8 ${color}`}
      style={color === 'bg-white' ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' } : {}}
    >
      {left && image && (
        <div className='relative w-[80%] mb-8 md:mb-0 md:w-[38rem] max-h-[26rem] object-cover flex justify-center'>
          <img
            className='w-[100%] object-cover md:w-[30rem] rounded-lg shadow-lg'
            src={image}
            alt='health'
          />
        </div>
      )}
      <div className='flex-1 px-12 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary'>{title}</h2>
        <p
          className={`text-secondary my-4 ${image ? '' : 'max-w-[80vw] w-[100%] md:w-[40rem] '} ${
            textPosition === 0 ? 'text-center' : textPosition === 1 ? 'text-left' : 'text-right'
          }`}
        >
          <Text text={text} textPosition={textPosition} />
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
