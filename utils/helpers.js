const markdown = require("markdown-js");
module.exports = {
  markdownToHtml: (markdownText) => {
    return markdown.makeHtml(markdownText);
  },
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
