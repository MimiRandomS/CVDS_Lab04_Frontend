const getWeekRange = (weekOffset: number) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const mondayCurrentWeek = new Date();
  mondayCurrentWeek.setDate(
    currentDate.getDate() - (currentDay === 0 ? 6 : currentDay - 1)
  );

  const monday = new Date();
  monday.setDate(mondayCurrentWeek.getDate() + weekOffset * 7);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return { monday, sunday };
};

const formatWeekRange = (weekOffset: number) => {
  const { monday, sunday } = getWeekRange(weekOffset);

  const formatDate = (date: Date) =>
    `${date.getDate()} de ${date.toLocaleString("es-ES", { month: "long" })}`;

  return `${formatDate(monday)} - ${formatDate(sunday)}`;
};

export { getWeekRange, formatWeekRange };
