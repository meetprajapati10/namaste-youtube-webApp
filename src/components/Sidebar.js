import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineLiveTv,
} from "react-icons/md";
import {
  SiYoutubeshorts,
  SiYoutubestudio,
  SiYoutubemusic,
} from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { FcManager } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FcPortraitMode, FcNightPortrait } from "react-icons/fc";
import { FaFire } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { PiMusicNoteLight, PiStudentFill } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import { FaShopify } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { TbBrandYoutubeKids } from "react-icons/tb";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-2/12 h-screen overflow-y-auto">
      <ul className="cursor-pointer">
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 font-bold text-center">
          <Link to="/" className="flex items-center">
            <MdHomeFilled className="mr-4 text-[27px]" />
            Home
          </Link>
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <SiYoutubeshorts className="mr-5 text-2xl" />
          Shorts
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <Link to="/" className="flex items-center">
            <MdOutlineSubscriptions className="mr-5 text-2xl" />
            Subscriptions
          </Link>
        </li>
      </ul>
      <hr className="my-2" />
      <ul className="cursor-pointer">
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <MdOutlineVideoLibrary className="mr-5 text-2xl" />
          Library
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <GoHistory className="mr-5 text-2xl" />
          History
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <MdOutlineWatchLater className="mr-5 text-2xl" />
          Watch later
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <AiOutlineLike className="mr-5 text-2xl" />
          Liked videos
        </li>
      </ul>

      <hr className="my-2"></hr>

      <h3 className="font-bold mt-4 mb-2 pl-1">Subscriptions</h3>
      <ul className="cursor-pointer">
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FcManager className="mr-5 text-2xl" />
          Meet Prajapati
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FaUserCircle className="mr-5 text-2xl" />
          Rahul Tiwari
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FcPortraitMode className="mr-5 text-2xl" />
          Vipul Purohit
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FaUser className="mr-5 text-2xl" />
          Manoj Patel
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FcNightPortrait className="mr-5 text-2xl" />
          Rohit Parmar
        </li>
      </ul>

      <hr className="my-2"></hr>

      <h3 className="font-bold mt-4 mb-2 pl-1">Explore</h3>
      <ul className="cursor-pointer">
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <Link to="/" className="flex items-center">
            <FaFire className="mr-5 text-2xl" />
            Trending
          </Link>
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <HiOutlineShoppingBag className="mr-5 text-2xl" />
          Shopping
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <IoGameControllerOutline className="mr-5 text-2xl" />
          Gaming
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <PiMusicNoteLight className="mr-5 text-2xl" />
          Music
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <BiMoviePlay className="mr-5 text-2xl" />
          Movies
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <MdOutlineLiveTv className="mr-5 text-2xl" />
          Live
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <IoNewspaperOutline className="mr-5 text-2xl" />
          News
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <BsTrophy className="mr-5 text-2xl" />
          Sports
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <PiStudentFill className="mr-5 text-2xl" />
          Learning
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <FaShopify className="mr-5 text-2xl" />
          Fashion & Beauty
        </li>
      </ul>

      <hr className="my-2"></hr>

      <h3 className="font-bold mt-4 mb-2 pl-1">More from YouTube</h3>
      <ul className="cursor-pointer">
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <Link to="/" className="flex items-center">
            <TfiYoutube className="mr-5 text-2xl" />
            YouTube Premium
          </Link>
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <SiYoutubestudio className="mr-5 text-2xl" />
          YouTube Studio
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <SiYoutubemusic className="mr-5 text-2xl" />
          YouTube Music
        </li>
        <li className="py-2 flex hover:bg-gray-200 rounded-lg pl-1 text-center">
          <TbBrandYoutubeKids className="mr-5 text-2xl" />
          YouTube Kids
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
