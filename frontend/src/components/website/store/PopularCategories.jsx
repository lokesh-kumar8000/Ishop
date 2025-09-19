import React from "react";

function PopularCategories() {
  const category = [
    {
      name: "iPhone (iOS)",
      pera: "74 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Android",
      pera: "35 Items",
      img: "/images/pop1.png",
    },
    {
      name: " 5G Support ",
      pera: "12 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Apple Tablets",
      pera: "22 Items",
      img: "/images/pop1.png",
    },
    {
      name: "SmartPhone Chargers",
      pera: "33 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Gaming",
      pera: "74 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Xiaomi",
      pera: "52 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Accessories",
      pera: "29 Items",
      img: "/images/pop1.png",
    },
    {
      name: "Samsung Tablets",
      pera: "74 Items",
      img: "/images/pop1.png",
    },
    {
      name: "eReader",
      pera: "74 Items",
      img: "/images/pop1.png",
    },
  ];
  return (
    <div className="  bg-white rounded-[10px] my-4 ">
      <div className=" py-[25px] px-[30px] ">
        <h2 className=" text-[18px] font-bold uppercase pb-3.5 ">
          popular categories
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-y-6 flex-wrap">
          {category.map((data, index) => {
            return (
              <div className=" flex justify-between items-center ml-2 " key={index} >
                <div>
                  <h1 className=" font-bold text-[14px] ">{data.name}</h1>
                  <p className=" text-[12px] text-[#666666] "> {data.pera} </p>
                </div>
                <div>
                  <img
                    src="/images/pop1.png"
                    height={50}
                    width={50}
                    alt="img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
