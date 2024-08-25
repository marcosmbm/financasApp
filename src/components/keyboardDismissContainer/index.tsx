import type React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

interface keyboardDismissContainerProps {
  children: React.ReactNode;
}

export function KeyboardDismissContainer({
  children,
}: keyboardDismissContainerProps) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
