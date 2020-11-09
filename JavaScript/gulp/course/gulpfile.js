  
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require ('gulp-concat');



gulp.task('sass', function () {
    return gulp.src('assets/src/sass/**/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

