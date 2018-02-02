let gulp = require('gulp')
let sass = require('gulp-sass')
let pug  = require('gulp-pug')
let autoprefixer = require('gulp-autoprefixer')
let watch = require('gulp-watch')
let cleanCSS = require('gulp-clean-css')

gulp.task('sass', function() {
  return gulp.src('./resources/css/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./resources/css/'))
})

gulp.task('pug', function() {
  return gulp.src('./resources/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function(){
  return watch('./resources/**/*.*', function(){
    gulp.start('pug')
    gulp.start('sass')
  })
})

gulp.task('default', ['watch'])