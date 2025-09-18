import React from 'react'

import group from '@/assets/images/Group.png'
import Image from 'next/image'
import Paragraph from '@/components/ui/Paragraph'
import { PiShootingStar } from "react-icons/pi";
import { Button } from 'antd';
import { FaShareAlt } from 'react-icons/fa';

export default function InviteFriends() {
  return (
    <div className='my-[4%] mx-[10%]'>
        {/* image */}
        <div className=' flex justify-center'>
          <Image src={group} alt='image' />
        </div>

        {/* content */}
        <div className='bg-[#F4F0E9] rounded-[12px] mt-6 '>
          <div className='max-w-2xl mx-auto p-4 space-y-4 md:py-20 md:px-10 md:space-y-8'>
            <div>
              <div className='flex items-center gap-1 '>
                <PiShootingStar className='md:text-xl' />
                <h2 className='text-[#1B1B25] md:text-[24px] font-medium'>Invite Friends</h2>
              </div>
              <div>
                <Paragraph text="Send your friend your personal invite link" />
              </div>
            </div>

            <div>
              <div className='flex items-center gap-1 '>
                <PiShootingStar className='md:text-xl' />
                <h2 className='text-[#1B1B25] md:text-[24px] font-medium'>You Get Free Point</h2>
              </div>
              <div>
                <Paragraph text="When they join Velusy, you will get 5000 free points" />
              </div>
            </div>

            {/* Button */}

            <div className='flex flex-col md:flex-row gap-4 justify-center md:pt-6'>
              <Button color="default" variant="outlined" disabled className="!cursor-not-allowed !text-black !border !border-black">
                Invited Friends(24)
              </Button>
              <Button color="default" variant="solid">
                <FaShareAlt /> Share Via Link
              </Button>

            </div>
          </div>

        </div>
      </div>
  )
}
