module.exports = {
	dev: {
		options: {
			append: true,
			module: 'ravemonique'
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>ravemonique.js'
	},
	dist: {
		options: {
			append: true,
			module: 'ravemonique',
			htmlmin: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			}
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>ravemonique.js'
	}
};
