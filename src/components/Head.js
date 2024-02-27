import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/appSlice";
import { BsSearch } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHeader = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center">
      <div className="flex  items-center">
        <img
          onClick={toggleMenuHeader}
          className="h-7 pr-5 cursor-pointer"
          alt="hamburger-logo"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-6"
            alt="yt-logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </a>
      </div>

      <div className="flex col-span-10 justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-r-0 border-gray-400 py-2 px-4 rounded-l-full"
        />
        <button className="border border-gray-400 py-3 px-4 bg-gray-100 rounded-r-full">
          <BsSearch />
        </button>
        <img
          className="h-9 border border-gray-200 rounded-full ml-3 bg-gray-100"
          src="https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png"
          alt="mic-icon"
        />
      </div>

      <div className="flex justify-around">
        <BiVideoPlus className="h-8 text-3xl cursor-pointer" />
        <IoIosNotificationsOutline className="h-8 text-3xl cursor-pointer" />
        <img
          className="h-8  col-span-1"
          alt="user-icon-logo"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Head;
