"use client"

import Heading from "@/components/ui/Heading"
import SubHeading from "@/components/ui/SubHeading"
import React from "react"

const bookings = [
  {
    id: "#695623",
    price: "258 CHF",
    title: "Special Offers Package",
    date: "05-12-2025",
    name: "Cameron Williamson",
    address: "4517 Washington Ave",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  // duplicate a few to match the layout in the screenshot
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: `#69562${3 + i}`,
    price: "258 CHF",
    title: "Special Offers Package",
    date: "05-12-2025",
    name: "Cameron Williamson",
    address: "4517 Washington Ave",
    avatar: `https://i.pravatar.cc/40?img=${12 + i}`,
  })),
]

export default function TailwindBookingsList() {
  return (
    <div className="min-h-screen  container md:mx-[10%] mx-2 mb-10">
      <div className="text-center  my-6 md:my-10">
        <SubHeading text="Transaction History"/>
      </div>
      <div className=" ">
        {/* Inner white card that holds the list */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="space-y-4">
            {bookings.map((b, idx) => (
              <article
                key={b.id + idx}
                className="flex items-start justify-between gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left block: id, price, title */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 truncate">{b.id}</h4>
                  <p className="text-xs text-gray-500 mt-2">{b.price}</p>
                  <p className="text-sm text-gray-600 mt-3">{b.title}</p>
                </div>

                {/* Right block: date and avatar+name */}
                <div className="flex flex-col items-end justify-between text-right">
                  <time className="text-xs text-emerald-500 mb-2">{b.date}</time>

                  <div className="flex items-center gap-3">
                    <img
                      src={b.avatar}
                      alt={b.name}
                      className="w-9 h-9 rounded-full border border-gray-200"
                    />
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">{b.name}</p>
                      <p className="text-xs text-gray-400">{b.address}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Show More Button */}
          <div className="flex justify-center mt-6">
            <button className="cursor-pointer px-6 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg shadow hover:bg-emerald-600 transition-colors">
              Show More
            </button>
          </div>

    </div>
  )
}
