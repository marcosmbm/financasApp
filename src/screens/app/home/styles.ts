import styled from "styled-components/native";

import type { BalanceModel, ReceiveModel } from "@/models";
import { FlatList, type FlatListProps } from "react-native";

const ListBalanceProps = FlatList as new (
  props: FlatListProps<BalanceModel>,
) => FlatList;

const ListReceivesProps = FlatList as new (
  props: FlatListProps<ReceiveModel>,
) => FlatList;

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ListBalance = styled(ListBalanceProps)`
    max-height: 190px;
`;

export const Area = styled.View`
  width: 100%;
  padding: 14px;
  flex-direction: row;
  gap: 8px;
  align-items: baseline;
  background-color: ${(props) => props.theme.colors.white};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  margin-top: 14px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const List = styled(ListReceivesProps)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;
