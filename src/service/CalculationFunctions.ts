export const ifCoinMillion = (value: number) => {
  if (!value) return;
  ("N/A");

  if (value >= 1e12) {
    return (value / 1e12).toFixed(2) + " " + "Trillion";
  } else if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + " " + "Billion";
  } else if (value >= 1e6 && value < 1e9) {
    return (value / 1e6).toFixed(2) + " " + "Million";
  } else {
    return value.toFixed(2);
  }
};
