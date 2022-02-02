const markdown = require("markdown-js");
module.exports = {
  markdownToHtml: (markdownText) => {
    return markdown.makeHtml(markdownText);
  },
  formatDate: (date) => {
    return `${new Date(date).getDay()}/${new Date(date).getMonth()}/${new Date(
      date
    ).getFullYear()}`;
  },
};
