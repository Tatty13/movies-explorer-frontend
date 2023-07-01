/**
 * @param {object.<string>} data
 * will save --value-- in the Local Storage under a --key-- name
 */
function saveDataInLS(data) {
  for (let key in data) {
    localStorage.setItem(key, data[key]);
  }
}

/**
 * @param {...string} keys - one or more Local Storage item names
 * @returns {{string: string}} object with requested data, where --key-- is an item name and --value-- is an item value
 */
const getDataFromLS = (...keys) =>
  keys.reduce((res, key) => {
    res[key] = localStorage.getItem(key);
    return res;
  }, {});

/**
 * @param  {...string} keys - one or more Local Storage item names to delete
 */
const removeDataFromLS = (...keys) => {
  keys.forEach((key) => localStorage.removeItem(key));
};

export { saveDataInLS, getDataFromLS, removeDataFromLS };
