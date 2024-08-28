import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 15px;
    margin-left: 15px;
    max-height: 60px;
    gap: 8px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: 500;
`;

export const ButtonMenu = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
    justify-content: center;
    align-items: center;
`;
