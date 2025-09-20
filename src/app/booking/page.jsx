"use client";

import React from "react";
import { Avatar, Button, Tabs } from "antd";
import Image from "next/image"
import Requested from '@/components/features/bookingPage/Requested'
import Completed from '@/components/features/bookingPage/Completed'
import Rejected from '@/components/features/bookingPage/Rejected'

export default function BookingPage() {

    const tabsConfig = [
        {
            label: 'Requested',
            key: '1',
            component: Requested
        },
        {
            label: 'Completed',
            key: '2',
            component: Completed
        },
        {
            label: 'Rejected',
            key: '3',
            component: Rejected
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
          font-size: 20px;
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
            font-size: 14px;
          }
          .ant-tabs-tab {
            margin: 0 8px !important;
          }
        }
      `}</style>

            <div className="  bg-white border border-[#E8E8E9] rounded-xl shadow-md overflow-hidden">
                

                {/* Body */}
                <div className="px-6 md:px-10 pb-8 pt-16">
                    {/* name and level */}
                    <div className="text-center">
                        


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
