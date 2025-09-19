import React from 'react'

function Discover() {
  return (
    <div className="w-full bg-[#01A49E] mt-4 rounded-[20px] flex flex-col lg:flex-row items-center justify-between text-white px-6 lg:px-10 gap-6">
      
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-2 text-center lg:text-left">
        <h3 className="text-[20px] sm:text-[24px] font-semibold uppercase leading-tight">
          Pre Order
        </h3>
        <p className="text-[14px] sm:text-[16px] leading-[22px]">From $399</p>
      </div>

      {/* Middle Image */}
      <div className="flex justify-center items-center">
        <div className="h-[120px] sm:h-[140px] w-[280px] sm:w-[350px] lg:w-[400px] bg-[#5F81A2] rounded-full flex justify-center items-end overflow-hidden">
          <img
            className="h-[120px] sm:h-[150px] object-contain"
            src="/images/home/discover.png"
            alt="Discover Product"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 text-center lg:text-left">
        <div className="flex flex-col gap-3">
          <p className="text-[12px] sm:text-[14px] leading-[18px]">
            Opplo Watch Sport Series 8
          </p>
          <h4 className="text-xl sm:text-2xl lg:text-3xl leading-[28px] sm:leading-[32px] lg:leading-[36px] font-light">
            A healthy leap ahead
          </h4>
        </div>
        <div>
          <button className="bg-white rounded-full py-2 px-6 font-semibold text-[14px] sm:text-[16px] leading-[21px] text-black hover:bg-gray-200 transition">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Discover
