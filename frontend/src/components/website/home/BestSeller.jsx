import React from "react";
import Link from "next/link"; 
import { MdCancel } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { getProducts } from "@/library/api.call";
import ProductCard from "../ProductCard";

 async function BestSeller() {
  // const slider = [
  //   {
  //     img: "/images/best.png",
  //     name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
  //     discounted: "$1,729.00 ",
  //     price: "$2,119.00",
  //     save: "$59.00",
  //     charge: "free shipping",
  //     stock: "Out of stock",
  //   },
  //   {
  //     img: "/images/best.png",
  //     name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
  //     discounted: "$979.00  ",
  //     price: "$1,259.00",
  //     save: "$80.00",
  //     charge: "$2.98 Shipping",
  //     stock: "in stock",
  //   },
  //   {
  //     img: "/images/best.png",
  //     name: "iSmart 24V Charger",
  //     discounted: "$9.00",
  //     price: "$12.00",
  //     save: "$3.00",
  //     charge: "$3.98 Shipping",
  //     stock: "Out of stock",
  //   },
  //   {
  //     img: "/images/best.png",
  //     name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
  //     discounted: "$569.00 ",
  //     price: "$759.00",
  //     save: "$199.00",
  //     charge: "free shipping",
  //     stock: "in stock",
  //   },
  // ]; 
   const productJSON = await getProducts(); 
  const products = productJSON.data; 

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
      {products &&
          products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>
    </div>
  );
}

export default BestSeller;
