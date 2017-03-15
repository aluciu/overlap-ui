var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var svgSprite = require('gulp-svg-sprite');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// paths
var imgSrc = './src/images/**/*';
var imgDest = './img';
var svgSrc = './src/icons/**/*.svg';
var svgDest = './img';
var foundationDir = './node_modules/foundation-sites';
var sassSrc = './src/scss/*';
var sassDest = './css';
var jsVendors = [
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/foundation-sites/dist/js/foundation.min.js'
];
var jsSrc = './js/scripts.js';


var onError = function (err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  this.emit('end');
};

// SASS compile wit autoprefixer and sourcemaps
gulp.task('sass', function () {
  return gulp.src(sassSrc)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./node_modules/foundation-sites/assets', './node_modules/motion-ui/src']
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassDest));
});

// Lint your javascript
gulp.task('js', function() {
  gulp.src(jsSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./js'));

  // copy vendor js
  gulp.src(jsVendors)
    .pipe(gulp.dest('./js'));
});

// image minify task
gulp.task('imagemin', function() {
  return gulp.src(imgSrc)
    .pipe(imagemin({optimizationLevel: 7, progressive: true}))
    .pipe(gulp.dest(imgDest));
});

// Combine all svg icons in one file
var svgSpriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'icons.svg'
    }
  }
};
gulp.task('icons', function () {
  return gulp.src(svgSrc)
    .pipe(svgSprite(svgSpriteConfig))
    .pipe(gulp.dest(svgDest));
});

// Run tasks without watching.
gulp.task('build', ['sass', 'js', 'imagemin', 'icons']);

// Rerun the task when a file changes
gulp.task('watch', function() {
  browserSync.init({
    files: ['./*.html'],
    server: {
        baseDir: "./"
    }
  });
  gulp.watch(sassSrc, ['sass', reload]);
  gulp.watch(jsSrc, ['js', reload]);
  gulp.watch(imgSrc, ['imagemin', reload]);
  gulp.watch(svgSrc, ['icons', reload]);
});

gulp.task('default', ['sass', 'js', 'imagemin', 'icons', 'watch']);
