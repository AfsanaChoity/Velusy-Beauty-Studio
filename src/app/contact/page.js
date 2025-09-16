
import React from 'react'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import ContactForm from '@/components/features/contactUsPage/ContactForm'

export default function ContactPage() {
  return (
    <div className='mt-20'>
      {/* Heading */}

      <div className='text-center flex flex-col gap-6'>
        <Heading text="Get in Touch" />
        <div className='px-4 md:px-[10%]'>
          <Paragraph text="Have any questions, doubts, or curiosities ? Write to us. We’ll get back to you as soon as possible."></Paragraph>
        </div>
      </div>


      {/* form */}
      <div className='my-10 lg:my-14'>
        <ContactForm />
      </div>
    </div>
  )
}
