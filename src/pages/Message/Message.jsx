import ChatOption from "./ChatOption";
import MessageNav from "./MessageNav";
import Users from "./Users";


const Message = () => {
  return (
    <div>
      <MessageNav></MessageNav>
      {/* content section start */}
      <div className="flex justify-center h-screen">
        <div className="w-[40%] bg-red-300 h-full">
          <Users></Users>
        </div>
        <div className="w-[60%] bg-slate-400 h-full">
          <ChatOption></ChatOption>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Message;