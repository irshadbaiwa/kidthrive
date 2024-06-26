import { makeStyles } from "@rneui/themed";
import { Pressable, PressableProps } from "react-native";
import CustomText from "@/components/CustomText";

interface Props {
  variant?: "primary" | "secondary" | "outline" | "link";
  btnText?: string;
}
type CustomProps = Props & PressableProps;

export const CustomButton: React.FC<CustomProps> = ({
  variant = "primary",
  btnText,
  children,
  style,
  ...props
}) => {
  const styles = useStyles({ variant });
  return (
    <Pressable style={[style, styles.btn]} {...props}>
      {btnText ? (
        <CustomText style={styles.textColor}>{btnText}</CustomText>
      ) : (
        children
      )}
    </Pressable>
  );
};

type StyleProps = {
  variant: "primary" | "secondary" | "outline" | "link";
};
const useStyles = makeStyles((theme: any, props: StyleProps) => ({
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: "auto",
    fontWeight: "600",
    backgroundColor:
      props.variant === "primary"
        ? theme.colors.primary
        : props.variant === "secondary"
        ? theme.colors.grey5
        : "transparent",
    color:
      props.variant === "primary"
        ? theme.colors.white
        : props.variant === "secondary"
        ? theme.colors.grey0
        : theme.colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    borderColor:
      props.variant === "primary"
        ? theme.colors.primary
        : props.variant === "secondary"
        ? theme.colors.grey4
        : props.variant === "outline"
        ? theme.colors.primary
        : "transparent",
  },
  textColor: {
    fontWeight: "600",
    color:
      props.variant === "primary"
        ? theme.colors.white
        : props.variant === "secondary"
        ? theme.colors.grey0
        : props.variant === "outline"
        ? theme.colors.primary
        : theme.colors.link,
  },
}));
