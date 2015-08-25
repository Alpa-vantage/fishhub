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
    replace = require('gulp-replace')
    rsass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    streamQueue = require('streamqueue'),
    through = require('through'),
    through2 = require('through2'),
    uglify = require('gulp-uglify');

var config = {
  src: 'assets',
  build: 'public'
};

