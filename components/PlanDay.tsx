import { useState, useEffect } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

interface PlanDayProps {}

const PlanDay: React.FC<PlanDayProps> = () => {
   return (
      <div className="custom-container px-5">
         <div className="">
            <motion.h2
               className="text-7xl font-[champignon] font-normal leading-[0.8] text-center mt-14"
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 1,
               }}
            >
               План дня
            </motion.h2>
         </div>

         <div className="flex flex-col gap-5 mt-5 relative">
            <motion.div
               initial={{ height: "30%" }}
               whileInView={{ height: "80%" }}
               transition={{
                  delay: 0,
                  ease: "easeOut",
                  duration: 2,
               }}
               className="w-[1px] h-[20%] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"
            ></motion.div>

            {[0, 1, 2, 3].map((item: number) => {
               return (
                  <div
                     key={item}
                     className="flex items-center justify-around relative"
                  >
                     <motion.div
                        initial={{
                           y: 5,
                           x: -50,
                           scale: 1,
                           opacity: 1,
                        }}
                        whileInView={{
                           y: 0,
                           x: 0,
                           scale: 1,
                           opacity: 1,
                        }}
                        transition={{
                           delay: 0,
                           ease: "easeOut",
                           duration: 1,
                        }}
                        className="w-28"
                     >
                        <img
                           src="https://thumb.tildacdn.com/tild3632-6165-4436-b139-653665326435/-/resize/224x/-/format/webp/1.png"
                           alt=""
                        />
                     </motion.div>
                     <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                     <motion.div
                        initial={{
                           y: 5,
                           x: 50,
                           scale: 0.9,
                           opacity: 0,
                        }}
                        whileInView={{
                           y: 0,
                           x: 0,
                           scale: 1,
                           opacity: 1,
                        }}
                        transition={{
                           delay: 0,
                           ease: "easeOut",
                           duration: 1,
                        }}
                        className=""
                     >
                        <p className="text-[20px]">
                           15:20 <br /> Регистрация
                        </p>
                     </motion.div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default PlanDay;
