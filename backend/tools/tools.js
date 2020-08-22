const generateId = () => {
  return "" + Math.floor(Math.random() * 100000000000);
};

module.exports = {
    generateId
}