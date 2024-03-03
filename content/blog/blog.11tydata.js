const { DateTime } = require("luxon");

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      return `/blog/${data.page.fileSlug}/`;
    },
  },

  // Function to filter out drafts based on the front matter
  collectionItemTemplateContent: function(content) {
    const matter = require("gray-matter");
    const { data } = matter(content);
    return data.draft !== true;
  },

  // Function to sort posts by date
  sortByDate: function(a, b) {
    return DateTime.fromJSDate(a.date) - DateTime.fromJSDate(b.date);
  },

  // Function to reverse the order of posts
  reverseOrder: function(array) {
    return array.reverse();
  },
};
