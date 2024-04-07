import React, { useEffect } from "react";

import "./App.css";
import useAxios from "./hooks/useAxios";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { errorMessage, fetchData, loading, response } = useAxios();
  const reqApi = {
    url: "/data/feeds",
    method: "GET",
    params: "page=1,limit=5"
  };

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
      <AppContext>
        <div></div>
      </AppContext>
    </>
  );
};

export default App;
