import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { layoutHelpers, colors } from "../CSS_Helpers";

const StyledHeader = styled.header`
  ${colors.primaryBgLight};
`;

const Layout = styled.div`
  ${layoutHelpers.CenterHorizontally}
  display: flex;
  h1 {
    margin-right: auto;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20%;
  }
`;

const StyledLink = styled(Link)`
  ${colors.primaryDark}
  text-decoration: none;
`;

function Header() {
  return (
    <StyledHeader>
      <Layout>
        <h1>Luggage Finder</h1>
        <nav>
          <StyledLink to="/add">Add</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
        </nav>
      </Layout>
    </StyledHeader>
  );
}

export default Header;
