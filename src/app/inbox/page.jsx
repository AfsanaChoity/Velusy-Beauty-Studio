"use client"

import { Avatar, Badge, Typography } from "antd"
import pic from '@/assets/images/avatar.jpg'
import Link from "next/link"

const { Title, Text } = Typography

// Mock data for messages
const messages = [
  {
    id: 1,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 2,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 3,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 4,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 5,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 6,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 7,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
  {
    id: 8,
    sender: "Plush Beauty Lounge",
    preview: "Good morning, anything we ca...",
    time: "11:32 PM",
    avatar: pic,
    unread: true,
  },
 
]

export default function MessagesPage() {
  return (
    <div className=" ">
      <div className="">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <Title level={3} className="!mb-0 text-center text-gray-900">
            Message
          </Title>
        </div>

        {/* Messages List */}
        <div className="divide-y divide-gray-100">
          {messages.map((message) => (
            <Link href={`/inbox/${message.id}`} key={message.id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar size={40} src={message.avatar?.src} className="border border-gray-200" />
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <Text strong className="text-gray-900 text-sm truncate">
                        {message.sender}
                      </Text>
                      <Text className="text-gray-500 text-xs ml-2 flex-shrink-0">{message.time}</Text>
                    </div>
                    <Text className="text-gray-600 text-sm truncate block mt-1">{message.preview}</Text>
                  </div>
                </div>

                {/* Unread Badge */}
                {message.unread && (
                  <div className="flex-shrink-0 ml-3">
                    <Badge
                      dot
                      className="[&_.ant-badge-dot]:bg-orange-500 [&_.ant-badge-dot]:w-2 [&_.ant-badge-dot]:h-2"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
