import React from "react";
import { Text, TextProps } from "react-native";
import { makeStyles } from "@rneui/themed";

interface Props {
  children?: React.ReactNode;
  variant?: "text" | "supporting-text";
}

const CustomText: React.FC<Props & TextProps> = ({
  children,
  variant = "text",
  style,
}) => {
  const styles = useStyles({ variant });
  return <Text style={[styles.text, style]}>{children}</Text>;
};

type StyleProps = {
  variant: "text" | "supporting-text";
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  text: {
    color:
      props.variant === "supporting-text"
        ? theme.colors.grey2
        : theme.colors.grey0,
  },
}));

export default CustomText;
