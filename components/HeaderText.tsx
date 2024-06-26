import React from "react";
import { Text, TextProps } from "react-native";
import { makeStyles } from "@rneui/themed";

interface Props {
  children?: React.ReactNode;
  variant?: "lg" | "md" | "sm";
  whiteText?: boolean;
}

const HeaderText: React.FC<Props & TextProps> = ({
  children,
  variant = "lg",
  style,
  whiteText = false,
}) => {
  const styles = useStyles({ variant, whiteText });
  return <Text style={[styles.text, style]}>{children}</Text>;
};

type StyleProps = {
  variant: "lg" | "md" | "sm";
  whiteText: boolean;
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  text: {
    color: props.whiteText ? theme.colors.white : theme.colors.black,
    fontSize: props.variant === "lg" ? 32 : props.variant === "md" ? 24 : 18,
    fontWeight: "800",
  },
}));

export default HeaderText;
