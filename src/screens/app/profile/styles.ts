import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    gap: 16px;
`;

export const TitleArea = styled.View`
    gap: 4px;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
`;

export const Name = styled.Text`
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
`;
