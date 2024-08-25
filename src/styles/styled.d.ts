import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      mainBg: string;
      blue: string;
      green: string;
      red: string;
      black: string;
      white: string;
    };
  }
}
