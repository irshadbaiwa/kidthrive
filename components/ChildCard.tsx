import React from "react";
import { View, Pressable } from "react-native";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { Link } from "expo-router";
import { CustomButton } from "@/components/CustomButton";
import { makeStyles } from "@rneui/themed";
import HeaderText from "@/components/HeaderText";
import { Icon } from "@rneui/themed";

interface Props {
  childName: string;
  childAge: string;
}

const ChildCard: React.FC<Props> = ({ childName, childAge }) => {
  const styles = useStyles();
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon size={24} name="child" type="font-awesome" color="#5e6977" />
      </View>
      <View style={styles.headerContainer}>
        <HeaderText variant="sm" style={styles.header}>
          {childName}
        </HeaderText>
        <CustomText variant="supporting-text">{childAge}</CustomText>
      </View>
      <Pressable style={styles.chevronContainer}>
        <Icon size={24} name="chevron-right" type="feather" color="#2089dc" />
      </Pressable>
    </Pressable>
  );
};

const useStyles = makeStyles((theme: any) => ({
  container: {
    backgroundColor: theme.colors.grey5,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    width: "full",
    height: 72,
    alignItems: "center",
    marginVertical: 4,
  },
  iconContainer: {
    height: "100%",
    aspectRatio: 1 / 1,
    backgroundColor: theme.colors.grey4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  headerContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {},
  chevronContainer: {
    height: "100%",
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default ChildCard;
