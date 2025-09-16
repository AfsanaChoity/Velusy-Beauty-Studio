"use client"
import React, { useState } from 'react';
import { Avatar, Input, Button, Badge, Tooltip } from 'antd';
import { SendOutlined, PaperClipOutlined, SmileOutlined } from '@ant-design/icons';

const BeautySalonChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'salon',
      content: 'Good morning, anything we can help at Plush Beauty Lounge Salon?',
      time: '9:15 AM',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      sender: 'salon',
      content: '...',
      time: '9:16 AM',
      avatar: '/api/placeholder/40/40',
      isTyping: true
    },
    {
      id: 3,
      sender: 'user',
      content: 'This look awesome 🤩',
      time: '2:20 PM',
      image: '/api/placeholder/200/150'
    },
    {
      id: 4,
      sender: 'user',
      content: 'I would like to book an appointment at 2:30 PM today.',
      time: '2:20 PM'
    }
  ]);

  const handleSendMessage = ( {params} ) => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar 
              size={48} 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&crop=face"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Plush Beauty Lounge</h3>
            <p className="text-sm text-blue-600">Online</p>
          </div>
        </div>
        <Badge status="success" text="Available" className="text-purple-600 font-medium" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end space-x-2 max-w-xs ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {msg.sender === 'salon' && (
                <Avatar 
                  size={32} 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
                  className="mb-1"
                />
              )}
              <div className="flex flex-col">
                {msg.image && (
                  <div className={`mb-2 ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=200&h=150&fit=crop"
                      alt="Hair style"
                      className="rounded-lg shadow-sm max-w-[200px] h-auto"
                    />
                  </div>
                )}
                <div className={`rounded-lg px-3 py-2 ${
                  msg.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : msg.isTyping 
                      ? 'bg-teal-600 text-white'
                      : 'bg-teal-600 text-white'
                }`}>
                  {msg.isTyping ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
                <span className={`text-xs text-gray-500 mt-1 ${msg.sender === 'user' ? 'self-end' : 'self-start'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center space-x-2">
          <Button 
            type="text" 
            icon={<PaperClipOutlined />} 
            className="text-gray-500 hover:text-gray-700"
          />
          <div className="flex-1">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="border-0 bg-gray-100 rounded-full px-4"
              suffix={
                <Button 
                  type="text" 
                  icon={<SmileOutlined />} 
                  className="text-gray-500 hover:text-gray-700"
                  size="small"
                />
              }
            />
          </div>
          <Button 
            type="primary" 
            shape="circle"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            className="bg-teal-600 hover:bg-teal-700 border-teal-600"
          />
        </div>
      </div>
    </div>
  );
};

export default BeautySalonChat;