/** @format */

import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <div>
      <Head></Head>
      <Side>
        <SideBar />
      </Side>
    </div>
  );
};

export default Header;

const Side = styled.div``;
const Head = styled.div`
  height: 60px;
  width: 100%;
  background-color: black;
  color: white;
  postion: fixed;
`;
