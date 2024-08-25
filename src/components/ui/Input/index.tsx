import styled, { css } from "styled-components/native";

interface InputProps {
  isFlex?: boolean;
}

export const Input = styled.TextInput<InputProps>`
    background-color: ${(props) => props.theme.colors.white};
    min-height: 40px;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.black};

    ${(props) =>
      props.isFlex
        ? css`
            flex: 1;
        `
        : css`
            width: 90%;
        `}
`;
