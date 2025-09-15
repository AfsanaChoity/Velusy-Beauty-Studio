
import Image from 'next/image';
import React from 'react'
import { MdCopyright } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
        {/* black footer */}
        <div className='bg-[#1B1B25]'>
            <div className='container mx-auto px-[6%] pt-4'>

                {/* top */}
                <div className='flex justify-between items-center gap-10 pb-10'>
                     <div>
                        <Image src="/logo.png" alt="Logo" width={150} height={150} />
                     </div>
                     <div className='flex gap-2'>
                        <div className='text-white p-2 md:p-4 rounded-xl border text-xl'>
                            <a href='https://www.facebook.com/' target='blank'><FaFacebookF /></a>
                        </div>
                        <div className='text-white p-2 md:p-4 rounded-xl border text-xl'>
                            <a href='https://x.com/' target='blank'><FaTwitter /></a>
                        </div>
                        <div className='text-white p-2 md:p-4 rounded-xl border text-xl'>
                            <a href='https://www.linkedin.com' target='blank'><FaLinkedinIn /></a>
                        </div>
                        <div className='text-white p-2 md:p-4 rounded-xl border text-xl'>
                            <a href="https://www.instagram.com/" target='blank'><BsInstagram /></a>
                        </div>
                     </div>
                </div>
                
                <hr className='text-gray-400 pb-8'/>

                {/* bottom */}
                <div className='grid grid-cols-1 md:grid-cols-3'>

                    <div className=' space-y-4 pb-6'>
                        <h2 className='font-semibold text-xl text-white'>Explore</h2>
                        <ul className='space-y-2 text-gray-300'>
                            <li><Link href="/">Home</Link></li>
                            
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>  
                    <div className=' space-y-4 pb-6'>
                        <h2 className='font-semibold text-xl text-white'>Utility Pages</h2>
                        <ul className='space-y-2 text-gray-300'>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/how-we-work" >How We  Work</Link></li>
                            <li><Link href="/privacy">Privacy Policy </Link></li>
                            <li><Link href="/terms" >Terms & Conditions</Link></li>
                            
                        </ul>
                    </div>
                    <div className=' space-y-4 pb-6'>
                        <h2 className='font-semibold text-xl text-white'>Keep in Touch</h2>
                        <ul className='space-y-2 text-gray-300'>
                            <li> <span className='font-semibold text-gray-200'>Address :</span> Mariendalsvej 50D 2 2000 Frederiksberg.</li>
                            <li> <span className='font-semibold text-gray-200'>Mail :</span> support@servicemarket.com</li>
                            <li> <span className='font-semibold text-gray-200'>Phone :</span> (+22) 123 - 4567 - 900 </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    {/* white footer */}
        <div className=' py-4 flex gap-2 items-center justify-center'>
            <MdCopyright className='text-xl md:text-2xl text-gray-600' />
            <p className='text-xs md:text-[18px] text-gray-600'>2023, Velin.miriam | All rights reserved.</p>
        </div>
    </div>
  )
}

// onClick={() => localStorage.setItem("activeItem", "Terms & Conditions")}