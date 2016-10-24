var gulp = require('gulp');

var src = ['node_modules/angular/angular.min.js', 
		   'node_modules/angular-animate/angular-animate.min.js', 
		   'node_modules/angular-translate/dist/angular-translate.min.js',
		   'node_modules/angular-ui-router/release/angular-ui-router.min.js'];
var dest = 'vendor';

gulp.task('vendor-scripts', function() {
	return gulp.src(src)
		.pipe(gulp.dest(dest));
});

gulp.task('default', ['vendor-scripts'], function() {

});