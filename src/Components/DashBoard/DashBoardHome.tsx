/** @format */

import React from "react";
import styled from "styled-components";
import SideBarRoute from "./SideBar";

const DashBoardHome = () => {
  return (
    <div>
      <Header>DashBoardHeader</Header>
      <SideBar>
        <SideBarRoute />
      </SideBar>
    </div>
  );
};

export default DashBoardHome;

const Header = styled.div`
  height: 80px;
  width: 100%;
  color: white;
  background-color: black;
`;
const SideBar = styled.div``;
