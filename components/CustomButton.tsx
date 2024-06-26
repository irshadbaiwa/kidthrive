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
}) => {
  const styles = useStyles({ variant });
  return (
    <Pressable style={styles.btn}>
      {btnText ? (
        <CustomText style={styles.textColor}>See all</CustomText>
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
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: "auto",
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
    borderRadius: 20,
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
