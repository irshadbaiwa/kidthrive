import { Button, ButtonProps } from '@rneui/themed';
import { makeStyles } from '@rneui/themed';

interface Props {
  variant: 'primary' | 'secondary' | 'outline' | 'link';
}
type CustomProps = Props & ButtonProps;

export const CustomButton: React.FC<CustomProps> = ({
  variant = 'primary',
  children,
}) => {
  const styles = useStyles({ variant });
  return <Button>{children}</Button>;
};

type StyleProps = {
  variant: 'primary' | 'secondary' | 'outline' | 'link';
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  btn: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    width: 'auto',
    backgroundColor:
      props.variant === 'primary'
        ? theme.colors.primary
        : props.variant === 'secondary'
        ? theme.colors.grey5
        : 'transparent',
    color:
      props.variant === 'primary'
        ? theme.colors.white
        : props.variant === 'secondary'
        ? theme.colors.grey0
        : theme.colors.primary,
    borderRadius: 12,
    borderWidth: 2,
    borderColor:
      props.variant === 'primary'
        ? theme.colors.primary
        : props.variant === 'secondary'
        ? theme.colors.grey4
        : props.variant === 'outline'
        ? theme.colors.primary
        : 'transparent',
  },
}));
