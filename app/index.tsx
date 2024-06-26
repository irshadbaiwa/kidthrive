import React from "react";
import { View } from "react-native";
import { Button, makeStyles, useTheme } from "@rneui/themed";
import { Link } from "expo-router";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";

export default function Index() {
  const styles = useStyles();

  return (
    <ScreenLayout title="Home">
      <CustomText>Edit app/index.tsx to edit this screen</CustomText>
      <Link href="/child" asChild>
        <Button style={styles.addChildButton}>Add child</Button>
      </Link>
    </ScreenLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 12,
  },
  seeAllContainer: {
    paddingTop: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  metricsContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  metricText: {
    textAlign: "center",
  },
  headerText: {
    textAlign: "center",
    marginBottom: 4,
  },
  metricContainer: {
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    height: 128,
    backgroundColor: theme.colors.disabled,
  },
  addChildContainer: {
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20,
    height: 128,
    backgroundColor: theme.colors.primary,
    marginLeft: 12,
  },
  addChildButton: {
    backgroundColor: theme.colors.primary,
  },
}));
