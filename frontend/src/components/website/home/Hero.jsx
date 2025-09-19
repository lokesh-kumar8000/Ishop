import React from "react";
import { FaLaptop } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

function Hero() {
  const Category = [
    {
      icon: <FaLaptop className="text-[#01A49E] text-xl" />,
      name: "Laptop",
      count: 1,
    },
    {
      icon: <RiComputerLine className="text-[#01A49E] text-xl" />,
      name: "PC & Computers",
      count: 2,
    },
    {
      icon: <GiSmartphone className="text-[#01A49E] text-xl" />,
      name: "Call Phones",
      count: 3,
    },
    {
      icon: <FaTabletScreenButton className="text-[#01A49E] text-xl" />,
      name: "Tablets",
      count: 4,
    },
    {
      icon: <IoCameraSharp className="text-[#01A49E] text-xl" />,
      name: "Cameras",
      count: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4"> 
      {/* left section */}
      <div className="bg-white p-5 rounded-[15px]">
        <h1 className="text-[#253D4E] font-bold text-[20px] md:text-[24px] border-b-2 border-[#ECECEC] pb-3">
          Category
        </h1>
        <div className="pt-5 space-y-3">
          {Category.map((cat, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-[#F2F3F4] px-4 py-3 rounded-md"
            >
              <div className="flex items-center gap-3">
                {cat.icon}
                <span className="text-[13px] md:text-[15px] font-semibold">
                  {cat.name}
                </span>
              </div>
              <div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-[#01A49E78] text-[12px]">
                {cat.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right section */}
      <div className="lg:col-span-3 bg-[url('/images/homeHero.png')] bg-cover bg-center w-full rounded-[20px] md:rounded-[30px] flex items-center justify-center p-6">
        <div className="text-white text-center lg:text-left max-w-2xl">
          <h1 className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold leading-tight">
            Don’t miss amazing <br className="hidden sm:block" /> grocery deals
          </h1>
          <p className="text-[16px] sm:text-[22px] lg:text-[30px] py-4 sm:py-6">
            Sign up for the daily newsletter
          </p>
          <div className="border border-[#9A9A9A] w-full sm:w-[80%] lg:w-[60%] pl-2 rounded-full flex items-center gap-3 ">
            <LuSend className="text-[20px] sm:text-[24px] text-white" />
            <input 
              type="text" 
              placeholder="Your email address"
              className="flex-1 bg-transparent placeholder:text-white text-white px-2 py-3 outline-0 text-[14px] sm:text-[16px]"
            /> 
            <button className="bg-[#01A49E] px-4 sm:px-6 lg:px-[40px] py-2 sm:py-3 lg:py-[22px] rounded-full cursor-pointer text-sm sm:text-base">
              Subscribe 
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
