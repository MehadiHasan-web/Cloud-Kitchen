import { FaLocationArrow } from "react-icons/fa";
import ChatOption from "./ChatOption";
import MessageNav from "./MessageNav";
import Users from "./Users";

const Message = () => {
  return (
    <div>
      {/* <MessageNav></MessageNav> */}
      {/* content section start */}
      <div className="flex justify-center h-screen">
        <div className="w-[40%]  h-full hidden md:block">
          <Users></Users>
        </div>
        <div className="w-fill md:w-[60%]   pt-[1px] pb-[1px] pr-[1px] overflow-hidden relative">
          {/* user name start */}
          <div className="mt-4 px-4 border-b-2  py-[10px]  flex items-center bg-slate-100">
            <h2 className=" ps-2 text-xl font-bold " >Mehadi Hasan</h2>
          </div>
          {/* user name start */}
          <div className=" h-full bg-slate-100 rounded pb-36 overflow-y-auto">
            <ChatOption></ChatOption>
          </div>
          {/* textMessaging section start */}
          <div className="absolute w-full mx-auto bottom-0 flex items-center  bg-gray-50 p-2">
            <input
              type="text"
              placeholder="write your message"
              className="input input-bordered w-full"
            />
            <button className="absolute right-3 bg-slate-200 text-xl p-2 rounded-lg">
              <FaLocationArrow className="text-slate-500"></FaLocationArrow>
            </button>
          </div>
          {/* textMessaging section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Message;
