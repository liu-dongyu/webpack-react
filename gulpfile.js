var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlminify = require('gulp-html-minify');
var stylefmt = require('gulp-stylefmt');

// 压缩javascript
gulp.task('script', function () {
  gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});

// 压缩css
gulp.task('css', function () {
  gulp.src('./dist/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

// 压缩html
gulp.task('html' , function(){
  gulp.src('./dist/*.html')
    .pipe(htmlminify())
    .pipe(gulp.dest('./dist'));
});

// 修正css代码规范
gulp.task('stylefmt', function () {
  gulp.src('styles/**/*.scss')
    .pipe(stylefmt())
    .pipe(gulp.dest('./styles'));
});

gulp.task('minify', ['script', 'css', 'html']);
