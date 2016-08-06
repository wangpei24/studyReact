var gulp = require('gulp');
// 打包所有依赖文件（和bower有点像？）
var browserify = require('browserify');
// babelify解析JSX
var babelify = require('babelify');
// 该模块作用：同时可以使用browserify和gulp
var source = require('vinyl-source-stream');

gulp.task('default', function() {
	return browserify('./source/app.js')
		   .transform(babelify)
		   .bundle()
		   .pipe(source('snapterest.js'))
		   .pipe(gulp.dest('./build/'));
});