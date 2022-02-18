var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var pkg = require('./package.json')

function js_minify() {

  var date = new Date();
  var yyyy = date.getFullYear();
  var timestamp = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  var licenses = [];
  for (var license in pkg.licenses) {
    licenses.push(pkg.licenses[license].url);
  }

  var header = [ '/*!',
    ' * <%= pkg.title %>',
    ' * Version <%= pkg.version %>',
    ' * Update: ' + timestamp,
    ' * Copyright ' + yyyy + ' <%= pkg.author %>',
    ' * URI: <%= pkg.url %>',
    ' * Repository: <%= pkg.repository.url %>',
    ' * License: <%= pkg.license %>',
    ' * ' + licenses.join("\n * "),
    '*/',
    ''].join('\n');

  return gulp.src(['*.js', '!*.min.js', '!gulpfile.js'])
    .pipe($.header(header, { pkg : pkg }))
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
    .pipe(gulp.dest('./'))
};

function watch_files(done) {
  gulp.watch([ '*.js', '!*.min.js', '!gulpfile.js' ], { usePolling: true }).on('change', gulp.series(js_minify));
};

exports.watch = gulp.series(watch_files);
exports.default = gulp.series(js_minify);
