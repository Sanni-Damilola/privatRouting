/** @format */

import React from "react";
import styled from "styled-components";
import SideBarRoute from "./SideBar";

const DashBoardHome = () => {
  return (
    <Container>
      <Content>DashBoard Home</Content>
    </Container>
  );
};

export default DashBoardHome;

const Content = styled.div``;

const Container = styled.div`
  min-height: 100vh;
  background-color: green;
`;
