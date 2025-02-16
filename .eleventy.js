
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("list-items", function(fileName, content) {
    return `<li><img src="/images/${fileName}.png" class="small-logo"></img>${content}</li>`;
  });

};