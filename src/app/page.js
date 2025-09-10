import Category from "@/components/features/homePage/Category";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full"> 
      
      {/* Image */}
      <div className="relative w-full h-screen"> 
        <Image
          src="/images/bg.png"  
          alt="Background"
          layout="fill"          
          objectFit="cover"      
          priority
        />
      </div>

      {/* Category */}
      <div className="my-24">
        <Category />
      </div>

    </div>
  );
}
