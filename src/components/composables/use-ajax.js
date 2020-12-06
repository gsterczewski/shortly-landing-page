export default () => {
  const methods = {
    get: "GET",
    post: "POST"
  };

  const success = result => ({
    hasErrors: false,
    result
  });
  const fail = error => ({
    hasErrors: true,
    error
  });
  const callApi = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      return response.ok ? success(await response.json()) : fail( await response.json());
    } catch (err) {
      return fail(err);
    }
  };

  return {
    get: (url, options = {}) =>
      callApi(url, { method: methods.get, ...options }),
    post: (url, options = {}) =>
      callApi(url, { method: methods.post, ...options })
  };
};
