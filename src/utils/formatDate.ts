import { format } from "date-fns";

export const formatDate = (date: Date, pattern: string, ...options) => {
  if (!date) return;

  return format(date, pattern, ...options);
};
