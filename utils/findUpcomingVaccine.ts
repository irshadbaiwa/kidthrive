type Vaccine = {
  vaccine: string;
  date: Date;
};

type Ward = {
  id: any;
  name: string;
  vaccines: Vaccine[];
};

export function findUpcomingVaccine(
  wards: Ward[]
): { id: any; name: string; vaccine: Vaccine | null } | null {
  if (!wards.length) return null;

  let closestWard: Ward | null = null;
  let closestVaccine: Vaccine | null = null;
  let minTimeDiff: number = Infinity;

  const now: Date = new Date();

  wards.forEach((ward) => {
    ward.vaccines.forEach((vaccine) => {
      const vaccineDate: Date = new Date(vaccine.date);

      if (vaccineDate > now) {
        // Check if the vaccine date is in the future
        const timeDiff: number = vaccineDate.getTime() - now.getTime();

        if (timeDiff < minTimeDiff) {
          minTimeDiff = timeDiff;
          closestWard = ward;
          closestVaccine = vaccine;
        }
      }
    });
  });

  if (closestWard && closestVaccine) {
    return {
      id: closestWard.id,
      name: closestWard.name,
      vaccine: closestVaccine,
    };
  }

  return null;
}
