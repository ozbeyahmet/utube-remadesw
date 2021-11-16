import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import BodyNavbar from "./BodyNavbar";
import VideoList from "./VideoList";

const MainBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  margin-top: 70px;
`;

const MainBodyLeft = styled.div`
  flex: 0.15;
`;

const MainBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.85;
`;

const BodyScroll = styled.div`
  width: 100%;
  margin-top: 100px;
`;

function Body() {
  return (
    <MainBody>
      
      <MainBodyLeft>
        <Sidebar />
      </MainBodyLeft>

      <MainBodyRight>
        <BodyNavbar />
        <BodyScroll>
          <VideoList />
        </BodyScroll>
      </MainBodyRight>
    </MainBody>
  );
}

export default Body;
