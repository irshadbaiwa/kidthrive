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

const kids = [
  { name: "Saminu Ashiru", age: "10 months old" },
  { name: "Mudi Sammani", age: "2 months old" },
  { name: "Mukhtar Abubakar", age: "2 year old" },
  { name: "Asiya Maliki", age: "15 months old" },
];

export default function Index() {
  const styles = useStyles();
  return (
    <ScreenLayout title="Welcome back">
      <View style={styles.metricsContainer}>
        <View style={styles.metricContainer}>
          <HeaderText style={styles.headerText}>{kids.length}</HeaderText>
          <CustomText>children added</CustomText>
        </View>
        <Link href="/add-child" asChild>
          <Pressable style={styles.addChildContainer}>
            <Icon name="add" type="ionicons" size={44} color="#fff" />
            <HeaderText
              variant="sm"
              style={{ color: "white", textAlign: "center", marginTop: 4 }}
            >
              Add child
            </HeaderText>
          </Pressable>
        </Link>
      </View>
      <View style={styles.container}>
        {kids.map((kid) => (
          <ChildCard key={kid.name} childName={kid.name} childAge={kid.age} />
        ))}
      </View>
      <View style={styles.seeAllContainer}>
        <CustomButton variant="link" btnText="See all" />
      </View>
    </ScreenLayout>
  );
}

const useStyles = makeStyles((theme: any) => ({
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
    color: theme.colors.primary,
    marginLeft: 12,
  },
}));
