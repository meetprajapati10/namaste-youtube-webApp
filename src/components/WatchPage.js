import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Redux/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEOS_API_BY_ID,
} from "../utils/constants";
import formatCompactNumber from "../utils/formatCompactNumber";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import ShimmerWatch from "../shimmer UI/ShimmerWatch";
import LiveChat from "./LiveChat";
import ShimmerCard from "../shimmer UI/ShimmerCard";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  //   const { id } = useParams();
  //   console.log(params);

  /** Read id Using Query Params **/
  const [searchParams] = useSearchParams();
  //   console.log(searcParams.get("v"));

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await Promise.all([
      fetch(YOUTUBE_VIDEOS_API_BY_ID + searchParams.get("v")),
      fetch(YOUTUBE_VIDEOS_API),
    ]);
    const watchVideoJson = await data[0].json();
    const relVideoJson = await data[1].json();
    setVideoInfo(watchVideoJson.items);
    setRelatedVideos(relVideoJson.items);
  };

  return videoInfo.length === 0 ? (
    <ShimmerWatch />
  ) : (
    <div className={!isMenuOpen + "pt-6 w-full"}>
      <div className="flex ml-12">
        <div className="mb-3">
          {/* Video watch iframe Section */}
          <div className="flex">
            <div>
              <iframe
                className="rounded-xl"
                width="1000"
                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            {videoInfo.map((video) => {
              const { snippet, statistics } = video;
              const { title, channelTitle, thumbnails } = snippet;
              const { viewCount, likeCount, commentCount } = statistics;

              return (
                <div key={video.id}>
                  {/* Subscriber Section */}
                  <h1 className="text-xl font-bold mt-2">{title}</h1>
                  <div className="mt-2 flex">
                    <div className="flex">
                      <img
                        className="rounded-full w-10 h-10"
                        alt="channel-logo"
                        src={thumbnails?.default?.url}
                      />
                      <div className="flex">
                        <div className="flex flex-col w-44 ml-2">
                          <div className="font-bold">{channelTitle}</div>
                          <div className="text-sm text-gray-600">
                            {formatCompactNumber(viewCount)} subscribers
                          </div>
                        </div>
                        <button className="bg-black text-white font-medium rounded-full px-4 ml-5 my-1">
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center ml-[19rem]">
                      <button className="bg-gray-100 border border-gray-200 flex items-center rounded-l-full shadow-sm pr-4 pl-1 py-1 my-2 hover:bg-gray-200">
                        <FiThumbsUp className="mx-2 mt-1 text-lg" />
                        <p className="text-sm font-semibold">
                          {formatCompactNumber(likeCount)}
                        </p>
                      </button>
                      <button className="bg-gray-100 border flex items-center rounded-r-full border-l-2 border-l-gray-300 border-r-gray-200 shadow-sm pr-2 py-1 my-2 hover:bg-gray-200">
                        <FiThumbsDown className="mx-2 mt-1 text-lg" />
                      </button>
                      <button className="bg-gray-100 border border-gray-200 flex items-center rounded-full shadow-sm pr-3 py-1 ml-3 hover:bg-gray-200">
                        <PiShareFat className="mx-2 mt-1 text-xl" />
                        <p className="text-sm font-semibold">Share</p>
                      </button>
                      <button className="bg-gray-100 border border-gray-200 flex items-center rounded-full shadow-sm pr-3 py-1 ml-3 hover:bg-gray-200">
                        <LiaDownloadSolid className="mx-2 mt-1 text-xl" />
                        <p className="text-sm font-semibold">Download</p>
                      </button>
                      <button className="bg-gray-100 border border-gray-200 flex items-center rounded-full shadow-sm w-[34px] h-[34px] ml-3 hover:bg-gray-200">
                        <BsThreeDots className="mx-auto text-lg" />
                      </button>
                    </div>
                  </div>
                  <CommentsContainer commentCount={commentCount} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="mb-10">
            <LiveChat />
          </div>

          {/* Suggestion video right sidebar section  */}
          {relatedVideos.map((video) => {
            const { snippet, statistics } = video;
            const { thumbnails, title, channelTitle, publishedAt } = snippet;
            const { viewCount } = statistics;

            return (
              <Link key={video?.id} to={"?v=" + video?.id}>
                <div className="m-2 px-3 mt-5 flex">
                  <img
                    alt="thumbnail"
                    src={thumbnails?.medium?.url}
                    className="rounded-xl w-[168px] h-[94px]"
                  />
                  <ul className="ml-2 w-60">
                    <li className="font-semibold pb-[5px] text-sm line-clamp-2">
                      {title}
                    </li>
                    <li className="text-[13px] text-gray-600">
                      {channelTitle}
                    </li>
                    <li className="text-[13px] text-gray-600">
                      {formatCompactNumber(viewCount)} views .{" "}
                      {(
                        Math.abs(new Date(publishedAt) - new Date()) /
                        (60 * 60 * 24 * 1000)
                      ).toFixed(0)}{" "}
                      days ago
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
