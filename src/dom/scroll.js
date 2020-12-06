export default id => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
};
