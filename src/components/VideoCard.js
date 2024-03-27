import formatCompactNumber from "../utils/formatCompactNumber";

const VideoCard = ({ data }) => {
  //   console.log(data);
  const { snippet, statistics } = data;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" alt="video-img" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2 mb-1 line-clamp-2  max-h-[50px] leading-5">
          {title}
        </li>
        <li className="text-sm text-gray-600">{channelTitle}</li>
        <li className="text-sm text-gray-600">
          {formatCompactNumber(viewCount)} views .{" "}
          {(
            Math.abs(new Date(publishedAt) - new Date()) /
            (60 * 60 * 24 * 1000)
          ).toFixed(0)}{" "}
          days ago
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
