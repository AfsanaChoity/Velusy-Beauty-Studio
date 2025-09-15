"use client"

import { MdLockOutline, MdOutlinePrivacyTip } from "react-icons/md"
import { GrDocumentText } from "react-icons/gr";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";


export default function AccountSettings() {
  const menuItems = [
    { id: 'change-password', title: 'Change Password', icon: 'lock', path: '/change-password' },
    { id: 'terms', title: 'Terms Of Service', icon: 'document', path: '/terms' },
    { id: 'privacy', title: 'Privacy Policy', icon: 'shield', path: '/privacy' },
    { id: 'how-to', title: 'How Velusy Work', icon: 'help', path: '/how-we-work' },
    { id: 'about', title: 'About Us', icon: 'info', path: '/about' },
  ]

  return (
    <div className=" container lg:mx-[20%]  my-10 lg:my-20 px-4 ">
      <div className="">
        <div className="xl:py-14 bg-white/80 rounded-xl border border-[#E8E8E9] shadow-sm py-8 px-4 md:px-8 backdrop-blur-sm">
          <h2 className="text-center text-gray-800 font-semibold text-2xl lg:text-4xl">Account Settings</h2>

          <div className="mt-8 space-y-3">
            {menuItems.map((it) => (
              <Link
                key={it.id}
                href= {it.path}
                className="w-full flex items-center justify-between gap-4 px-4 py-3 rounded-lg bg-[#F4F0E9] border border-[#F4F0E9] hover:bg-[#E6E0DA] transition-shadow shadow-sm hover:shadow-md focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center border border-amber-100">
                    {it.icon === 'lock' && (
                      <MdLockOutline />
                    )}
                    {it.icon === 'document' && (
                     <GrDocumentText />
                    )}
                    {it.icon === 'shield' && (
                      <MdOutlinePrivacyTip />
                    )}
                    {it.icon === 'help' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10a4 4 0 118 0c0 2-2 3-2 3" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01" />
                      </svg>
                    )}
                    {it.icon === 'info' && (
                     <IoMdInformationCircleOutline />
                    )}
                  </div>

                  <span className="text-sm text-gray-700 font-medium">{it.title}</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button type="button" className="cursor-pointer inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22" />
              </svg>
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
