
export default id => {
  const target = document.getElementById(id);
  const txt = document.createElement("textarea");
  txt.value = target.href;
  document.body.appendChild(txt);
  txt.select();
  txt.setSelectionRange(0, 99999);
  document.execCommand("copy");

  document.body.removeChild(txt);
};
