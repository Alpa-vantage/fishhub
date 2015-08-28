var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bowerFiles = require('gulp-bower-files'),
    clean = require('gulp-clean'),
    coffee = require('gulp-coffee'),
    coffeeLint = require('gulp-coffeelint'),
    concat = require('gulp-concat'),
    es = require('event-stream'),
    File = require('gulp-util').File,
    filter = require('gulp-filter'),
    html2js = require('gulp-ng-html2js'),
    inject = require('gulp-inject'),
    karma = require('karma').server,
    ngmin = require('gulp-ngmin'),
    path = require('path'),
    order = require('gulp-order'),
    Q = require('q'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    sourcemaps = require('gulp-sourcemaps'),
    streamQueue = require('streamqueue'),
    through = require('through'),
    through2 = require('through2'),
    uglify = require('gulp-uglify');

var config = {
  src: 'assets',
  build: 'public'
};


gulp.task('clean', function() {
  return gulp.src(config.build)
    .pipe(clean())
});

gulp.task('build-vendor-dev', ['clean'], function() {
  return bowerFiles({env: "development", bowerDirectory: "./bower_components"})
    .pipe(gulp.dest(config.build + '/bower_components'))
});

gulp.task('build-coffee', ['clean', 'build-vendor-dev'], function() {
  return gulp.src(config.src + '/**/*.coffee')
    .pipe(coffeeLint())
    .pipe(coffeeLint.reporter())
    .pipe(coffeeLint.reporter('fail'))
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(config.build + '/assets'));
});

gulp.task('build-i18n', ['clean'], function() {
  return gulp.src(config.src + '/support/i18n/**/*.json')
    .pipe(json2translate(
      gulp.src(config.src + '/support/i18n/i18n.tpl')
    ))
    .pipe(gulp.dest(config.build + '/assets/i18n'));
});

gulp.task('build-templates', ['clean'], function() {
  return gulp.src([
      config.src + '/**/*.tpl.html',
      '!' + config.src + '/index.tpl.html'
    ])
    .pipe(html2js({
      moduleName: 'fh.templates',
      prefix: ''
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(config.build));
});


gulp.task('build-html-dev', [
  'clean',
  'build-vendor-dev',
  'build-i18n',
  'build-coffee',
  'build-templates'
], function() {
  var sourceStream = streamQueue(
    {objectMode: true},
    gulp.src([
      config.build + "/bower_components/**/*.js",
      config.build + "/bower_components/**/*.css",
      config.build + "/assets/**/*module.js",
      config.build + "/assets/**/*.js",
      config.build + "/*.js",
      config.build + "/assets/**/*.css"
      ])
    );

  return gulp.src(config.src + '/index.tpl.html')
    .pipe(inject(sourceStream, {
      addRootSlash: false,
      ignorePath: '/public/'
    }))
    .pipe(rename('index.tmpl'))
    .pipe(gulp.dest('templates'));
});

gulp.task('build-dev', [
  'build-html-dev'
], function() {
});

gulp.task('default', function(){
  return gutil.log("gulp is running")
})

