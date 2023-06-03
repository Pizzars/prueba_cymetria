import React from 'react'

const VideoHome = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12'>
      <h3 className='text-primary bold text-xl font-bold mb-8'>¿Como usar la plataforma?</h3>
      <iframe
        src='https://www.youtube.com/embed/OiC1rgCPmUQ'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='rounded-lg shadow-lg w-[38rem] h-[20rem]'
      ></iframe>
    </div>
  )
}

export default VideoHome
