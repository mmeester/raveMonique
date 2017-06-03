module.exports = {
	options: {
		watch: true
	},
	default: {
		src: [
			'<%= config.src.app %>ravemonique.js'
		],
		dest: '<%= config.dist.browserify %>ravemonique.js'
	}
};
