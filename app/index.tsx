import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Platform,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { Input, Image } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date"); // Added mode state
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

  const showTimePicker = () => {
    showMode("time");
  };
  return (
    <SafeAreaView>
      <View>
        <View style={{ margin: 10 }}>
          <Image
            source={require("./assets/images/KidThrive.png")}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={{ margin: 20 }}>
          <Input
            containerStyle={{}}
            disabledInputStyle={{ background: "#ddd" }}
            inputContainerStyle={{}}
            errorMessage="Oops! that's not correct."
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Input
              containerStyle={{}}
              disabledInputStyle={{ background: "#ddd" }}
              inputContainerStyle={{}}
              errorMessage="Oops! that's not correct."
              errorStyle={{}}
              errorProps={{}}
              inputStyle={{}}
              labelStyle={{}}
              labelProps={{}}
              leftIcon={<Icon name="date" size={20} />}
              leftIconContainerStyle={{}}
              rightIcon={<Icon name="close" size={20} />}
              rightIconContainerStyle={{}}
              placeholder="Date Of Birth"
              onPress={showDatePicker}
            />
            <Input onPress={showDatePicker} />
            <Text style={styles.text}>Select Date Of Birth</Text>
          </View>
          <Text>selected: {date.toLocaleString()}</Text>

          {show && Platform.OS === "android" && (
            <DateTimePickerAndroid
              value={date}
              mode={mode}
              onChange={onChange}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,

    borderRadius: 20,
    padding: 10,
  },
  text: {
    alignSelf: "center",
  },
});
