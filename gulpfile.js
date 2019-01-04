const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');


gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./src/css'));
})
gulp.task('js',function(){
	gulp.src('./src/sigjs/*.js')
	.pipe(babel({
            presets: ['@babel/env']
        }))
	.pipe(concat('sigin.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./src/js'));
})
gulp.task('img',function(){       gulp.src('./src/homeimg/*.*').pipe(imagemin({progressive: true}))
       .pipe(gulp.dest('./src/img'));
   })


gulp.task('default',function(){
	gulp.watch(['./src/sass/*.scss','./src/gulpjs/*.js'],['sass','js'])
	
})