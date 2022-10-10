import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

export const TopicsContext = createContext([]);

const Root = () => {
  const topicsCom = useLoaderData();
  const topics = topicsCom.data;

  return (
    <TopicsContext.Provider value={topics}>
      <Header />
      <Outlet />
    </TopicsContext.Provider>
  );
};

export default Root;
