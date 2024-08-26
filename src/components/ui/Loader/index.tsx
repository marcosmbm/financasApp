import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";

interface ActivityProps extends ActivityIndicatorProps {}

export function Loader({ ...rest }: ActivityProps) {
  return <ActivityIndicator {...rest} />;
}
