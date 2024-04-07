import React, { useEffect } from "react";

import "./App.css";
import { AppContext } from "./context/AppContext";
import Feeds from "./pages/Feeds";

const App = () => {
  return (
    <>
      <AppContext>
        <Feeds />
      </AppContext>
    </>
  );
};

export default App;
