import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import { Link } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { makeStyles } from "@rneui/themed";

export default function NutritionDetail() {
  const navigation = useNavigation();

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
    translateY.value = withTiming(0, { duration: 1000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <Icon
          name="nutrition"
          type="font-awesome-5"
          size={50}
          color="#5e6977"
        />
        <Text style={styles.headerText}>Nutrition Type</Text>
        <Text style={styles.subHeaderText}>Administered Date: 2023-01-01</Text>
        <Text style={styles.description}>
          This is the description of the nutrition type. It includes details
          about the nutrition, its benefits, recommended intake, and other
          relevant information.
        </Text>
        <Link href="/" asChild>
          <Button buttonStyle={styles.backButton}>Go Back</Button>
        </Link>
      </Animated.View>
    </View>
  );
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: theme.colors.primary,
  },
}));
