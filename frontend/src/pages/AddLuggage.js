import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { layout, colors, scale } from "../CSS_Helpers";

const StyledAddLuggage = styled.main`
  ${layout.centerHorizontally};
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  //stack
  label + input,
  label + textarea {
    margin-bottom: ${scale.s0};
  }
`;

function AddLuggage({ addLuggageToDataStore }) {
  const [dateFound, setDateFound] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");

  const handleAddLuggage = (e) => {
    if (!dateFound) return console.error("date is required");
    if (!imageUrl) return console.error("imageUrl is required");
    if (!description) return console.error("description is required");
    addLuggageToDataStore({
      dateFound,
      imageUrl,
      description,
    });
  };

  return (
    <>
      <Header />
      <StyledAddLuggage>
        <h1>Add Luggage</h1>
        <StyledForm>
          <label htmlFor="image_url">Image Url</label>
          <input
            required
            type="text"
            id="image_url"
            name="image url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <label htmlFor="date_found">Date Found</label>
          <div>
            <input
              required
              type="date"
              id="date_found"
              name="date found"
              defaultValue=""
              value={dateFound}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setDateFound(`${YYYY}-${MM}-${DD}`);
              }}>
              Use Current Date
            </button>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            rows="4"
            cols="50"
            defaultValue=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>

          <button type="submit" onClick={(e) => handleAddLuggage(e)}>
            Add Luggage To Database
          </button>
        </StyledForm>
      </StyledAddLuggage>
      <Footer />
    </>
  );
}

export default AddLuggage;
