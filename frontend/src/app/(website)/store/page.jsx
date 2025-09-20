import ProductCard from "@/components/website/ProductCard";
import { getProducts } from "@/library/api.call";
import React from "react";

async function page({ searchParams }) {
  const brand = searchParams.brand ?? null;
  const color = searchParams.color ?? null;
  const min = searchParams.min ?? null;
  const max = searchParams.max ?? null; 

  const productJSON = await getProducts(null, null, brand, color,min,max); 
  const products = productJSON.data; 
  return (
    <div className="w-full sm:px-5 px-0 ">
      <h4 className=" text-[18px]  font-bold leading-[21px] pb-3 ">
        Best seller in this category
      </h4>
      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-3 gap-y-16 ">
        {products &&
          products.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>
    </div>
  );
}

export default page;
