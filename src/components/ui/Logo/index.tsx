import styled from "styled-components/native";

interface LogoProps {
  size: number;
}

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
  source: require("@/assets/Logo.png"),
})<LogoProps>`
    width: ${(props) => props.size}px;
    height:${(props) => props.size}px;
`;
