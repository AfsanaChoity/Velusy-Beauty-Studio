"use client"

import { useEffect, useRef, useState } from "react"
import Heading from "@/components/ui/Heading"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// --- sample data (same as yours) ---
const categories = [
  { id: "1", title: "Hair Care", image: "/images/hair-care.jpg" },
  { id: "2", title: "Facial & Skin Care", image: "/images/facial.jpg" },
  { id: "3", title: "Body Treatments", image: "/images/body.jpg" },
  { id: "4", title: "Nail Care", image: "/images/nail.jpg" },
  { id: "5", title: "Makeup Services", image: "/images/makeup.jpg" },
  { id: "6", title: "Eye & Brow Services", image: "/images/eye.jpg" },
]

// --- component ---
export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef(null)

  const getGapSize = () => {
    if (typeof window === "undefined") return 24; // default for SSR
    return window.innerWidth < 768 ? 12 : 24;
  }


  const slideWidth =
    containerWidth && itemsPerView ? Math.floor((containerWidth - getGapSize() * (itemsPerView - 1)) / itemsPerView) : 0

  const maxIndex = Math.max(0, categories.length - itemsPerView)

  // update itemsPerView based on screen size + measure container
  useEffect(() => {
    function update() {
      if (typeof window === "undefined") return;
      
      const w = window.innerWidth
      let per = 4
      if (w < 768) per = 1
      else if (w < 1024) per = 2
      else per = 4
      setItemsPerView(per)

      // measure container width (if mounted)
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }

    update()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", update)
      return () => window.removeEventListener("resize", update)
    }
  }, [])

  // when itemsPerView or container width changes, clamp currentIndex
  useEffect(() => {
    const newMax = Math.max(0, categories.length - itemsPerView)
    setCurrentIndex((prev) => Math.min(prev, newMax))
  }, [itemsPerView, containerWidth])

  // measure container on mount (and when ref changes)
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return
    const ro = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // navigation handlers
  const handlePrevious = () => setCurrentIndex((p) => Math.max(0, p - 1))
  const handleNext = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1))

  // keyboard navigation when focus is on the track wrapper
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
  }

  // touch / swipe support
  const touchStartX = useRef(0)
  const touchCurrentX = useRef(0)
  const isSwiping = useRef(false)

  const onTouchStart = (e) => {
    isSwiping.current = true
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e) => {
    if (!isSwiping.current) return
    touchCurrentX.current = e.touches[0].clientX
  }
  const onTouchEnd = () => {
    if (!isSwiping.current) return
    const dx = touchCurrentX.current - touchStartX.current
    const threshold = Math.max(30, slideWidth * 0.2) // threshold to count as swipe
    if (dx > threshold) {
      handlePrevious()
    } else if (dx < -threshold) {
      handleNext()
    }
    isSwiping.current = false
    touchStartX.current = 0
    touchCurrentX.current = 0
  }

  const trackTransform = {
    transform: `translateX(-${currentIndex * (slideWidth + getGapSize())}px)`,
  }

  return (
    <div className="text-center">
      <div>
        <Heading text="Categories" />
      </div>

      <section className="pt-10 px-4 xl:px-0">
        <div className="container mx-auto">
          {/* Header with navigation (right aligned) */}
          <div className="flex items-center justify-end mb-8">
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                aria-label="Previous"
                className={`h-10 w-10   bg-white flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 shadow shadow-gray-500
                  ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
              >
                <IoIosArrowBack className="text-[#020202] text-xl" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next"
                className={`h-10 w-10   bg-white flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 shadow shadow-gray-500
                  ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
              >
                <IoIosArrowForward className="text-[#020202] text-xl" />
              </button>
            </div>
          </div>

          {/* Carousel container */}
          <div
            ref={containerRef}
            className="overflow-hidden"
            onKeyDown={handleKeyDown}
            tabIndex={0} // make focusable for keyboard navigation
            role="region"
            aria-roledescription="carousel"
            aria-label="Category carousel"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex gap-3 md:gap-6 transition-transform duration-300 ease-in-out"
              style={{
                ...trackTransform,
                height: "auto",
                width: `${categories.length * slideWidth + (categories.length - 1) * getGapSize()}px`,
              }}
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 cursor-pointer group"
                  style={{ width: `${slideWidth}px`, flex: `0 0 ${slideWidth}px` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg?height=200&width=300&query=category placeholder"}
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
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index ? "bg-gray-800 w-6" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
