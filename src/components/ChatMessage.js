const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-6"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user-logo"
      />
      <span className="px-2 text-sm font-semibold">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
