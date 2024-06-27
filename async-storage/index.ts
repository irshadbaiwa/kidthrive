import AsyncStorage from "@react-native-async-storage/async-storage";

type Vaccine = {
  vaccine: string;
  date: Date;
  done: boolean;
};
type Ward = {
  id: any;
  name: string;
  dob: string | number;
  gender: "Male" | "Female";
  vaccines: Vaccine[];
};

const getItem = async (key: string): Promise<Ward[] | null> => {
  try {
    const item = await AsyncStorage.getItem(key);
    let value = null;
    if (item !== null) {
      value = JSON.parse(item);
    }
    return value;
  } catch (error) {
    console.warn(error);
    return null;
  }
};

const setItem = async (key: string, value: Ward[]): Promise<any> => {
  try {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(error);
    return null;
  }
};

const removeItem = async (key: string): Promise<any> => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn(error);
    return null;
  }
};

export default {
  getItem,
  setItem,
  removeItem,
};
