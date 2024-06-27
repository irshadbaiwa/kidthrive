interface Vaccine {
  vaccine: string;
  date: Date;
  done: boolean;
}

export function getVaccineSchedule(dateOfBirth: string | number): Vaccine[] {
  // Initialize the list to store vaccine objects
  let vaccineSchedule: Vaccine[] = [];

  // Convert date strings to Date objects
  const birthDate = new Date(dateOfBirth);

  // Calculate dates for each vaccine based on the birth date
  const sixWeeksDate = new Date(birthDate);
  sixWeeksDate.setDate(birthDate.getDate() + 42); // 6 weeks = 42 days

  const tenWeeksDate = new Date(sixWeeksDate);
  tenWeeksDate.setDate(sixWeeksDate.getDate() + 28); // 10 weeks = 70 days

  const fourteenWeeksDate = new Date(tenWeeksDate);
  fourteenWeeksDate.setDate(tenWeeksDate.getDate() + 28); // 14 weeks = 98 days

  const sixMonthsDate = new Date(birthDate);
  sixMonthsDate.setMonth(birthDate.getMonth() + 6); // 6 months later

  const nineMonthsDate = new Date(sixMonthsDate);
  nineMonthsDate.setMonth(sixMonthsDate.getMonth() + 3); // 9 months later

  const twelveMonthsDate = new Date(sixMonthsDate);
  twelveMonthsDate.setMonth(sixMonthsDate.getMonth() + 6); // 12 months later

  const fifteenMonthsDate = new Date(twelveMonthsDate);
  fifteenMonthsDate.setMonth(twelveMonthsDate.getMonth() + 3); // 15 months later

  // Define vaccine objects with their schedule dates
  const vaccines: Vaccine[] = [
    { vaccine: "BCG", date: birthDate, done: false },
    { vaccine: "hepB", date: birthDate, done: false },
    { vaccine: "OPV0", date: birthDate, done: false },

    { vaccine: "OPV1", date: sixWeeksDate, done: false },
    { vaccine: "Penta1", date: sixWeeksDate, done: false },
    { vaccine: "PCV1", date: sixWeeksDate, done: false },
    { vaccine: "Rota1", date: sixWeeksDate, done: false },
    { vaccine: "IPV1", date: sixWeeksDate, done: false },

    { vaccine: "OPV2", date: tenWeeksDate, done: false },
    { vaccine: "Penta2", date: tenWeeksDate, done: false },
    { vaccine: "PCV2", date: tenWeeksDate, done: false },
    { vaccine: "Rota2", date: tenWeeksDate, done: false },

    { vaccine: "OPV3", date: fourteenWeeksDate, done: false },
    {
      vaccine: "Penta3",
      date: fourteenWeeksDate,
      done: false,
    },
    { vaccine: "PCV3", date: fourteenWeeksDate, done: false },
    { vaccine: "Rota3", date: fourteenWeeksDate, done: false },
    { vaccine: "IPV2", date: fourteenWeeksDate, done: false },

    { vaccine: "VitA1", date: sixMonthsDate, done: false },

    {
      vaccine: "Measles1",
      date: nineMonthsDate,
      done: false,
    },
    {
      vaccine: "YellowFever",
      date: nineMonthsDate,
      done: false,
    },
    {
      vaccine: "Meningitis",
      date: nineMonthsDate,
      done: false,
    },

    { vaccine: "VitA2", date: twelveMonthsDate, done: false },

    {
      vaccine: "Measles2",
      date: fifteenMonthsDate,
      done: false,
    },
  ];

  // Sort the vaccine objects by date in ascending order
  vaccines.sort((a, b) => a.date.getTime() - b.date.getTime());

  return vaccines;
}
