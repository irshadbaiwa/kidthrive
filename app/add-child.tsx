import React, { useState } from "react";
import { View, StyleSheet, Platform, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import KidThriveIcon from "@/assets/images/icon.png";
import { Input, Button } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CustomButton } from "@/components/CustomButton";
import { makeStyles } from "@rneui/themed";
import HeaderText from "@/components/HeaderText";
import { router } from "expo-router";
import storageService from "@/services/storage-service";

export default function AddChildScreen() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [gender, setGender] = useState<"Male" | "Female" | undefined>();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios");
    setDob(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (!(name && !!dob && gender)) {
      Alert.alert("Fill form correctly");
      return;
    }
    console.log("Submitting...");
    await storageService.addWard({
      id: `${name.replace(" ", "-")}-${new Date().getTime()}`,
      dob: dob?.getTime(),
      gender,
      name,
    });
    router.replace("/");
  };

  const styles = useStyles();
  return (
    <ScreenLayout title="Register Child">
      <View
        style={{
          marginTop: 24,
          marginBottom: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 96,
            height: 96,
            objectFit: "contain",
            borderRadius: 12,
            overflow: "hidden",
          }}
          source={KidThriveIcon}
          contentFit="cover"
          transition={1000}
        />
      </View>
      {/** Form */}
      <View style={styles.container}>
        <HeaderText style={{ marginTop: 12 }} variant="sm">
          Child's name
        </HeaderText>
        <Input value={name} onChangeText={(text: string) => setName(text)} />
        <HeaderText style={{ marginTop: 12, marginBottom: 6 }} variant="sm">
          Date of birth
        </HeaderText>
        <View style={styles.datePickerContainer}>
          <CustomButton
            btnText={dob?.toDateString() ?? "Select Date of Birth"}
            onPress={showDatepicker}
            style={styles.datePickerButton}
          />
          {showDatePicker && (
            <DateTimePicker
              value={dob || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
              style={styles.datePicker}
            />
          )}
        </View>
        <HeaderText style={{ marginTop: 12 }} variant="sm">
          Gender
        </HeaderText>
        <View style={{ marginVertical: 12, flexDirection: "row" }}>
          <Pressable
            style={gender === "Male" ? styles.genderSelected : styles.gender}
            onPress={() => setGender("Male")}
          >
            <HeaderText whiteText={gender === "Male"} variant="sm">
              Male
            </HeaderText>
          </Pressable>
          <Pressable
            style={gender === "Female" ? styles.genderSelected : styles.gender}
            onPress={() => setGender("Female")}
          >
            <HeaderText whiteText={gender === "Female"} variant="sm">
              Female
            </HeaderText>
          </Pressable>
        </View>
        <CustomButton
          btnText="Submit"
          onPress={handleSubmit}
          style={styles.buttonContainer}
        />
      </View>
    </ScreenLayout>
  );
}

const useStyles = makeStyles((theme: any) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  gender: {
    backgroundColor: theme.colors.secondary,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  genderSelected: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  datePickerButton: {
    flex: 1,
    marginRight: 10,
    textAlign: "center",
  },
  datePicker: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
}));
