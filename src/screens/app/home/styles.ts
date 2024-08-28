import styled from "styled-components/native";

import type { BalanceModel } from "@/models";
import { FlatList, type FlatListProps } from "react-native";

const ListBalanceProps = FlatList as new (
  props: FlatListProps<BalanceModel>,
) => FlatList;

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ListBalance = styled(ListBalanceProps)`
    max-height: 190px;
`;
