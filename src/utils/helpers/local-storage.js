/**
 * @param {object.<string>} searchData
 */
function saveDataInLS(searchData) {
  for (let key in searchData) {
    localStorage.setItem(key, searchData[key]);
  }
}

/**
 * @param {string} keys
 * @returns
 */
const getDataFromLS = (...keys) =>
  keys.reduce((res, key) => {
    res[key] = localStorage.getItem(key);
    return res;
  }, {});

export { saveDataInLS, getDataFromLS };
