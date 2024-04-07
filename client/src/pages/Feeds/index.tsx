import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { Container } from "@mui/material";
import FeedCard from "../../components/FeedCard";

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
        <Container>
          {response && response?.map((feed) => <FeedCard feed={feed} />)}
        </Container>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
};

export default Feeds;
