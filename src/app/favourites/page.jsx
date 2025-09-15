import React from 'react'
import Heading from '@/components/ui/Heading';
import serviceImg from "@/assets/images/hair-color.png"
import ServiceCard from '@/components/features/homePage/ServiceCard';

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
    {
      image: serviceImg,
      title: "Service 5",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 6",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 7",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 8",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 9",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 10",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 11",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    {
      image: serviceImg,
      title: "Service 12",
      price: "$40",
      providerName: "Provider 4",
      providerAvatar: "/provider4.jpg",
      rating: 4.7,
    },
    
  ];

export default function FavouriteServicesPage() { 
  return (
     <div className='container mx-auto px-4 xl:px-0 my-10 lg:my-20'>
        
        <div className='mb-6 lg:mb-10'>
          <Heading text="My Favourite Services"/>
        </div>

        {/* All services */}
        <div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              price={service.price}
              providerName={service.providerName}
              providerAvatar={service.providerAvatar}
              rating={service.rating}
              isFavorite = {true}
            />
          ))}
        </div>

        </div>
        
      </div>
  )
}
