const VideoCard = ({ data }) => {
  //   console.log(data);
  const { snippet, statistics } = data;

  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" alt="video-img" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
