import { View, Pressable, ScrollView } from "react-native";
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

const kids = [
  { name: "Saminu Ashiru", age: "10 months old" },
  { name: "Mudi Sammani", age: "2 months old" },
  { name: "Mukhtar Abubakar", age: "2 year old" },
  { name: "Asiya Maliki", age: "15 months old" },
];

export default function Index() {
  const styles = useStyles();
  return (
    <ScreenLayout title="Welcome 👋">
      {/* Upcoming vaccinations */}
      <UpcomingVaccineCard
        vaccine="Polio Vaccine"
        receiver="Saminu Ashiru"
        timeToVaccine="In 3 days"
        date="30th June, 2024"
      />

      {/** Children added */}
      <View style={styles.container}>
        {kids.map((kid) => (
          <ChildCard key={kid.name} childName={kid.name} childAge={kid.age} />
        ))}
      </View>
      <View style={styles.seeAllContainer}>
        <Link href="/add-child" asChild>
          <CustomButton variant="primary" btnText="Add child" />
        </Link>
        <CustomButton variant="link" btnText="See all" />
      </View>
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
