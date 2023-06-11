import { colors } from "./colors";

export const fonts = {
  primary: `"Raleway", "Source Code Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  secondary: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
};

export const typography = {
  h2: {
    default:`
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    color:${colors.text.dark};
    font-family: ${fonts.primary};
    `,
    emphasis:{
      low:`
      font-size: 17px;
      line-height: 20px;
      font-weight: 700;
      color:${colors.text.light};
      font-family: ${fonts.primary};
      `,
      high:`
      font-size: 17px;
      line-height: 20px;
      font-weight: 700;
      color:${colors.text.emphasis};
      font-family: ${fonts.primary};
      `,
    } 
  },
  p1: {
    default:`
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color:${colors.text.dark};
    font-family: ${fonts.primary};
    `,
    low:`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color:${colors.text.light};
    font-family: ${fonts.primary};
    `
  },
};

