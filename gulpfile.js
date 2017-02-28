var gulp = require('gulp')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function(){
  return gulp.src(
    [
      './public/css/master.css',
      './public/css/font-icons.css',
      './public/css/bootstrap.css',
      './public//css/modal-video.min.css'

    ]
  )
  .pipe(minifyCSS())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie8', 'ie9'))
  .pipe(gp_concat('style.min.css'))
  .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('build', function(){
  return gulp.src(
    [
      './public/assets/js/toastr.min.js'

    ]
  )
  .pipe(gp_concat('gulp-concat.js'))
  .pipe(gulp.dest('./public/min/js/'))
  .pipe(gp_rename('vendor.min.js'))
  .pipe(gp_uglify())
  .pipe(gulp.dest('./public/dist/js/'))
})

gulp.task('default', ['css', 'build'], function(){})
