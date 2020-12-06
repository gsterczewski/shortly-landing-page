export default (() => {
  const ls = localStorage;
  const config = {
    logging: true
  };

  const testLocalStorage = () => {
    const test = "test phrase";
    try {
      ls.setItem(test, test);
      ls.removeItem(test);
      if (config.logging) {
        console.log("localStorage available");
      }
      return true;
    } catch (err) {
      if (config.logging) {
        console.log("localStorage unavailable");
      }
      return false;
    }
  };

  const toString = item => JSON.stringify(item);
  const parse = item => JSON.parse(item);
  const log = (...message) => {
    if (config.logging) {
      console.log(...message);
    }
  };

  const load = key => {
    try {
      let parsedItem = parse(ls.getItem(key));
      return parsedItem;
    } catch (err) {
      log(err);
      return false;
    }
  };

  const save = (key, item) => {
    try {
      let items = load(key) || [];
      items.push(item);
      ls.setItem(key, toString(items));
    } catch (err) {
      log(err);
      return false;
    }
  };

  const remove = key => {
    try {
      ls.removeItem(key);

      return true;
    } catch (err) {
      log(err);
      return false;
    }
  };
  const getByURL = (key, url) => {
    let items = load(key);
    if (!items || items.length === 0) {
      return false;
    }
    return items.filter(item => item.url === url)[0];
  };
  testLocalStorage();

  const init = storeName => ({
    getAll: load.bind(null, storeName),
    save: save.bind(null, storeName),
    flush: remove.bind(null, storeName),
    getOne: getByURL.bind(null, storeName)
  });
  return {
    init
  };
})();
