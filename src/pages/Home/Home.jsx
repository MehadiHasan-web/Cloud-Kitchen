import Shops from "../../components/Shops";
import Explore from "./Explore";


const Home = () => {
  return (
    <div>
      {/* shop start */}
      <Shops></Shops>
      {/* shop end */}
      {/* explore section start */}
      <Explore></Explore>
      {/* explore section end */}
    </div>
  );
};

export default Home;