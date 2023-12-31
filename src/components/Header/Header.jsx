import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";
import Searchbar from "./Searchbar";
import Searchbutton from "./Searchbutton";
import Cart from "./Cart";

const StyledHeader = styled(AppBar)`
  background: #ffffff;
  height: 56px;
`;

const StyledToolbar = styled(Toolbar)`
  height: 56 px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledToolbar>
          <Box>
            <Typography style={{ color: "black" }}>Shoply</Typography>
          </Box>
          <StyleBox>
            <Typography style={{ color: "black" }}>Products</Typography>
            <Typography style={{ color: "black" }}>Sales</Typography>
            <Cart />
            <Searchbar />
            <Searchbutton />
          </StyleBox>
        </StyledToolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
