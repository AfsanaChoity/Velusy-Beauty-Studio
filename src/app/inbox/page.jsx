"use client"

import { Avatar, Badge, Divider, Typography } from "antd"
import pic from '@/assets/images/avatar.jpg'
import Link from "next/link"

const { Title, Text } = Typography

// Mock data for messages
const messages = [
  {
    id: 1,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 2,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 3,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 4,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 5,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 6,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 7,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 8,
    sender: "Plush Beauty",
    preview: "Good morning, anything we can",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },

]

export default function MessagesPage() {
  return (
    <div className="container mx-[4%] md:mx-[10%] bg-white border border-[#E8E8E9] rounded-xl my-10 ">
      <div className=" px-[8%] md:px-[10%]  py-6 md:py-10">
        {/* Header */}
        <div className=" mb-6 md:mb-10 ">
          <Divider style={{ borderColor: '#E1E1E1' }}><span className="text-[#1A1B2D] text-xl md:text-4xl font-semibold">Messages</span></Divider>
        </div>

        {/* Messages List */}
        <div className=" ">
          {messages.map((message) => (
            <Link href={`/inbox/${message.id}`} key={message.id} className="cursor-pointer transition-colors duration-200">
              <div className="flex items-center justify-between mb-2 border border-[#DDDDDE] bg-[#F7F7F7] hover:bg-[#E6E0DA] rounded-[8px] p-2 ">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar size={40} src={message.avatar?.src} className="border border-gray-200" />
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <Text strong className="text-gray-900 text-sm truncate">
                          <span className="block md:hidden">{message.sender.split(" ").slice(0, 2).join(" ")}</span>

                          <span className="hidden md:block">
                            {message.sender}
                          </span>
                        </Text>
                        <Text className="!text-gray-600 text-sm truncate block mt-1">
                          <span className="block md:hidden">{message.preview.split(" ").slice(0, 1)}...</span>
                          <span className="hidden md:block">{message.preview.split(" ").slice(0, 4).join(" ")}...</span>
                        </Text>

                      </div>
                      <div>
                        <Text className="text-gray-500 text-xs ml-2 flex-shrink-0">{message.time}</Text>
                        {/* Unread Badge */}
                        {message.unread && (
                          <div className="flex-shrink-0 text-center">
                            <span className="bg-[#F98600] rounded-full py-0.5 px-1.5 text-white text-xs">2</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
