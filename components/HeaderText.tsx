import React from "react";
import { Text, TextProps } from "react-native";
import { makeStyles } from "@rneui/themed";

interface Props {
  children?: React.ReactNode;
  variant?: "lg" | "md" | "sm";
}

const HeaderText: React.FC<Props & TextProps> = ({
  children,
  variant = "lg",
  style,
}) => {
  const styles = useStyles({ variant });
  return <Text style={[styles.text, style]}>{children}</Text>;
};

type StyleProps = {
  variant: "lg" | "md" | "sm";
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  text: {
    color: theme.colors.black,
    fontSize: props.variant === "lg" ? 32 : props.variant === "md" ? 24 : 18,
    fontWeight: "800",
  },
}));

export default HeaderText;
