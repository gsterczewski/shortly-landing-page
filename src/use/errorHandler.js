import { ref } from "vue";

export default () => {
  const isError = ref(false);
  const errorMessage = ref("");
  const defafaultError = "Oops something went wrong";

  const errors = {
    1: "URL not specified",
    2: "Invalid URL",
    3: "Rate limit reached",
    4: "IP blocked, terms of services violated",
    5: "shrtcode (slug) already in use",
    6: "Unknown",
    7: "No code specified ('code' parameter empty)",
    8: "Invalid code submitted",
    9: "Missing required parameters",
    10: "Dissalowed link"
  };

  return {
    setError: error => {
      if (typeof error === "string") {
        errorMessage.value = error;
      } else if (typeof error === "number") {
        errorMessage.value = errors[error] || defafaultError;
      }
      isError.value = true;
    },
    clearError: () => {
      isError.value = false;
      errorMessage.value = "";
    },
    isError,
    errorMessage
  };
};
