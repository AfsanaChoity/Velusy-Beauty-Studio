import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import SubHeading from '@/components/ui/SubHeading'
import Image from 'next/image'
import React from 'react'

export default function AboutUsPage() {
  return (
    <div className='container mx-auto px-4 xl:px-0 space-y-10 my-20'>
      {/* Heading */}
      <div>
        <Heading text="Who We Are" />
      </div>

      {/* Subheading */}
      <div>
        <SubHeading text="Empowering Beauty Through Connection, Convenience & Care" />
      </div>

      {/* Paragraph */}
      <div className=''>
        <p className='text-xs md:text-[18px] text-[#555555]'>
          We are a digital platform connecting clients with top-rated beauty professionals — whether at home or in the studio. Our mission is to make beauty services more accessible, safe, and rewarding for everyone. <br />
          <br />
          We connect clients with trusted beauty professionals for at-home and studio services. From haircuts to facials, book anytime with secure payment and instant confirmation. Enjoy rewards, flexible options, and expert care — all in one easy platform. <br />
          <br />
          We are a digital platform connecting clients with top-rated beauty professionals — whether at home or in the studio. Our mission is to make beauty services more accessible, safe, and rewarding for everyone. <br />
          <br />
          We are a digital platform connecting clients with top-rated beauty professionals — whether at home or in the studio. Our mission is to make beauty services more accessible, safe, and rewarding for everyone. <br />
          <br />
          We are a digital platform connecting clients with top-rated beauty professionals — whether at home or in the studio. Our mission is to make beauty services more accessible, safe, and rewarding for everyone. <br />
          <br />
          We are a digital platform connecting clients with top-rated beauty professionals — whether at home or in the studio. Our mission is to make beauty services more accessible, safe, and rewarding for everyone. <br />
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image 
          src="/images/about-us.jpg" 
          alt="About Us" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md"
        />
      </div>

    </div>
  )
}
