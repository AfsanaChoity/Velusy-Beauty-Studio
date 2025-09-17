"use client"

import Heading from "@/components/ui/Heading"
import React from "react"

const data = [
  {
    date: "Today",
    items: [
      {
        id: 1,
        type: "card",
        title: "Payment Successful!",
        subtitle: "You have made a salon payment",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        id: 2,
        type: "service",
        title: "New Service Available",
        subtitle: "Now you can search the nearest salon",
      },
      {
        id: 3,
        type: "card",
        title: "Payment Successful!",
        subtitle: "You have made a salon payment",
      },
      {
        id: 4,
        type: "card",
        title: "Payment Successful!",
        subtitle: "You have made a salon payment",
      },
    ],
  },
  {
    date: "February 02/2050",
    items: [
      {
        id: 5,
        type: "card",
        title: "Payment Successful!",
        subtitle: "You have made a salon payment",
      },
    ],
  },
]

function Icon({ type }) {
  if (type === "service") {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // default: card / payment icon
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2.5" y="7" width="19" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 11h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function NotificationsPanel() {
  return (
    <div className=" container xl:mx-auto md:mx-6 md:my-6 xl:my-16  py-8 px-4">
      <div className="text-center mb-6 md:mb-10">
        <Heading text="Notifications"/>
      </div>

      <div className="w-full md:px-[10%] ">
        {data.map((group) => (
          <section key={group.date} className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">{group.date}</h3>

            <div className="space-y-4">
              {group.items.map((item) => (
                <article
                  key={item.id}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-[6px_6px_0_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Icon type={item.type} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
