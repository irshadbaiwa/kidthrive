import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';

interface Props {
  children?: ReactNode;
  [x: string]: any;
}

const ScreenLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView
        // flex={1}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
};

export default ScreenLayout;
