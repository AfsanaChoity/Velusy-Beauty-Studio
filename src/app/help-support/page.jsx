import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'

import React from 'react'



export default function HelpSupportPage() {
  return (
    <div className='container mx-4 xl:mx-auto  border border-[#E8E8E9] rounded-[12px] py-10  my-10 lg:my-20 bg-white'>
        {/* Heading */}
        <div className='text-center space-y-4 md:space-y-6'>
            <Heading text="Get in Touch"/>
            <Paragraph text="Contact with us"/>
        </div>

        {/* form */}
        <div className="max-w-2xl mx-auto mt-10 px-4">
            <form className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <Input 
                        id="name"
                        size="large" 
                        placeholder="Enter your full name" 
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <Input 
                        id="email"
                        type="email"
                        size="large" 
                        placeholder="Enter your email address" 
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject
                    </label>
                    <Input 
                        id="subject"
                        size="large" 
                        placeholder="Enter message subject" 
                        className="w-full"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Opinions
                    </label>
                    <TextArea 
                        id="message"
                        rows={6} 
                        placeholder="What can we help with?" 
                        className="w-full"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-[#1B1B25] text-white py-3 px-6 rounded-lg hover:bg-[#455956] transition-colors duration-200 font-medium"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}


// bg-[#567370]