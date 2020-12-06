import { isEmpty, isURL } from "validator";

export default input => {
  const cleanInput = `${input}`.trim();
  if (isEmpty(cleanInput)) {
    return {
      isValid: false,
      error: "No URL provided!"
    };
  }
  if (!isURL(cleanInput)) {
    return {
      isValid: false,
      error: "Invalid URL!"
    };
  }
  return {
    isValid: true,
    value: input
  };
};
