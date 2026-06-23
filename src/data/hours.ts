export const hours = [
  { day: "Monday", short: "Mon", open: "11 AM", close: "8 PM", closed: false },
  { day: "Tuesday", short: "Tue", open: "11 AM", close: "8 PM", closed: false },
  { day: "Wednesday", short: "Wed", open: "11 AM", close: "8 PM", closed: false },
  { day: "Thursday", short: "Thu", open: "11 AM", close: "8 PM", closed: false },
  { day: "Friday", short: "Fri", open: "11 AM", close: "8 PM", closed: false },
  { day: "Saturday", short: "Sat", open: "11 AM", close: "10 PM", closed: false },
  { day: "Sunday", short: "Sun", open: "", close: "", closed: false }
] as const;

export type HoursEntry = typeof hours[number];
