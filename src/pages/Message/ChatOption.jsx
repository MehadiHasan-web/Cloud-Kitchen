

const ChatOption = () => {
  return (
    <>
      <div className="my-4 px-4 border-b-2  py-[10px]  flex items-center">
        <h2 className=" ps-2 text-xl font-bold " >Mehadi Hasan</h2>
      </div>
      {/* message  */}
      <div className="w-full h-full grid content-end pb-16">
        <div className="px-2  ">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
              Delivered
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">
              Seen at 12:46
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ChatOption;