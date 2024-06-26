import React, { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from './HeaderText';

interface Props {
  children?: ReactNode;
  title?: ReactNode;
  [x: string]: any;
}

const ScreenLayout: React.FC<Props> = ({ children, title, ...props }) => {
  return (
    <SafeAreaView
      style={{ paddingTop: 16, paddingHorizontal: 18, paddingBottom: 0 }}
    >
      <StatusBar style="auto" />
      {title && (
        <View style={{ paddingBottom: 8 }}>
          <HeaderText>{title}</HeaderText>
        </View>
      )}
      <ScrollView
        // flex={1}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenLayout;
