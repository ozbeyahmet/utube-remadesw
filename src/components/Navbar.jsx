import React from "react";
import styled from "styled-components";

import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "./tools/searchInput";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {firebase} from '../firebase'
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  width: 100%;
  position: fixed;
  background-color: white;
  justify-content: center;
  color: grey;
  align-items: center;
  z-index: 9999;
`;

const NavChild = styled(Nav)`
  width: ${(props) =>
    (props.w15 && "15%") || (props.w70 && "70%")};

  position: relative;

  justify-content: ${(props) =>
    (props.flexStart && "flex-start") ||
    (props.center && "center") ||
    (props.w20 && "20%")}; 

  border-bottom : ${(props) =>
    (props.border && "1px solid gray")};
  margin-left:${(props) =>
    (props.m30 && "30px")};;
`;

const NavLogo = styled.img`
  height: 30px;
  margin-top: 0px;
`;

const MıcIconStyle={
  padding: "5px",
  border: "none",
  borderRadius: "100%",
  cursor:"pointer",
}
function Navbar() {
  return (
    <Nav>
      <NavChild w15 flexStart m30>
        <MenuIcon fontSize="large"  sx={{ marginRight: "30px" ,color:"black"}} />
        <NavLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/391px-YouTube_Premium_logo.svg.png"
          alt=""
        />
      </NavChild>

      <NavChild w70 center >
        <SearchInput />
        <MicIcon
          fontSize="large"
          color="disabled"
          sx={MıcIconStyle}
        />
      </NavChild>

      <NavChild w15 >
        <VideocamOutlinedIcon fontSize="large" color="disabled" />
        <VideocamOutlinedIcon fontSize="large" color="disabled" />
        <VideocamOutlinedIcon fontSize="large" color="disabled" />
        <VideocamOutlinedIcon fontSize="large" color="disabled" onClick={() => firebase.auth().signOut()}/>
      </NavChild>
    </Nav>
  );
}

export default Navbar;
