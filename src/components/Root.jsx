import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const TopicsContext = createContext([]);

const Root = () => {
  return (
    <TopicsContext.Provider>
      <Header />
      <Outlet />
    </TopicsContext.Provider>
  );
};

export default Root;
