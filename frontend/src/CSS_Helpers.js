import { css } from "styled-components";

export const scale = {
  ratio: 1.5,
  s0: 1 + "rem",
  s1: 1.5 + "rem",
  s2: 2.25 + "rem",
  s3: 3.375 + "rem",
  s4: 5.065 + "rem",
  s5: 7.5975 + "rem",
};

export const colors = {
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

export const layout = {
  centerHorizontally: css`
    inline-size: 80%;
    block-size: 100%;
    margin: 0 auto;
  `,
};
