import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Card from "../components/Card";
import { colors, layout } from "../CSS_Helpers";

const StyledGallery = styled.main`
  ${layout.centerHorizontally}
  height: 100vh;

  ul {
    display: grid;
    list-style: none;
    padding: 0;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const textArr = [
  "Ryan",
  "Brandon",
  "Patricia",
  "Andy",
  "foo",
  "bar",
  "bax",
  "fub",
];

function Gallery() {
  return (
    <>
      <Header />
      <StyledGallery>
        <section>
          <h2>Gallery</h2>
          <ul>
            {textArr.map((text) => (
              <Card name={text} />
            ))}
          </ul>
        </section>
      </StyledGallery>
      <Footer />
    </>
  );
}

export default Gallery;
