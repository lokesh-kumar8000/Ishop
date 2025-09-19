import DelOfDay from "@/components/website/home/DelOfDay"
import Discover from "@/components/website/home/Discover"
import Feature from "@/components/website/home/Feature"
import Hero from "@/components/website/home/Hero"
import BestSeller from "@/components/website/home/BestSeller"
import TopCellphone from "@/components/website/home/TopCellphone"
import BestLaptop from "@/components/website/home/BestLaptop"
import Three from "@/components/website/home/Three"


function page() {
  return (
    <div className='w-full py-5  ' > 
      <div className=" py-[15px] px-[20px]  " > 
        <Hero/> 
        <Feature/> 
        <DelOfDay/> 
        <Discover/> 
        <BestSeller/> 
        <TopCellphone/> 
        <BestLaptop/> 
        <Three/>
      </div>  
    </div>
  )
}                             

export default page