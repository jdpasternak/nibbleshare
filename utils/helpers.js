const markdown = require("markdown-js");
module.exports = {
  markdownToHtml: (markdownText) => {
    return markdown.makeHtml(markdownText);
  },
};
