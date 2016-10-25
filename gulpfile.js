var gulp = require('gulp');
var sass = require('gulp-sass');

var vendor_scripts_src = ['node_modules/angular/angular.min.js', 
		   'node_modules/angular-animate/angular-animate.min.js', 
		   'node_modules/angular-translate/dist/angular-translate.min.js',
		   'node_modules/angular-ui-router/release/angular-ui-router.min.js'];
var vendor_scripts_dest = 'vendor';

gulp.task('vendor-scripts', function() {
	console.log('Copying vendor scripts...');
	return gulp.src(vendor_scripts_src)
		.pipe(gulp.dest(vendor_scripts_dest));
});

var css_src = 'scss/**/*.scss';
var css_dest = 'styles';

gulp.task('sass', function() {
	console.log('Converting scss to css...');
	return gulp.src(css_src)
		.pipe(sass())
		.pipe(gulp.dest(css_dest));
});

gulp.task('default', ['vendor-scripts', 'sass'], function() {

});

gulp.task('watch', function () {
	return gulp.watch(css_src, ['sass']);
});