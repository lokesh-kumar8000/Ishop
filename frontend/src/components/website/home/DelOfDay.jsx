"use client";
import { getProducts } from "@/library/api.call";
import { formatIndianCurrency } from "@/library/helper";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import CartBtn from "../CartBtn";

function DelOfDay() {
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  // console.log(Math.floor(Math.random() * 10)); 

  async function getproduct() {
    const productJSON = await getProducts();
    const products = productJSON.data;
    let limit = Math.floor(Math.random() * products.length);
    setImg(products[limit]?.thumbnail);
    // console.log(products , 'prodjucts');
    // console.log(limit , 'limit');
    setProduct(products[limit]);
  }

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* left section */}
      <div className="lg:col-span-3 w-full">
        <div className="bg-[#01A49E] flex justify-between items-center px-5 py-3 rounded-[15px] text-white">
          <h4 className="font-bold text-[16px] sm:text-[18px] uppercase">
            Deals of the day
          </h4>
          {/* <p className="text-[12px] sm:text-[13px]">View All </p> */}
        </div>

        {/* content box */}
        <div className="px-4 sm:px-5 py-6 sm:py-[50px] flex flex-col lg:flex-row items-center gap-6 lg:gap-9 bg-white rounded-[10px]">
          {/* left images */}
          <div className="flex gap-3 w-full lg:w-1/2">
            <div className="flex flex-col gap-3 mt-3 overflow-x-auto sm:overflow-visible">
              {product?.images?.map((image, i) => (
                <img
                  key={i}
                  src={`${process.env.NEXT_PUBLIC_API__BASE_URL}/image/product/${image}`}
                  alt="gallery"
                  onMouseOver={() => setImg(image)} 
                  onMouseLeave={() => setImg(product.thumbnail)}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded border cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
            <div className="flex-1">
              <div className="flex justify-center items-center relative">
                <img
                  src={`${process.env.NEXT_PUBLIC_API__BASE_URL}/image/product/${img}`}
                  className="rounded-2xl max-h-[400px] w-full object-contain sm:max-h-[500px]"
                  alt=""
                />
                <div className="h-8 w-8 bg-[#EBEDF3] rounded-full absolute top-0 right-4 sm:right-[50px] text-red-600 flex justify-center items-center">
                  <FaHeart />
                </div>
                <div className=" absolute top-0 left-[20px] py-1.5 px-2  rounded-[10px] bg-[#e61515] text-white ">
                  <p className=" text-[8px] uppercase ">OFF</p>
                  <h6 className=" text-[10px] font-medium ">
                    {product?.discountPercentage}%
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* right content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold text-4xl uppercase sm:text-base leading-[19px]">
              {product?.name}
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">
                {formatIndianCurrency(product?.finalPrice)}
              </span>
              <span className="line-through text-gray-400 text-sm sm:text-base">
                {formatIndianCurrency(product?.originalPrice)}
              </span>
              <span className="text-green-600 font-medium text-sm sm:text-base">
                {product?.discountPercentage}% Off
              </span>
            </div>

            {/* features */}
            <p className="text-gray-600 text-sm sm:text-base">
              {product?.shortDescription}
            </p>

            <p
              className={`font-semibold text-sm sm:text-base ${
                product?.stock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product?.stock ? "In Stock" : "Out of Stock"}
            </p>
            <div
              className="prose max-w-none text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: product?.longDescription }}
            />

            {/* timer */}
            <div>
              <h2 className="text-[12px] sm:text-[13px] font-medium uppercase">
                hurry up! Promotion will expires in
              </h2>
              <div className="flex gap-3 sm:gap-5 my-3">
                <div className="bg-[#EBEDF3] rounded-[6px] px-2 py-3 sm:py-4 text-sm sm:text-base">
                  016 D
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
            <div>
              <CartBtn
                finalPrice={product?.finalPrice}
                originalPrice={product?.originalPrice}
                productId={product?._id}
              />
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
