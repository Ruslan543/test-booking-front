const options: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  // необязательно, но можно явно указать часовой пояс:
  timeZone: "Europe/Riga",
};

export function convertDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleString("ru-RU", options);
}
