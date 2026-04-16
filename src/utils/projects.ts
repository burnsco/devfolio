export const hasLiveUrl = (url: string) => {
  const value = url.trim();
  return value.length > 0 && value !== "#";
};
