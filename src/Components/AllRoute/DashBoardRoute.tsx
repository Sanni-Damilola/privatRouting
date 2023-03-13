/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardHome from "../DashBoard/DashBoardHome";
import Header from "../DashBoard/Header";

const DashBoardRoute = () => {
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <DashBoardHome />,
    },
  ]);

  return (
    <div>
      <Header />
      {element}
    </div>
  );
};

export default DashBoardRoute;
