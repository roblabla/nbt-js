'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: pkg,

		jshint: {
			options: {
				globals: {
					'beforeEach': true,
					'describe': true,
					'expect': true,
					'it': true,
					'jasmine': true,
					'runs': true,
					'spyOn': true,
					'waitsFor': true
				},
				camelcase: true,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				newcap: true,
				noarg: true,
				node: true,
				nonbsp: true,
				quotmark: 'single',
				smarttabs: true,
				strict: true,
				sub: true,
				trailing: true,
				unused: true
			},
			files: [
				'nbt.js',
				'nbt-spec.js',
				'sample/sample.js',
				'Gruntfile.js'
			]
		},
		watch: {
			options: { atBegin: true },
			files: [
				'nbt.js',
				'nbt-spec.js',
				'sample/sample.js',
				'Gruntfile.js',
				'package.json'
			],
			tasks: ['jshint', 'mochaTest']
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					captureFile: 'results.txt',
					quiet: false,
					clearRequireCache: false
				},
				src: ['test/**/*.js']
			}
		}
	});
	grunt.registerTask('test', 'mochaTest');
};
