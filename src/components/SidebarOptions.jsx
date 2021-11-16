import { bgcolor } from "@mui/system";
import React from "react";
import styled from "styled-components";

const SidearOption = styled.div`
  display: flex;
  align-items: stretch;
  padding: 7.5px 0px;
  cursor: pointer;
  transition:all 0.4s;
 
  &:hover{
      background-color:red;
  }
`;

const SidebarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius:100%;
  margin-right: 30px;
  margin-left: 30px;
`;

const SidebarIcon = styled.h2`
  margin-right: 30px;
  margin-left: 30px;
  font-size:16px;
  
`;

const SidebarTag = styled.h3`
  line-height: 35px;
  font-size: 18px;
  font-weight: 500;
  margin-right: 15px;

  @media(max-width:768px){
    display:none;
  }
`;

const bgColorIsBlack = {
  backgroundColor:"black",
}

function SidebarOptions(props) {
  return (
    <SidearOption >
        {props.img && (
            <SidebarImage src={props.img}></SidebarImage>
        )}
        {props.icon && (
            <SidebarIcon>{props.icon}</SidebarIcon>
        )}
      
      <SidebarTag>{props.tag}</SidebarTag>
    </SidearOption>
  );
}

export default SidebarOptions;
