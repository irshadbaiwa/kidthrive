import { View } from "react-native";
import CustomText from "@/components/CustomText";
import ScreenLayout from "@/components/ScreenLayout";
import { Button } from "@rneui/themed";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScreenLayout title="Home">
      <CustomText>Edit app/index.tsx to edit this screeen</CustomText>
      <Link href="/add-child" asChild>
        <Button>Add child</Button>
      </Link>
    </ScreenLayout>
  );
}
