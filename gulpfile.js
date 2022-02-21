'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

const printf = require('printf');

const pkg = require('./package.json')

const src_paths = {
	scripts: [ 'jquery.background-fit.js' ],
	dist: [ 'jquery.background-fit.min.js' ],
	watch: [ '*.js', '!*.min.js', '!gulpfile.js', './docs/*' ]
};

const dist_paths = {
	scripts: './',
	docs: './docs',
};

function js_minify() {
	const date = new Date();
	const licenses = [];
	for (const license in pkg.licenses) {
		licenses.push(pkg.licenses[license].url);
	}

	const header = [ '/*!',
		' * <%= pkg.title %>',
		' * Version <%= pkg.version %>',
		' * Update: ' + printf('%04d-%02d-%02d %02d:%02d:%02d', date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()),
		' * Copyright ' + printf('%04d', date.getFullYear()) + ' <%= pkg.author %>',
		' * URI: <%= pkg.url %>',
		' * Repository: <%= pkg.repository.url %>',
		' * License: <%= pkg.license %>',
		' * ' + licenses.join("\n * "),
		'*/',
		''].join('\n');

	return gulp.src(src_paths.scripts)
		.pipe($.header(header, { pkg: pkg }))
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.uglify({
			output:{
				comments: /^!/
			}
		}))
		.pipe($.rename({
				suffix: '.min'
		}))
		.pipe(gulp.dest(dist_paths.scripts));
};

function dist_docs() {
	return gulp.src(src_paths.dist)
		.pipe(gulp.dest(dist_paths.docs));
}

function watch_files(done) {
	gulp.watch(src_paths.watch, { usePolling: true }).on('change', gulp.series(js_minify, dist_docs));
};

exports.dist = gulp.series(dist_docs);
exports.watch = gulp.series(watch_files);
exports.default = gulp.series(js_minify);
