import React from 'react'

export default function Heading({text}) {
  return (
    <div>
        <h1 className='text-3xl md:text-5xl font-semibold text-[#2C2C2A]'>{text}</h1>
    </div>
  )
}
