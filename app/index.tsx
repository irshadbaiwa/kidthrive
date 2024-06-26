import { View } from "react-native";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { Button } from "@rneui/themed";
import { Link } from "expo-router";

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
    <ScreenLayout title="Home">
      <CustomText>Edit app/index.tsx to edit this screeen</CustomText>
      <Link href="/add-child" asChild>
        <Button>Add child</Button>
      </Link>
    </ScreenLayout>
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
