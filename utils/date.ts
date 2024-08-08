export function convertIsoToDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function convertTimestampToDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "long" });

  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}
