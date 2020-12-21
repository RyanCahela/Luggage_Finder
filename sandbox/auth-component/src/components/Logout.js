import { useState } from "react";
import styled from "styled-components";

const Logout = () => {
  const handleLogout = () => {
    console.log("handleLogout fired!");
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
