var gulp = require('gulp');
var react = require('gulp-react');
var karma = require('gulp-karma');


gulp.task('react', ['react-test'], function () {
  var srcs = ['./src/**/*.jsx'];

  return gulp.src(srcs)
    .pipe(react())
    .pipe(gulp.dest('./compiled/'));

});

gulp.task('react-test', function () {

  var srcs = ["./test/**/*.jsx"];
  return gulp.src(srcs)
    .pipe(react())
    .pipe(gulp.dest('./test_compiled/'));
});


gulp.task('test', ['react', 'react-test'], function (done) {
  var srcs = [
    'test_libs/react-with-addons.js',
    'compiled/components/**/*.js',
    'test_compiled/**/*Spec.js'
  ];
  return gulp.src(srcs)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('build', ['react', 'react-test']);

gulp.task('default', ['build', 'test']);