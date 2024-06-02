import { Outlet } from "react-router";


const Layout = () => {
  return (
    <div>
      {/* content section start */}
      <Outlet></Outlet>
      {/* content section end */}
    </div>
  );
};

export default Layout;