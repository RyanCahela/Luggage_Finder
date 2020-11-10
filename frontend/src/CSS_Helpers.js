import { css } from "styled-components";

const colors = {
  primaryTextDark: css`
    color: #212121;
  `,
  primaryTextLight: css`
    color: lightgrey;
  `,
  primaryBgDark: css`
    background-color: #212121;
  `,
  primaryBgLight: css`
    background-color: lightgrey;
  `,
};

const layoutHelpers = {
  CenterHorizontally: css`
    inline-size: 80%;
    block-size: 100%;
    margin: 0 auto;
  `,
};

export { layoutHelpers, colors };
