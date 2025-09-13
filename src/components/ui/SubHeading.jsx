import React from 'react'

export default function SubHeading({text}) {
  return (
    <div>
        <h3 className='text-[#4D4D4D] text-[18px] md:text-2xl font-medium'>
            {text}
        </h3>
    </div>
  )
}
