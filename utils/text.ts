export const trimText = (text: string): string => {
  if (text.length <= 200) {
    return text;
  } else {
    return text.slice(0, 200) + "...";
  }
};
