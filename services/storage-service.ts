import Storage from "../async-storage";
import { setRecoil, getRecoil } from "recoil-nexus";
import { wardsState } from "@/recoil/wards-atom";
import { STORAGE_KEYS } from "@/async-storage/storage-keys";
import { getVaccineSchedule } from "@/utils/getVaccineShedules";
import { findUpcomingVaccine } from "@/utils/findUpcomingVaccine";

// --------- LOAD WARDS DATA ------------
const loadWards = async () => {
  // get all txs from storage
  let wards = await Storage.getItem(STORAGE_KEYS.wards);
  if (!wards?.length) {
    wards = [];
  }

  // store in state
  setRecoil(wardsState, wards);

  // get Upcoming vaccine
  // const upcomingVaccine = findUpcomingVaccine(wards);
};

// --------- ADD WARD -------------
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
};
const addWard = async (ward: Ward) => {
  let existingWards = await Storage.getItem(STORAGE_KEYS.wards);
  if (!existingWards) {
    existingWards = [];
  }
  const newWard = { ...ward, vaccines: getVaccineSchedule(ward.dob) };
  const updatedWards = [...existingWards, newWard];

  // store to async storage
  await Storage.setItem(STORAGE_KEYS.wards, updatedWards);
  // store in state
  setRecoil(wardsState, updatedWards);
};

// ------------- DELETE WARD ---------------
const deleteWard = async (id: any) => {
  const wards = await Storage.getItem(STORAGE_KEYS.wards);
  if (!wards?.length) return;

  const filteredWards = wards.filter((ward) => `${ward.id}` === `${id}`);

  // store to async storage
  await Storage.setItem(STORAGE_KEYS.wards, filteredWards);
  // store in state
  setRecoil(wardsState, filteredWards);
};

// ------------- DELETE ALL WARDS ----------
const deleteAllWards = async () => {
  await Storage.removeItem(STORAGE_KEYS.wards);
  // store in state
  setRecoil(wardsState, []);
};

// -------------- GET UPCOMING VACCINATION -------

export default { loadWards, addWard, deleteWard, deleteAllWards };
