import React from "react";
import Link from "next/link"; 
import { MdCancel } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function BestSeller() {
  const slider = [
    {
      img: "/images/best.png",
      name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
      discounted: "$1,729.00 ",
      price: "$2,119.00",
      save: "$59.00",
      charge: "free shipping",
      stock: "Out of stock",
    },
    {
      img: "/images/best.png",
      name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
      discounted: "$979.00  ",
      price: "$1,259.00",
      save: "$80.00",
      charge: "$2.98 Shipping",
      stock: "in stock",
    },
    {
      img: "/images/best.png",
      name: "iSmart 24V Charger",
      discounted: "$9.00",
      price: "$12.00",
      save: "$3.00",
      charge: "$3.98 Shipping",
      stock: "Out of stock",
    },
    {
      img: "/images/best.png",
      name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
      discounted: "$569.00 ",
      price: "$759.00",
      save: "$199.00",
      charge: "free shipping",
      stock: "in stock",
    },
  ];

  return (
    <div className="p-3 sm:p-5 bg-white rounded-[10px] mt-2.5">
      {/* top section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex flex-wrap gap-4">
          <h1 className="text-[16px] sm:text-[18px] font-semibold uppercase">
            Best seller
          </h1>
          <h2 className="text-[16px] sm:text-[18px] uppercase">New in</h2>
          <h2 className="text-[16px] sm:text-[18px] uppercase">Popular</h2>
        </div>
        <p className="text-[#666666] text-[12px] sm:text-[13px] cursor-pointer">
          View All
        </p>
      </div>

      {/* product cards */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

export default BestSeller;
