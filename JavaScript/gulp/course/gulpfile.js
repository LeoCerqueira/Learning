var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin');
    


gulp.task('sass', function () {
	return gulp
		.src('assets/src/sass/**/*.scss')
		.pipe(concat('style.min.css'))
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('js', function () {
	return gulp
		.src('assets/src/js/**/*.js')
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('image', function () {
	return gulp
		.src('assets/src/img/*')
		.pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
		.pipe(gulp.dest('assets/img'));
});

gulp.task('htmlmin', () => {
    return gulp.src('-html/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('.'));
  });

