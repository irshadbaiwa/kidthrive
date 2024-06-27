import { atom } from "recoil";

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

export const wardsState = atom<Ward[]>({
  key: "wards", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
