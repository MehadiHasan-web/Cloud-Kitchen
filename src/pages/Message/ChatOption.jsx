

const ChatOption = () => {

  const chatMessage = [
    {
      "id": "01",
      "start": "Hi there!",
      "end": "How can I help you today?"
    },
    {
      "id": "02",
      "start": "I'd like to know more about your product.",
      "end": "Sure, what specifically are you interested in?"
    },
    {
      "id": "03",
      "start": "Great! Can you tell me about the features?",
      "end": "Absolutely! Our product boasts a wide range of features..."
    },
    {
      "id": "04",
      "start": "Sounds interesting. What are the pricing options?",
      "end": "We offer various plans to suit different needs. Let me know your requirements..."
    },
    {
      "id": "05",
      "start": "Thanks for the info. I'll need to consider it.",
      "end": "You're welcome! Feel free to ask if you have any further questions."
    },
    {
      "id": "06",
      "start": "No problem, I might reach out later.",
      "end": "Certainly, we're always happy to help! Have a great day."
    },
    {
      "id": "07",
      "start": "You too!",
      "end": "..."
    },
    {
      "id": "08",
      "start": "Hey, this is Sohan again. I have a question...",
      "end": "Hi Sohan, welcome back! What would you like to know?"
    },
    {
      "id": "09",
      "start": "I see there's a new update available. What's included?",
      "end": "The latest update brings several improvements and bug fixes..."
    },
    {
      "id": "10",
      "start": "Thanks, I'll install it then.",
      "end": "Great! If you encounter any issues, feel free to let us know."
    },
    {
      "id": "11",
      "start": "I see there's a new update available. What's included?",
      "end": "The latest update brings several improvements and bug fixes..."
    },
    {
      "id": "12",
      "start": "Thanks, I'll install it then.",
      "end": "Great! If you encounter any issues, feel free to let us know."
    },
    {
      "id": "13",
      "start": "Thanks, I'll install it then.",
      "end": "Great! If you encounter any issues, feel free to let us know."
    },
    {
      "id": "14",
      "start": "I see there's a new update available. What's included?",
      "end": "The latest update brings several improvements and bug fixes..."
    },
    {
      "id": "15",
      "start": "Thanks, I'll install it then.",
      "end": "Great! If you encounter any issues, feel free to let us know."
    }
  ];

  return (
    <>
      
      {/* message  */}
      <div className="w-full grid content-end">
        {
          chatMessage.map((data, index) => <div key={index} className="px-2  overflow-y-auto">
          {/* chat-start section start */}
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
            <div className="chat-bubble">{data.start}</div>
            <div className="chat-footer opacity-50">
              Delivered
            </div>
          </div>
          {/* chat-start section end */}
          {/* chat-end section start */}
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
            <div className="chat-bubble">{data.end}</div>
            <div className="chat-footer opacity-50">
              Seen at 12:46
            </div>
          </div>
          {/* chat-end section end */}
        </div>)
        }
      </div>
      
    </>
  );
};

export default ChatOption;