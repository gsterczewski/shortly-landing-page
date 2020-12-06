import { ref } from "vue";
import ajax from "./use-ajax";

export default () => {
  const isPending = ref(false);
  const isError = ref(false);
  let result = ref({});
  let errorMessage = ref("");

    const apiErrors = {
        0 : "Oops something went wrong",
        1 : "No URL provided",
        2 : "Invalid URL"
    }
  const url = "https://api.shrtco.de/v2/shorten?url=";
  const createURL = link => `${url}${link}`;

  const setError = err => {
    isError.value = true;
    errorMessage.value = apiErrors[err.error_code] || apiErrors[0] ;
  };

  const extractResult = ({
    original_link,
    code,
    full_short_link,
    short_link
  }) => ({
    original: original_link,
    short: short_link,
    full: full_short_link,
    code
  });
  
    const setPending = () => {
        isError.value = false;
        errorMessage.value = "";
      isPending.value = true;
  }
  const { get } = ajax();

  const fetchLink = async link => {
    try {
      setPending()
      const request = await get(createURL(link));
      request.hasErrors
        if(request.error){
            setError(request.error)
        } else{
            console.log(request.result)
            return extractResult(request.result.result)
        }

    } catch (err) {
      setError(err);
    } finally {
      isPending.value = false;
    }
  };
  return {
    fetchLink,
    isError,
    isPending,
    result,
    errorMessage
  };
};
