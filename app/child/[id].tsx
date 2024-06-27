import React, { useState } from "react";
import { View, StyleSheet, Platform, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { makeStyles } from "@rneui/themed";
import HeaderText from "@/components/HeaderText";
import { router } from "expo-router";
import storageService from "@/services/storage-service";
import { useLocalSearchParams } from "expo-router";
import { useRecoilValue } from "recoil";
import { wardsState } from "@/recoil/wards-atom";
import VaccineCard from "@/components/VaccineCard";
import { VACCINE_CODES } from "@/constants/vaccine-code";
import { CustomButton } from "@/components/CustomButton";

export default function AddChildScreen() {
  const { id } = useLocalSearchParams();
  const wards = useRecoilValue(wardsState);

  const child = wards.find((ward) => `${ward.id}` === `${id}`) ?? wards[0];
  const deleteRecord = async () => {
    await storageService.deleteWard(child.id);
    router.replace("/");
  };

  const styles = useStyles();
  return (
    <ScreenLayout title={child.name}>
      {/** Vaccines added */}
      <View style={styles.container}>
        {child.vaccines.map((vaccine) => (
          <VaccineCard
            key={vaccine.date + vaccine.vaccine}
            vaccine={VACCINE_CODES[vaccine.vaccine]?.full ?? vaccine.vaccine}
            date={vaccine.date}
          />
        ))}
      </View>
      {/** Delete child record */}
      <View
        style={{
          marginTop: 12,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton btnText="Delete this record" onPress={deleteRecord} />
      </View>
    </ScreenLayout>
  );
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingTop: 12,
    marginTop: 12,
  },
}));
