import { useEffect } from "react";
import { YOUTUBE_SEARCH_DATA_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getSearchedVideosList();
  }, []);

  const getSearchedVideosList = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_DATA_API + searchParams.get("search_query"),
    );
    const json = await data.json();
    console.log(json);
  };

  return <div></div>;
};

export default SearchResult;
