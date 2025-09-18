"use client";

import React from "react";
import { Avatar, Button, Tabs } from "antd";
import { LockOutlined } from "@ant-design/icons";
import avatarSrc from '@/assets/images/avatar.jpg'
import beginnerIcon from '@/assets/images/beginner.png'
import Image from "next/image"
import LevelUp from '@/components/features/rewardPage/Levelup'
import BonusList from '@/components/features/rewardPage/BonusList'
import InviteFriends from '@/components/features/inviteFriends/InviteFriends'

export default function BonusProfilePage() {

    const tabsConfig = [
        {
            label: 'Level Up',
            key: '1',
            component: LevelUp
        },
        {
            label: 'Bonus list',
            key: '2',
            component: BonusList
        },
        {
            label: 'Refer',
            key: '3',
            component: InviteFriends
        }
    ];

    return (
        <div className="min-h-screen container mx-auto  py-8 px-6">

            {/* Global styles to override Ant Design Tabs look */}
            <style jsx global>{`
        /* Invite Friends component in reward page */
        .bonus-root .ant-tabs-content-holder {
          min-height: 400px;
        }
        
        .bonus-root [data-rr-ui-event-key="3"] {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Tab container responsive padding */
        .ant-tabs-nav {
          padding: 0 16px;
        }

        /* Inactive tab text color and styling */
        .ant-tabs-tab {
          padding: 8px 0 !important;
          margin: 0 16px !important;
        }

        .ant-tabs-tab .ant-tabs-tab-btn {
          color: #6b7280 !important;
          transition: color 150ms ease;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-size: 14px;
          padding: 0;
        }

        /* Active tab text color and weight */
        .ant-tabs-tab.ant-tabs-tab-active {
          background: none !important;
        }

        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: #1B1B25 !important;
          font-weight: 500;
        }

        /* Ink bar (underline) color and style */
        .ant-tabs-ink-bar {
          background: #1B1B25 !important;
          height: 2px !important;
          border-radius: 2px;
        }

        /* Hover state */
        .ant-tabs-tab:hover .ant-tabs-tab-btn {
          color: #1B1B25 !important;
        }

        /* Responsive font sizes */
        @media (max-width: 640px) {
          .ant-tabs-tab .ant-tabs-tab-btn {
            font-size: 12px;
          }
          .ant-tabs-tab {
            margin: 0 8px !important;
          }
        }
      `}</style>

            <div className="  bg-white border border-[#E8E8E9] rounded-xl shadow-md overflow-hidden">
                {/* Header big beige bar */}
                <div className="relative bg-[#f5efe9] h-24 md:h-28  m-2 rounded-xl">
                    {/* Avatar overlapping */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                        <div className="rounded-full  shadow-lg  bg-white flex items-center justify-center">
                            <Avatar src={avatarSrc.src} size={96} />
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="px-6 md:px-10 pb-8 pt-16">
                    {/* name and level */}
                    <div className="text-center">
                        <h2 className="text-lg md:text-2xl font-semibold">Minnie</h2>
                        <div className="flex items-center justify-center gap-1 mt-1">
                            <Image src={beginnerIcon} alt="icon" width={20} height={20} />
                            <span className="text-[#E3C464] text-sm md:text-[16px] font-medium">Beginner</span>
                        </div>


                        <div className="mt-4">
                            <Tabs
                                defaultActiveKey="1"
                                centered
                                className="bonus-root"
                                items={tabsConfig.map(({ label, key, component: Component }) => ({
                                    label: <span className="font-['Poppins']">{label}</span>,
                                    key,
                                    children: (
                                        <div className={`tab-content ${key === '3' ? 'invite-friends-wrapper' : ''}`}>
                                            <Component />
                                        </div>
                                    ),
                                }))}
                            />
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
}
