import React from 'react'

export default function Paragraph({ text }) {
  return (
    <div>
        <p className='text-xs md:text-[18px] text-[#555555]'>{text}</p>
    </div>
  )
}
