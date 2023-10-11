"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { motion } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   return (
      <div className="custom-container py-20 max-sm:py-10 px-16">
         <div className="flex gap-5 justify-center">
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2, ease: "easeOut", duration: 1.5 }}
               className="mt-5"
            >
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  23
               </p>
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  10
               </p>
               <p className="text-[45px] leading-10 font-[Jony] font-semibold">
                  23
               </p>
            </motion.div>
            <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0, ease: "easeOut", duration: 1.5 }}
               className="max-w-[250px] w-full"
            >
               <Image
                  src={"/images/love-history.jpg"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </motion.div>
         </div>
         <div className="mt-5 pl-9 relative">
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4, ease: "easeOut", duration: 1.5 }}
               className="w-[1px] h-72 absolute left-5 -bottom-8 bg-black"
            ></motion.div>
            <motion.div
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.6, ease: "easeOut", duration: 1.5 }}
               className=""
            >
               <p className="text-[48px] leading-10">Дмитрий</p>
               <img
                  className="w-20"
                  src="https://thumb.tildacdn.com/tild6139-3134-4430-a536-363535613537/-/resize/124x/-/format/webp/and.png"
                  alt="and"
               />
               <p className="text-[48px] leading-8">Ольга</p>
            </motion.div>
         </div>
      </div>
   );
};

export default Hero;
