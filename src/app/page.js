import CategoriesSection from "@/components/features/homePage/CategoriesSection";
import FAQs from "@/components/features/homePage/FAQ";
import ServiceCard from "@/components/features/homePage/ServiceCard";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import bg from "@/assets/images/bg.png"

import serviceImg from "@/assets/images/hair-care.jpg"
// import serviceImg from "@/assets/images/hair-color.png"

export default function Home() {

  const serviceData = [
    {
      image: serviceImg,
      title: "Service 1",
      price: "$20",
      providerName: "Provider 1",
      providerAvatar: "/provider1.jpg",
      rating: 4.5,
    },
    {
      image: serviceImg,
      title: "Service 2",
      price: "$30",
      providerName: "Provider 2",
      providerAvatar: "/provider2.jpg",
      rating: 4.2,
    },
    {
      image: serviceImg,
      title: "Service 3",
      price: "$25",
      providerName: "Provider 3",
      providerAvatar: "/provider3.jpg",
      rating: 4.8,
    },
    {
      image: serviceImg,
      title: "Service 4",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    
  ];

  return (
    <div className="w-full">

      {/* Image */}
      <div className="relative ">
        <Image
          src={bg}
          alt="Background"
          priority
        />
      </div>

      {/* Category */}
      <div className="my-10 lg:my-24 ">
        <CategoriesSection />
      </div>

      {/* Near by location */}
      <div className="mb-10 lg:mb-24 container mx-auto">
        {/* header */}
        <div className="text-center">
          <Heading text="Near By Location" />
        </div>

        {/* see all button */}
        <div className="flex justify-end my-10">
          <Link className="flex items-center gap-2" href="/services"> <span className="font-semibold">See All</span> <FaArrowRight /></Link>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 xl:px-0">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              price={service.price}
              providerName={service.providerName}
              providerAvatar={service.providerAvatar}
              rating={service.rating}
            />
          ))}
        </div>
      </div>

      {/* Best for you */}
      <div className="mb-10 lg:mb-24 container mx-auto">
        {/* header */}
        <div className="text-center">
          <Heading text="Best For You" />
        </div>

        {/* see all button */}
        <div className="flex justify-end my-10">
          <Link className="flex items-center gap-2" href="/services"> <span className="font-semibold">See All</span> <FaArrowRight /></Link>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-4 xl:px-0">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              price={service.price}          
              providerName={service.providerName}
              providerAvatar={service.providerAvatar}
              rating={service.rating}
            />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-10 lg:mb-24 container mx-auto">

        <div className="text-center">
          <Heading text="FAQ"/>
          
        </div>

        <div>
          <FAQs />
        </div>
      </div>

    </div>
  );
}
