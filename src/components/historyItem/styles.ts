import styled, { css } from "styled-components/native";

interface IconViewStylesProps {
  type: "receita" | "despesa";
}

export const Container = styled.View`
    gap: 8px;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.mainBg};
    margin-bottom: 14px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Type = styled.View`
    flex-direction: row;
`;

export const TypeText = styled.Text`
    color: ${(props) => props.theme.colors.white};
    font-style: italic;
    font-size: 16px;
`;

export const IconView = styled.View<IconViewStylesProps>`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 4px;

    ${(props) =>
      props.type === "receita" &&
      css`
        background-color: ${(props) => props.theme.colors.green};
    `}

    
    ${(props) =>
      props.type === "despesa" &&
      css`
        background-color: ${(props) => props.theme.colors.red};
    `}
`;

export const ValueText = styled.Text`
    color: ${(props) => props.theme.colors.black};
    font-size: 24px;
    font-weight: 500;
`;
