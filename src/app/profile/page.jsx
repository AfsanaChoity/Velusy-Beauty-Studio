import Paragraph from '@/components/ui/Paragraph';
import SubHeading from '@/components/ui/SubHeading'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import { CiEdit, CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from 'react-icons/io';
import pic from '@/assets/images/avatar.jpg'
import Link from 'next/link';

export default function ProfilePage() {
    return (
        <div className='container mx-4 xl:mx-[20%] p-4  text-center my-10 rounded-md md:my-20 border border-[#E8E8E9] bg-white'>
            {/* avatar */}
            <div className='space-y-2 md:space-y-4 bg-[#F4F0E9] py-8 xl:py-14 px-4 rounded-md'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Avatar 
                        size={104} 
                        src={pic?.src}
                        icon={<UserOutlined />} 
                        className="object-cover"
                    />
                    <h3 className='text-[#1B1B25] text-[18px] md:text-2xl font-medium'>Aylar</h3>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='md:text-xl'>
                        <CiLocationOn />
                    </div>
                    <Paragraph text="Turkmenistan" />
                </div>

                <div className='flex justify-center'>
                    <button className='flex items-center  gap-2 bg-[#465FBA] text-white cursor-pointer rounded-full px-6 py-2 md:text-xl md:px-10 md:py-3'>Edit Profile <CiEdit className='text-xl md:text-2xl' /></button>
                </div>


                {/* Links */}
                <div className='bg-white border border-[#D0D0D0] rounded-[8px] p-2 md:mx-[10%] mt-8 space-y-2 xl:mt-20'>
                    <Link href="/account-settings" className='flex items-center justify-between rounded-[8px] border border-[#D0D0D0] py-2 px-2 md:px-4'>
                        <p>Account Settings</p>
                        <IoIosArrowForward />
                    </Link>
                    <Link href="/refer" className='flex items-center justify-between rounded-[8px] border border-[#D0D0D0] py-2 px-2 md:px-4'>
                        <p>Refer your friend</p>
                        <IoIosArrowForward />
                    </Link>
                    <Link href="help-support" className='flex items-center justify-between rounded-[8px] border border-[#D0D0D0] py-2 px-2 md:px-4'>
                        <p>Help & Support</p>
                        <IoIosArrowForward />
                    </Link>
                </div>


            </div>



        </div>
    )
}
