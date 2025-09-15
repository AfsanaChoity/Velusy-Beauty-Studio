import FAQs from '@/components/features/homePage/FAQ'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function FaqPage() {
  return (
    <div className='my-24 continer mx-auto px-4 xl:px-0 '>
        <div className='text-center'>
            <Heading text="Frequently Asked Questions"/>
        </div>

        <div>
            <FAQs />
        </div>

    </div>
  )
}
