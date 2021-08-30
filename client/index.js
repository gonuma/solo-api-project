// const router = require("../routes/index.js");

const htmlUpdater = (content) => {
  const state = { content };
};

app = () => {
  return `<div><p>${textUpdater()}</p></div>`;
};

const textUpdater = (text) => {
  let finalStr = ``;

  for (const item in text) {
    finalStr += item;
  }

  return finalStr;
};
app();
module.exports = htmlUpdater;
