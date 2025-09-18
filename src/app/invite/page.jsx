import Image from 'next/image'
import React from 'react'


import InviteFriends from '@/components/features/inviteFriends/InviteFriends';

export default function InviteFriend() {
  return (
    <div className='container  border border-[#E8E8E9] rounded-[12px] my-8 mx-4 md:mx-8 xl:mx-auto bg-white'>
      <InviteFriends />
    </div>
  )
}
