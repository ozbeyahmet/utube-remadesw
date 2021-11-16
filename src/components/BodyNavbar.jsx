import React from "react";
import styled from "styled-components";

const BodyNav = styled.div`
  background-color: #ffffff;
  height: 70px;
  display:flex;
  border-bottom:1px solid grey;
  border-top:1px solid grey;
  position:fixed;
  z-index:9999;
`;

const BodyNavTag = styled.div`
    margin-top:15px;
    font-size:16px;
    border:1px solid grey;
    margin-left:15px;
    height:40px;
    line-height:40px;
    padding:0px 15px;
    border-radius:20px;
    white-space: nowrap;
    cursor: pointer;
    background-color:#f5f5f5;
  

    &:hover{
      background-color:#dfdfdf;
  }
    
`;

function BodyNavbar() {
  return (
      
    <BodyNav>
        <BodyNavTag>All</BodyNavTag>
        <BodyNavTag>Mixes</BodyNavTag>
        <BodyNavTag>Music</BodyNavTag>
        <BodyNavTag>Hİstory</BodyNavTag>
        <BodyNavTag>Humans</BodyNavTag>
        <BodyNavTag>Manchester United F.C.</BodyNavTag>
        <BodyNavTag>Galatasaray S.K.</BodyNavTag>
        <BodyNavTag>JavaScript</BodyNavTag>
        <BodyNavTag>Cryptocurrency</BodyNavTag>
        <BodyNavTag>Website</BodyNavTag>
        <BodyNavTag>Python</BodyNavTag>
        <BodyNavTag>Comedies</BodyNavTag>
        <BodyNavTag>Basketball</BodyNavTag>
        <BodyNavTag>Recently Uploaded</BodyNavTag>

    </BodyNav>
  )
}


export default BodyNavbar;
