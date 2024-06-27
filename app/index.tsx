import { useState, useEffect } from "react";
import { View, Pressable, ScrollView, Alert } from "react-native";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { Link } from "expo-router";
import { CustomButton } from "@/components/CustomButton";
import { makeStyles } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import HeaderText from "@/components/HeaderText";
import { Icon } from "@rneui/themed";
import ChildCard from "@/components/ChildCard";
import UpcomingVaccineCard from "@/components/UpcomingVaccineCard";
import { useRecoilValue, useRecoilState } from "recoil";
import { wardsState } from "@/recoil/wards-atom";
import storageService from "@/services/storage-service";
import { calculateAge } from "@/utils/getAge";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const wards = useRecoilValue(wardsState);
  const styles = useStyles();

  useEffect(() => {
    const loadStorageData = async () => {
      await storageService.loadWards();
      setIsLoading(false);
    };

    loadStorageData();
  });

  return (
    <ScreenLayout title="Welcome 👋">
      {isLoading ? (
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              height: 44,
              width: 256,
              maxWidth: "100%",
              borderRadius: 12,
              backgroundColor: "#e5e7eb",
            }}
          />
          <View
            style={{
              marginTop: 24,
              height: 196,
              width: "100%",
              borderRadius: 20,
              backgroundColor: "#e5e7eb",
            }}
          />
        </View>
      ) : wards.length === 0 ? (
        <View
          style={{
            marginTop: 56,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="file-tray" type="ionicon" size={64} color="#ddd" />
          <CustomText variant="supporting-text">
            You haven't registered anyone yet
          </CustomText>
          <Link href="/add-child" style={{ marginVertical: 24 }} asChild>
            <CustomButton variant="primary" btnText="Register child" />
          </Link>
        </View>
      ) : (
        <>
          {/* Upcoming vaccinations */}
          <UpcomingVaccineCard />

          {/** Children added */}
          <View style={styles.container}>
            {wards.map((kid) => (
              <ChildCard
                link={`child/${kid.id}`}
                key={kid.name}
                childName={kid.name}
                childAge={calculateAge(new Date(kid.dob))}
              />
            ))}
          </View>
          <View style={styles.seeAllContainer}>
            <Link href="/add-child" asChild>
              <CustomButton variant="primary" btnText="Add child" />
            </Link>
          </View>
        </>
      )}
    </ScreenLayout>
  );
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingTop: 12,
    marginTop: 12,
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
    color: theme.colors.primary,
    marginLeft: 12,
  },
}));
