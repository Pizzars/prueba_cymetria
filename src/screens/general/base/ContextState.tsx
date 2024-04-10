'use client'
import { useContext, useState } from 'react'
import ContextPage from './ContextPage'

const ContextState = () => {
  const { splash } = useContext(ContextPage) as any

  return (
    <>
      {/* <ContextPage.Provider
        value={
          {
            splash,
            setSplash: setSplash
          } as any
        }
      > */}
      <div className='w-[200px] h-[100px] fixed top-[50%] left-[50%] text-center text-xl bg-red-500 text-white'>
        {splash}
      </div>
      {/* </ContextPage.Provider> */}
    </>
  )
}

export default ContextState
