import { ref } from "vue";

export default () => {
  const storeKey = "shortly_gs";
  const ls = localStorage;

  const links = ref([]);
  return {
    getAllLinks() {
      links.value = JSON.parse(ls.getItem(storeKey)) || [];
    },
    saveLinks() {
      ls.setItem(storeKey, JSON.stringify(links.value));
    },
    addLink(link) {
      console.log("adding link to store", link);
      links.value.push(link);
      ls.setItem(storeKey, JSON.stringify(links.value));
    },
    getLink(link) {
      let item = ls.getItem(storeKey);
      return item
        ? JSON.parse(item).filter(({ original }) => link === original)[0]
        : null;
    },
    links
  };
};
