import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Redux/chatSlice";
import { generateRandomName, getRandomSentence } from "../utils/helper";
import { FcBusinessman } from "react-icons/fc";
import { BiSolidSend } from "react-icons/bi";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: getRandomSentence(),
        }),
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black rounded-xl h-[500px] bg-gray-50 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="flex my-4"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessages({
              name: "Meet Prajapati",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <FcBusinessman className="h-8 text-3xl rounded-full border border-red-900 ml-5" />
        <input
          type="text"
          placeholder="Chat..."
          className="mx-3 px-1 w-[21rem] border-b-4 border-indigo-300 rounded-lg shadow-sm focus:outline-0"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 border border-b-[3px] rounded-lg shadow-sm focus:outline-0">
          <BiSolidSend className="text-lg" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
