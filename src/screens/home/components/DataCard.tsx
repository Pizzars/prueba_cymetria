import React from 'react'

interface Value {
  label: string
  value: string
}

interface Params {
  data: Value[]
  title: string
}

const DataCard = ({ data, title }: Params) => {
  return (
    <div className='border border-primary w-full rounded-lg p-4 shadow-lg bg-white mb-4'>
      <div className='font-bold text-primary mb-2'>{title}</div>
      {data.map((item, i) => {
        return (
          <div className='uppercase' key={`tx-${i}`}>
            <span className='text-primary '>{item.label}:</span> {item.value}
          </div>
        )
      })}
    </div>
  )
}

export default DataCard
