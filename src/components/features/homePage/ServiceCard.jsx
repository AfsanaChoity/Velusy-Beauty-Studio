"use client"

import { Heart, Star } from "lucide-react";
import { Avatar } from "antd";
import Image from "next/image"; 

function ServiceCard({
    image,
    title,
    price,
    providerName,
    providerAvatar,
    rating,
    isFavorite = false,
    onFavoriteToggle,
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className="block cursor-pointer w-full text-left overflow-hidden bg-[#EFF8F7] shadow-md rounded-xl border-0 transition-all duration-300 hover:bg-[#D7DFDE] hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#567370] focus:ring-offset-2"
            aria-label={`View details for ${title}`}
        >
            {/* Image Section */}
            <div className="relative aspect-[5/3] overflow-hidden mt-4 mx-4 rounded-md">
                
                    <Image
                    src={image} 
                    alt={title}
                    
                    className=" transition-transform duration-300 group-hover:scale-105"/>
                
                {/* Heart Icon */}
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                      onFavoriteToggle();
                    }}
                    className="cursor-pointer absolute top-2 right-2 p-1 bg-white/70 backdrop-blur-sm rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-white/90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-200"
                >
                    <Heart className={`w-6 h-6 stroke-[2.5px] ${isFavorite ? "fill-gray-800 text-gray-800" : "text-gray-700"}`} />
                </button>
            </div>

            {/* Content Section */}
            <div className="p-3 flex justify-between items-center ">
                <div className="space-y-2 ">
                    {/* Service Title */}
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{title}</h3>

                    {/* Price */}
                    <p className="text-gray-900 font-semibold text-sm">From {price}</p>
                </div>

                {/* Provider Info */}
                <div className="flex items-center gap-2  ">
                    <Avatar className="w-5 h-5" src={providerAvatar || "/placeholder.svg"}>
                        {/* AntD Avatar provides fallback when image is not available */}
                        {providerName[0]}
                    </Avatar>
                    <div>
                        <span className="text-xs text-gray-700 font-medium">{providerName}</span>
                        <div className="flex items-center gap-1 ml-auto">
                            <span className="text-xs font-medium text-gray-900">{rating}</span>
                            <Star className="w-3 h-3  text-yellow-400" />    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
