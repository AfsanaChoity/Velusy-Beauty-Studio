"use client";

import Image from "next/image";
import { FaRegStar  } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

/**
 * Example data - replace src paths with your images in /public/images/
 */
const bookings = [
  {
    id: 1,
    title: "Hair cut",
    package: "Special Offers Package",
    status: "Pending",
    rating: 4.5,
    reviews: 445,
    serviceImg: "/images/hair-care.jpg",
    userImg: "/images/hair-care.jpg",
  },
  {
    id: 2,
    title: "Hair cut",
    package: "Special Offers Package",
    status: "Pending",
    rating: 4.5,
    reviews: 445,
    serviceImg: "/images/hair-care.jpg",
    userImg: "/images/hair-care.jpg",
  },
  {
    id: 3,
    title: "Hair cut",
    package: "Special Offers Package",
    status: "Pending",
    rating: 4.5,
    reviews: 445,
    serviceImg: "/images/hair-care.jpg",
    userImg: "/images/hair-care.jpg",
  },
];

export default function BookingList() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-3">
      {bookings.map((b) => (
        <article
          key={b.id}
          className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#F7F7F7] border border-[#DDDDDE] rounded-xl p-4 shadow-lg"
        >
          {/* Left block: service image + details */}
          <div className="flex items-start md:items-center gap-4 w-full md:w-2/3">
            <div className="flex-shrink-0">
              <Image
                src={b.serviceImg}
                alt={`${b.title} image`}
                width={72}
                height={72}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-left text-gray-900 font-semibold text-base md:text-lg">
                {b.title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MdLocationOn className="text-gray-400 mr-1" />
                <span>{b.package}</span>
              </div>

              <div className="flex items-center gap-2 mt-3">
                {/* Status badge (dark) */}
                <span className="cursor-pointer inline-block bg-[#1B1B25] text-white text-xs px-4 py-2 rounded-[4px] font-medium shadow-sm">
                  {b.status}
                </span>

                {/* Cancel button (red) */}
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center text-xs px-4 py-2 rounded-[4px] bg-[#FF4646] hover:bg-red-600 text-white font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Right block: profile, rating, view */}
          <div className="w-full md:w-auto mt-3 md:mt-0 md:pl-4 md:border-l md:border-gray-100 flex items-center md:flex-col md:items-end gap-2 justify-between">
            <div className="flex items-center md:flex-col md:items-end gap-2">
              <Image
                src={b.userImg}
                alt="user"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex items-center text-sm text-gray-600 gap-1">
                <FaRegStar  className="text-yellow-400" />
                <span className="font-medium">{b.rating}</span>
                <span className="text-gray-400">({b.reviews})</span>
              </div>

              <button className="text-xs text-black font-semibold hover:underline cursor-pointer">
                View
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
