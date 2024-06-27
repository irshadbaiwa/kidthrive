import React from "react";
import { View, Pressable } from "react-native";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { Link } from "expo-router";
import { CustomButton } from "@/components/CustomButton";
import { makeStyles } from "@rneui/themed";
import HeaderText from "@/components/HeaderText";
import { Icon } from "@rneui/themed";
import moment from "moment";

interface Props {
  vaccine: string;
  date: string;
}

const VaccineCard: React.FC<Props> = ({ vaccine, date }) => {
  const styles = useStyles();
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon size={24} name="vaccines" type="material" color="#5e6977" />
      </View>
      <View style={styles.headerContainer}>
        <HeaderText variant="sm" style={styles.header} numberOfLines={2}>
          {vaccine}
        </HeaderText>
        <CustomText variant="supporting-text" numberOfLines={1}>
          {moment(date).fromNow()}
        </CustomText>
      </View>
    </Pressable>
  );
};

const useStyles = makeStyles((theme: any) => ({
  container: {
    backgroundColor: theme.colors.secondary,
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
    paddingHorizontal: 6,
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

export default VaccineCard;
