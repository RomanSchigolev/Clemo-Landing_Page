const
    gulp 			= require('gulp'),
    sass			= require('gulp-sass'),
    minCss			= require('gulp-clean-css'),
    browserSync		= require('browser-sync'),
    concat 			= require('gulp-concat'),
    uglify 			= require('gulp-uglifyjs'),
    cssnano 		= require('gulp-cssnano'),
    rename 			= require('gulp-rename'),
    del 			= require('del'),
    autoprefixer	= require('gulp-autoprefixer'),
    //imagemin        = require('gulp-imagemin'),
	tinypng			= require('gulp-tinypng');

gulp.task('sass', () => {
	return gulp.src('app/scss/main.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 version', 'ie 8', 'ie 7'], { cascade: true}))
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', () => {
	return gulp.src('app/scss/libraries/libs.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
});

gulp.task('img-compress', () => {
    return gulp.src('app/img/*.{jpg,png}')
		.pipe(tinypng('JYD7TFmxLHDq3bMnjD8bbz9qNDzdlfCc'))
    .pipe(gulp.dest('app/img/img_compress/'))
});

gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/jquery-3.3.1.min.js',
      //  'app/libraries/wow.min.js',
        //'app/libraries/jquery-ui.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('code', () => {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('browserSync', () => {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', () => {
	return del('dist');
});

gulp.task('prebuild', async () => {
	let buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.css',
		'app/css/libs.min.css'
	])
	.pipe(gulp.dest('dist/css'))

	let buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	let buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	let buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch(['libs/**/*.js', 'app/js/main.js'], gulp.parallel('scripts'));
});
gulp.task('default', gulp.parallel('watch', 'browserSync', 'sass', 'css-libs', /*'img-compress'*/ 'scripts'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass'));

