import React from "react";
import HeaderText from "@/components/HeaderText";
import { View, Pressable, ScrollView } from "react-native";
import { makeStyles } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "./CustomText";
import { Icon } from "@rneui/themed";

interface Props {
  vaccine: string;
  receiver: string;
  timeToVaccine: string;
  date: string;
}

const UpcomingVaccineCard: React.FC<Props> = ({
  vaccine,
  receiver,
  timeToVaccine,
  date,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.upcomingContainer}>
      <HeaderText variant="md">Upcoming Vaccination</HeaderText>
      <LinearGradient
        colors={["rgb(8 47 73)", "rgba(8, 47, 73,0.7)", "rgba(8, 47, 73,0.5)"]}
        style={styles.upcomingBox}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Icon size={36} name="vaccines" type="material" color="#fff" />
          <HeaderText variant="md" whiteText style={{ marginLeft: 6 }}>
            {vaccine}
          </HeaderText>
        </View>
        <CustomText whiteText>Receiver: {receiver}</CustomText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 2,
          }}
        >
          <Icon size={36} name="calendar" type="ionicon" color="#fff" />
          <HeaderText
            variant="md"
            numberOfLines={1}
            whiteText
            style={{ marginLeft: 8 }}
          >
            {timeToVaccine}
          </HeaderText>
        </View>
        <CustomText whiteText>Date: {date}</CustomText>
      </LinearGradient>
    </View>
  );
};

const useStyles = makeStyles((theme: any) => ({
  upcomingBox: {
    backgroundColor: theme.colors.secondary,
    width: "100%",
    borderRadius: 24,
    marginTop: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  upcomingContainer: {
    marginTop: 28,
  },
}));

export default UpcomingVaccineCard;
