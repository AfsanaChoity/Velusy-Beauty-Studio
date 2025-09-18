import { LockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import beginnerIcon from '@/assets/images/beginner.png'
import risingIcon from '@/assets/images/rising_star.png'
import proIcon from '@/assets/images/pro.png'
import master_proIcon from '@/assets/images/master_pro.png'
import Image from 'next/image';

const levels = [
    
    {
      title: "Beginner",
      subtitle: "(10–24 orders) – 15% commission, 1 order without commission.",
      progress: 100,
      state: "active",
      badge: "leaf",
      showClaim: true,
    },
    {
      title: "Rising Star",
      subtitle: "(0–9 orders) – 20% commission, no rewards.",
      progress: 36,
      state: "unlocked",
      badge: "star",
      showClaim: false,
    },
    {
      title: "Pro",
      subtitle: "(25–49 orders) – 13% commission, 1 order without commission.",
      progress: 0,
      state: "locked",
      badge: "diamond",
      showClaim: false,
    },
    {
      title: "Master Pro",
      subtitle: "(50+ orders or 10,000 CHF) – 10% commission, 2 orders without commission.",
      progress: 0,
      state: "locked",
      badge: "crown",
      showClaim: false,
    },
  ];


  const BadgeIcon = ({ type }) => {
    
    switch (type) {
      case "leaf":
        return (
          <Image src={beginnerIcon} alt="Beginner"/>
        );
      case "star":
        return (
          <Image src={risingIcon} alt="Rising Star"/>
        );
      case "diamond":
        return (
         <Image src={proIcon} alt="Pro"/>
        );
      case "crown":
        return (
         <Image src={master_proIcon} alt="Master Pro"/>
        );
      default:
        return null;
    }
  };

export default function BonusList() {
  return (
    <div className="mt-6 space-y-4">
            {levels.map((lvl, idx) => (
              <div
                key={idx}
                className="flex items-center bg-[#fbf7f3]  rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center mr-4">
                  <BadgeIcon type={lvl.badge} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm md:text-base font-semibold text-gray-800 text-left">{lvl.title}</div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1 text-left">{lvl.subtitle}</div>
                    </div>
                    <div className="ml-4">
                      {lvl.state === "locked" ? (
                        <LockOutlined style={{ fontSize: 20, color: "#bdbdbd" }} />
                      ) : lvl.showClaim ? (
                        <Button type="default" size="small" className="!bg-black !text-white !rounded-lg !px-3 !py-4 shadow-none">Claim Now</Button>
                      ) : (
                        <div style={{ width: 72 }} />
                      )}
                    </div>
                  </div>

                  {/* progress bar mimic exact look */}
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${lvl.state === "active" || lvl.state === "unlocked" ? "bg-green-500" : "bg-gray-300"}`}
                        style={{ width: `${lvl.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  )
}
