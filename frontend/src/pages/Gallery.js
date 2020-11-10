import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { colors, layout } from "../CSS_Helpers";

const StyledGallery = styled.main`
  ${layout.centerHorizontally}
  height: 100vh;
`;

function Gallery() {
  return (
    <>
      <Header />
      <StyledGallery>
        <h1>Gallery</h1>
      </StyledGallery>
      <Footer />
    </>
  );
}

export default Gallery;
