/** @format */

import React from "react";
import { useRoutes } from "react-router";
import HomeScreen from "../HomeScreen";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";

const HomeRoute = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

  return (
    <div>
      <Header />
      {element}
      <Footer />
    </div>
  );
};

export default HomeRoute;
