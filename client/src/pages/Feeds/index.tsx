import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";

const Feeds = () => {
  const { errorMessage, fetchData, loading, response } = useAxios();
  const fetchFeeds = async () => {
    await fetchData({
      url: "/data/feeds?page=1&limit=5",
      method: "GET"
    });
  };

  useEffect(() => {
    fetchFeeds();
  }, []);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : !errorMessage && response ? (
        {}
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
};

export default Feeds;
