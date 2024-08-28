import styled from "styled-components/native";

interface BalanceItemStylesProps {
  bg?: string;
}

export const Container = styled.View<BalanceItemStylesProps>`
    background: ${(props) => (props.bg ? props.bg : props.theme.colors.white)};
    margin: 0 8px;
    border-radius: 4px;
    align-items: flex-start;
    justify-content: center;
    min-width: 300px;
    padding: 0 14px;
    gap: 8px;
`;

export const Label = styled.Text`
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    font-size: 25px;
`;

export const Balance = styled.Text`
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
`;
