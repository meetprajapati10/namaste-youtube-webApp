import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Redux/appSlice";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../Redux/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHeader = () => {
    dispatch(toggleMenu());
  };

  /**
   * searchCache {
   *    iphone: ["iphone", "all 10 results"]
   * }
   *
   * searchQuery = "iphone"
   *
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // Update the Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  return (
    <div className="sticky top-0 z-50 bg-white grid grid-flow-col p-5 items-center">
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

      <div className="col-span-10 pl-14">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-r-0 border-gray-400 py-2 px-4 rounded-l-full font-semibold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-3 px-4 bg-gray-100 rounded-r-full">
            {/* <BsSearch /> */}
            <img
              alt="search-icon"
              className="h-4 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
            />
          </button>
          <img
            className="h-9 border border-gray-200 rounded-full ml-3 bg-gray-100 cursor-pointer"
            src="https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png"
            alt="mic-icon"
          />
        </div>
        {showSuggestions && (
          <div className="fixed bg-white p-2 mt-1 w-[32rem] shadow-xl rounded-xl border border-gray-300">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center my-1 mx-2 p-1 font-semibold hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <IoSearchOutline className="mr-3 text-lg" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
