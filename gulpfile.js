
	'use strict';

	var gulp  			= require('gulp'),
		watch 			= require('gulp-watch'),
		source 			= require('vinyl-source-stream'),
		gutil 			= require('gulp-util'),
		jshint 			= require('gulp-jshint'),
		buffer 			= require('vinyl-buffer'),
		mocha			= require('gulp-mocha');
 	
 	//mocha test -------------------------------------------------------------------- +
	gulp.task('mocha', function () {
	    return gulp.src('tests/spec/**/*', {read: false})
	        // gulp-mocha needs filepaths so you can't have any plugins before it 
	        .pipe(mocha({reporter: 'spec'}));
	});

	//Watcher ------------------------------------------------------------------- +
	gulp.task('test', function() {
		gulp.watch(['./controllers/**/*.js','./routes/**/*.js','./models/**/*.js','./middleware/**/*.js','./app.js'], ['mocha']);
	});

	//default tasks ------------------------------------------------------------ +
	gulp.task('default', ['mocha']);
