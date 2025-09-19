import React from "react";
import { FaHeart } from "react-icons/fa";

function DelOfDay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* left section */}
      <div className="lg:col-span-3 w-full">
        <div className="bg-[#01A49E] flex justify-between items-center px-5 py-3 rounded-[15px] text-white">
          <h4 className="font-bold text-[16px] sm:text-[18px] uppercase">
            Deals of the day
          </h4>
          <p className="text-[12px] sm:text-[13px]">View All </p>
        </div>

        {/* content box */}
        <div className="px-4 sm:px-5 py-6 sm:py-[50px] flex flex-col lg:flex-row items-center gap-6 lg:gap-9 bg-white rounded-[10px]">
          {/* left images */}
          <div className="flex gap-3 w-full lg:w-1/2">
            <div className="flex flex-col gap-3 lg:gap-5 justify-center items-center">
              <img src="/images/home/deals1.png" className="h-[60px] w-[35px]" alt="" />
              <img src="/images/home/deals2.png" className="h-[60px] w-[35px]" alt="" />
              <img src="/images/home/deals3.png" className="h-[60px] w-[35px]" alt="" />
              <img src="/images/home/deals4.png" className="h-[60px] w-3" alt="" />
            </div>
            <div className="flex-1">
              <div className="flex justify-center items-center relative">
                <img src="/images/home/deals1.png" className="h-[200px] sm:h-[280px]" alt="" />
                <div className="h-8 w-8 bg-[#EBEDF3] rounded-full absolute top-0 right-4 sm:right-[50px] text-red-600 flex justify-center items-center">
                  <FaHeart />
                </div>
                <div className="bg-[#01A49E] py-1.5 px-3 sm:py-2 sm:px-4 text-white rounded-[10px] absolute top-0 left-4 sm:left-8">
                  <p className="text-[10px] sm:text-[12px] uppercase">save</p>
                  <h5 className="text-[14px] sm:text-[18px] font-medium">
                    $199.00
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* right content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold text-sm sm:text-base leading-[19px]">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </h2>
            <div className="py-3 sm:py-4 flex items-center gap-3">
              <h4 className="text-[#01A49E] text-[18px] sm:text-[22px] font-semibold">
                $569.00
              </h4>
              <p className="text-[#666666] font-semibold line-through text-sm sm:text-base">
                $759.00
              </p>
            </div>

            {/* features */}
            <ul className="list-disc pl-5 space-y-1">
              <li className="text-[12px] leading-[20px]">
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </li>
              <li className="text-[12px] leading-[20px]">
                DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
              </li>
              <li className="text-[12px] leading-[20px]">
                Commanding Power Design: Twin 16+1+2 Phases Digital VRM
              </li>
            </ul>

            {/* badges */}
            <div className="flex flex-wrap gap-3 sm:gap-7 my-6">
              <button className="text-[#01A49E] px-3 py-1 bg-blue-100 rounded-full text-[12px] uppercase">
                free shipping
              </button>
              <button className="text-[#01A49E] px-3 py-1 bg-blue-100 rounded-full text-[12px] uppercase">
                free gift
              </button>
            </div>

            {/* timer */}
            <div>
              <h2 className="text-[12px] sm:text-[13px] font-medium uppercase">
                hurry up! Promotion will expires in
              </h2>
              <div className="flex gap-3 sm:gap-5 my-3">
                <div className="bg-[#EBEDF3] rounded-[6px] px-2 py-3 sm:py-4 text-sm sm:text-base">
                  162 D
                </div>
                <div className="bg-[#EBEDF3] rounded-[6px] px-2 py-3 sm:py-4 text-sm sm:text-base">
                  -09 H
                </div>
                <div className="bg-[#EBEDF3] rounded-[6px] px-2 py-3 sm:py-4 text-sm sm:text-base">
                  -32 M
                </div>
                <div className="bg-[#EBEDF3] rounded-[6px] px-2 py-3 sm:py-4 text-sm sm:text-base">
                  -34 S
                </div>
              </div>
            </div>

            {/* progress */}
            <div className="my-5">
              <div className="h-2 w-full rounded-full bg-[#E2E4EB] relative">
                <div className="h-2 bg-[#01A49E] rounded-full w-[40%] absolute top-0"></div>
              </div>
              <p className="text-[12px] sm:text-[13px] my-3">
                Sold: <strong>26/75</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
     <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 mr-2.5">
  <img
    src="/images/home/dealsr1.png"
    className="rounded-[12px] w-full sm:w-1/3 lg:w-full h-[150px] sm:h-[177px]"
    alt=""
  />
  <img
    src="/images/home/dealsr2.png"
    className="rounded-[12px] w-full sm:w-1/3 lg:w-full h-[150px] sm:h-[177px]"
    alt=""
  />
  <img
    src="/images/home/dealsr3.png"
    className="rounded-[12px] w-full sm:w-1/3 lg:w-full h-[150px] sm:h-[177px]"
    alt=""
  />
</div>

    </div>
  );
}

export default DelOfDay;
