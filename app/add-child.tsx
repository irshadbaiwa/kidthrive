import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Input, Image, Button } from "@rneui/themed";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ScreenLayout from "@/components/ScreenLayout";
import { color } from "@rneui/base";

export default function AddChildScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  return (
    <ScreenLayout title="Add Child">
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            containerStyle={{ color: "blue" }}
            disabledInputStyle={{ backgroundColor: "#ddd" }}
            inputContainerStyle={{}}
            errorStyle={{}}
            errorProps={{}}
            inputStyle={{}}
            labelStyle={{}}
            labelProps={{}}
            leftIcon={<Icon name="account-outline" size={20} />}
            leftIconContainerStyle={{}}
            rightIcon={<Icon name="close" size={20} />}
            rightIconContainerStyle={{}}
            placeholder="Enter Name"
          />
          <Pressable onPress={showDatePicker}>
            <View style={styles.inputContainer}>
              <Icon name="calendar" size={20} style={styles.icon} />
              <Text style={styles.text}>Select Date Of Birth</Text>
            </View>
          </Pressable>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
          <Text>selected: {date.toLocaleString()}</Text>
          <Button title="Submit" buttonStyle={styles.button} />
        </View>
      </SafeAreaView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    borderRadius: 20,
  },
});
