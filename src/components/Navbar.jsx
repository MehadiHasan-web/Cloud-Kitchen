import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-28 py-5">
      {/* content section start */}
      <div className="container mx-auto  w-full px-5 lg:px-0 space-y-5">
        {/* profile and logo section start */}
        <div className="flex justify-between items-center h-full w-full">
          {/* logo section start */}
          <RiBarChartHorizontalFill className="text-[#40464C] text-2xl"></RiBarChartHorizontalFill>
          {/* logo section end */}
          {/* profile section start */}
          <div className="avatar online">
            <div className="w-11 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          {/* profile section end */}
        </div>
        {/* profile and logo section end */}
        {/* search adn card section start */}
        <div className="flex justify-center items-center h-full w-full gap-10">
          {/* search section start */}
          <label className="input input-bordered flex items-center gap-2 w-full sm:w-[60%] md:w-[45%] lg:w-[30%] text-white bg-[#00C2C3] shadow-[#2D3639] shadow-2xl rounded-md">
            <FaSearch></FaSearch>
            <input type="text" className="grow w-full text-white" />
          </label>
          {/* search section end */}
          {/* profile section start */}
          <div className="avatar online">
          <FaShoppingCart className="text-[#2D3639] text-2xl"></FaShoppingCart>
          </div>
          {/* profile section end */}
        </div>
        {/* search adn card section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;
