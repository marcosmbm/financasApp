import type React from "react";
import type { TouchableOpacityProps } from "react-native";

import { Loader } from "../Loader";

import styled, { css } from "styled-components/native";
import { colors } from "@/styles/config";

interface ButtonStylesProps {
  isFlex?: boolean;
  variant: "primary" | "secondary" | "link";
}

interface ButtonProps extends ButtonStylesProps, TouchableOpacityProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const ButtonComponent = styled.TouchableOpacity.attrs<ButtonStylesProps>({
  activeOpacity: 0.8,
})`
    min-height: 40px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.isFlex
        ? css`
            flex: 1;
        `
        : css`
            width: 90%;
        `}

    ${(props) =>
      props.variant === "primary" &&
      css`
        background-color: ${(props) => props.theme.colors.blue};
    `}

    ${(props) =>
      props.variant === "secondary" &&
      css`
        background-color: ${(props) => props.theme.colors.green};
    `}

    ${(props) =>
      props.variant === "link" &&
      css`
        background: transparent;
    `}
`;

const Text = styled.Text<ButtonStylesProps>`
  color: ${(props) => props.theme.colors.white};
  font-size: 17px;
  font-weight: bold;

  ${(props) =>
    (props.variant === "primary" || props.variant === "secondary") &&
    css`
        color: ${(props) => props.theme.colors.white};
    `}


    ${(props) =>
      props.variant === "link" &&
      css`
        color: ${(props) => props.theme.colors.black};
        font-weight: normal;
    `}
`;

export function Button({
  children,
  variant,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonComponent variant={variant} disabled={isLoading} {...rest}>
      {isLoading && <Loader size={20} color={colors.white} />}

      {!isLoading && <Text variant={variant}>{children}</Text>}
    </ButtonComponent>
  );
}
