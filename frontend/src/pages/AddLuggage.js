import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { layout, colors } from "../CSS_Helpers";

const StyledAddLuggage = styled.main`
  ${layout.centerHorizontally};
  height: 100vh;
`;

function AddLuggage() {
  return (
    <>
      <Header />
      <StyledAddLuggage>
        <h1>Add Luggage</h1>
      </StyledAddLuggage>
      <Footer />
    </>
  );
}

export default AddLuggage;
