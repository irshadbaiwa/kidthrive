export function calculateAge(dob: Date): string {
  const today: Date = new Date();

  // Check if dob is in the future
  if (dob.getTime() > today.getTime()) {
    const diffTime: number = dob.getTime() - today.getTime();
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `EDD: In ${diffDays} days`;
  }

  // Calculate age in days if less than 1 month old
  const diffTime: number = today.getTime() - dob.getTime();
  const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 31) {
    return `${diffDays} days old`;
  }

  // Calculate age if older than 1 month
  const ageInYears: number = today.getFullYear() - dob.getFullYear();
  const monthDiff: number = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    return `${ageInYears - 1} years old`;
  }

  if (ageInYears < 2) {
    // Calculate age in months if less than 2 years old
    const months: number =
      (today.getFullYear() - dob.getFullYear()) * 12 +
      today.getMonth() -
      dob.getMonth();
    return `${months} months old`;
  } else {
    // Calculate age in years if 2 years old or older
    return `${ageInYears} years old`;
  }
}
