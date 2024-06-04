import ChatOption from "./ChatOption";
import MessageNav from "./MessageNav";
import Users from "./Users";


const Message = () => {
  return (
    <div>
      {/* <MessageNav></MessageNav> */}
      {/* content section start */}
      <div className="flex justify-center h-screen">
        <div className="w-[40%]  h-full">
          <Users></Users>
        </div>
        <div className="w-[60%]   pt-[1px] pb-[1px] pr-[1px] ">
          <div className=" h-full bg-slate-100 rounded">
            <ChatOption></ChatOption>
          </div>

        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Message;