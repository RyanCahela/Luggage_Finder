import React from "react";
import styled from "styled-components";
import { layout, colors } from "../CSS_Helpers";

const StyledFooter = styled.footer`
  ${colors.primaryBgLight}
`;

const Layout = styled.div`
  ${layout.centerHorizontally}
  display: flex;
  justify-content: center;
`;

const CopyrightNotice = styled.p``;

function Footer() {
  return (
    <>
      <StyledFooter>
        <Layout>
          <CopyrightNotice>&copy; Ryan Cahela 2020</CopyrightNotice>
        </Layout>
      </StyledFooter>
    </>
  );
}

export default Footer;
