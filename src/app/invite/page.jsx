""
import React, { useState } from 'react';
import { Button, Card, message, Space, Typography } from 'antd';
import { ShareAltOutlined, CopyOutlined, UserAddOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ReferralPage = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = 'ANDREW56G5';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      message.success('Referral code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      message.error('Failed to copy code');
    }
  };

  const handleShareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join me with this referral code!',
        text: `Use my referral code: ${referralCode}`,
        url: window.location.href,
      });
    } else {
      handleCopyCode();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Illustration */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-70"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-red-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-200 rounded-full opacity-70"></div>
            
            {/* Main illustration */}
            <div className="relative">
              {/* Left phone with person */}
              <div className="inline-block relative mr-4">
                <div className="w-20 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-2 shadow-lg transform -rotate-12">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                      <div className="w-6 h-2 bg-green-400 rounded mx-auto mb-1"></div>
                      <div className="w-4 h-1 bg-blue-400 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements around left phone */}
                <div className="absolute -top-3 -left-2 w-6 h-6 bg-orange-400 rounded transform rotate-45 opacity-80"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
              </div>
              
              {/* Right phone with person */}
              <div className="inline-block relative">
                <div className="w-20 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-2 shadow-lg transform rotate-12">
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-1"></div>
                      <div className="w-6 h-2 bg-red-400 rounded mx-auto mb-1"></div>
                      <div className="w-4 h-1 bg-purple-400 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements around right phone */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-300 rounded transform rotate-12 opacity-80">
                  <div className="text-xs text-center leading-5">★</div>
                </div>
                <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-80"></div>
              </div>
            </div>
            
            {/* Additional floating decorations */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>

        {/* Referral Code Card */}
        <Card className="mb-6 shadow-lg border-0">
          <div className="text-center">
            <Text className="text-gray-600 block mb-2">Your Referral Code</Text>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gray-100 px-4 py-2 rounded-lg mr-2 font-mono font-bold text-lg">
                {referralCode}
              </div>
              <Button
                type="text"
                icon={<CopyOutlined />}
                onClick={handleCopyCode}
                className="text-gray-500 hover:text-blue-600"
              />
            </div>
          </div>
        </Card>

        {/* Invite Friends Section */}
        <Card className="mb-6 shadow-lg border-0">
          <div className="text-center">
            <UserAddOutlined className="text-2xl text-blue-600 mb-2" />
            <Title level={4} className="mb-2 text-gray-800">Invite Friends</Title>
            <Text className="text-gray-600 block mb-4">
              Send your friend your personal invite link
            </Text>
          </div>
        </Card>

        {/* Action Buttons */}
        <Space className="w-full" direction="vertical" size="middle">
          <div className="flex gap-3">
            <Button 
              size="large" 
              className="flex-1 h-12 rounded-lg border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600"
            >
              Invite Friends (24)
            </Button>
            <Button 
              type="primary" 
              size="large" 
              className="flex-1 h-12 rounded-lg bg-gray-800 border-gray-800 hover:bg-gray-700"
            >
              Your Referrals
            </Button>
          </div>
          
          <Button
            type="primary"
            size="large"
            icon={<ShareAltOutlined />}
            onClick={handleShareCode}
            className="w-full h-12 rounded-lg bg-gray-800 border-gray-800 hover:bg-gray-700"
          >
            Share my referral Code
          </Button>
        </Space>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default ReferralPage;