
	'use strict';

	var gulp  			= require('gulp'),
		watch 			= require('gulp-watch'),
		source 			= require('vinyl-source-stream'),
		browserify 		= require('browserify'),
		sass 			= require('gulp-sass'),
		concat 			= require('gulp-concat'),
		uglify 			= require('gulp-uglify'),
		gutil 			= require('gulp-util'),
		jshint 			= require('gulp-jshint'),
		buffer 			= require('vinyl-buffer'),
		minifyCss 		= require('gulp-minify-css'),
		compass 		= require('gulp-compass'),
		babel 			= require("gulp-babel"),
		babelify 		= require("babelify"),
		browserSync 	= require('browser-sync').create();

	//browserSync --------------------------------------------------------------- +
	gulp.task('browser-sync', function() {
	    browserSync.init({
	        proxy:'http://localhost:8080'
	    });
	});


	//JShint -------------------------------------------------------------------- +
	gulp.task('jshint', function () {
		gulp.src(['./app/app.main.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
	  	.pipe(jshint.reporter('fail'))
		.on('error', function(){

		});
	});

	//SASS ---------------------------------------------------------------------- +
	gulp.task('sass', function() {
		gulp.src('sass/*.scss')
    	.pipe(compass({
      		config_file: 'config.rb',
      		css: 'css',
      		sass: 'sass'
		}))
    	.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}));
	}).on('error', function(err) {
	      console.log(err);
	      this.emit('end');
	});


	//Browserify ---------------------------------------------------------------- +
	gulp.task('browserify', function () {

		  var b = browserify();
		  b.add("./app/app.main.js");
		  b.transform(babelify.configure({
			  stage: 0
			}));
		 
		  return b.bundle()
		    .on('error', function(err){
		      console.log(err.message);
		      this.emit('end');
		    })
		    .pipe(source('app.min.js'))
			.pipe(buffer())
    		//.pipe(uglify())
		    .pipe(gulp.dest('js/'))
			.pipe(browserSync.reload({stream: true}));
	});


	//Watcher ------------------------------------------------------------------- +
	gulp.task('watch', function() {
		gulp.watch('app/app.main.js', ['browserify']);
		gulp.watch('app/app.route.js', ['browserify']);
		gulp.watch('app/alt.js', ['browserify']);
		gulp.watch('app/components/**/*.js', ['browserify']);
		gulp.watch('app/actions/**/*.js', ['browserify']);
		gulp.watch('app/store/**/*.js', ['browserify']);
		gulp.watch('sass/**/*.scss', ['sass']);
	});

	//default tasks ------------------------------------------------------------ +
	gulp.task('default', ['browser-sync','watch']);
