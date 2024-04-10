import React from 'react'

const VideoHome = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-12 bg-white'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <h3 className='text-primary bold text-xl font-bold mb-8'>¿Cómo usar la plataforma?</h3>
      <iframe
        src='https://www.youtube.com/embed/PJpeEc8j0IQ?si=5dsf7_UOvjGVGFln'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='rounded-lg shadow-lg max-w-[90%] md:w-[38rem] h-[20rem]'
      ></iframe>
    </div>
  )
}

export default VideoHome
