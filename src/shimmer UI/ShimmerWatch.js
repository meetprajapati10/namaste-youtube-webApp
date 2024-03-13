const ShimmerWatch = () => {
  return (
    <div className="mx-16 mt-5">
      <iframe
        className="bg-gray-200 rounded-xl"
        width="1000"
        height="500"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ShimmerWatch;
