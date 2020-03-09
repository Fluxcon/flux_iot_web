module.exports = function(eleventyConfig) {
	// pass through copy 
	eleventyConfig.addPassthroughCopy({'static/assets': 'assets'});
	eleventyConfig.addPassthroughCopy({'static/downloads': 'downloads'});
	eleventyConfig.addPassthroughCopy({'static/img': 'img'});
	eleventyConfig.addPassthroughCopy({'static/LICENSE.txt': 'LICENSE.txt'});
	eleventyConfig.addPassthroughCopy({'static/ftpsync.settings': 'ftpsync.settings'});

	// markdown options
	let markdownIt = require("markdown-it");
	let options = {
		html: true,
		breaks: true,
		code: false,
	};
	eleventyConfig.setLibrary("md", markdownIt(options).disable('code'));

	// return config
	return {
		dir: {
			input: "pages",
			output: "dist"
		},
	};
};