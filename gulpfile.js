var gulp = require('gulp-help')(require('gulp'));
var jshint = require('gulp-jshint');
var pump = require('pump');
var git = require('gulp-git');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');


gulp.task('lint', 'Analyze JS code with JSHint', function (cb) {
  pump([
    gulp.src('src/js/*.js'),
		jshint(),
		jshint.reporter('default')
    ],
	cb
  );
});


gulp.task('webserver', 'Launch webserver including livereload', ['lint'], function(cb) {
	pump([
			gulp.src('src/app'),
			webserver({
				livereload: true,
				directoryListing: false,
				open: true
			})
	  ],
	  cb
  );
});

// Basic usage
gulp.task('browserify','browserify', function(cb) {
  pump([
    browserify({
      debug: true,
      entries: 'src/js/*.js'
    }).bundle()
  ],
 cb
 );
});
