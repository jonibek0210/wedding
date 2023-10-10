/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { AiOutlineHeart } from "react-icons/ai";

import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <section>
               <Hero />
            </section>

            <section>
               <div className="custom-container px-5">
                  <div className="flex justify-center mt-10">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-24"
                           src="https://thumb.tildacdn.com/tild3862-3034-4631-a430-353366643331/-/resize/444x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="flex justify-center mt-5">
                     <div className="max-w-xs w-full">
                        <p className="text-[18px] text-center">
                           В нашей жизни произойдет очень важное событие – наша
                           свадьба! Мы верим и надеемся, что этот день станет
                           красивым началом долгой и счастливой жизни.
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center mt-10">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-10 left-1/2 -translate-x-1/2"
                           src="https://thumb.tildacdn.com/tild3766-6162-4463-b161-353131623932/-/resize/240x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="mb-10">
                     <p className="text-center">11 2023 года</p>
                  </div>
                  <div className="flex justify-center">
                     <Image
                        className="max-w-[247px] w-full"
                        src={"/images/photo-2.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
               </div>
            </section>

            <section>
               <div className="">
                  <div className="flex justify-center mt-2">
                     <div className="max-w-xl w-full relative">
                        <img
                           className=""
                           src="https://static.tildacdn.com/tild3430-3964-4537-a564-353064393734/_.png"
                           alt="text"
                        />
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="">
                  <div className="flex justify-center mt-10">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-24"
                           src="https://thumb.tildacdn.com/tild3761-6636-4732-a637-303161363163/-/resize/304x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="mt-10">
                     <p className="text-[18px] text-center">
                        Triumph Event Hall
                     </p>
                     <a href="#" className="block mt-5 text-center">
                        ул. Неверовского, 15, Москва
                     </a>
                  </div>
                  <div className="flex justify-center mt-8">
                     <button className="h-10 px-5 flex items-center gap-2 border border-black rounded-full">
                        Посмотреть на карте
                        <img
                           width={"50px"}
                           src="https://thumb.tildacdn.com/tild3864-3934-4431-b462-616565636365/-/resize/100x/-/format/webp/photo.png"
                           alt="arrow"
                        />
                     </button>
                  </div>
               </div>
            </section>

            <section>
               <div className="custom-container px-5">
                  <div className="flex justify-center mt-10">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-10 left-1/2 -translate-x-1/2"
                           src="https://thumb.tildacdn.com/tild6237-3864-4434-b439-633137323434/-/resize/638x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-16 relative">
                     <div className="w-[2px] h-4/5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                     <div className="flex items-center justify-around relative">
                        <div className="w-28">
                           <img
                              src="https://thumb.tildacdn.com/tild3632-6165-4436-b139-653665326435/-/resize/224x/-/format/webp/1.png"
                              alt=""
                           />
                        </div>
                        <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                        <div className="">
                           <p className="text-[20px]">
                              15:20 <br /> Регистрация
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around relative">
                        <div className="w-28">
                           <img
                              src="https://thumb.tildacdn.com/tild3632-6165-4436-b139-653665326435/-/resize/224x/-/format/webp/1.png"
                              alt=""
                           />
                        </div>
                        <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                        <div className="">
                           <p className="text-[20px]">
                              15:20 <br /> Регистрация
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around relative">
                        <div className="w-28">
                           <img
                              src="https://thumb.tildacdn.com/tild3632-6165-4436-b139-653665326435/-/resize/224x/-/format/webp/1.png"
                              alt=""
                           />
                        </div>
                        <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                        <div className="">
                           <p className="text-[20px]">
                              15:20 <br /> Регистрация
                           </p>
                        </div>
                     </div>
                     <div className="flex items-center justify-around relative">
                        <div className="w-28">
                           <img
                              src="https://thumb.tildacdn.com/tild3632-6165-4436-b139-653665326435/-/resize/224x/-/format/webp/1.png"
                              alt=""
                           />
                        </div>
                        <div className="w-[12px] h-[12px] rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></div>
                        <div className="">
                           <p className="text-[20px]">
                              15:20 <br /> Регистрация
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="custom-container px-5">
                  <div className="flex justify-center mt-10">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-10 left-1/2 -translate-x-1/2"
                           src="https://thumb.tildacdn.com/tild3030-3264-4963-b563-623835333332/-/resize/670x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="">
                     <div className="flex justify-center mt-5">
                        <div className="max-w-[240px] w-full mt-10">
                           <p className="text-[20px] leading-[31px] text-center">
                              Будем очень благодарны, если Вы подберете наряды в
                              цветах нашей свадьбы
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center gap-4 py-2 px-4 my-10 border border-black rounded-full">
                     <div className="w-12 h-12 rounded-full bg-[#000000]"></div>
                     <div className="w-12 h-12 rounded-full bg-[#9e9e9e]"></div>
                     <div className="w-12 h-12 rounded-full bg-[#ececec]"></div>
                     <div className="w-12 h-12 rounded-full bg-[#f0dfe6]"></div>
                     <div className="w-12 h-12 rounded-full bg-[#d5e2eb]"></div>
                  </div>
                  <div className="flex justify-center">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-24 left-1/2 -translate-x-1/2"
                           src="https://thumb.tildacdn.com/tild6338-3335-4635-a661-646364313665/-/resize/670x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <div className="max-w-[280px] w-full">
                        <p className="text-[20px] leading-[31px] text-center">
                           Наш праздник для взрослых, так как мы не предполагаем
                           развлечений и посадочных мест для детей.
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center mt-5">
                     <AiOutlineHeart size={40} color={"gray"} />
                  </div>
                  <div className="flex justify-center mt-5">
                     <div className="max-w-[280px] w-full">
                        <p className="text-[20px] leading-[31px] text-center">
                           Просим вас не дарить нам цветы - мы не успеем
                           насладиться их красотой до отъезда. А вот бутылочке
                           вина для нашей семейной винотеки будем очень рады!
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center mt-5">
                     <AiOutlineHeart size={40} color={"gray"} />
                  </div>
                  <div className="flex justify-center mt-5">
                     <div className="max-w-[320px] w-full">
                        <p className="text-[20px] leading-[31px] text-center">
                           Не ломайте голову над подарком - мы будем рады Вашим
                           пожеланиям в конвертах.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="bg-[#ececec] overflow-hidden mt-5">
               <div className="custom-container">
                  <div className="relative mb-10 px-5">
                     <h2 className="text-[50px] text-center relative z-10">
                        ЖДЕМ ВАС
                     </h2>
                     <div className="w-64 absolute -top-16 -right-7 ">
                        <img
                           className="invert-[.60]"
                           src="https://thumb.tildacdn.com/tild3734-6337-4036-b765-396366386536/-/resize/718x/-/format/webp/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="flex justify-center gap-5 pt-20 pb-10 border-t border-gray-300">
                     <div className="flex flex-col items-center">
                        <div className="">
                           <span className="text-[30px] leading-5">00</span>
                        </div>
                        <div className="">
                           <span className="text-xs font-extralight">Дней</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="">
                           <span className="text-[30px] leading-5">00</span>
                        </div>
                        <div className="">
                           <span>Часов</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="">
                           <span className="text-[30px] leading-5">00</span>
                        </div>
                        <div className="">
                           <span>Минут</span>
                        </div>
                     </div>
                     <div className="flex flex-col items-center">
                        <div className="">
                           <span className="text-[30px] leading-5">00</span>
                        </div>
                        <div className="">
                           <span>Секунд</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section>
               <div className="custom-container px-10">
                  <div className="flex justify-center mt-5">
                     <div className="max-w-[300px] w-full">
                        <p className="text-[18px] leading-[31px] text-center">
                           Ответьте пожалуйста на несколько вопросов, которые мы
                           для Вас подготовили
                        </p>
                     </div>
                  </div>
                  <div className="animate-bounce flex justify-center mt-5">
                     <img
                        className="w-5 -rotate-90"
                        src="https://thumb.tildacdn.com/tild3831-6661-4164-a131-393166613730/-/format/webp/pngwingcom_15.png"
                        alt="arrow"
                     />
                  </div>
                  <div className="">
                     <p className="text-[18px] text-start mb-1">ФИО</p>
                     <input
                        type="text"
                        placeholder="Напишите пожалуйста Ваши ФИО"
                        className="w-full px-5 border border-black leading-[60px] placeholder:text-gray-400"
                     />
                  </div>
                  <form className="">
                     <div className="">
                        <div className="">
                           <h2 className="text-[18px] mb-2 mt-7">
                              Сможете ли присутствовать на нашем торжестве?
                           </h2>
                        </div>
                        <div className="">
                           <ul className="flex flex-col gap-1">
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       Я с удовольствием приду
                                    </span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       Буду со своей парой
                                    </span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       К сожалению, не смогу присутствовать
                                    </span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       Сообщу позже
                                    </span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="">
                        <div className="">
                           <h2 className="text-[18px] mb-2 mt-7">
                              Что предпочитаете из напитков?
                           </h2>
                        </div>
                        <div className="">
                           <ul className="flex flex-col gap-1">
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       Красное вино
                                    </span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">Белое вино</span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">Шампанское</span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">Водка</span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">Виски</span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">Коньяк </span>
                                 </label>
                              </li>
                              <li className="">
                                 <label className="flex items-center gap-4 cursor-pointer">
                                    <input
                                       className="radio cursor-pointer"
                                       name="attendance"
                                       type="radio"
                                    />
                                    <span className="text-sm">
                                       Не пью алкоголь
                                    </span>
                                 </label>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex justify-center mt-7">
                        <button className="w-[150px] h-[60px] rounded-full border border-black">
                           Отправить
                        </button>
                     </div>
                  </form>
               </div>
            </section>

            <section>
               <div className="custom-container">
                  <div className="flex justify-center">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-24 left-1/2 -translate-x-1/2"
                           src="https://static.tildacdn.com/tild6462-6561-4464-a661-323132306131/photo.png"
                           alt="text"
                        />
                     </div>
                  </div>
                  <div className="flex flex-col items-center">
                     <p className="text-[20px] text-center">
                        Жених:
                        <a href="tel:998(00)000-0000"> 998(00)000-0000</a>
                     </p>
                     <img
                        className="w-9 mt-4"
                        src="https://thumb.tildacdn.com/tild6638-6436-4431-a339-653032343035/-/resize/36x/-/format/webp/photo.png"
                        alt="tel"
                     />
                     <p className="text-[20px] text-center mt-5">
                        Невеста:
                        <a href="tel:998(00)000-0000"> 998(00)000-0000</a>
                     </p>
                     <img
                        className="w-9 mt-4"
                        src="https://thumb.tildacdn.com/tild6638-6436-4431-a339-653032343035/-/resize/36x/-/format/webp/photo.png"
                        alt="tel"
                     />
                  </div>

                  <div className="flex flex-col items-center">
                     <p className="text-[42px] font-bold text-center mt-5">
                        С ЛЮБОВЬЮ,
                     </p>
                     <AiOutlineHeart size={40} className="heart-animate my-5" />
                  </div>
                  <div className="flex justify-center">
                     <div className="max-w-xs w-full h-32 relative">
                        <img
                           className="absolute -top-24 left-1/2 -translate-x-1/2"
                           src="https://thumb.tildacdn.com/tild6265-6465-4230-a239-323932333936/-/resize/435x/-/format/webp/_.png"
                           alt="text"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
}
