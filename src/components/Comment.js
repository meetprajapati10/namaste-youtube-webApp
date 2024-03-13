import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-8"
        alt="user-icon-logo"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
        <p className="flex items-center mt-2">
          <FiThumbsUp className="mr-2" /> 525
          <FiThumbsDown className="ml-3 mr-2" /> 12
          <span className="ml-4 px-2 py-1 text-sm cursor-pointer hover:bg-gray-300 rounded-full">
            Reply
          </span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
