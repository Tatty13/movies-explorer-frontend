/**
 * @param {string} path - path to asset on api.nomoreparties.co;
 * @returns
 */
function createFullUrl(path) {
  return `https://api.nomoreparties.co${path}`;
}

export { createFullUrl };
