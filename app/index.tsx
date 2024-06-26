import { View } from 'react-native';
import CustomText from '@/components/CustomText';
import ScreenLayout from '@/components/ScreenLayout';
import { Link } from 'expo-router';
import { CustomButton } from '@/components/CustomButton';

export default function Index() {
  return (
    <ScreenLayout title="Home">
      <CustomText>Edit app/index.tsx to edit this screeen</CustomText>
      <Link href="/add-child" asChild>
        <CustomButton>Add child</CustomButton>
      </Link>
    </ScreenLayout>
  );
}
