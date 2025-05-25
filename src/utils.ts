export const getCurrentRoleDuration = (startDate: Date): string => {
  const currentDate = new Date();
  const duration = currentDate.getTime() - startDate.getTime();

  const months = Math.floor(duration / (30 * 24 * 60 * 60 * 1000));
  const years = Math.floor(months / 12);
  const modMonths = Math.ceil(months % 12);

  return `${years} year${years === 1 ? "" : "s"}, ${modMonths} month${
    modMonths === 1 ? "" : "s"
  }+`;
};
