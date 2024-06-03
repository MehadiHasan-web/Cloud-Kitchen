import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <div className="bg-[#FFFFFF]">
      {/* navbar section start */}
      {/* <Navbar></Navbar> */}
      {/* navbar section end */}
      {/* content section start */}
      <Outlet></Outlet>
      {/* content section end */}
    </div>
  );
};

export default Layout;