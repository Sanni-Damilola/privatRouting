/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoardHome from "../DashBoard/DashBoardHome";

const DashBoardRoute = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <DashBoardHome />,
    },
  ]);

  return <div></div>;
};

export default DashBoardRoute;
