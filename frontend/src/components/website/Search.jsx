import { FaChevronDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className=" bg-[#01A49E] rounded-[15px]">
      <div className="py-[15px] px-[20px] flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search bar */}
        <div className="w-full md:w-[45%] bg-white rounded-3xl px-4 py-3 flex items-center gap-3">
          <div className="text-[13px] font-bold flex items-center gap-2 whitespace-nowrap">
            All Categories <FaChevronDown />
          </div>
          <div className="flex items-center flex-1">
            <input
              className="outline-0 text-[13px] flex-1"
              type="text"
              placeholder="Searching anything..."
            />
            <IoSearch className="text-[18px] cursor-pointer" />
          </div>
        </div>

        {/* Info list */}
        <ul className="w-full md:w-[50%] flex flex-col md:flex-row items-center justify-between text-white uppercase text-[13px] font-medium gap-2 md:gap-0">
          <li>Free shipping over $199</li>
          <li>30 days money back</li>
          <li>100% secure payment</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
