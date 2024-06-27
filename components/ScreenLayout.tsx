import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "./HeaderText";
import { BlurView } from "expo-blur";

interface Props {
  children?: ReactNode;
  title?: ReactNode;
  [x: string]: any;
}

const ScreenLayout: React.FC<Props> = ({ children, title, ...props }) => {
  return (
    <SafeAreaView
      style={{
        paddingBottom: 0,
        flex: 1,
      }}
    >
      <StatusBar style="dark" />
      {title && (
        <BlurView
          intensity={70}
          tint="light"
          style={{
            paddingBottom: 8,
            paddingTop: 16,
            paddingHorizontal: 18,
            backgroundColor: "white",
          }}
        >
          <HeaderText>{title}</HeaderText>
        </BlurView>
      )}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 18,
          backgroundColor: "white",
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
        <View style={{ paddingVertical: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenLayout;
