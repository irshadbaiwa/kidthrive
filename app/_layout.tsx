import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider, lightColors } from "@rneui/themed";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const theme = {
  colors: {
    ...lightColors,
    primary: "#082f49", // Your primary color
    secondary: "#e5e7eb", // Your secondary color
    link: "#2089dc",
  },
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <RecoilNexus />
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="add-child" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </RecoilRoot>
  );
}
