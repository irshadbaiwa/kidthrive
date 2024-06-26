import React from 'react';
import { Text } from 'react-native';
import { makeStyles } from '@rneui/themed';

interface Props {
  children?: React.ReactNode;
  variant?: 'lg' | 'md' | 'sm';
}

const HeaderText: React.FC<Props> = ({ children, variant = 'lg' }) => {
  const styles = useStyles({ variant });
  return <Text style={styles.text}>{children}</Text>;
};

type StyleProps = {
  variant: 'lg' | 'md' | 'sm';
};
const useStyles = makeStyles((theme, props: StyleProps) => ({
  text: {
    color: theme.colors.black,
    fontSize: 32,
    fontWeight: '800',
  },
}));

export default HeaderText;
