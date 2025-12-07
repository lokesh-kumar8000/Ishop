"use client";

import { getCategory } from "@/library/api.call";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function PopularCategories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCategory = await getCategory();
      setCategory(allCategory.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-[10px] my-4 overflow-hidden">
      <div className="py-[25px] px-[30px]">
        <h2 className="text-[18px] font-bold uppercase pb-3.5">
          Popular Categories
        </h2>

        {category && category.length > 0 ? (
          <div className="relative ">
            <div className="flex items-center flex-wrap gap-6 md:gap-10 animate-scroll">
              {category.map((data, index) => (
                <Link
                  key={index}
                  href={`/store/${data.slug}`}
                  className="flex flex-col justify-center items-center min-w-[90px] sm:min-w-[100px] md:min-w-[120px]"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API__BASE_URL}/image/category/${data.image}`}
                    alt="img"
                    className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full border border-gray-200 p-1"
                  />
                  <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] mt-1 text-center">
                    {data.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
}

export default PopularCategories;
