// "use client"

// import Heading from '@/components/ui/Heading'
// import React from 'react'
// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from 'antd'


// const categories = [
//     {
//         id: "1",
//         title: "Hair Care",
//         image: "/images/hair-care.jpg",
//     },
//     {
//         id: "2",
//         title: "Facial & Skin Care",
//         image: "/images/facial.jpg",
//     },
//     {
//         id: "3",
//         title: "Body Treatments",
//         image: "/images/body.jpg",
//     },
//     {
//         id: "4",
//         title: "Nail Care",
//         image: "/images/nail.jpg",
//     },
//     {
//         id: "5",
//         title: "Makeup Services",
//         image: "/images/makeup.jpg",
//     },
//     {
//         id: "6",
//         title: "Eye & Brow Services",
//         image: "/images/eye.jpg",
//     },
// ]


// export default function Category() {
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const itemsPerView = 4 // Show 4 items at once on desktop
//     const maxIndex = Math.max(0, categories.length - itemsPerView)

//     const handlePrevious = () => {
//         setCurrentIndex((prev) => Math.max(0, prev - 1))
//     }

//     const handleNext = () => {
//         setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
//     }

//     return (
//         <div className='text-center'>
//             {/* heading */}
//             <div>
//                 <Heading text="Categories" />
//             </div>

//             {/* cards */}
//             <section className="pt-4 px-4">
//                 <div className="container mx-auto">
//                     {/* Header with navigation */}
//                     <div className="flex items-center justify-end mb-8">
                        
//                         <div className="flex gap-2">
//                             <Button
//                                 variant="outline"
//                                 size="icon"
//                                 onClick={handlePrevious}
//                                 disabled={currentIndex === 0}
//                                 className="h-10 w-10 rounded-full border-gray-300 hover:bg-gray-100 bg-transparent"
//                             >
//                                 <ChevronLeft className="h-5 w-5" />
//                             </Button>
//                             <Button
//                                 variant="outline"
//                                 size="icon"
//                                 onClick={handleNext}
//                                 disabled={currentIndex >= maxIndex}
//                                 className="h-10 w-10 rounded-full border-gray-300 hover:bg-gray-100"
//                             >
//                                 <ChevronRight className="h-5 w-5" />
//                             </Button>
//                         </div>
//                     </div>

//                     {/* Categories carousel */}
//                     <div className="overflow-hidden">
//                         <div
//                             className="flex transition-transform duration-300 ease-in-out gap-6"
//                             style={{
//                                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
//                                 width: `${(categories.length / itemsPerView) * 100}%`,
//                             }}
//                         >
//                             {categories.map((category) => (
//                                 <div
//                                     key={category.id}
//                                     className="flex-shrink-0 cursor-pointer group"
//                                     style={{ width: `${100 / categories.length}%` }}
//                                 >
//                                     <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
//                                         <div className="aspect-[4/3] overflow-hidden">
//                                             <img
//                                                 src={category.image || "/placeholder.svg"}
//                                                 alt={category.title}
//                                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                                             />
//                                         </div>
//                                         <div className="p-4 text-center bg-[#E8E8E9]">
//                                             <h3 className="font-semibold text-[#595959] text-sm">{category.title}</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

                    
                    
//                 </div>
//             </section>
//         </div>
//     )
// }


"use client"

import Heading from '@/components/ui/Heading'
import React from 'react'
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from 'antd'


const categories = [
    {
        id: "1",
        title: "Hair Care",
        image: "/images/hair-care.jpg",
    },
    {
        id: "2",
        title: "Facial & Skin Care",
        image: "/images/facial.jpg",
    },
    {
        id: "3",
        title: "Body Treatments",
        image: "/images/body.jpg",
    },
    {
        id: "4",
        title: "Nail Care",
        image: "/images/nail.jpg",
    },
    {
        id: "5",
        title: "Makeup Services",
        image: "/images/makeup.jpg",
    },
    {
        id: "6",
        title: "Eye & Brow Services",
        image: "/images/eye.jpg",
    },
]


export default function Category() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(4)

    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1) // Show 1 item on mobile
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2) // Show 2 items on tablet
            } else {
                setItemsPerView(4) // Show 4 items on desktop
            }
            setCurrentIndex(0) // Reset to first slide when changing view
        }

        updateItemsPerView()
        window.addEventListener('resize', updateItemsPerView)
        return () => window.removeEventListener('resize', updateItemsPerView)
    }, [])

    const maxIndex = Math.max(0, categories.length - itemsPerView)

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
    }

    return (
        <div className='text-center'>
            {/* heading */}
            <div>
                <Heading text="Categories" />
            </div>

            {/* cards */}
            <section className="pt-4 px-4">
                <div className="container mx-auto">
                    {/* Header with navigation */}
                    <div className="flex items-center justify-end mb-8">
                        
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrevious}
                                disabled={currentIndex === 0}
                                className="h-12 w-12 rounded-full border-gray-200 hover:bg-gray-100 bg-transparent shadow-2xl"
                            >
                                <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                disabled={currentIndex >= maxIndex}
                                className="h-12 w-12 md:h-14 md:w-14 rounded-full border-gray-300 hover:bg-gray-100"
                            >
                                <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                            </Button>
                        </div>
                    </div>

                    {/* Categories carousel */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out gap-3 md:gap-6"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                width: `${(categories.length / itemsPerView) * 100}%`,
                            }}
                        >
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex-shrink-0 cursor-pointer group"
                                    style={{ width: `${100 / categories.length}%` }}
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={category.image || "/placeholder.svg"}
                                                alt={category.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                            />
                                        </div>
                                        <div className="p-3 md:p-4 text-center bg-[#E8E8E9]">
                                            <h3 className="font-semibold text-[#595959] text-sm md:text-base">{category.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator for mobile */}
                    <div className="flex justify-center mt-6 md:hidden">
                        <div className="flex gap-2">
                            {Array.from({ length: maxIndex + 1 }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                        currentIndex === index 
                                            ? 'bg-gray-800 w-6' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}