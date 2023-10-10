/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container py-20 max-sm:py-10 px-16">
         <div className="flex gap-5 justify-center">
            <div className="mt-5">
               <p className="text-[45px] leading-10">23</p>
               <p className="text-[45px] leading-10">10</p>
               <p className="text-[45px] leading-10">23</p>
            </div>
            <div className="max-w-[250px] w-full">
               <Image
                  src={"/images/love-history.jpg"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </div>
         </div>
         <div className="mt-5 pl-9 relative">
            <div className="w-[1px] h-72 absolute left-5 -bottom-8 bg-black"></div>
            <p className="text-[48px] leading-10">Дмитрий</p>
            <img
               className="w-20"
               src="https://thumb.tildacdn.com/tild6139-3134-4430-a536-363535613537/-/resize/124x/-/format/webp/and.png"
               alt="and"
            />
            <p className="text-[48px] leading-8">Ольга</p>
         </div>
      </div>
   );
};

export default Hero;
