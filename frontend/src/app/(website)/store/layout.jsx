import BrandFilter from "@/components/website/store/BrandFilter";
import Category from "@/components/website/store/Category";
import ColorFilter from "@/components/website/store/ColorFilter";
import Hero from "@/components/website/store/Hero";
import PopularCategories from "@/components/website/store/PopularCategories";
import PriceFilter from "@/components/website/store/PriceFilter";
import { getBrand, getCategory, getcolor } from "@/library/api.call";

export default async function RootLayout({ children }) {
  const categoryJSON = await getCategory(null);
  const categories = categoryJSON.data;

  const brandJSON = await getBrand(null);
  const brands = brandJSON.data;

  const colorJSON = await getcolor(null);
  const colors = colorJSON.data;

  return (
    // <html lang="en">
    //   <body>
        <div className=" w-full ">
          {/* navigation */}
          <div className="  bg-white rounded-[10px] py-5 px-7.5 my-5 ">
            <div className=" space-x-2 ">
              <span className="text-[#999999] text-[14px] font-bold cursor-pointer">
                Home
              </span>
              <span className="text-[#999999] text-[14px] font-bold ">/</span>
              <span className="text-[#999999] text-[14px] font-bold cursor-pointer">
                Shop
              </span>
              <span className="text-[#999999] text-[14px] font-bold">/</span>
              <span className=" text-[14px] font-bold cursor-pointer">
                Top Cell Phones & Tablets
              </span>
            </div>
          </div>
          <Hero />
          <PopularCategories />
          <div className=" bg-white rounded-[10px] my-4">
            <div className="grid grid-cols-1 sm:grid-cols-[302px_1fr]  gap-[3px] w-full py-[25px] px-[30px]">
              <div className=" mb-10 sm:mb-0 ">
                <Category categories={categories} /> 
                <BrandFilter brands={brands} /> 
                <ColorFilter color={colors} /> 
                <PriceFilter />
                {/* <Categories /> */}
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
    //   </body>
    // </html>
  );
}
