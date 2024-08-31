import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: rgba(34,34,34,0.4);
`;

export const ModalContent = styled.View`
    flex: 2;
    background-color: ${(props) => props.theme.colors.white};
    justify-content: center;
    align-items: center;
    gap: 8px;
`;
