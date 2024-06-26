import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ScreenLayout from "@/components/ScreenLayout";
import { Link } from "expo-router";

export default function Child() {
  const navigation = useNavigation();

  const immunizationHistory = [
    { vaccine: "Vaccine A", dateAdministered: "2023-01-01" },
    { vaccine: "Vaccine B", dateAdministered: "2023-03-15" },
    // Add more records as needed
  ];

  const upcomingImmunizations = [
    { vaccine: "Vaccine C", dueDate: "2023-07-01" },
    { vaccine: "Vaccine D", dueDate: "2023-09-10" },
    // Add more records as needed
  ];

  const nutritionRecords = [
    { nutrition: "Nutrition A", dueDate: "2023-07-01" },
    { nutrition: "Nutrition B", dueDate: "2023-09-10" },
    // Add more records as needed
  ];

  return (
    <ScreenLayout>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Child's Name</Text>
          <Text style={styles.subHeaderText}>Male: Months Old</Text>
          {/* Add profile picture if applicable */}
        </View>

        {/* Immunization History Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Immunization History</Text>
          {immunizationHistory.map((record, index) => (
            <Link href="/vaccine-detail" asChild>
              <TouchableOpacity key={index} style={styles.record}>
                <FontAwesomeIcon
                  name="medkit"
                  size={24}
                  color="#000"
                  style={styles.icon}
                />
                <View>
                  <Text>{record.vaccine}</Text>
                  <Text>Date Administered: {record.dateAdministered}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
          {immunizationHistory.length === 0 && (
            <Text>No immunization records found.</Text>
          )}
        </View>

        {/* Upcoming Immunizations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Upcoming Immunizations</Text>
          {upcomingImmunizations.map((record, index) => (
            <TouchableOpacity key={index} style={styles.record}>
              <FontAwesomeIcon
                name="calendar"
                size={24}
                color="#000"
                style={styles.icon}
              />
              <View>
                <Text>{record.vaccine}</Text>
                <Text>Due Date: {record.dueDate}</Text>
              </View>
            </TouchableOpacity>
          ))}
          {upcomingImmunizations.length === 0 && (
            <Text>No upcoming immunizations.</Text>
          )}
        </View>

        {/* Nutrition Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Nutritions</Text>
          {nutritionRecords.map((record, index) => (
            <Link href="/nutrition-detail" asChild>
              <TouchableOpacity key={index} style={styles.record}>
                <FontAwesomeIcon
                  name="apple"
                  size={24}
                  color="#000"
                  style={styles.icon}
                />
                <View>
                  <Text>{record.nutrition}</Text>
                  <Text>Due Date: {record.dueDate}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
          {nutritionRecords.length === 0 && (
            <Text>No upcoming nutritions.</Text>
          )}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
    height: 100,
    width: 326,
    borderWidth: 1,
    borderColor: "#e7e7e8",
    borderRadius: 10,
    justifyContent: "space-around",
    padding: 10,
    alignSelf: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#555",
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  record: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
    height: 72,
    marginVertical: 4,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
