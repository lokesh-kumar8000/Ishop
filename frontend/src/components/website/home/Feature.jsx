import React from 'react';

function Feature() {
  const category = [
    { name: 'Laptop', img: '/images/home/category1.png' },
    { name: 'PC Gaming', img: '/images/home/category2.png' },
    { name: 'Headphones', img: '/images/home/category3.png' },
    { name: 'Monitors', img: '/images/home/category4.png' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-7">
      {/* Left Section */}
      <div className="col-span-1 bg-white py-5 px-4 sm:py-6 sm:px-5 rounded-[15px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] sm:text-[18px] font-bold uppercase">
            featured brands
          </h1>
          <p className="text-[#666666] text-[12px] sm:text-[13px] leading-[20px] cursor-pointer">
            View All
          </p>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-x-14 sm:gap-y-4 pt-4 sm:pt-5">
          <img src="/images/home/brand1.png" className="h-[25px] sm:h-[35px] w-auto" alt="" />
          <img src="/images/home/brand2.png" className="h-[22px] sm:h-[29px] w-auto" alt="" />
          <img src="/images/home/brand3.png" className="h-[24px] sm:h-[32px] w-auto" alt="" />
          <img src="/images/home/brand4.png" className="h-[20px] sm:h-[25px] w-auto" alt="" />
          <img src="/images/home/brand5.png" className="h-[12px] sm:h-[15px] w-auto" alt="" />
          <img src="/images/home/brand6.png" className="h-[11px] sm:h-[13px] w-auto" alt="" />
          <img src="/images/home/brand7.png" className="h-[18px] sm:h-[24px] w-auto" alt="" />
          <img src="/images/home/brand8.png" className="h-[26px] sm:h-[34px] w-auto" alt="" />
          <img src="/images/home/brand9.png" className="h-[22px] sm:h-[31px] w-auto" alt="" />
          <img src="/images/home/brand10.png" className="h-[18px] sm:h-[23px] w-auto" alt="" />
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-1 bg-white py-5 px-4 sm:py-6 sm:px-5 rounded-[15px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] sm:text-[18px] font-bold uppercase">
            top categories
          </h1>
          <p className="text-[#666666] text-[12px] sm:text-[13px] leading-[20px] cursor-pointer">
            View All
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-5">
          {category.map((data, index) => (
            <div key={index} className="flex flex-col items-center"> 
              <img 
                src={data.img} 
                className="w-[70px] h-[45px] sm:w-[100px] sm:h-[60px] object-contain"
                alt={data.name}
              />
              <h4 className="text-[13px] sm:text-[14px] font-semibold leading-[20px] sm:leading-[24px] text-center mt-2">
                {data.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
