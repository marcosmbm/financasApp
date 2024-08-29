import styled, { css } from "styled-components/native";

interface RegisterTypesStylesProps {
  checked: boolean;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    gap: 8px;
`;

export const RegisterTypeButton = styled.TouchableOpacity<RegisterTypesStylesProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
    flex-direction: row;
    min-height: 40px;
    border-radius: 4px;
    border: 1.5px;
    border-color: transparent;
    gap: 8px;

    ${(props) =>
      props.checked &&
      css`
        background-color: ${props.theme.colors.white};
        border-color: ${(props) => props.theme.colors.blue};
    `}
`;

export const RegisterLabel = styled.Text`
    color: ${(props) => props.theme.colors.black};
    font-size: 17px;
`;
