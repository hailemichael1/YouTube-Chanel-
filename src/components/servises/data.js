export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_KEY2 = import.meta.env.VITE_API_KEY2;
export const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
