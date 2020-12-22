import { useState } from "react";
import styled from "styled-components";

import authServices from "src/services/authServices";

const Logout = () => {
  const handleLogout = () => {
    authServices.logout();
    console.log("handleLogout fired!");
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
