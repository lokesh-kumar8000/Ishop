import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function BestLaptop() {
  const category = [
    { name: "Macbook", pera: "74 Items", img: "/images/home/laptop.png" },
    { name: "Gaming PC", pera: "5 Items", img: "/images/home/category1.png" },
    { name: "Laptop Office", pera: "22 Items", img:"/images/home/category2.png" },
    { name: "Laptop 15", pera: "55 Items", img: "/images/home/category3.png" },
    { name: "M1 2023", pera: "32 Items", img: "/images/home/category4.png" },
    { name: "Secondhand", pera: "16 Items", img: "/images/home/category1.png" },
  ];
  const slider = [
    {
      img: "/images/home/laptop.png",
      name: "Pineapple Macbook Pro 2022 M1 / 512 GB",
      discounted: "$1,729.00 ",
      price: "$2,119.00",
      save: "$59.00",
      charge: "free shipping",
      stock: "Out of stock",
    },
    {
      img: "/images/home/category1.png",
      name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
      discounted: "$979.00  ",
      price: "$1,259.00",
      save: "$80.00",
      charge: "$2.98 Shipping",
      stock: "in stock",
    },
    {
      img: "/images/home/category2.png",
      name: "iSmart 24V Charger",
      discounted: "$9.00",
      price: "$12.00",
      save: "$3.00",
      charge: "$3.98 Shipping",
      stock: "Out of stock",
    },
    {
      img: "/images/home/category4.png",
      name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
      discounted: "$569.00 ",
      price: "$759.00",
      save: "$199.00",
      charge: "free shipping",
      stock: "in stock",
    },
  ];

  return (
    <div className="p-4 sm:p-5 bg-white rounded-[10px] my-5">
      {/* Top heading */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-[16px] sm:text-[18px] font-semibold uppercase">
          Best Laptops & Computers
        </h1>
        <p className="text-[#666666] text-[12px] sm:text-[13px] cursor-pointer">
          View All
        </p>
      </div>

      {/* Main content */}
      <div className="py-5 flex flex-col lg:flex-row gap-6 border-b border-[#99999944] ">
        {/* Left Banner */}
        <div className="bg-[url('/images/hero3.png')] w-full lg:w-1/2 rounded-[10px] bg-cover bg-center h-[200px] sm:h-[250px]">
          <div className="px-5 sm:px-7 py-6 flex flex-col justify-between text-white h-full">
            <div>
              <h1 className="text-[20px] sm:text-[25px] lg:text-[30px] font-medium leading-7 lg:leading-9 mb-2.5">
                Mobok 2 <br /> superchard <br /> <span className=" font-light " > by M2 </span> 
              </h1>
              <p className="text-[13px] text-[#ddd]">
                Start from <span className=" text-green-600 " > $1,199</span>
              </p>
            </div>
            <button className="mt-4 lg:mt-0 text-black bg-white py-[6px] px-[14px] rounded-[8px] text-[12px] font-medium cursor-pointer self-start lg:self-end">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full lg:w-1/2">
          {category.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2  rounded-md hover:shadow-md transition"
            >
              <div>
                <h1 className="font-bold text-[13px] sm:text-[14px]">
                  {data.name}
                </h1>
                <p className="text-[11px] sm:text-[12px] text-[#666666]">
                  {data.pera}
                </p>
              </div>
              <Image
                src={data.img}
                height={50}
                width={50}
                alt={data.name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" my-8 lg:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {slider.map((data, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm relative hover:shadow-md transition"
          >
            <Link href="" className="flex justify-center">
              <img
                className="rounded-t-lg w-full h-[180px] sm:h-[200px] object-contain"
                src={data.img}
                alt={data.name}
              />
            </Link>
            <div className="p-3 sm:p-5">
              <h5 className="mb-2 text-[12px] sm:text-[14px] font-bold line-clamp-2">
                {data.name}
              </h5>
              <div className="flex gap-3 items-center">
                <span className="text-[16px] sm:text-[18px] text-[#F1352B] font-semibold">
                  {data.discounted}
                </span>
                <span className="text-[12px] sm:text-[14px] font-semibold text-[#666666] line-through">
                  {data.price}
                </span>
              </div>
              <p
                className={`py-[3px] px-[6px] rounded-[6px] inline text-[10px] sm:text-[11px] font-medium uppercase my-2 ${
                  data.charge === "free shipping"
                    ? "text-[#1ABA1A] bg-[#d0edd0]"
                    : "text-black bg-[#eaeaea]"
                }`}
              >
                {data.charge}
              </p>
              <div className="flex items-center gap-1 text-[11px] sm:text-[12px] py-2">
                {data.stock === "in stock" ? (
                  <FaCheckCircle className="text-[#1ABA1A]" />
                ) : (
                  <MdCancel className="text-[#F1352B]" />
                )}
                {data.stock}
              </div>
            </div>
            {/* save badge */}
            <div className="absolute top-0 left-0 py-2 px-2.5 rounded-[10px] bg-[#1ABA1A] text-white">
              <p className="text-[9px] sm:text-[10px] uppercase">save</p>
              <h6 className="text-[12px] sm:text-[14px] font-medium">
                {data.save}
              </h6>
            </div>
            {/* heart icon */}
            <div className="absolute top-[10px] right-[10px] h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] bg-[#E2E4EB] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#d0d2d9]">
              <CiHeart className="text-red-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestLaptop;
