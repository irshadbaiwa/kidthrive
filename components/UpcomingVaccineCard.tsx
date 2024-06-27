import React from "react";
import HeaderText from "@/components/HeaderText";
import { View, Pressable, ScrollView } from "react-native";
import { makeStyles } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "./CustomText";
import { Icon } from "@rneui/themed";
import { useRecoilValue } from "recoil";
import { wardsState } from "@/recoil/wards-atom";
import { findUpcomingVaccine } from "@/utils/findUpcomingVaccine";
import { VACCINE_CODES } from "@/constants/vaccine-code";
import moment from "moment";

interface Props {}

const UpcomingVaccineCard: React.FC<Props> = ({}) => {
  const styles = useStyles();
  const wards = useRecoilValue(wardsState);
  // const upcomingVaccine = findUpcomingVaccine(wards);

  // if (!upcomingVaccine) return null;
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
          <HeaderText
            variant="md"
            whiteText
            style={{ marginLeft: 6 }}
            numberOfLines={1}
          >
            {/* {VACCINE_CODES[upcomingVaccine.vaccine?.vaccine]?.full ??
              upcomingVaccine.vaccine?.vaccine} */}
            {wards[0].vaccines[0].vaccine}
          </HeaderText>
        </View>
        <CustomText whiteText numberOfLines={1}>
          Receiver: {wards[0].name}
          {/* {upcomingVaccine.name} */}
        </CustomText>
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
            In 3 days
            {/* {moment(upcomingVaccine.vaccine?.date).fromNow()} */}
          </HeaderText>
        </View>
        <CustomText whiteText>
          Date: 26th August, 2024
          {/* {new Date(upcomingVaccine.vaccine?.date).toDateString()} */}
        </CustomText>
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
    marginTop: 16,
  },
}));

export default UpcomingVaccineCard;
