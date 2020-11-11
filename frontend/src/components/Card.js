import React from "react";
import styled from "styled-components";
import { colors, layout } from "../CSS_Helpers";

const StyledCard = styled.li`
  ${colors.primaryBgLight}
  flex-grow: 1;
  padding: 10px;
`;

function Card(props) {
  return (
    <StyledCard>
      <p>{props.name}</p>
    </StyledCard>
  );
}

export default Card;
