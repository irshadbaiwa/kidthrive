import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from '@rneui/themed';

interface Props {
  children?: React.ReactNode;
  variant?: 'text' | 'supporting-text';
}

const CustomText: React.FC<Props> = ({ children, variant = 'text' }) => {
  const styles = useStyles({ variant });
  return <Text style={styles.text}>{children}</Text>;
};

type StyleProps = {
  variant: 'text' | 'supporting-text';
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  text: {
    color:
      props.variant === 'supporting-text'
        ? theme.colors.grey2
        : theme.colors.grey0,
  },
}));

export default CustomText;
